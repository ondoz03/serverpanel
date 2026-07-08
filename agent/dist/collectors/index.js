"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.collectAndPushMetrics = collectAndPushMetrics;
const os_1 = __importDefault(require("os"));
const systeminformation_1 = __importDefault(require("systeminformation"));
const config_1 = require("../config");
const hmac_1 = require("../utils/hmac");
const logger_1 = require("../utils/logger");
async function collectAndPushMetrics() {
    if (!config_1.config.serverId || !config_1.config.agentToken || !config_1.config.platformEndpoint) {
        logger_1.logger.warn('Metrics skip: Missing agent configuration.');
        return;
    }
    try {
        const timestamp = Date.now();
        // 1. CPU Metrics
        const currentLoad = await systeminformation_1.default.currentLoad();
        const cpuInfo = await systeminformation_1.default.cpu();
        const load = os_1.default.loadavg(); // Natively returns [1m, 5m, 15m] load avg
        // 2. Memory Metrics
        const mem = await systeminformation_1.default.mem();
        // 3. Disk Metrics
        const fsSize = await systeminformation_1.default.fsSize();
        const partitions = fsSize.map(p => ({
            mount: p.mount,
            used: p.used,
            total: p.size,
            filesystem: p.fs
        }));
        // 4. Network Metrics
        const networkStats = await systeminformation_1.default.networkStats();
        const interfaces = networkStats.map(i => ({
            name: i.iface,
            bytes_in: i.rx_bytes,
            bytes_out: i.tx_bytes,
            packets_in: i.rx_packets || 0,
            packets_out: i.tx_packets || 0
        }));
        // 5. Services Metrics
        const servicesToCheck = [
            { name: 'nginx', processName: 'nginx' },
            { name: 'mysql', processName: 'mysqld' },
            { name: 'php', processName: 'php-fpm' },
            { name: 'redis', processName: 'redis-server' },
            { name: 'fail2ban', processName: 'fail2ban-server' }
        ];
        const processesList = await systeminformation_1.default.processes();
        const activeProcesses = processesList.list;
        const services = servicesToCheck.map(s => {
            const proc = activeProcesses.find(p => p.name.toLowerCase().includes(s.processName.toLowerCase()));
            return {
                name: s.name,
                status: proc ? 'active' : 'inactive',
                pid: proc ? proc.pid : null
            };
        });
        const uptime = os_1.default.uptime();
        const data = {
            cpu: {
                usage: currentLoad.currentLoad,
                cores: cpuInfo.cores,
                load: [load[0], load[1], load[2]]
            },
            memory: {
                used: mem.active,
                total: mem.total,
                swap_used: mem.swapused,
                swap_total: mem.swaptotal
            },
            disk: {
                partitions
            },
            network: {
                interfaces
            },
            services,
            uptime
        };
        // Calculate signature: HMAC-SHA256(server_id + timestamp, agent_token)
        const signable = config_1.config.serverId + timestamp.toString();
        const signature = (0, hmac_1.generateHmac)(signable);
        const payload = {
            server_id: config_1.config.serverId,
            timestamp,
            data
        };
        logger_1.logger.debug(`Pushing metrics for Server: ${config_1.config.serverId}`);
        const response = await fetch(`${config_1.config.platformEndpoint}/api/agent/metrics`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-Server-Token': config_1.config.agentToken,
                'X-Server-Signature': signature
            },
            body: JSON.stringify(payload)
        });
        if (!response.ok) {
            const text = await response.text();
            logger_1.logger.error(`Metrics push failed with status ${response.status}: ${text}`);
        }
        else {
            logger_1.logger.debug('Metrics pushed successfully.');
        }
    }
    catch (error) {
        logger_1.logger.error(`Error collecting/pushing metrics: ${error.message || error}`);
    }
}
