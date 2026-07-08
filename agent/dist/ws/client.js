"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgentWsClient = void 0;
const ws_1 = __importDefault(require("ws"));
const config_1 = require("../config");
const hmac_1 = require("../utils/hmac");
const logger_1 = require("../utils/logger");
const executors_1 = require("../executors");
class AgentWsClient {
    ws = null;
    socketId = null;
    channelName;
    isConnecting = false;
    pingInterval = null;
    reconnectTimeout = null;
    constructor() {
        this.channelName = `private-server.${config_1.config.serverId}`;
    }
    connect() {
        if (this.isConnecting || this.ws)
            return;
        this.isConnecting = true;
        const wsUrl = this.getWsUrl();
        // Retrieve app key. We fetch it dynamically from auth or fallback
        // Pusher/Reverb connection URL format:
        // ws://host:port/app/appKey?protocol=7&client=js&version=8.4.0
        // We'll use a dummy key first, then re-handshake on connection established.
        // Reverb allows any app key to connect, but will fail subscription if auth signature is invalid.
        const reverbAppKey = process.env.REVERB_APP_KEY || 'serverpanel';
        const connectUrl = `${wsUrl}/app/${reverbAppKey}?protocol=7&client=js&version=8.4.0-rc2&flash=false`;
        logger_1.logger.info(`Connecting to WebSocket: ${wsUrl}`);
        try {
            this.ws = new ws_1.default(connectUrl);
            this.ws.on('open', () => {
                logger_1.logger.info('WebSocket connection established.');
                this.isConnecting = false;
                this.startHeartbeat();
            });
            this.ws.on('message', async (data) => {
                try {
                    const message = JSON.parse(data.toString());
                    await this.handleMessage(message);
                }
                catch (e) {
                    logger_1.logger.error(`Error handling WebSocket message: ${e.message || e}`);
                }
            });
            this.ws.on('close', (code, reason) => {
                logger_1.logger.warn(`WebSocket connection closed. Code: ${code}, Reason: ${reason}`);
                this.cleanup();
                this.scheduleReconnect();
            });
            this.ws.on('error', (error) => {
                logger_1.logger.error(`WebSocket error: ${error.message || error}`);
                this.cleanup();
                this.scheduleReconnect();
            });
        }
        catch (error) {
            logger_1.logger.error(`WebSocket connection exception: ${error.message || error}`);
            this.isConnecting = false;
            this.scheduleReconnect();
        }
    }
    getWsUrl() {
        if (config_1.config.wsUrl)
            return config_1.config.wsUrl;
        try {
            const url = new URL(config_1.config.platformEndpoint);
            const host = url.hostname;
            const protocol = url.protocol === 'https:' ? 'wss:' : 'ws:';
            const port = host === 'localhost' || host === '127.0.0.1' ? '8080' : (url.port || (protocol === 'wss:' ? '443' : '80'));
            return `${protocol}//${host}:${port}`;
        }
        catch (e) {
            return 'ws://localhost:8080';
        }
    }
    startHeartbeat() {
        this.stopHeartbeat();
        this.pingInterval = setInterval(() => {
            if (this.ws && this.ws.readyState === ws_1.default.OPEN) {
                this.ws.send(JSON.stringify({ event: 'pusher:ping', data: {} }));
            }
        }, 30000); // 30 seconds
    }
    stopHeartbeat() {
        if (this.pingInterval) {
            clearInterval(this.pingInterval);
            this.pingInterval = null;
        }
    }
    cleanup() {
        this.stopHeartbeat();
        this.ws = null;
        this.socketId = null;
        this.isConnecting = false;
    }
    scheduleReconnect() {
        if (this.reconnectTimeout)
            return;
        logger_1.logger.info('Scheduling reconnect in 5 seconds...');
        this.reconnectTimeout = setTimeout(() => {
            this.reconnectTimeout = null;
            this.connect();
        }, 5000);
    }
    async handleMessage(message) {
        const { event, channel, data } = message;
        if (event === 'pusher:connection_established') {
            const parsedData = typeof data === 'string' ? JSON.parse(data) : data;
            this.socketId = parsedData.socket_id;
            logger_1.logger.info(`WebSocket Socket ID: ${this.socketId}. Requesting channel subscription auth...`);
            await this.subscribeToChannel();
        }
        else if (event === 'pusher_internal:subscription_succeeded') {
            logger_1.logger.info(`Successfully subscribed to channel: ${channel}`);
        }
        else if (event === 'ServerCommandDispatched') {
            // Event name broadcasted by Laravel event ServerCommandDispatched
            const parsedData = typeof data === 'string' ? JSON.parse(data) : data;
            const payload = parsedData.payload;
            if (payload) {
                // Run safety validation: reject command if issued_at is older than 30 seconds
                const age = Math.abs(Date.now() - (payload.issued_at * 1000));
                if (age > 30000) {
                    logger_1.logger.warn(`Rejected command [${payload.command_id}]: Replay attack suspected. Age was ${age}ms.`);
                    return;
                }
                // Execute the command in the background
                (0, executors_1.executeCommand)(payload).catch(e => {
                    logger_1.logger.error(`Error executing command [${payload.command_id}]: ${e.message || e}`);
                });
            }
        }
    }
    async subscribeToChannel() {
        if (!this.ws || !this.socketId)
            return;
        try {
            // Sign the auth request: HMAC-SHA256(socket_id + channel_name, agent_token)
            const signable = this.socketId + this.channelName;
            const signature = (0, hmac_1.generateHmac)(signable);
            // Call platform auth API
            const authEndpoint = `${config_1.config.platformEndpoint}/api/agent/broadcasting/auth`;
            const response = await fetch(authEndpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Server-Token': config_1.config.agentToken,
                    'X-Server-Signature': signature
                },
                body: JSON.stringify({
                    socket_id: this.socketId,
                    channel_name: this.channelName
                })
            });
            if (!response.ok) {
                const text = await response.text();
                throw new Error(`Auth failed with status ${response.status}: ${text}`);
            }
            const result = await response.json();
            const authKey = result.auth; // e.g. appKey:signature
            // Send Pusher subscribe frame
            this.ws.send(JSON.stringify({
                event: 'pusher:subscribe',
                data: {
                    auth: authKey,
                    channel: this.channelName
                }
            }));
            logger_1.logger.info(`Sent subscription frame for channel: ${this.channelName}`);
        }
        catch (e) {
            logger_1.logger.error(`Channel subscription failed: ${e.message || e}`);
            // Reconnect
            this.ws.close();
        }
    }
}
exports.AgentWsClient = AgentWsClient;
