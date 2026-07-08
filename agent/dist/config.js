"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const dotenv_1 = __importDefault(require("dotenv"));
const fs_1 = __importDefault(require("fs"));
const prodEnvPath = '/etc/serverpanel-agent/.env';
if (fs_1.default.existsSync(prodEnvPath)) {
    dotenv_1.default.config({ path: prodEnvPath });
}
else {
    dotenv_1.default.config();
}
exports.config = {
    agentToken: process.env.SERVERPANEL_AGENT_TOKEN || process.env.AGENT_TOKEN || '',
    platformEndpoint: process.env.SERVERPANEL_ENDPOINT || process.env.PLATFORM_ENDPOINT || '',
    serverId: process.env.SERVERPANEL_SERVER_ID || process.env.SERVER_ID || '',
    wsUrl: process.env.SERVERPANEL_WS_URL || process.env.WS_URL || '',
};
