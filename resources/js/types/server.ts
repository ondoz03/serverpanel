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
    hostname: string;
    os: ServerOs;
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
    services: ServerService[];
    uptime: number;
};
