import fs from 'fs';
import dotenv from 'dotenv';

const prodEnvPath = '/etc/serverpanel-agent/.env';

if (fs.existsSync(prodEnvPath)) {
  dotenv.config({ path: prodEnvPath });
} else {
  dotenv.config();
}

export const config = {
  agentToken: process.env.SERVERPANEL_AGENT_TOKEN || process.env.AGENT_TOKEN || '',
  platformEndpoint: process.env.SERVERPANEL_ENDPOINT || process.env.PLATFORM_ENDPOINT || '',
  serverId: process.env.SERVERPANEL_SERVER_ID || process.env.SERVER_ID || '',
  wsUrl: process.env.SERVERPANEL_WS_URL || process.env.WS_URL || '',
};
