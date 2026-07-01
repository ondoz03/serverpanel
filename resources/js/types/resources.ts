export type DatabaseType = 'mysql' | 'postgresql' | 'mongodb';
export type DatabaseStatus = 'active' | 'inactive' | 'error';

export type Database = {
    id: string;
    server_id: string;
    name: string;
    type: DatabaseType;
    version: string;
    port: number;
    status: DatabaseStatus;
    size_mb: number;
    databases: number;
    users: number;
    created_at: string;
};

export type FirewallRuleDirection = 'inbound' | 'outbound';
export type FirewallRuleAction = 'allow' | 'deny';
export type FirewallRuleProtocol = 'tcp' | 'udp' | 'icmp' | 'any';

export type FirewallRule = {
    id: string;
    name: string;
    direction: FirewallRuleDirection;
    protocol: FirewallRuleProtocol;
    port: string;
    source: string;
    action: FirewallRuleAction;
    enabled: boolean;
    description: string;
};

export type CronJob = {
    id: string;
    command: string;
    schedule: string;
    user: string;
    enabled: boolean;
    last_run: string | null;
    last_status: 'success' | 'failed' | null;
    log_file: string;
};

export type Backup = {
    id: string;
    name: string;
    type: 'full' | 'incremental' | 'database' | 'files';
    size_mb: number;
    status: 'completed' | 'running' | 'failed';
    created_at: string;
    storage: 'local' | 's3' | 'gcs' | 'sftp';
    retention_days: number;
};
