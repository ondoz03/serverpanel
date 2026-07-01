export type WebAppStatus = 'active' | 'inactive' | 'error';
export type WebAppStack = 'laravel' | 'wordpress' | 'nodejs' | 'static';
export type WebServer = 'nginx' | 'nginx_apache';
export type AppEnvironment = 'production' | 'staging' | 'development';

export type SslCertificate = {
    id: string;
    domain: string;
    type: 'letsencrypt' | 'custom';
    issuer: string;
    expires_at: string;
    status: 'active' | 'expired' | 'error';
    wildcard: boolean;
    auto_renew: boolean;
};

export type EnvVariable = {
    key: string;
    value: string;
    is_secret: boolean;
};

export type GitDeployment = {
    id: string;
    provider: 'github' | 'gitlab' | 'bitbucket';
    repo_url: string;
    branch: string;
    auto_deploy: boolean;
};

export type Deployment = {
    id: string;
    commit_hash: string;
    commit_message: string;
    branch: string;
    status: 'queued' | 'running' | 'success' | 'failed';
    triggered_by: 'push' | 'manual' | 'hook';
    started_at: string;
    finished_at: string | null;
    duration_seconds: number | null;
};

export type WebApplication = {
    id: string;
    server_id: string;
    name: string;
    domain: string;
    aliases: string[];
    document_root: string;
    php_version: string;
    web_server: WebServer;
    environment: AppEnvironment;
    stack: WebAppStack;
    status: WebAppStatus;
    system_user: string;
    ssl: SslCertificate | null;
    git: GitDeployment | null;
};
