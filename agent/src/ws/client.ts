import WebSocket from 'ws';
import { config } from '../config';
import type { CommandPayload } from '../executors';
import { executeCommand } from '../executors';
import { generateHmac } from '../utils/hmac';
import { logger } from '../utils/logger';

export class AgentWsClient {
  private ws: WebSocket | null = null;
  private socketId: string | null = null;
  private channelName: string;
  private isConnecting: boolean = false;
  private pingInterval: NodeJS.Timeout | null = null;
  private reconnectTimeout: NodeJS.Timeout | null = null;

  constructor() {
    this.channelName = `private-server.${config.serverId}`;
  }

  public connect(): void {
    if (this.isConnecting || this.ws) {
return;
}

    this.isConnecting = true;

    const wsUrl = this.getWsUrl();
    // Retrieve app key. We fetch it dynamically from auth or fallback
    // Pusher/Reverb connection URL format:
    // ws://host:port/app/appKey?protocol=7&client=js&version=8.4.0
    // We'll use a dummy key first, then re-handshake on connection established.
    // Reverb allows any app key to connect, but will fail subscription if auth signature is invalid.
    const reverbAppKey = process.env.REVERB_APP_KEY || 'serverpanel'; 
    const connectUrl = `${wsUrl}/app/${reverbAppKey}?protocol=7&client=js&version=8.4.0-rc2&flash=false`;

    logger.info(`Connecting to WebSocket: ${wsUrl}`);

    try {
      this.ws = new WebSocket(connectUrl);

      this.ws.on('open', () => {
        logger.info('WebSocket connection established.');
        this.isConnecting = false;
        this.startHeartbeat();
      });

      this.ws.on('message', async (data: WebSocket.Data) => {
        try {
          const message = JSON.parse(data.toString());
          await this.handleMessage(message);
        } catch (e: any) {
          logger.error(`Error handling WebSocket message: ${e.message || e}`);
        }
      });

      this.ws.on('close', (code, reason) => {
        logger.warn(`WebSocket connection closed. Code: ${code}, Reason: ${reason}`);
        this.cleanup();
        this.scheduleReconnect();
      });

      this.ws.on('error', (error) => {
        logger.error(`WebSocket error: ${error.message || error}`);
        this.cleanup();
        this.scheduleReconnect();
      });
    } catch (error: any) {
      logger.error(`WebSocket connection exception: ${error.message || error}`);
      this.isConnecting = false;
      this.scheduleReconnect();
    }
  }

  private getWsUrl(): string {
    if (config.wsUrl) {
return config.wsUrl;
}

    try {
      const url = new URL(config.platformEndpoint);
      const host = url.hostname;
      const protocol = url.protocol === 'https:' ? 'wss:' : 'ws:';
      const port = host === 'localhost' || host === '127.0.0.1' ? '8080' : (url.port || (protocol === 'wss:' ? '443' : '80'));

      return `${protocol}//${host}:${port}`;
    } catch {
      return 'ws://localhost:8080';
    }
  }

  private startHeartbeat(): void {
    this.stopHeartbeat();
    this.pingInterval = setInterval(() => {
      if (this.ws && this.ws.readyState === WebSocket.OPEN) {
        this.ws.send(JSON.stringify({ event: 'pusher:ping', data: {} }));
      }
    }, 30000); // 30 seconds
  }

  private stopHeartbeat(): void {
    if (this.pingInterval) {
      clearInterval(this.pingInterval);
      this.pingInterval = null;
    }
  }

  private cleanup(): void {
    this.stopHeartbeat();
    this.ws = null;
    this.socketId = null;
    this.isConnecting = false;
  }

  private scheduleReconnect(): void {
    if (this.reconnectTimeout) {
return;
}

    logger.info('Scheduling reconnect in 5 seconds...');
    this.reconnectTimeout = setTimeout(() => {
      this.reconnectTimeout = null;
      this.connect();
    }, 5000);
  }

  private async handleMessage(message: any): Promise<void> {
    const { event, channel, data } = message;

    if (event === 'pusher:connection_established') {
      const parsedData = typeof data === 'string' ? JSON.parse(data) : data;
      this.socketId = parsedData.socket_id;
      logger.info(`WebSocket Socket ID: ${this.socketId}. Requesting channel subscription auth...`);
      await this.subscribeToChannel();
    } else if (event === 'pusher_internal:subscription_succeeded') {
      logger.info(`Successfully subscribed to channel: ${channel}`);
    } else if (event === 'ServerCommandDispatched') {
      // Event name broadcasted by Laravel event ServerCommandDispatched
      const parsedData = typeof data === 'string' ? JSON.parse(data) : data;
      const payload = parsedData.payload as CommandPayload;
      
      if (payload) {
        // Run safety validation: reject command if issued_at is older than 30 seconds
        const age = Math.abs(Date.now() - (payload.issued_at * 1000));

        if (age > 30000) {
          logger.warn(`Rejected command [${payload.command_id}]: Replay attack suspected. Age was ${age}ms.`);

          return;
        }
        
        // Execute the command in the background
        executeCommand(payload).catch(e => {
          logger.error(`Error executing command [${payload.command_id}]: ${e.message || e}`);
        });
      }
    }
  }

  private async subscribeToChannel(): Promise<void> {
    if (!this.ws || !this.socketId) {
return;
}

    try {
      // Sign the auth request: HMAC-SHA256(socket_id + channel_name, agent_token)
      const signable = this.socketId + this.channelName;
      const signature = generateHmac(signable);

      // Call platform auth API
      const authEndpoint = `${config.platformEndpoint}/api/agent/broadcasting/auth`;
      const response = await fetch(authEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Server-Token': config.agentToken,
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
      logger.info(`Sent subscription frame for channel: ${this.channelName}`);
    } catch (e: any) {
      logger.error(`Channel subscription failed: ${e.message || e}`);
      // Reconnect
      this.ws.close();
    }
  }
}
