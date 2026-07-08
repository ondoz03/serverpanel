"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("./config");
const logger_1 = require("./utils/logger");
const collectors_1 = require("./collectors");
const client_1 = require("./ws/client");
logger_1.logger.info('==========================================');
logger_1.logger.info('Starting ServerPanel Agent...');
logger_1.logger.info(`Server ID: ${config_1.config.serverId || 'Not Configured'}`);
logger_1.logger.info(`Platform Endpoint: ${config_1.config.platformEndpoint || 'Not Configured'}`);
logger_1.logger.info('==========================================');
if (!config_1.config.serverId || !config_1.config.agentToken || !config_1.config.platformEndpoint) {
    logger_1.logger.error('Error: Agent is missing configuration settings. Verify .env file.');
    process.exit(1);
}
// 1. Setup periodic metrics pushing
logger_1.logger.info('Initializing metrics collector scheduler...');
(0, collectors_1.collectAndPushMetrics)().catch(err => logger_1.logger.error(`Initial metrics collect failed: ${err}`));
const interval = parseInt(process.env.METRICS_INTERVAL || '5000', 10);
setInterval(() => {
    (0, collectors_1.collectAndPushMetrics)().catch(err => logger_1.logger.error(`Metrics interval collector failed: ${err}`));
}, interval);
// 2. Establish WebSocket client connection
logger_1.logger.info('Initializing WebSocket connection...');
const wsClient = new client_1.AgentWsClient();
wsClient.connect();
