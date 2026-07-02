# 📋 ServerPanel — Summary & Analisis Lengkap

> **Disusun dari:** PRD.md & TECHNICAL_ARCHITECTURE.md  
> **Tanggal Analisis:** 30 Juni 2026  
> **Versi Dokumen:** 1.0.0

---

## 📌 Daftar Isi

1. [Executive Overview](#1-executive-overview)
2. [Business Logic & Model](#2-business-logic--model)
3. [Target Pengguna & Persona](#3-target-pengguna--persona)
4. [Fitur & Roadmap Produk](#4-fitur--roadmap-produk)
5. [Arsitektur Sistem (High-Level)](#5-arsitektur-sistem-high-level)
6. [Database & Data Model (ERD)](#6-database--data-model-erd)
7. [Agent Architecture](#7-agent-architecture)
8. [Platform Application Structure](#8-platform-application-structure)
9. [Frontend Architecture](#9-frontend-architecture)
10. [Real-Time Communication](#10-real-time-communication)
11. [Keamanan (Security Model)](#11-keamanan-security-model)
12. [Queue & Background Jobs](#12-queue--background-jobs)
13. [Infrastruktur & Deployment](#13-infrastruktur--deployment)
14. [Pricing & Monetisasi](#14-pricing--monetisasi)
15. [KPIs & Metrik Sukses](#15-kpis--metrik-sukses)
16. [Risiko & Mitigasi](#16-risiko--mitigasi)
17. [Hal yang Belum Dicakup (Out of Scope)](#17-hal-yang-belum-dicakup-out-of-scope)
18. [Ringkasan Insight & Catatan Analisis](#18-ringkasan-insight--catatan-analisis)

---

## 1. Executive Overview

**ServerPanel** adalah platform manajemen server berbasis web yang ditujukan untuk pasar Indonesia. Posisi produk ini adalah **kompetitor lokal dari RunCloud**, sebuah tool global yang sudah populer di kalangan developer.

### Apa yang dibangun?

Sebuah **SaaS (Software as a Service)** dashboard yang memungkinkan:
- Developer / freelancer / bisnis untuk **menghubungkan VPS mereka** ke platform
- Melakukan **konfigurasi, provisioning, dan monitoring** server tanpa harus paham Linux secara mendalam
- Mengelola **web application** (terutama Laravel) langsung dari UI web

### Diferensiasi Kunci

| Aspek | ServerPanel | RunCloud (Kompetitor) |
|---|---|---|
| Bahasa UI | 🇮🇩 Bahasa Indonesia | English |
| Support | WhatsApp, < 4 jam WIB | Email / ticket |
| Pembayaran | Midtrans, QRIS, GoPay, OVO | USD, kartu kredit global |
| Harga | Rp 49.000/bln (Starter) | ~Rp 128.000/bln ($8) |
| Laravel focus | One-click stack, Artisan runner | Generic |

---

## 2. Business Logic & Model

### 2.1 Model Bisnis: SaaS Subscription

ServerPanel menggunakan model **Software-as-a-Service berlangganan bulanan** (atau tahunan dengan diskon). User membayar untuk menggunakan platform — bukan untuk servernya itu sendiri. VPS tetap milik user dari provider masing-masing (DigitalOcean, Vultr, IDCloudHost, Hetzner, dll).

```
User punya VPS sendiri
       ↓
Hubungkan ke ServerPanel (install agent)
       ↓
Bayar berlangganan ServerPanel (Rp 49rb - 399rb/bln)
       ↓
Manage server via dashboard ServerPanel
```

### 2.2 Core Business Flow

#### A. Onboarding Flow

```
1. Register akun → verifikasi email
2. Pilih plan (atau mulai trial 14 hari gratis)
3. Tambah server pertama:
   a. Input IP, SSH port, metode auth
   b. Platform generate one-liner install script
   c. User jalankan script di terminal VPS-nya
   d. Agent ter-install & terhubung ke platform
4. Provisioning LEMP stack otomatis (opsional)
5. Server aktif, siap dipakai
```

#### B. Web Application Deployment Flow

```
1. Server aktif → Tambah Web Application
2. Input domain, pilih PHP version, document root
3. Platform kirim perintah ke agent → buat Nginx config + PHP-FPM pool
4. Enable SSL → Let's Encrypt auto-issued via certbot
5. Connect GitHub repo → set branch & deploy script
6. Push ke GitHub → webhook diterima platform → trigger deployment
7. Platform kirim perintah git.deploy ke agent
8. Agent jalankan script, stream log real-time ke dashboard
9. Deployment selesai → aplikasi live
```

#### C. Monitoring Flow

```
Agent di VPS kirim metrics tiap 5 detik (CPU, RAM, Disk, Network)
     ↓
Platform simpan ke database (server_metrics)
     ↓
Dashboard user update real-time via WebSocket
     ↓
Jika threshold terlampaui (CPU > 80%, Disk > 90%) → Alert via email / WA / Telegram
```

#### D. Backup Flow

```
Terjadwal (atau manual) → Platform kirim job ke queue
     ↓
Agent jalankan backup (file atau database)
     ↓
Upload ke storage (local / S3-compatible / Wasabi)
     ↓
Record metadata backup (ukuran, checksum, path) di database
     ↓
User bisa restore dari dashboard kapan saja
```

### 2.3 Organizational Model

Platform menggunakan konsep **Organization** (bukan single-user). Ini memungkinkan:
- Satu akun bisa punya satu atau lebih organization
- Tim bisa diinvite ke organization dengan role berbeda
- Plan berlangganan melekat ke **organization**, bukan individual user

```
User (personal account)
  └── Organization A  (contoh: "Freelancer Rizki")
        ├── Servers (1–20 tergantung plan)
        ├── Web Applications
        └── Team Members (1–unlimited tergantung plan)
  └── Organization B  (opsional: project klien lain)
```

### 2.4 Nilai Bisnis per Fitur

| Fitur | Nilai Bisnis |
|---|---|
| Server provisioning otomatis | Hemat 2–4 jam setup manual per server |
| One-click Laravel stack | Killer feature untuk target user utama (Laravel devs) |
| Git deployment + rollback | Eliminasi kebutuhan CI/CD eksternal untuk proyek kecil |
| Monitoring real-time | Menggantikan kebutuhan tool terpisah (Datadog, New Relic) |
| SSL otomatis | Menghilangkan error SSL yang sering dialami developer baru |
| Team management | Naik tier dari individual ke agency — peluang upsell |

---

## 3. Target Pengguna & Persona

### Persona 1: "Rizki" — Laravel Freelancer ⭐ (Primary)

- Usia 22–30, manage 3–8 project klien sekaligus
- Familiar Laravel & Vue, kurang expert di Linux/sysadmin
- Budget Rp 50.000–200.000/bulan untuk tools
- **Pain:** Setup server dari scratch tiap project baru, makan waktu
- **Goal:** Deploy cepat, tidak mau pusing soal server

### Persona 2: "Budi" — Agency Technical Lead

- Usia 28–38, kelola tim 5–15 developer di agency digital
- **Pain:** Konsistensi konfigurasi antar server, onboarding developer junior ke server
- Budget Rp 500.000–2.000.000/bulan untuk tim
- **Goal:** Standarisasi deployment, kontrol akses tim

### Persona 3: "Pak Hendra" — UMKM Tech Owner

- Punya bisnis, hire developer kontrak, perlu website di VPS sendiri
- **Pain:** Developer sebelumnya yang setup, sekarang tidak ada yang bisa maintain
- **Goal:** Dashboard yang bisa dipahami tanpa keahlian teknis

---

## 4. Fitur & Roadmap Produk

### Phase 1 — MVP (Bulan 1–4)

| Kode | Fitur | Deskripsi Singkat |
|---|---|---|
| F01 | Auth & Onboarding | Register, login, verifikasi email, 2FA, OAuth (GitHub/Google), onboarding wizard |
| F02 | Server Connection & Provisioning | Connect VPS via SSH, install agent, provisioning LEMP stack otomatis |
| F03 | Web App Management | Tambah domain/subdomain, pilih PHP version, Nginx config, app isolation per Linux user |
| F04 | SSL/TLS Management | Let's Encrypt one-click, auto-renewal, custom SSL upload, wildcard, force HTTPS |
| F05 | Firewall Management | UFW rules via UI, Fail2Ban integration, IPv4/IPv6, IP ban manual |
| F06 | Dashboard & Monitoring (Basic) | CPU/RAM/Disk real-time, uptime ping/1mnt, alert email, restart service dari dashboard |

### Phase 2 — Growth (Bulan 5–8)

| Kode | Fitur | Deskripsi Singkat |
|---|---|---|
| F07 | Database Management | Create/drop DB & user, phpMyAdmin per app, backup & restore, S3 storage |
| F08 | Git Deployment | GitHub/GitLab/Bitbucket, push-to-deploy webhook, history, rollback, zero-downtime |
| F09 | Laravel-Specific Features ⭐ | Artisan runner, queue worker, Horizon, Laravel Scheduler, .env editor, cache clear |
| F10 | Cron Job Manager | UI-based cron, expression builder wizard, log output, alert jika gagal |
| F11 | File Manager (Basic) | Browse, upload/download, edit teks, chmod per app directory |

### Phase 3 — Scale (Bulan 9–12)

| Kode | Fitur | Deskripsi Singkat |
|---|---|---|
| F12 | Team & Collaboration | Role-based access (Owner/Admin/Developer/Viewer), activity log, API key per user |
| F13 | Advanced Monitoring | Grafik historis 7/30 hari, custom alert, notif WhatsApp/Telegram, slow query log |
| F14 | Multi-Server Management | Overview semua server, bulk action, grouping/labeling, transfer antar akun |
| F15 | Marketplace & One-Click Apps | WordPress, Laravel fresh install, Node.js/PM2, Mautic, n8n |

---

## 5. Arsitektur Sistem (High-Level)

### Gambaran Besar

Platform ServerPanel terdiri dari **dua komponen utama** yang saling terhubung:

1. **Platform (Cloud)** — Aplikasi Laravel 13 yang diakses user via browser
2. **Agent (Edge)** — Program Node.js 24 yang berjalan di VPS milik user

```
[Browser User] ──HTTPS──► [Cloudflare CDN + DDoS + WAF]
                                       │
                              [Nginx Load Balancer + SSL]
                                       │
                         ┌─────────────┴─────────────┐
                         │                           │
                  [App Server 1]             [App Server 2]
                  Laravel 13 + Octane        Laravel 13 + Octane
                         │                           │
                  ┌──────┴───────────────────────────┘
                  │
        ┌─────────┴──────────┐
        │  MySQL 8.0          │  ← Database utama (Primary + Read Replica)
        │  Redis 7            │  ← Cache, Queue, Session, Pub/Sub
        │  Laravel Horizon    │  ← Queue Workers
        │  Laravel Reverb     │  ← WebSocket Server
        └─────────────────────┘
                  │
        [S3-Compatible Storage] ← Backup, Log, SSL archive

─────────────────── USER VPS ───────────────────

   [User VPS #1]                    [User VPS #2]
   ┌─────────────────┐             ┌─────────────────┐
   │ ServerPanel     │◄── WSS ────►│ ServerPanel     │
   │ Agent (Node 24) │             │ Agent (Node 24) │
   │ Nginx, PHP-FPM  │             │ Nginx, PHP-FPM  │
   │ MySQL / MariaDB │             │ MySQL / MariaDB │
   │ Redis, Certbot  │             │ Redis, Certbot  │
   └─────────────────┘             └─────────────────┘
             ▲
             │ HTTPS + HMAC Auth
             ▼
   [Platform API: /api/agent/*]
```

### Subdomain Struktur

| Subdomain | Fungsi |
|---|---|
| `serverpanel.id` | Landing page marketing |
| `app.serverpanel.id` | Dashboard utama (Laravel + Vue + Inertia) |
| `api.serverpanel.id` | REST API (bisa sama instance atau terpisah) |
| `ws.serverpanel.id` | Laravel Reverb (WebSocket server) |
| `agent.serverpanel.id` | CDN distribusi agent binary & install script |

### Tech Stack Ringkasan

| Layer | Teknologi | Versi |
|---|---|---|
| Web Framework | Laravel | 13.x |
| Frontend | Vue | 3.5+ |
| SSR Bridge | Inertia.js | 2.x |
| PHP Runtime | PHP | 8.4 |
| App Server | Laravel Octane (FrankenPHP/Swoole) | 2.x |
| Queue | Laravel Horizon | 5.x |
| WebSocket | Laravel Reverb | 1.x |
| Auth | Laravel Sanctum | 4.x |
| Cache/Queue | Redis | 7.x |
| Database | MySQL | 8.0 |
| CSS | Tailwind CSS | 4.x |
| Build Tool | Vite | 6.x |
| Agent Runtime | Node.js + TypeScript | 24 LTS |
| Agent Process Mgr | PM2 | latest |

---

## 6. Database & Data Model (ERD)

Platform menggunakan **MySQL 8.0** sebagai primary data store. Berikut penjelasan per domain:

### 6.1 Domain: Users & Organizations

```
users ──(1:N)──► organization_users ──(N:1)──► organizations ──(N:1)──► plans
```

| Tabel | Kolom Penting | Keterangan |
|---|---|---|
| `users` | id, name, email, password, email_verified_at, two_factor_secret, avatar_url, timezone, locale | Akun personal |
| `organizations` | id, name, slug, owner_id, plan_id, trial_ends_at, subscription_id, billing_email | Entitas billing & resource |
| `organization_users` | organization_id, user_id, role (enum), permissions (JSON), joined_at | Pivot dengan RBAC |
| `plans` | name, slug, price_idr, max_servers, max_apps, max_users, has_backup, has_git, features (JSON) | Definisi tier berlangganan |

> **Penting:** Semua resource (server, web app, dll) berelasi ke `organizations`, bukan langsung ke `users`.

### 6.2 Domain: Servers

```
organizations ──(1:N)──► servers
servers ──(1:N)──► server_services
servers ──(1:N)──► server_metrics
```

| Tabel | Kolom Penting | Keterangan |
|---|---|---|
| `servers` | id (UUID), organization_id, name, ip_address (IPv4/v6), ssh_port, hostname, os, arch, status (enum), agent_token (encrypted), agent_version, agent_last_seen, ssh_public_key, provider, datacenter | Data VPS user |
| `server_services` | server_id, name (nginx/mysql/php-fpm/redis/fail2ban), status (running/stopped/error/unknown), version, checked_at | Status service berjalan |
| `server_metrics` | server_id, cpu_usage, memory_used, memory_total, disk_used, disk_total, load_avg_1/5, net_in, net_out, recorded_at | Metrics point-in-time |

**Status server:** `pending` → `provisioning` → `active` / `error`

### 6.3 Domain: Web Applications

```
servers ──(1:N)──► web_applications
web_applications ──(1:1)──► ssl_certificates
web_applications ──(1:N)──► environment_vars   (nilai dienkripsi)
web_applications ──(1:1)──► git_deployments
git_deployments  ──(1:N)──► deployments
```

| Tabel | Kolom Penting | Keterangan |
|---|---|---|
| `web_applications` | server_id, name, domain, aliases (JSON), document_root, php_version, web_server (enum), environment (enum), system_user, stack (enum: laravel/wordpress/nodejs/static), nginx_config, php_ini_overrides (JSON) | Konfigurasi web app |
| `ssl_certificates` | web_app_id, type (letsencrypt/custom), domain, cert_path, key_path, expires_at, wildcard, status, renewed_at | SSL certificate management |
| `environment_vars` | web_app_id, key, value (encrypted), is_secret | `.env` file per app |
| `git_deployments` | web_app_id, provider, repo_url, branch, deploy_script, webhook_secret, auto_deploy, deploy_key_pub, deploy_key_priv (encrypted) | Config Git repo |
| `deployments` | git_deployment_id, web_app_id, triggered_by (enum: push/manual/api/hook), commit_hash, commit_message, branch, status (enum), log, started_at, finished_at, duration_seconds, rollback_of (FK self) | Histori tiap deployment |

### 6.4 Domain: Databases & Backups

```
servers ──(1:N)──► databases ──(1:N)──► database_users
servers / web_applications ──► backups
```

| Tabel | Kolom Penting | Keterangan |
|---|---|---|
| `databases` | server_id, name, charset, collation | Database MySQL di VPS user |
| `database_users` | database_id, server_id, username, password (encrypted), host, privileges (JSON) | User DB dengan akses granular |
| `backups` | server_id, web_app_id (nullable), database_id (nullable), type (files/database/full), storage_type (local/s3/wasabi/backblaze), storage_path, size_bytes, status, checksum (SHA-256), encrypted, expires_at | Record backup lengkap |

### 6.5 Domain: Operations

| Tabel | Kolom Penting | Keterangan |
|---|---|---|
| `firewall_rules` | server_id, name, protocol (tcp/udp), port, source_ip, action (allow/deny), direction (in/out), order, enabled | Rule UFW yang dikelola platform |
| `cron_jobs` | web_app_id, server_id, name, command, expression, user, enabled, last_run_at, last_status, last_output | Cron job yang disync ke crontab VPS |

### 6.6 Domain: Audit Log

| Tabel | Kolom Penting | Keterangan |
|---|---|---|
| `activity_logs` | organization_id, user_id (nullable), event, subject_type, subject_id, causer_type, causer_id, properties (JSON with before/after), ip_address, user_agent | Audit trail semua aksi sensitif |

### 6.7 Urutan Migration Database (22 Tahap)

```
Phase 1 (Core):     plans → users → organizations → organization_users
                    → servers → server_services → server_metrics

Phase 2 (Web App):  web_applications → ssl_certificates → environment_vars

Phase 3 (Git):      git_deployments → deployments

Phase 4 (Database): databases → database_users

Phase 5 (Ops):      firewall_rules → cron_jobs → backups → backup_schedules

Phase 6 (Billing):  activity_logs → api_keys → subscriptions → payment_transactions
```

---

## 7. Agent Architecture

### 7.1 Apa itu Agent?

Agent adalah **program Node.js 24 (TypeScript)** yang diinstall di VPS user. Ini adalah "tangan" platform yang bisa menyentuh server user secara langsung. Tanpa agent, platform tidak bisa mengontrol VPS apapun.

**Tiga fungsi utama Agent:**

| Peran | Fungsi |
|---|---|
| **Reporter** | Push metrics sistem ke platform setiap 5 detik |
| **Executor** | Terima & jalankan perintah dari platform (restart service, deploy, dll) |
| **Watcher** | Monitor status service, cron job, log file |

### 7.2 Instalasi Agent (One-Liner)

```bash
# User jalankan di terminal VPS mereka:
curl -fsSL https://agent.serverpanel.id/install.sh | \
  bash -s -- --token=sp_live_xxxxxxxxxx --endpoint=https://api.serverpanel.id

# Script otomatis:
# 1. Detect OS & arch
# 2. Install Node.js 24 via nvm (jika belum ada)
# 3. Download agent binary dari CDN
# 4. Verify checksum SHA-256
# 5. Setup systemd service: serverpanel-agent
# 6. Set environment variables (TOKEN, ENDPOINT, SERVER_ID)
# 7. Start service
# 8. Register ke platform via HTTPS
```

Agent diinstall di `/opt/serverpanel-agent/` dan berjalan sebagai `systemd` service.

### 7.3 Struktur Direktori Agent

```
/opt/serverpanel-agent/src/
├── index.ts              # Entry point
├── config.ts             # Env config loader
├── ws/
│   ├── client.ts         # WebSocket client ke platform
│   └── handlers.ts       # Handler per command type
├── collectors/           # Kumpulkan data sistem
│   ├── cpu.ts
│   ├── memory.ts
│   ├── disk.ts
│   ├── network.ts
│   └── services.ts       # Status service checker
├── executors/            # Eksekusi perintah dari platform
│   ├── shell.ts          # Shell command execution
│   ├── nginx.ts          # Nginx operations
│   ├── php.ts            # PHP-FPM operations
│   ├── mysql.ts          # MySQL operations
│   ├── ssl.ts            # Certbot operations
│   └── git.ts            # Git deploy operations
├── provisioner/          # Provisioning otomatis
│   ├── lemp.ts           # Install LEMP stack
│   ├── webapp.ts         # Buat Nginx config + PHP-FPM pool
│   └── firewall.ts       # UFW rule management
└── utils/
    ├── hmac.ts           # Request signing
    ├── logger.ts         # PM2-compatible logger
    └── retry.ts          # Retry logic
```

### 7.4 Daftar Command yang Bisa Dieksekusi Agent

| Command | Parameter | Deskripsi |
|---|---|---|
| `service.restart/start/stop/status` | `{ service }` | Kelola service (nginx, mysql, php-fpm, redis) |
| `shell.exec` | `{ command, user, timeout }` | Jalankan shell command (dengan pembatasan keamanan) |
| `webapp.create` | `{ domain, php_version, doc_root, ... }` | Buat Nginx config + PHP-FPM pool |
| `webapp.delete` | `{ domain }` | Hapus web app config |
| `ssl.issue` | `{ domain, email }` | Issue SSL via certbot |
| `ssl.renew` | `{ domain }` | Renew SSL yang sudah ada |
| `firewall.add_rule` | `{ port, protocol, action, source }` | Tambah UFW rule |
| `firewall.remove_rule` | `{ rule_id }` | Hapus UFW rule |
| `git.deploy` | `{ web_app_id, commit, script }` | Jalankan git deployment |
| `mysql.create_db` | `{ name, charset }` | Buat database MySQL |
| `mysql.create_user` | `{ username, password, database }` | Buat user MySQL |
| `cron.sync` | `{ cron_jobs[] }` | Sync cron jobs ke crontab |
| `agent.update` | `{ version, download_url, checksum }` | Self-update agent |
| `agent.info` | — | Return version, uptime, info |

---

## 8. Platform Application Structure

### 8.1 Backend (Laravel 13) — Struktur App

```
app/
├── Console/Commands/
│   ├── Agent/CheckAgentConnections.php
│   └── Server/CleanOldMetrics.php, CheckSslExpiry.php
│
├── Events/
│   ├── Server/   ServerProvisioned, ServerMetricsReceived, ServiceStatusChanged
│   └── Deployment/ DeploymentStarted, DeploymentCompleted, DeploymentFailed
│
├── Http/
│   ├── Controllers/
│   │   ├── Auth/
│   │   ├── Server/     ServerController, ServerProvisionController, ServerMetricController
│   │   ├── WebApp/     WebAppController, SslController, EnvController
│   │   ├── Database/   DatabaseController
│   │   ├── Deployment/ DeploymentController, WebhookController
│   │   ├── Firewall/   FirewallRuleController
│   │   ├── CronJob/    CronJobController
│   │   └── Agent/      AgentRegisterController, AgentCommandController, AgentMetricController
│   └── Middleware/
│       ├── AgentAuthenticate.php     ← HMAC verification
│       ├── EnsureOrganization.php
│       └── CheckServerOwnership.php
│
├── Jobs/
│   ├── Server/     ProvisionServer, InstallLemp, CheckServerUptime
│   ├── WebApp/     CreateWebApp, IssueSslCertificate
│   ├── Deployment/ RunDeployment
│   └── Backup/     RunBackup
│
├── Models/          (15+ Eloquent models sesuai ERD)
│
├── Services/
│   ├── Agent/       AgentCommandService, AgentAuthService, AgentMetricService
│   ├── Provisioning/ ProvisioningScriptService
│   ├── Ssl/          SslService
│   ├── Git/          GitProviderService
│   └── Billing/      MidtransService
│
└── WebSockets/
    ├── Channels/    ServerChannel (private per server), DeploymentChannel
    └── Handlers/    AgentConnectHandler, AgentMetricsHandler, AgentCommandResponseHandler
```

### 8.2 API Routes Lengkap

#### Agent API (`/api/agent/*`) — Diakses Agent, bukan Browser

| Method | Endpoint | Fungsi |
|---|---|---|
| POST | `/api/agent/register` | Agent register pertama kali ke platform |
| POST | `/api/agent/heartbeat` | Periodic ping / keepalive |
| POST | `/api/agent/metrics` | Push metrics batch dari agent |
| POST | `/api/agent/command/response` | Kirim response setelah command dieksekusi |
| POST | `/api/agent/stream` | Kirim streaming output chunk |

#### Platform API (user-facing)

| Method | Endpoint | Fungsi |
|---|---|---|
| GET/POST | `/api/servers` | List & create server |
| DELETE | `/api/servers/{server}` | Hapus server |
| POST | `/api/servers/{server}/provision` | Trigger provisioning |
| GET | `/api/servers/{server}/metrics` | Current metrics |
| GET | `/api/servers/{server}/metrics/history` | Historical data |
| POST | `/api/servers/{server}/command` | Execute command via agent |
| GET/POST | `/api/servers/{server}/apps` | List & create web app |
| DELETE | `/api/servers/{server}/apps/{app}` | Hapus web app |
| POST | `/api/servers/{server}/apps/{app}/ssl` | Issue/renew SSL |

#### Webhook (Public, diverifikasi webhook secret masing-masing provider)

| Endpoint | Fungsi |
|---|---|
| POST `/webhooks/github/{app_id}` | Trigger deployment dari GitHub push event |
| POST `/webhooks/gitlab/{app_id}` | Trigger deployment dari GitLab push event |
| POST `/webhooks/bitbucket/{app_id}` | Trigger deployment dari Bitbucket push event |

---

## 9. Frontend Architecture

### 9.1 Tech Stack Frontend

| Teknologi | Versi | Peran |
|---|---|---|
| Vue 3 | 3.5+ | Component framework |
| Inertia.js | 2.x | SSR bridge (tanpa perlu REST API terpisah untuk UI) |
| Tailwind CSS | 4.x | Utility-first styling |
| Vite | 6.x | Build tool & HMR |
| Pinia | — | State management (server.ts, webApp.ts, notification.ts) |
| Laravel Echo | — | WebSocket client (subscribe ke Laravel Reverb) |

### 9.2 Struktur Halaman (Pages)

| Grup | Halaman |
|---|---|
| Auth | Login, Register, TwoFactor |
| Onboarding | AddFirstServer (multi-step wizard) |
| Dashboard | Overview semua server |
| Server | List, Create wizard, Show, Monitoring (real-time), Provisioning (live log), Settings |
| WebApp | Index, Create, Show, SSL, Env editor, Git config, Deployment (live log), Settings |
| Database | Index, Create |
| Firewall | Index |
| CronJob | Index |
| Backup | Index |
| Settings | Profile, Organization, Team, Billing, ApiKeys |

### 9.3 Komponen UI Penting

| Komponen | Fungsi |
|---|---|
| `MetricsChart.vue` | Grafik real-time CPU/RAM/Disk (update tiap 5 detik via WebSocket) |
| `ServiceStatus.vue` | Badge status service (running/stopped/error/unknown) |
| `ProvisioningLog.vue` | SSE streaming log saat server sedang provisioning |
| `DeploymentLog.vue` | Live streaming output tiap baris saat deployment berjalan |
| `EnvEditor.vue` | Key-value editor untuk file `.env` per app |
| `TerminalOutput.vue` | Styled pre block untuk output terminal |
| `CronExpressionBuilder.vue` | Wizard builder untuk cron expression (tanpa harus hafal sintaks) |
| `ServerCard.vue` | Card di dashboard dengan status ringkas server |

### 9.4 Composables (Vue Hooks)

| Composable | Fungsi |
|---|---|
| `useServerMetrics.ts` | Subscribe WebSocket channel `private-server.{id}`, update metrics state real-time |
| `useDeploymentStream.ts` | Subscribe SSE stream untuk real-time deployment log |
| `useClipboard.ts` | Copy-to-clipboard helper (untuk install script, API key, dll) |
| `useConfirm.ts` | Reusable confirmation dialog (sebelum aksi destruktif) |

---

## 10. Real-Time Communication

### 10.1 Dua Jalur Komunikasi Real-Time

**Jalur 1: Browser ↔ Platform** (via Laravel Echo + Reverb)
- User browser subscribe ke private WebSocket channel
- Platform broadcast event ke browser saat ada update metrics, command response, deployment status

**Jalur 2: Platform ↔ Agent** (via WebSocket bidirectional — ws library Node.js)
- Agent maintain persistent WebSocket connection ke platform
- Platform kirim command → Agent execute → reply response
- Agent push metrics secara periodik → Platform broadcast ke browser

### 10.2 Flow Komunikasi Lengkap

```
Browser ────subscribe────► private-server.{id}   (Reverb)
Agent   ────connect───────► agent.{server_id}    (Reverb internal)

METRICS FLOW (tiap 5 detik):
Agent ──push MetricsPayload──► Platform ──broadcast MetricsReceived──► Browser

COMMAND FLOW (mis. Restart Nginx):
Browser ──HTTP request──► Platform
Platform ──CommandPayload──► Agent (via WebSocket)
Agent ──jalankan perintah──► systemctl restart nginx
Agent ──CommandResponse──► Platform
Platform ──broadcast CommandCompleted──► Browser

DEPLOYMENT FLOW (mis. Git Push):
GitHub ──push event──► Platform (webhook endpoint)
Platform ──enqueue RunDeployment──► Queue (Redis)
Queue worker ──dispatch git.deploy command──► Agent
Agent ──stream output per baris (StreamPayload)──► Platform
Platform ──broadcast DeploymentLog stream──► Browser
Agent ──stream is_final: true──► Platform
Platform ──broadcast DeploymentCompleted──► Browser
```

### 10.3 Format Payload Kunci

**Metrics (Agent → Platform):**
```typescript
interface MetricsPayload {
  type: 'metrics';
  server_id: string;
  timestamp: number;
  signature: string;      // HMAC-SHA256 untuk autentikasi
  data: {
    cpu: { usage, cores, load: [1m, 5m, 15m] };
    memory: { used, total, swap_used, swap_total };
    disk: { partitions: [{ mount, used, total, filesystem }] };
    network: { interfaces: [{ name, bytes_in, bytes_out, ... }] };
    services: [{ name, status, pid }];
    uptime: number;
  };
}
```

**Command (Platform → Agent):**
```typescript
interface CommandPayload {
  type: 'command';
  command_id: string;
  action: CommandAction;
  params: Record<string, unknown>;
  signature: string;
  issued_at: number;    // Agent TOLAK jika > 30 detik lalu (anti-replay)
}
```

**Streaming Output (Agent → Platform):**
```typescript
interface StreamPayload {
  type: 'stream';
  command_id: string;
  chunk: string;        // satu baris output
  seq: number;          // sequence number (untuk ordering)
  is_final: boolean;    // true = stream selesai
}
```

---

## 11. Keamanan (Security Model)

Platform mengimplementasikan **5 lapisan keamanan berlapis**:

### Layer 1 — Transport Security
- Semua komunikasi via **HTTPS/WSS (TLS 1.3 minimum)**
- **Certificate pinning** di agent (hash certificate platform di-hardcode di binary)
- Cloudflare WAF sebagai garis pertahanan pertama

### Layer 2 — Request Authentication
- Setiap request/command ditandatangani dengan **HMAC-SHA256**
- `Signature = HMAC(payload_hash + timestamp, agent_token)`
- Agent **tolak command jika timestamp > 30 detik** (proteksi replay attack)
- Platform verifikasi signature di middleware `AgentAuthenticate`

### Layer 3 — Token Management
- `agent_token`: 64-char random hex, disimpan **terenkripsi AES-256** di DB
- **Auto-rotate setiap 30 hari** — platform kirim token baru ke agent
- Token revocation langsung efektif (agent akan disconnect)

### Layer 4 — Command Authorization
- Platform hanya kirim command yang telah diauthorize oleh user yang login
- Agent punya **whitelist command** yang boleh dieksekusi
- `shell.exec` dibatasi: tidak bisa jalankan `rm -rf /`, tidak bisa akses path di luar `/var/www` & `/opt`

### Layer 5 — Privilege Isolation
- Agent berjalan sebagai user **`serverpanel` (non-root)**
- Gunakan `sudo` hanya untuk operasi yang benar-benar perlu
- `/etc/sudoers.d/serverpanel` dikonfigurasi untuk **hanya command yang diizinkan**

### Enkripsi Data Sensitif di Database

| Data | Enkripsi |
|---|---|
| `agent_token` | AES-256 via Laravel `encrypted` cast |
| SSH private key user | AES-256 |
| `.env` values (`environment_vars.value`) | AES-256 |
| Database user passwords | AES-256 |
| Git deploy key private | AES-256 |

### Keamanan Platform Lainnya
- Rate limiting semua API endpoint
- CSP headers, HSTS, X-Frame-Options pada dashboard
- Input sanitasi & SQL injection prevention (Laravel ORM)
- Audit log semua aksi sensitif di `activity_logs`
- Webhook signature verification (dari GitHub/GitLab/Bitbucket)

---

## 12. Queue & Background Jobs

Platform menggunakan **Laravel Horizon** dengan **Redis** sebagai backend queue, terbagi menjadi 4 queue dengan prioritas berbeda:

### Queue Configuration

| Queue | Prioritas | Job | Timeout | Tries |
|---|---|---|---|---|
| `default` | Normal | ProvisionServer | 600s | 1 |
| `default` | Normal | InstallLemp | 600s | 1 |
| `default` | Normal | CreateWebApp | 120s | 2 |
| `default` | Normal | IssueSslCertificate | 120s | 3 |
| `deployments` | **Tinggi** | RunDeployment | 300s | 1 |
| `monitoring` | Normal | CheckServerUptime | — | — |
| `monitoring` | Normal | CheckSslExpiry | — | — |
| `backups` | **Rendah** | RunBackup | 3600s | 2 |

### Scheduled Jobs (Laravel Scheduler via Cron)

| Job | Interval | Fungsi |
|---|---|---|
| `CheckServerUptime` | Tiap 1 menit | Ping server, catat downtime, kirim alert email |
| `CheckSslExpiry` | Tiap 6 jam | Cek SSL expiry, alert 14 hari sebelum expired |
| `CleanOldMetrics` | Periodik | Hapus data `server_metrics` yang sudah lama |
| `CheckAgentConnections` | Periodik | Cek agent yang sudah lama tidak heartbeat |

---

## 13. Infrastruktur & Deployment

### 13.1 Production Infrastructure (Contoh Setup)

```
[Cloudflare CDN + DDoS Protection + WAF]
                    │
   [Nginx / DO Load Balancer + SSL Termination]
                    │
        ┌───────────┴───────────┐
        │                       │
 [App Node 1]           [App Node 2]
  4 vCPU, 8GB RAM        4 vCPU, 8GB RAM
  Laravel 13 + Octane    Laravel 13 + Octane
  + Horizon (workers)    + Reverb (WebSocket)
        │
 [Managed MySQL 8.0 Primary + 1 Read Replica]
        │
 [Managed Redis (Cache + Queue + Session + Pub/Sub)]
        │
 [S3-Compatible Object Storage]
 (Backup files, Log archives, SSL cert archive)
```

### 13.2 Non-Functional Requirements (Target)

| Aspek | Target |
|---|---|
| Dashboard TTI (Time to Interactive) | < 2 detik |
| Real-time stats update interval | 5 detik |
| Provisioning LEMP stack | < 10 menit |
| API response time | < 500ms (p95) |
| Platform uptime SLA | 99.9% |
| Agent response time | < 200ms |
| Provisioning success rate | > 98% |
| Browser support | Chrome 120+, Firefox 120+, Safari 17+, Edge 120+ |
| Minimum VPS spec (agent) | 1 vCPU, 512MB RAM, 10GB disk |

### 13.3 Environment Config Penting

**Platform (`.env`):**
```ini
# Database
DB_CONNECTION=mysql, DB_HOST=127.0.0.1, DB_PORT=3306

# Queue & Cache
CACHE_DRIVER=redis, SESSION_DRIVER=redis, QUEUE_CONNECTION=redis

# WebSocket
REVERB_HOST=ws.serverpanel.id, REVERB_PORT=443, REVERB_SCHEME=https

# Storage
AWS_ENDPOINT=https://sgp1.digitaloceanspaces.com (S3-compatible)

# Payment
MIDTRANS_SERVER_KEY=..., MIDTRANS_IS_PRODUCTION=true

# Agent Security
AGENT_TOKEN_ROTATE_DAYS=30, AGENT_COMMAND_EXPIRE_SECONDS=30
```

**Agent (`.env`):**
```ini
SERVERPANEL_ENDPOINT=https://api.serverpanel.id
SERVERPANEL_SERVER_ID=<uuid>
SERVERPANEL_AGENT_TOKEN=<64-char-hex>
METRICS_INTERVAL=5000         # ms
HEARTBEAT_INTERVAL=30000      # ms
SHELL_EXEC_TIMEOUT=300        # detik
SHELL_EXEC_RESTRICTED_PATHS=/etc/shadow,/root/.ssh
```

---

## 14. Pricing & Monetisasi

### 14.1 Pricing Tiers

| Plan | Harga/bln | Server | Web Apps | Backup | Team |
|---|---|---|---|---|---|
| **Starter** | Rp 49.000 | 1 | 3 | Manual | 1 user |
| **Pro** | Rp 149.000 | 5 | Unlimited | Otomatis harian | 3 users |
| **Business** | Rp 399.000 | 20 | Unlimited | Otomatis + S3 | 10 users |
| **Enterprise** | Custom | Unlimited | Unlimited | Custom | Unlimited |

### 14.2 Strategi Akuisisi & Retensi

- **14 hari trial gratis** (tanpa credit card) → menurunkan barrier masuk
- **Diskon 20%** untuk pembayaran tahunan → mendorong komitmen jangka panjang
- **Beta gratis 3 bulan** untuk early waitlist → komunitas & feedback awal
- **Affiliate program** → developer yang refer teman mendapat komisi
- Support < 4 jam WIB → retensi via layanan, bukan hanya fitur

### 14.3 Payment Methods (via Midtrans)

- Transfer bank (BCA, Mandiri, BRI, BNI)
- QRIS
- GoPay, OVO, DANA, ShopeePay
- Virtual Account
- Kartu kredit (Visa / Mastercard)

### 14.4 Launch Plan

| Fase | Periode | Aktivitas Utama |
|---|---|---|
| Pre-launch | Bulan 1–2 | Landing page + waitlist, community seeding (Telegram dev ID, IndoHackers, FB Groups), beta testing 20 developer |
| Soft Launch | Bulan 3–4 | Beta akses gratis 3 bulan early adopter, weekly user interview, bug fixing |
| Public Launch | Bulan 5 | Product Hunt launch, press release (Dailysocial, Tekno Liputan6), konten tutorial, affiliate program |

---

## 15. KPIs & Metrik Sukses

### Product Metrics

| Metric | Target M6 | Target M12 |
|---|---|---|
| MAU (Monthly Active Users) | 1.500 | 5.000 |
| Paying users | 500 | 2.000 |
| MRR | Rp 50 juta | Rp 150 juta |
| Churn rate | < 8% | < 5% |
| NPS | ≥ 40 | ≥ 55 |

### Goals Bisnis (12 bulan pertama)

- **G1:** 500 paying users di bulan ke-6
- **G2:** 2.000 paying users di bulan ke-12
- **G3:** NPS ≥ 50
- **G4:** Churn rate < 5%/bulan
- **G5:** MRR Rp 100.000.000 di akhir tahun pertama

### Technical Metrics

| Metric | Target |
|---|---|
| Provisioning success rate | > 98% |
| Platform uptime | > 99.9% |
| Agent response time | < 200ms |
| Support ticket resolution | < 4 jam (jam kerja WIB) |

---

## 16. Risiko & Mitigasi

| Risiko | Probabilitas | Dampak | Mitigasi |
|---|---|---|---|
| Provisioning gagal di OS edge case | Medium | High | Test matrix CI/CD, graceful rollback, idempotent scripts |
| Security breach (SSH key / token leak) | Low | Critical | AES-256 encryption, audit reguler, bug bounty program |
| Kompetitor global turunkan harga | Medium | Medium | Fokus fitur lokal, support WIB, payment lokal |
| Skalabilitas platform saat user besar | Low | High | Load test dari awal, auto-scaling infra |
| Churn tinggi karena migrasi ribet | Medium | High | Data export & migration tools, dokumentasi baik |

---

## 17. Hal yang Belum Dicakup (Out of Scope v1.0)

- ❌ Mobile app native (Android / iOS)
- ❌ Managed DNS (kelola DNS record)
- ❌ Email server management (Postfix, Dovecot)
- ❌ Container / Docker management
- ❌ Kubernetes support
- ❌ Windows Server support
- ❌ Dedicated server & shared hosting (hanya VPS Linux)

---

## 18. Ringkasan Insight & Catatan Analisis

### ✅ Kekuatan Rancangan

**1. Diferensiasi lokal yang sangat jelas**  
Harga 3x lebih murah dari kompetitor global, payment lokal (QRIS, GoPay, dll), UI Bahasa Indonesia, dan support via WhatsApp adalah proposisi nilai yang sangat relevan untuk pasar Indonesia. Ini bukan sekadar "copy RunCloud" — ada genuine local-first thinking.

**2. Arsitektur yang matang & tidak over-engineered**  
Stack yang dipilih (Laravel 13 + Octane, Vue 3 + Inertia, Reverb, Horizon) adalah kombinasi modern yang battle-tested. Pilihan Inertia.js tepat untuk tim yang lebih familiar dengan Laravel tanpa harus membangun REST API terpisah untuk UI.

**3. Agent-based model adalah keputusan desain yang sangat tepat**  
Dengan Agent di VPS user, platform tidak perlu menyimpan atau menggunakan SSH credential secara aktif di setiap operasi. Ini jauh lebih aman, lebih scalable (agent yang aktif vs platform yang polling), dan lebih reliable (agent bisa buffer command saat koneksi terputus).

**4. Security berlapis & komprehensif**  
5 layer security dengan HMAC request signing, AES-256 untuk semua data sensitif, privilege isolation, command whitelist, dan anti-replay protection (30-detik timestamp window) menunjukkan security awareness yang matang.

**5. Real-time UX yang solid**  
Kombinasi WebSocket bidirectional (Agent ↔ Platform) + Echo/Reverb (Platform ↔ Browser) + streaming output untuk provisioning dan deployment memberikan pengalaman yang terasa "live" dan responsif — ini adalah UX differentiator yang signifikan.

**6. ERD yang terstruktur dengan baik**  
Penggunaan Organizations sebagai unit billing (bukan user) adalah keputusan yang tepat untuk mendukung use case tim/agency dan memudahkan fitur Team Collaboration di Phase 3. Multi-tenancy sudah dipikirkan dari awal.

---

### ⚠️ Hal Penting yang Perlu Diperhatikan saat Implementasi

**1. Agent Reconnection & State Management**  
Jika WebSocket agent terputus di tengah operasi (provisioning, deployment), perlu mekanisme resume yang jelas. Command yang sedang berjalan tidak boleh hilang. Disarankan: simpan state command aktif di Redis/DB, agent sync ulang saat reconnect.

**2. Idempotent Provisioning Scripts**  
Script bash untuk provisioning LEMP harus idempotent — bisa dijalankan ulang tanpa efek samping jika gagal di tengah jalan. Ini krusial karena provisioning bisa gagal di step ke-7 dari 20, dan user harus bisa retry dengan aman.

**3. server_metrics Table Growth**  
Dengan 1 record per 5 detik per server: 1.000 server × 12 record/menit × 60 × 24 = **~17 juta record/hari**. Dalam setahun bisa mencapai 6 miliar+ record. Perlu strategi sejak awal:
- Gunakan TTL / scheduled cleanup (sudah ada `CleanOldMetrics` job)
- Pertimbangkan tabel partisi by bulan
- Untuk historis jangka panjang (Phase 3), pertimbangkan time-series DB (TimescaleDB / InfluxDB)

**4. Enkripsi Kolom Sensitif — Konsistensi di Seluruh Model**  
Banyak kolom yang harus dienkripsi (agent_token, SSH key, .env values, DB passwords, deploy keys). Pastikan semua Model menggunakan `protected $casts = ['field' => 'encrypted']` secara konsisten dan tidak ada yang terlewat.

**5. Rate Limiting Agent API**  
Endpoint `/api/agent/metrics` akan menerima push dari ribuan agent setiap 5 detik secara bersamaan. Perlu ditest dengan load testing sebelum launch, dan pastikan Redis serta Reverb bisa handle concurrent connection tinggi.

**6. Webhook Signature Verification**  
Endpoint `/webhooks/github/{app_id}` harus memverifikasi signature dari GitHub (X-Hub-Signature-256), bukan hanya webhook_secret internal. Hal yang sama berlaku untuk GitLab dan Bitbucket — masing-masing punya format signature berbeda.

**7. Zero-Downtime Deployment Implementation**  
Fitur F08 menyebut "zero-downtime deployment via atomic deploy (symlink)". Ini perlu diimplementasikan dengan hati-hati: deploy ke folder baru → run post-deploy hooks → symlink swap → cleanup folder lama. Pastikan ada rollback yang reliable jika symlink swap gagal.

---

### 📌 Urutan Prioritas Development yang Disarankan

Berdasarkan dependency dan nilai bisnis:

```
Priority 1 (Fondasi — harus pertama):
  Auth + Organization model → fondasi semua fitur

Priority 2 (Core Value — bulan 1-2):
  Server + Agent connection model → tanpa ini tidak ada produk
  Agent Node.js (minimal: connect, metrics push, basic command)

Priority 3 (First "Wow" Moment — bulan 2-3):
  Provisioning flow + live log streaming → user pertama kali merasa "magic"

Priority 4 (Daily Driver — bulan 3-4):
  Web App management + SSL → ini yang dipakai user setiap hari
  Basic monitoring dashboard → retention driver

Priority 5 (Differentiator — paralel dengan Phase 2):
  Laravel-specific features (F09) → meskipun di Phase 2, bangun lebih awal
  karena ini adalah alasan utama user memilih ServerPanel vs RunCloud

Priority 6 (Growth — bulan 5-8):
  Git deployment, Database management, Cron manager, File manager

Priority 7 (Scale — bulan 9-12):
  Team collaboration, Advanced monitoring, Multi-server, Marketplace
```

---

*Dokumen ini merupakan hasil analisis menyeluruh dari PRD.md dan TECHNICAL_ARCHITECTURE.md ServerPanel versi 1.0.0.*  
*Disusun pada 30 Juni 2026. Bersifat living document — update seiring perkembangan produk.*
