export type ServerStatus = 'active' | 'provisioning' | 'error' | 'pending';

export type ServerOs = 'ubuntu-22.04' | 'ubuntu-24.04' | 'debian-11' | 'debian-12';

export type ServiceStatus = 'active' | 'inactive' | 'failed' | 'unknown';

export type ServerService = {
    name: string;
    status: ServiceStatus;
    version: string;
};

export type Server = {
    id: string;
    name: string;
    ip_address: string;
    ssh_port: number;
    ssh_user: string;
    hostname: string;
    os: ServerOs;
    arch: string;
    status: ServerStatus;
    agent_version: string;
    agent_last_seen: string;
    provider: string;
    datacenter: string;
    plan_name: string;
    cpu_usage: number;
    memory_used: number;
    memory_total: number;
    disk_used: number;
    disk_total: number;
    load_avg: [number, number, number];
    services: ServerService[];
    uptime: number;
    web_apps_count: number;
    databases_count: number;
    firewall_rules_count: number;
    cron_jobs_count: number;
    agent_token?: string;
};
