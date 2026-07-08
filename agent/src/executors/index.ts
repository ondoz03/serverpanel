import { exec } from 'child_process';
import { promisify } from 'util';
import { config } from '../config';
import { generateHmac } from '../utils/hmac';
import { logger } from '../utils/logger';

const execAsync = promisify(exec);

export interface CommandPayload {
  type: 'command';
  command_id: string;
  action: string;
  params: Record<string, any>;
  signature: string;
  issued_at: number;
}

export async function executeCommand(payload: CommandPayload): Promise<void> {
  const startTime = Date.now();
  let success = false;
  let output = '';
  let exitCode = 0;
  let errorMessage = '';

  const { command_id, action, params } = payload;
  logger.info(`Received command [${command_id}]: ${action}`, params);

  try {
    const isWindows = process.platform === 'win32';

    switch (action) {
      case 'server.provision': {
        const phpVersion = params.php_version || '8.3';
        if (isWindows) {
          // Simulate LEMP installation on Windows development machines
          output = `[win32 simulation] Updating package repository...\n[win32 simulation] Registering PHP PPA repository...\n[win32 simulation] Installing Nginx, MySQL, PHP ${phpVersion}, Redis, Fail2ban, Composer...\n[win32 simulation] Setting up configurations...\n[win32 simulation] LEMP stack installation completed.`;
          success = true;
        } else {
          // Live execution on Linux
          try {
            logger.info(`Provisioning stack: Registering PHP PPA and installing Nginx, MySQL, PHP ${phpVersion}, Redis, Fail2ban, Composer...`);
            
            // 1. Install software-properties-common (required for add-apt-repository)
            await execAsync('sudo apt-get update && sudo apt-get install -y software-properties-common');
            
            // 2. Add Ondrej PHP PPA for multi-PHP version support
            await execAsync('sudo add-apt-repository -y ppa:ondrej/php');
            
            // 3. Install stack components including Composer
            const { stdout, stderr } = await execAsync(
              `sudo apt-get update && sudo apt-get install -y nginx mysql-server php${phpVersion}-fpm php${phpVersion}-mysql redis-server fail2ban composer`
            );
            
            output = stdout + '\n' + stderr;
            success = true;
          } catch (e: any) {
            output = (e.stdout || '') + '\n' + (e.stderr || '');
            exitCode = e.code || 1;
            errorMessage = e.message;
            success = false;
          }
        }
        break;
      }

      case 'service.restart':
      case 'service.start':
      case 'service.stop': {
        const service = params.service;
        if (!service) {
          throw new Error('Service name is required.');
        }
        const serviceAction = action.split('.')[1];
        if (isWindows) {
          output = `[win32 simulation] Executed sudo systemctl ${serviceAction} ${service} successfully.`;
          success = true;
        } else {
          try {
            let systemdName = service;
            if (service === 'php') {
              // Default to php8.3-fpm or search for active fpm service
              systemdName = 'php8.3-fpm'; 
            }
            const { stdout, stderr } = await execAsync(`sudo systemctl ${serviceAction} ${systemdName}`);
            output = stdout + '\n' + stderr;
            success = true;
          } catch (e: any) {
            output = (e.stdout || '') + '\n' + (e.stderr || '');
            exitCode = e.code || 1;
            errorMessage = e.message;
            success = false;
          }
        }
        break;
      }

      case 'shell.exec': {
        const command = params.command;
        if (!command) {
          throw new Error('Command string is required.');
        }
        // Basic safety barrier
        if (command.includes('rm -rf /') || command.includes('rm -rf /*')) {
          throw new Error('Security violation: Forbidden command sequence.');
        }

        try {
          const { stdout, stderr } = await execAsync(command, { timeout: params.timeout || 60000 });
          output = stdout + '\n' + stderr;
          success = true;
        } catch (e: any) {
          output = (e.stdout || '') + '\n' + (e.stderr || '');
          exitCode = e.code || 1;
          errorMessage = e.message;
          success = false;
        }
        break;
      }

      case 'agent.info': {
        output = JSON.stringify(
          {
            version: '1.0.0',
            platform: process.platform,
            arch: process.arch,
            uptime: process.uptime(),
            nodeVersion: process.version
          },
          null,
          2
        );
        success = true;
        break;
      }

      default:
        throw new Error(`Unsupported action: ${action}`);
    }
  } catch (error: any) {
    success = false;
    exitCode = error.code || 1;
    errorMessage = error.message || 'Unknown error occurred';
    output = output || error.stderr || errorMessage;
  }

  const durationMs = Date.now() - startTime;

  // HMAC Signature: HMAC-SHA256(command_id + success, agent_token)
  const successStr = success ? '1' : '0';
  const signable = command_id + successStr;
  const signature = generateHmac(signable);

  const responsePayload = {
    command_id,
    success,
    output,
    exit_code: exitCode,
    duration_ms: durationMs,
    error: errorMessage || null,
    action,
    params
  };

  logger.info(`Command [${command_id}] executed in ${durationMs}ms. Success: ${success}. Pushing response...`);

  try {
    const response = await fetch(`${config.platformEndpoint}/api/agent/command/response`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-Server-Token': config.agentToken,
        'X-Server-Signature': signature
      },
      body: JSON.stringify(responsePayload)
    });

    if (!response.ok) {
      const text = await response.text();
      logger.error(`Failed to push command response to platform [${command_id}]: ${text}`);
    } else {
      logger.info(`Command response [${command_id}] acknowledged by platform.`);
    }
  } catch (e: any) {
    logger.error(`Error sending command response: ${e.message || e}`);
  }
}
