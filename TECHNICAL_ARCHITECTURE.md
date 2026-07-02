# Technical Architecture Document
## ServerPanel — System Design, ERD & Agent Communication

**Version:** 1.0.0  
**Date:** June 2026  
**Stack:** Laravel 13 · Vue 3 · Inertia.js · Node.js 24 · MySQL 8.0 · Redis 7

---

## 1. High-Level System Architecture

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           INTERNET / USER                               │
└──────────────────────────────────┬──────────────────────────────────────┘
                                   │ HTTPS
                    ┌──────────────▼──────────────┐
                    │        Cloudflare CDN        │
                    │   (DDoS, Edge Cache, WAF)    │
                    └──────────────┬──────────────┘
                                   │
                    ┌──────────────▼──────────────┐
                    │      Nginx Load Balancer      │
                    │     (Let's Encrypt SSL)       │
                    └──────┬───────────────┬───────┘
                           │               │
               ┌───────────▼───┐   ┌───────▼───────────┐
               │  App Server 1  │   │   App Server 2     │
               │  Laravel 13    │   │   Laravel 13       │
               │  PHP 8.4       │   │   PHP 8.4          │
               │  + Octane      │   │   + Octane         │
               └───────────┬───┘   └───────┬───────────┘
                           │               │
                    ┌──────▼───────────────▼──────┐
                    │       Shared Services         │
                    │  ┌─────────┐  ┌───────────┐  │
                    │  │ MySQL 8 │  │  Redis 7  │  │
                    │  │(Primary │  │ (Cache +  │  │
                    │  │+Replica)│  │  Queue +  │  │
                    │  └─────────┘  │  Session) │  │
                    │               └───────────┘  │
                    │  ┌─────────────────────────┐  │
                    │  │   Laravel Horizon        │  │
                    │  │   (Queue Workers)        │  │
                    │  └─────────────────────────┘  │
                    │  ┌─────────────────────────┐  │
                    │  │   Laravel Reverb         │  │
                    │  │   (WebSocket Server)     │  │
                    │  └─────────────────────────┘  │
                    └──────────────────────────────┘
                                   │
                    ┌──────────────▼──────────────┐
                    │       S3-Compatible           │
                    │   Object Storage (Backups,    │
                    │   Logs, SSL Certs archive)    │
                    └──────────────────────────────┘

─────────────────── USER VPS SERVERS ──────────────────────

    ┌──────────────────┐       ┌──────────────────┐
    │  User VPS #1     │       │  User VPS #2     │
    │ ┌──────────────┐ │       │ ┌──────────────┐ │
    │ │ ServerPanel  │ │       │ │ ServerPanel  │ │
    │ │    Agent     │◄├───────├►│    Agent     │ │
    │ │  (Node 24)   │ │  WSS  │ │  (Node 24)   │ │
    │ └──────────────┘ │       │ └──────────────┘ │
    │   Nginx          │       │   Nginx          │
    │   PHP-FPM 8.x    │       │   PHP-FPM 8.x    │
    │   MySQL / MariaDB│       │   MySQL / MariaDB│
    │   Redis          │       │   Redis          │
    │   Certbot        │       │   Certbot        │
    └──────────────────┘       └──────────────────┘
              ▲                          ▲
              │  HTTPS + HMAC Auth       │
              └──────────┬───────────────┘
                         │
              ┌──────────▼──────────┐
              │  Platform API        │
              │  /api/agent/*        │
              └─────────────────────┘
```

---

## 2. Technology Stack Detail

### 2.1 Platform (ServerPanel Application)

| Layer | Technology | Versi | Keterangan |
|---|---|---|---|
| Web Framework | Laravel | 13.x | Backend API + Inertia rendering |
| Frontend | Vue | 3.5+ | SPA via Inertia.js |
| SSR Bridge | Inertia.js | 2.x | Full-stack, no separate API build |
| PHP Runtime | PHP | 8.4 | Fibers, readonly classes |
| Application Server | Laravel Octane | 2.x | FrankenPHP atau Swoole |
| Queue | Laravel Horizon | 5.x | Redis-backed queue workers |
| WebSocket | Laravel Reverb | 1.x | Real-time agent communication |
| Scheduler | Laravel Scheduler | built-in | Cron management |
| Auth | Laravel Sanctum | 4.x | API token + session auth |
| Cache/Queue | Redis | 7.x | In-memory store |
| Database | MySQL | 8.0 | Primary data store |
| Search (future) | Meilisearch | latest | Full-text search log |
| Storage | S3-compatible | — | Backup & file storage |
| CSS | Tailwind CSS | 4.x | Utility-first |
| Build Tool | Vite | 6.x | Fast HMR |

### 2.2 Agent (di VPS User)

| Komponen | Technology | Keterangan |
|---|---|---|
| Runtime | Node.js 24 LTS | Event-driven, async I/O |
| Language | TypeScript 5.x | Type safety |
| Process Manager | PM2 | Auto-restart, log management |
| IPC | Unix Socket | Komunikasi internal agent |
| SSH Exec | child_process | Jalankan shell commands |
| Metrics | systeminformation | CPU, RAM, Disk, Network |
| Communication | WebSocket (ws) + HTTPS | Ke platform |
| Auth | HMAC-SHA256 | Request signing |

### 2.3 Provisioning Scripts

| Komponen | Technology | Keterangan |
|---|---|---|
| Bahasa | Bash 5 | Shell scripts untuk provisioning |
| Package Mgr | apt-get | Ubuntu/Debian |
| PHP Mgr | ondrej/php PPA | Multi-version PHP |
| Node Mgr | nvm | Node version manager |
| Process | systemd | Service management |
| SSL | certbot + ACME | Let's Encrypt |
| Firewall | ufw + iptables | Firewall management |

---

## 3. Entity Relationship Diagram (ERD)

### 3.1 Core Domain Entities

```
┌─────────────────────────────────────────────────────────────────────┐
│                         USERS & ORGANIZATIONS                        │
└─────────────────────────────────────────────────────────────────────┘

┌─────────────┐         ┌──────────────────┐         ┌─────────────┐
│    users    │         │  organizations   │         │    plans    │
├─────────────┤         ├──────────────────┤         ├─────────────┤
│ id (PK)     │◄───────►│ id (PK)          │◄────────│ id (PK)     │
│ name        │  1   N  │ name             │  N   1  │ name        │
│ email       │         │ slug             │         │ slug        │
│ password    │         │ owner_id (FK)    │         │ price_idr   │
│ email_verified_at    │ plan_id (FK)     │         │ max_servers │
│ two_factor_secret    │ trial_ends_at    │         │ max_apps    │
│ avatar_url  │         │ subscription_id  │         │ max_users   │
│ timezone    │         │ billing_email    │         │ has_backup  │
│ locale      │         │ created_at       │         │ has_git     │
│ created_at  │         │ updated_at       │         │ features    │
│ updated_at  │         └──────────────────┘         │ (JSON)      │
└─────────────┘                  │                   └─────────────┘
       │                         │
       │              ┌──────────▼───────────┐
       │              │  organization_users   │
       │              ├───────────────────────┤
       └─────────────►│ organization_id (FK)  │
                      │ user_id (FK)          │
                      │ role (enum)           │
                      │ permissions (JSON)    │
                      │ joined_at             │
                      └───────────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────────┐
│                            SERVERS                                   │
└─────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                           servers                             │
├──────────────────────────────────────────────────────────────┤
│ id (PK)             UUID                                      │
│ organization_id     FK → organizations                        │
│ name                VARCHAR(100)                              │
│ ip_address          VARCHAR(45) — supports IPv6              │
│ ssh_port            SMALLINT DEFAULT 22                       │
│ hostname            VARCHAR(255)                              │
│ os                  VARCHAR(50) — ubuntu-22.04, debian-12    │
│ arch                VARCHAR(10) — x86_64, arm64              │
│ status              ENUM: pending|provisioning|active|error  │
│ agent_token         VARCHAR(64) UNIQUE — encrypted           │
│ agent_version       VARCHAR(20)                              │
│ agent_last_seen     TIMESTAMP                                │
│ agent_connected_at  TIMESTAMP                                │
│ ssh_public_key      TEXT — RSA public key platform           │
│ provider            VARCHAR(50) — vultr, do, hetzner, etc   │
│ datacenter          VARCHAR(50) — SGP1, FRA1, etc           │
│ plan_name           VARCHAR(100) — 1 vCPU 1GB RAM           │
│ provisioned_at      TIMESTAMP                                │
│ provisioning_log    LONGTEXT                                  │
│ created_at          TIMESTAMP                                │
│ updated_at          TIMESTAMP                                │
└──────────────────────────────────────────────────────────────┘
         │
         ├─────────────────────────────────────────────────────┐
         │                                                     │
┌────────▼─────────────┐                         ┌────────────▼────────────┐
│   server_services    │                         │    server_metrics       │
├──────────────────────┤                         ├─────────────────────────┤
│ id (PK)              │                         │ id (PK)                 │
│ server_id (FK)       │                         │ server_id (FK)          │
│ name                 │                         │ cpu_usage       FLOAT   │
│ (nginx|mysql|php-fpm │                         │ memory_used     BIGINT  │
│  redis|fail2ban)     │                         │ memory_total    BIGINT  │
│ status               │                         │ disk_used       BIGINT  │
│ (running|stopped|    │                         │ disk_total      BIGINT  │
│  error|unknown)      │                         │ load_avg_1      FLOAT   │
│ version              │                         │ load_avg_5      FLOAT   │
│ checked_at           │                         │ net_in          BIGINT  │
└──────────────────────┘                         │ net_out         BIGINT  │
                                                 │ recorded_at     TIMESTAMP│
                                                 └─────────────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────────┐
│                        WEB APPLICATIONS                              │
└─────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                        web_applications                       │
├──────────────────────────────────────────────────────────────┤
│ id (PK)              UUID                                     │
│ server_id (FK)       → servers                               │
│ name                 VARCHAR(100)                            │
│ domain               VARCHAR(255)                            │
│ aliases              JSON — array of additional domains      │
│ document_root        VARCHAR(255)                            │
│ php_version          VARCHAR(10) — 8.2, 8.3, 8.4           │
│ web_server           ENUM: nginx|nginx_apache               │
│ environment          ENUM: production|staging|development    │
│ system_user          VARCHAR(50) — linux user for isolation  │
│ public_path          VARCHAR(100) — /public default          │
│ stack                ENUM: laravel|wordpress|nodejs|static   │
│ status               ENUM: active|inactive|error            │
│ nginx_config         LONGTEXT                                │
│ php_ini_overrides    JSON                                    │
│ created_at           TIMESTAMP                               │
│ updated_at           TIMESTAMP                               │
└──────────────────────────────────────────────────────────────┘
         │
         ├──────────────────────────┬──────────────────────────┐
         │                          │                          │
┌────────▼──────────┐   ┌───────────▼──────────┐   ┌─────────▼─────────┐
│  ssl_certificates │   │  environment_vars    │   │  git_deployments  │
├───────────────────┤   ├──────────────────────┤   ├───────────────────┤
│ id (PK)           │   │ id (PK)              │   │ id (PK)           │
│ web_app_id (FK)   │   │ web_app_id (FK)      │   │ web_app_id (FK)   │
│ type              │   │ key                  │   │ provider          │
│ (letsencrypt|     │   │ value (encrypted)    │   │ (github|gitlab|   │
│  custom)          │   │ is_secret            │   │  bitbucket)       │
│ domain            │   └──────────────────────┘   │ repo_url          │
│ cert_path         │                              │ branch            │
│ key_path          │                              │ deploy_script     │
│ chain_path        │                              │ webhook_secret    │
│ expires_at        │                              │ auto_deploy       │
│ wildcard          │                              │ deploy_key_pub    │
│ status            │                              │ deploy_key_priv   │
│ renewed_at        │                              │ (encrypted)       │
└───────────────────┘                              └───────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────────┐
│                           DEPLOYMENTS                                │
└─────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                         deployments                           │
├──────────────────────────────────────────────────────────────┤
│ id (PK)              UUID                                     │
│ git_deployment_id    FK → git_deployments                    │
│ web_app_id           FK → web_applications                   │
│ triggered_by         ENUM: push|manual|api|hook              │
│ triggered_user_id    FK → users (nullable)                   │
│ commit_hash          VARCHAR(40)                              │
│ commit_message       TEXT                                     │
│ branch               VARCHAR(100)                            │
│ status               ENUM: queued|running|success|failed     │
│ log                  LONGTEXT                                 │
│ started_at           TIMESTAMP                               │
│ finished_at          TIMESTAMP                               │
│ duration_seconds     INT                                     │
│ rollback_of          UUID (FK self — jika ini adalah rollback)│
│ created_at           TIMESTAMP                               │
└──────────────────────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────────┐
│                      DATABASES & BACKUPS                             │
└─────────────────────────────────────────────────────────────────────┘

┌──────────────────────────┐          ┌────────────────────────────┐
│      databases           │          │      database_users         │
├──────────────────────────┤          ├────────────────────────────┤
│ id (PK)                  │          │ id (PK)                    │
│ server_id (FK)           │          │ database_id (FK)           │
│ name   VARCHAR(100)      │◄─────────│ server_id (FK)             │
│ charset VARCHAR(20)      │          │ username VARCHAR(50)        │
│ collation VARCHAR(50)    │          │ password (encrypted)       │
│ created_at               │          │ host VARCHAR(50) default % │
│ updated_at               │          │ privileges JSON            │
└──────────────────────────┘          │ created_at                 │
                                      └────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                          backups                              │
├──────────────────────────────────────────────────────────────┤
│ id (PK)              UUID                                     │
│ server_id (FK)       → servers                               │
│ web_app_id (FK)      → web_applications (nullable)          │
│ database_id (FK)     → databases (nullable)                  │
│ type                 ENUM: files|database|full               │
│ storage_type         ENUM: local|s3|wasabi|backblaze         │
│ storage_path         VARCHAR(500)                            │
│ size_bytes           BIGINT                                   │
│ status               ENUM: running|success|failed            │
│ triggered_by         ENUM: scheduled|manual                  │
│ checksum             VARCHAR(64) — SHA-256                   │
│ encrypted            BOOLEAN                                 │
│ expires_at           TIMESTAMP                               │
│ created_at           TIMESTAMP                               │
└──────────────────────────────────────────────────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────────┐
│                    FIREWALL & CRON JOBS                              │
└─────────────────────────────────────────────────────────────────────┘

┌──────────────────────────┐          ┌────────────────────────────┐
│   firewall_rules         │          │       cron_jobs             │
├──────────────────────────┤          ├────────────────────────────┤
│ id (PK)                  │          │ id (PK)                    │
│ server_id (FK)           │          │ web_app_id (FK)            │
│ name VARCHAR(100)        │          │ server_id (FK)             │
│ protocol ENUM: tcp|udp   │          │ name VARCHAR(100)          │
│ port VARCHAR(20)         │          │ command TEXT               │
│ source_ip VARCHAR(100)   │          │ expression VARCHAR(50)     │
│ action ENUM: allow|deny  │          │ user VARCHAR(50)           │
│ direction ENUM: in|out   │          │ enabled BOOLEAN            │
│ order SMALLINT           │          │ last_run_at TIMESTAMP      │
│ enabled BOOLEAN          │          │ last_status ENUM:ok|fail   │
│ created_at               │          │ last_output TEXT           │
│ updated_at               │          │ created_at                 │
└──────────────────────────┘          └────────────────────────────┘
```

```
┌─────────────────────────────────────────────────────────────────────┐
│                       ACTIVITY & AUDIT LOG                           │
└─────────────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│                       activity_logs                           │
├──────────────────────────────────────────────────────────────┤
│ id (PK)              BIGINT AUTO                              │
│ organization_id (FK) → organizations                         │
│ user_id (FK)         → users (nullable — system actions)     │
│ event                VARCHAR(100) — server.provisioned       │
│ subject_type         VARCHAR(100) — App\Models\Server        │
│ subject_id           UUID                                    │
│ causer_type          VARCHAR(100)                            │
│ causer_id            UUID                                    │
│ properties           JSON — before/after values             │
│ ip_address           VARCHAR(45)                             │
│ user_agent           VARCHAR(500)                            │
│ created_at           TIMESTAMP                               │
└──────────────────────────────────────────────────────────────┘
```

---

## 4. Agent Architecture & Communication

### 4.1 Agent Overview

Agent adalah program Node.js 24 yang berjalan di VPS user. Fungsinya:
1. **Reporter** — Kirim metrics (CPU, RAM, disk, network) ke platform
2. **Executor** — Terima dan jalankan perintah dari platform (restart service, run command, dll)
3. **Watcher** — Monitor status service, cron job, log file

### 4.2 Agent Installation Flow

```bash
# One-liner yang dijalankan user di server mereka:
curl -fsSL https://agent.serverpanel.id/install.sh | \
  bash -s -- --token=sp_live_xxxxxxxxxx --endpoint=https://api.serverpanel.id

# Script install.sh melakukan:
# 1. Detect OS dan arch
# 2. Install Node.js 24 via nvm jika belum ada
# 3. Download agent binary dari CDN
# 4. Verify checksum (SHA-256)
# 5. Setup systemd service: serverpanel-agent
# 6. Set environment variables (TOKEN, ENDPOINT, SERVER_ID)
# 7. Start service
# 8. Register ke platform via HTTPS
```

### 4.3 Agent Directory Structure (Node.js 24 / TypeScript)

```
/opt/serverpanel-agent/
├── src/
│   ├── index.ts              # Entry point
│   ├── config.ts             # Env config loader
│   ├── ws/
│   │   ├── client.ts         # WebSocket client ke platform
│   │   └── handlers.ts       # Handler untuk setiap command type
│   ├── collectors/
│   │   ├── cpu.ts            # CPU metrics collector
│   │   ├── memory.ts         # RAM metrics collector
│   │   ├── disk.ts           # Disk usage collector
│   │   ├── network.ts        # Network I/O collector
│   │   └── services.ts       # Service status checker
│   ├── executors/
│   │   ├── shell.ts          # Execute shell commands
│   │   ├── nginx.ts          # Nginx operations
│   │   ├── php.ts            # PHP-FPM operations
│   │   ├── mysql.ts          # MySQL operations
│   │   ├── ssl.ts            # Certbot operations
│   │   └── git.ts            # Git deploy operations
│   ├── provisioner/
│   │   ├── lemp.ts           # LEMP stack provisioner
│   │   ├── webapp.ts         # Web app creator
│   │   └── firewall.ts       # UFW rule manager
│   └── utils/
│       ├── hmac.ts           # Request signing
│       ├── logger.ts         # PM2-compatible logger
│       └── retry.ts          # Retry logic
├── dist/                     # Compiled JS
├── package.json
├── tsconfig.json
└── ecosystem.config.js       # PM2 config
```

### 4.4 Communication Protocol

#### A. Agent → Platform (Metrics Push)

Setiap **5 detik**, agent push metrics via WebSocket:

```typescript
// Payload format (WebSocket message)
interface MetricsPayload {
  type: 'metrics';
  server_id: string;
  timestamp: number;        // Unix timestamp ms
  signature: string;        // HMAC-SHA256(server_id + timestamp, agent_token)
  data: {
    cpu: {
      usage: number;        // percentage 0-100
      cores: number;
      load: [number, number, number]; // 1m, 5m, 15m load avg
    };
    memory: {
      used: number;         // bytes
      total: number;
      swap_used: number;
      swap_total: number;
    };
    disk: {
      partitions: Array<{
        mount: string;
        used: number;
        total: number;
        filesystem: string;
      }>;
    };
    network: {
      interfaces: Array<{
        name: string;
        bytes_in: number;
        bytes_out: number;
        packets_in: number;
        packets_out: number;
      }>;
    };
    services: Array<{
      name: string;         // nginx, mysql, php8.3-fpm, redis, fail2ban
      status: 'active' | 'inactive' | 'failed' | 'unknown';
      pid: number | null;
    }>;
    uptime: number;         // seconds
  };
}
```

#### B. Platform → Agent (Command Dispatch)

Platform kirim command via WebSocket. Agent execute dan reply:

```typescript
// Command dari platform ke agent
interface CommandPayload {
  type: 'command';
  command_id: string;       // UUID untuk tracking
  action: CommandAction;
  params: Record<string, unknown>;
  signature: string;        // HMAC dari platform
  issued_at: number;        // timestamp — agent tolak jika > 30 detik lalu
}

type CommandAction =
  | 'service.restart'       // params: { service: 'nginx' | 'mysql' | ... }
  | 'service.start'
  | 'service.stop'
  | 'service.status'
  | 'shell.exec'            // params: { command: string, user: string, timeout: number }
  | 'webapp.create'         // params: { domain, php_version, doc_root, ... }
  | 'webapp.delete'         // params: { domain }
  | 'ssl.issue'             // params: { domain, email }
  | 'ssl.renew'             // params: { domain }
  | 'firewall.add_rule'     // params: { port, protocol, action, source }
  | 'firewall.remove_rule'  // params: { rule_id }
  | 'git.deploy'            // params: { web_app_id, commit, script }
  | 'mysql.create_db'       // params: { name, charset }
  | 'mysql.create_user'     // params: { username, password, database }
  | 'cron.sync'             // params: { cron_jobs: CronJob[] }
  | 'agent.update'          // params: { version, download_url, checksum }
  | 'agent.info';           // no params — return version, uptime, etc

// Response dari agent ke platform
interface CommandResponse {
  type: 'command_response';
  command_id: string;
  success: boolean;
  output: string;           // stdout + stderr
  exit_code: number;
  duration_ms: number;
  error?: string;
}
```

#### C. Agent → Platform (Streaming Output)

Untuk long-running commands (provisioning, deployment), agent stream output:

```typescript
interface StreamPayload {
  type: 'stream';
  command_id: string;
  chunk: string;            // line of output
  seq: number;              // sequence number
  is_final: boolean;        // true = stream selesai
}
```

### 4.5 Security Model

```
┌─────────────────────────────────────────────────────────────────┐
│                     SECURITY LAYERS                              │
├─────────────────────────────────────────────────────────────────┤
│                                                                  │
│  Layer 1 — Transport Security                                    │
│  • Semua komunikasi via HTTPS/WSS (TLS 1.3 minimum)            │
│  • Certificate pinning di agent (platform cert hash)            │
│                                                                  │
│  Layer 2 — Request Authentication                                │
│  • Setiap request/command ditandatangani dengan HMAC-SHA256     │
│  • Signature = HMAC(payload_hash + timestamp, agent_token)      │
│  • Agent tolak command jika timestamp > 30 detik (replay attack)│
│                                                                  │
│  Layer 3 — Token Management                                      │
│  • agent_token: 64-char random hex, disimpan terenkripsi AES-256│
│  • Auto-rotate setiap 30 hari (platform kirim new token)        │
│  • Token revocation langsung efektif                            │
│                                                                  │
│  Layer 4 — Command Authorization                                 │
│  • Platform hanya kirim command yang diauthorize user           │
│  • Agent punya whitelist command yang boleh dieksekusi          │
│  • shell.exec dibatasi: tidak bisa jalankan rm -rf /,           │
│    tidak bisa akses file di luar /var/www & /opt               │
│                                                                  │
│  Layer 5 — Privilege Isolation                                   │
│  • Agent jalan sebagai user 'serverpanel' (non-root)            │
│  • Gunakan sudo hanya untuk operasi yang memerlukan             │
│  • Sudoers dibatasi hanya command yang diizinkan               │
│                                                                  │
└─────────────────────────────────────────────────────────────────┘
```

---

## 5. Laravel 13 Application Structure

```
app/
├── Console/
│   ├── Commands/
│   │   ├── Agent/
│   │   │   └── CheckAgentConnections.php
│   │   └── Server/
│   │       ├── CleanOldMetrics.php
│   │       └── CheckSslExpiry.php
├── Events/
│   ├── Server/
│   │   ├── ServerProvisioned.php
│   │   ├── ServerMetricsReceived.php
│   │   └── ServiceStatusChanged.php
│   └── Deployment/
│       ├── DeploymentStarted.php
│       ├── DeploymentCompleted.php
│       └── DeploymentFailed.php
├── Http/
│   ├── Controllers/
│   │   ├── Auth/
│   │   ├── Server/
│   │   │   ├── ServerController.php
│   │   │   ├── ServerProvisionController.php
│   │   │   └── ServerMetricController.php
│   │   ├── WebApp/
│   │   │   ├── WebAppController.php
│   │   │   ├── SslController.php
│   │   │   └── EnvController.php
│   │   ├── Database/
│   │   │   └── DatabaseController.php
│   │   ├── Deployment/
│   │   │   ├── DeploymentController.php
│   │   │   └── WebhookController.php
│   │   ├── Firewall/
│   │   │   └── FirewallRuleController.php
│   │   ├── CronJob/
│   │   │   └── CronJobController.php
│   │   └── Agent/             ← Agent API endpoints
│   │       ├── AgentRegisterController.php
│   │       ├── AgentCommandController.php
│   │       └── AgentMetricController.php
│   └── Middleware/
│       ├── AgentAuthenticate.php    ← HMAC verification
│       ├── EnsureOrganization.php
│       └── CheckServerOwnership.php
├── Jobs/
│   ├── Server/
│   │   ├── ProvisionServer.php
│   │   ├── InstallLemp.php
│   │   └── CheckServerUptime.php
│   ├── WebApp/
│   │   ├── CreateWebApp.php
│   │   └── IssueSslCertificate.php
│   ├── Deployment/
│   │   └── RunDeployment.php
│   └── Backup/
│       └── RunBackup.php
├── Models/
│   ├── User.php
│   ├── Organization.php
│   ├── Server.php
│   ├── WebApplication.php
│   ├── SslCertificate.php
│   ├── Database.php
│   ├── DatabaseUser.php
│   ├── Deployment.php
│   ├── GitDeployment.php
│   ├── FirewallRule.php
│   ├── CronJob.php
│   ├── ServerMetric.php
│   ├── Backup.php
│   └── ActivityLog.php
├── Services/
│   ├── Agent/
│   │   ├── AgentCommandService.php   ← Kirim command ke agent
│   │   ├── AgentAuthService.php      ← HMAC verify
│   │   └── AgentMetricService.php    ← Process incoming metrics
│   ├── Provisioning/
│   │   └── ProvisioningScriptService.php
│   ├── Ssl/
│   │   └── SslService.php
│   ├── Git/
│   │   └── GitProviderService.php
│   └── Billing/
│       └── MidtransService.php
└── WebSockets/
    ├── Channels/
    │   ├── ServerChannel.php         ← Private channel per server
    │   └── DeploymentChannel.php
    └── Handlers/
        ├── AgentConnectHandler.php
        ├── AgentMetricsHandler.php
        └── AgentCommandResponseHandler.php
```

---

## 6. Vue 3 + Inertia.js Frontend Structure

```
resources/js/
├── Pages/
│   ├── Auth/
│   │   ├── Login.vue
│   │   ├── Register.vue
│   │   └── TwoFactor.vue
│   ├── Onboarding/
│   │   └── AddFirstServer.vue
│   ├── Dashboard/
│   │   └── Index.vue             ← Overview semua server
│   ├── Server/
│   │   ├── Index.vue             ← List servers
│   │   ├── Create.vue            ← Add server wizard
│   │   ├── Show.vue              ← Server detail
│   │   ├── Monitoring.vue        ← Real-time metrics
│   │   ├── Provisioning.vue      ← Live provisioning log
│   │   └── Settings.vue
│   ├── WebApp/
│   │   ├── Index.vue
│   │   ├── Create.vue
│   │   ├── Show.vue
│   │   ├── Ssl.vue
│   │   ├── Env.vue
│   │   ├── Git.vue
│   │   ├── Deployment/
│   │   │   ├── Index.vue
│   │   │   └── Show.vue          ← Live deployment log
│   │   └── Settings.vue
│   ├── Database/
│   │   ├── Index.vue
│   │   └── Create.vue
│   ├── Firewall/
│   │   └── Index.vue
│   ├── CronJob/
│   │   └── Index.vue
│   ├── Backup/
│   │   └── Index.vue
│   └── Settings/
│       ├── Profile.vue
│       ├── Organization.vue
│       ├── Team.vue
│       ├── Billing.vue
│       └── ApiKeys.vue
├── Components/
│   ├── Server/
│   │   ├── ServerCard.vue        ← Card di dashboard
│   │   ├── MetricsChart.vue      ← Real-time grafik
│   │   ├── ServiceStatus.vue     ← Badge status service
│   │   └── ProvisioningLog.vue   ← SSE streaming log
│   ├── WebApp/
│   │   ├── DeploymentLog.vue     ← Live deployment stream
│   │   └── EnvEditor.vue         ← Key-value env editor
│   ├── UI/
│   │   ├── StatusBadge.vue
│   │   ├── CopyButton.vue
│   │   ├── TerminalOutput.vue    ← Styled pre block
│   │   └── CronExpressionBuilder.vue
│   └── Layout/
│       ├── AppLayout.vue
│       ├── Sidebar.vue
│       └── TopNav.vue
├── Composables/
│   ├── useServerMetrics.ts       ← Real-time metrics via Echo
│   ├── useDeploymentStream.ts    ← SSE stream composable
│   ├── useClipboard.ts
│   └── useConfirm.ts
└── Stores/
    ├── server.ts                 ← Pinia store
    ├── webApp.ts
    └── notification.ts
```

---

## 7. API Routes Design

### 7.1 Platform Web Routes (Inertia)
```
GET  /                          → Dashboard
GET  /servers                   → Server list
GET  /servers/create            → Add server wizard
GET  /servers/{server}          → Server detail
GET  /servers/{server}/apps     → Web apps
GET  /servers/{server}/apps/{app}/deployments/{deployment} → Deployment detail
...
```

### 7.2 Platform API Routes (JSON)
```
# Agent Registration & Communication
POST   /api/agent/register              ← Agent register ke platform
POST   /api/agent/heartbeat             ← Periodic ping
POST   /api/agent/metrics               ← Push metrics batch
POST   /api/agent/command/response      ← Response dari command
POST   /api/agent/stream                ← Stream output chunk

# Deployment Webhooks (public, verified by webhook secret)
POST   /webhooks/github/{app_id}
POST   /webhooks/gitlab/{app_id}
POST   /webhooks/bitbucket/{app_id}

# Internal API (untuk Inertia/frontend)
GET    /api/servers/{server}/metrics/realtime   ← SSE endpoint
GET    /api/servers/{server}/metrics/history    ← Historical data
POST   /api/servers/{server}/command            ← Execute command
```

---

## 8. Queue & Job Architecture

```
Queue Configuration (Laravel Horizon):

  default (redis)          ← Standard jobs
  ├── ProvisionServer       [timeout: 600s, tries: 1]
  ├── InstallLemp           [timeout: 600s, tries: 1]
  ├── CreateWebApp          [timeout: 120s, tries: 2]
  └── IssueSslCertificate   [timeout: 120s, tries: 3]

  deployments (redis)      ← Deployment jobs, prioritas tinggi
  └── RunDeployment         [timeout: 300s, tries: 1]

  monitoring (redis)       ← Background monitoring
  ├── CheckServerUptime     [runs every 1 minute via Scheduler]
  └── CheckSslExpiry        [runs every 6 hours via Scheduler]

  backups (redis)          ← Backup jobs, low priority
  └── RunBackup             [timeout: 3600s, tries: 2]
```

---

## 9. Real-Time Architecture

```
User Browser                    Platform                    Agent (VPS)
     │                             │                              │
     │  WebSocket (Echo/Reverb)    │    WebSocket (ws://)         │
     │◄───────────────────────────►│◄────────────────────────────►│
     │                             │                              │
     │  Subscribe:                 │  Channel:                    │
     │  private-server.{id}        │  agent.{server_id}           │
     │                             │                              │
     │                             │    Agent push metrics        │
     │  MetricsReceived event      │◄─────────────────────────────│
     │◄────────────────────────────│                              │
     │  (CPU, RAM, Disk, Services) │                              │
     │                             │                              │
     │  User klik "Restart Nginx"  │                              │
     │────────────────────────────►│                              │
     │                             │  Command: service.restart    │
     │                             │─────────────────────────────►│
     │                             │                              │
     │                             │  Response: success, output   │
     │  CommandCompleted event     │◄─────────────────────────────│
     │◄────────────────────────────│                              │
     │                             │                              │
     │  User trigger deployment    │                              │
     │────────────────────────────►│                              │
     │                             │  Command: git.deploy         │
     │                             │─────────────────────────────►│
     │                             │                              │
     │  DeploymentLog stream       │  Stream: output chunks       │
     │◄────────────────────────────│◄─────────────────────────────│
     │  (real-time per baris)      │                              │
     │                             │  Stream: is_final: true      │
     │  DeploymentCompleted        │◄─────────────────────────────│
     │◄────────────────────────────│                              │
```

---

## 10. Database Migration Order

```sql
-- Phase 1: Core tables
001_create_plans_table
002_create_users_table
003_create_organizations_table
004_create_organization_users_table
005_create_servers_table
006_create_server_services_table
007_create_server_metrics_table

-- Phase 2: Web Application
008_create_web_applications_table
009_create_ssl_certificates_table
010_create_environment_vars_table

-- Phase 3: Git & Deployments
011_create_git_deployments_table
012_create_deployments_table

-- Phase 4: Database Management
013_create_databases_table
014_create_database_users_table

-- Phase 5: Operations
015_create_firewall_rules_table
016_create_cron_jobs_table
017_create_backups_table
018_create_backup_schedules_table

-- Phase 6: Activity & Billing
019_create_activity_logs_table
020_create_api_keys_table
021_create_subscriptions_table
022_create_payment_transactions_table
```

---

## 11. Environment Configuration

### 11.1 Platform `.env`

```ini
APP_NAME="ServerPanel"
APP_ENV=production
APP_KEY=base64:...
APP_URL=https://app.serverpanel.id

# Database (MySQL 8.0)
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=serverpanel
DB_USERNAME=serverpanel
DB_PASSWORD=

# Redis (Queue + Cache + Session)
REDIS_HOST=127.0.0.1
REDIS_PORT=6379
CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis

# Laravel Reverb (WebSocket)
REVERB_APP_ID=serverpanel
REVERB_APP_KEY=
REVERB_APP_SECRET=
REVERB_HOST=ws.serverpanel.id
REVERB_PORT=443
REVERB_SCHEME=https

# Object Storage (S3-compatible)
FILESYSTEM_DISK=s3
AWS_ACCESS_KEY_ID=
AWS_SECRET_ACCESS_KEY=
AWS_DEFAULT_REGION=ap-southeast-1
AWS_BUCKET=serverpanel-backups
AWS_ENDPOINT=https://sgp1.digitaloceanspaces.com

# Midtrans
MIDTRANS_SERVER_KEY=
MIDTRANS_CLIENT_KEY=
MIDTRANS_IS_PRODUCTION=true

# Mail
MAIL_MAILER=smtp
MAIL_HOST=smtp.resend.com
MAIL_PORT=465
MAIL_USERNAME=resend
MAIL_PASSWORD=

# Agent Security
AGENT_HMAC_ALGO=sha256
AGENT_TOKEN_ROTATE_DAYS=30
AGENT_COMMAND_EXPIRE_SECONDS=30

# Monitoring
UPTIME_CHECK_INTERVAL=60
SSL_EXPIRY_ALERT_DAYS=14
```

### 11.2 Agent `.env`

```ini
# Generated saat install
SERVERPANEL_ENDPOINT=https://api.serverpanel.id
SERVERPANEL_SERVER_ID=uuid-server-id
SERVERPANEL_AGENT_TOKEN=64-char-hex-token
SERVERPANEL_WS_URL=wss://ws.serverpanel.id

# Agent settings
METRICS_INTERVAL=5000          # 5 seconds
HEARTBEAT_INTERVAL=30000       # 30 seconds
RECONNECT_DELAY=5000           # 5 seconds
MAX_RECONNECT_ATTEMPTS=10
LOG_LEVEL=info

# Security
ALLOWED_COMMANDS=service.restart,service.start,service.stop,shell.exec,...
SHELL_EXEC_TIMEOUT=300         # 5 minutes max
SHELL_EXEC_RESTRICTED_PATHS=/etc/shadow,/root/.ssh
```

---

## 12. Deployment Infrastructure

```
Production Setup:

  serverpanel.id              → Landing page (static / Laravel)
  app.serverpanel.id          → Dashboard (Laravel + Vue + Inertia)
  api.serverpanel.id          → API (sama instance atau terpisah)
  ws.serverpanel.id           → Laravel Reverb (WebSocket)
  agent.serverpanel.id        → Agent download & CDN

  Infrastructure (contoh di Hetzner/DigitalOcean):
  ┌─────────────────────────────────────────────┐
  │  Load Balancer (Nginx / DO Load Balancer)   │
  └──────────────────┬──────────────────────────┘
                     │
         ┌───────────┴───────────┐
         │                       │
  ┌──────▼──────┐       ┌────────▼────┐
  │  App Node 1 │       │  App Node 2 │
  │  4 vCPU     │       │  4 vCPU     │
  │  8 GB RAM   │       │  8 GB RAM   │
  │  Laravel 13 │       │  Laravel 13 │
  │  + Horizon  │       │  + Reverb   │
  └─────────────┘       └─────────────┘
         │
  ┌──────▼─────────────────────────────────┐
  │  Managed Database Cluster               │
  │  MySQL 8.0 Primary + 1 Read Replica    │
  └──────────────────┬─────────────────────┘
                     │
  ┌──────────────────▼─────────────────────┐
  │  Managed Redis                          │
  │  (Cache + Queue + Session + Pub/Sub)   │
  └─────────────────────────────────────────┘
```

---

*Dokumen ini adalah living technical spec. Update seiring development.*
