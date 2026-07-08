import { config } from './config';
import { logger } from './utils/logger';
import { collectAndPushMetrics } from './collectors';
import { AgentWsClient } from './ws/client';

logger.info('==========================================');
logger.info('Starting ServerPanel Agent...');
logger.info(`Server ID: ${config.serverId || 'Not Configured'}`);
logger.info(`Platform Endpoint: ${config.platformEndpoint || 'Not Configured'}`);
logger.info('==========================================');

if (!config.serverId || !config.agentToken || !config.platformEndpoint) {
  logger.error('Error: Agent is missing configuration settings. Verify .env file.');
  process.exit(1);
}

// 1. Setup periodic metrics pushing
logger.info('Initializing metrics collector scheduler...');
collectAndPushMetrics().catch(err => logger.error(`Initial metrics collect failed: ${err}`));

const interval = parseInt(process.env.METRICS_INTERVAL || '5000', 10);
setInterval(() => {
  collectAndPushMetrics().catch(err => logger.error(`Metrics interval collector failed: ${err}`));
}, interval);

// 2. Establish WebSocket client connection
logger.info('Initializing WebSocket connection...');
const wsClient = new AgentWsClient();
wsClient.connect();
