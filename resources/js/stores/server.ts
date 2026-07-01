import { defineStore } from 'pinia';
import { ref } from 'vue';
import type { Server } from '@/types';

export const useServerStore = defineStore('server', () => {
    const servers = ref<Server[]>([]);
    const currentServer = ref<Server | null>(null);
    const loading = ref(false);

    async function fetchServers(): Promise<void> {
        loading.value = true;
        servers.value = [
            {
                id: '1',
                name: 'Production-01',
                ip_address: '152.42.12.84',
                ssh_port: 22,
                ssh_user: 'root',
                hostname: 'prod-01.serverpanel.id',
                os: 'ubuntu-22.04',
                arch: 'x86_64',
                status: 'active',
                agent_version: '1.2.0',
                agent_last_seen: new Date().toISOString(),
                provider: 'Vultr',
                datacenter: 'SGP1',
                plan_name: '1 vCPU, 2GB RAM, 50GB SSD',
                cpu_usage: 23,
                memory_used: 1.2 * 1024 ** 3,
                memory_total: 2 * 1024 ** 3,
                disk_used: 12 * 1024 ** 3,
                disk_total: 50 * 1024 ** 3,
                load_avg: [0.45, 0.32, 0.28],
                services: [
                    { name: 'nginx', status: 'active', version: '1.26.2' },
                    { name: 'mysql', status: 'active', version: '8.0.39' },
                    { name: 'php8.3-fpm', status: 'active', version: '8.3.12' },
                    { name: 'redis', status: 'active', version: '7.4.2' },
                    { name: 'fail2ban', status: 'active', version: '1.1.0' },
                ],
                uptime: 86400 * 12 + 3600 * 5,
                web_apps_count: 4,
                databases_count: 3,
                firewall_rules_count: 8,
                cron_jobs_count: 2,
            },
            {
                id: '2',
                name: 'Staging-01',
                ip_address: '45.76.34.21',
                ssh_port: 22,
                ssh_user: 'root',
                hostname: 'staging-01.serverpanel.id',
                os: 'ubuntu-24.04',
                arch: 'x86_64',
                status: 'active',
                agent_version: '1.2.0',
                agent_last_seen: new Date().toISOString(),
                provider: 'DigitalOcean',
                datacenter: 'SGP1',
                plan_name: '2 vCPU, 4GB RAM, 80GB SSD',
                cpu_usage: 12,
                memory_used: 0.8 * 1024 ** 3,
                memory_total: 4 * 1024 ** 3,
                disk_used: 25 * 1024 ** 3,
                disk_total: 80 * 1024 ** 3,
                load_avg: [0.12, 0.08, 0.05],
                services: [
                    { name: 'nginx', status: 'active', version: '1.26.2' },
                    { name: 'mysql', status: 'active', version: '8.0.39' },
                    { name: 'php8.3-fpm', status: 'active', version: '8.3.12' },
                ],
                uptime: 86400 * 3,
                web_apps_count: 2,
                databases_count: 1,
                firewall_rules_count: 5,
                cron_jobs_count: 0,
            },
            {
                id: '3',
                name: 'Dev-01',
                ip_address: '192.168.1.50',
                ssh_port: 2222,
                ssh_user: 'devops',
                hostname: 'dev-01.local',
                os: 'debian-12',
                arch: 'x86_64',
                status: 'provisioning',
                agent_version: '1.1.0',
                agent_last_seen: new Date(Date.now() - 300000).toISOString(),
                provider: 'Hetzner',
                datacenter: 'FSN1',
                plan_name: '1 vCPU, 1GB RAM, 25GB SSD',
                cpu_usage: 8,
                memory_used: 0.3 * 1024 ** 3,
                memory_total: 1 * 1024 ** 3,
                disk_used: 3 * 1024 ** 3,
                disk_total: 25 * 1024 ** 3,
                load_avg: [0.05, 0.02, 0.01],
                services: [
                    { name: 'nginx', status: 'active', version: '1.26.2' },
                ],
                uptime: 3600 * 2,
                web_apps_count: 0,
                databases_count: 0,
                firewall_rules_count: 3,
                cron_jobs_count: 0,
            },
        ];
        loading.value = false;
    }

    async function fetchServer(id: string): Promise<void> {
        loading.value = true;
        const found = servers.value.find((s) => s.id === id);
        currentServer.value = found ?? null;
        loading.value = false;
    }

    function setCurrentServer(server: Server | null): void {
        currentServer.value = server;
    }

    return {
        servers,
        currentServer,
        loading,
        fetchServers,
        fetchServer,
        setCurrentServer,
    };
});
