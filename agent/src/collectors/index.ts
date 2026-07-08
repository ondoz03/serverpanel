import os from 'os';
import systeminformation from 'systeminformation';
import { config } from '../config';
import { generateHmac } from '../utils/hmac';
import { logger } from '../utils/logger';

export async function collectAndPushMetrics(): Promise<void> {
  if (!config.serverId || !config.agentToken || !config.platformEndpoint) {
    logger.warn('Metrics skip: Missing agent configuration.');
    return;
  }

  try {
    const timestamp = Date.now();
    
    // 1. CPU Metrics
    const currentLoad = await systeminformation.currentLoad();
    const cpuInfo = await systeminformation.cpu();
    const load = os.loadavg(); // Natively returns [1m, 5m, 15m] load avg
    
    // 2. Memory Metrics
    const mem = await systeminformation.mem();
    
    // 3. Disk Metrics
    const fsSize = await systeminformation.fsSize();
    const partitions = fsSize.map(p => ({
      mount: p.mount,
      used: p.used,
      total: p.size,
      filesystem: p.fs
    }));

    // 4. Network Metrics
    const networkStats = await systeminformation.networkStats();
    const interfaces = networkStats.map(i => ({
      name: i.iface,
      bytes_in: i.rx_bytes,
      bytes_out: i.tx_bytes,
      packets_in: (i as any).rx_packets || 0,
      packets_out: (i as any).tx_packets || 0
    }));

    // 5. Services Metrics
    const servicesToCheck = [
      { name: 'nginx', processName: 'nginx' },
      { name: 'mysql', processName: 'mysqld' },
      { name: 'php', processName: 'php-fpm' },
      { name: 'redis', processName: 'redis-server' },
      { name: 'fail2ban', processName: 'fail2ban-server' }
    ];

    const processesList = await systeminformation.processes();
    const activeProcesses = processesList.list;

    const services = servicesToCheck.map(s => {
      const proc = activeProcesses.find(p => p.name.toLowerCase().includes(s.processName.toLowerCase()));
      return {
        name: s.name,
        status: proc ? ('active' as const) : ('inactive' as const),
        pid: proc ? proc.pid : null
      };
    });

    const uptime = os.uptime();

    const data = {
      cpu: {
        usage: currentLoad.currentLoad,
        cores: cpuInfo.cores,
        load: [load[0], load[1], load[2]] as [number, number, number]
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
    const signable = config.serverId + timestamp.toString();
    const signature = generateHmac(signable);

    const payload = {
      server_id: config.serverId,
      timestamp,
      data
    };

    logger.debug(`Pushing metrics for Server: ${config.serverId}`);

    const response = await fetch(`${config.platformEndpoint}/api/agent/metrics`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Server-Token': config.agentToken,
        'X-Server-Signature': signature
      },
      body: JSON.stringify(payload)
    });

    if (!response.ok) {
      const text = await response.text();
      logger.error(`Metrics push failed with status ${response.status}: ${text}`);
    } else {
      logger.debug('Metrics pushed successfully.');
    }
  } catch (error: any) {
    logger.error(`Error collecting/pushing metrics: ${error.message || error}`);
  }
}
