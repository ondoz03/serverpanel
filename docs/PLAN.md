# ServerPanel — Implementation Plan

**Stack:** Laravel 13 · Vue 3 · Inertia.js · Node.js 24 · MySQL 8.0
**Approach:** Frontend-first (bikin UI dulu dengan dummy data, kemudian backend)

---

## Phase 0: Foundation

- [x] **0.1** Install Laravel 13 + Vue Starter Kit (Inertia 3, Vue 3, shadcn-vue, Tailwind CSS v4)
- [x] **0.2** Setup database MySQL & konfigurasi `.env`
- [x] **0.3** Setup Redis (opsional, diganti file/sync untuk dev)
- [x] **0.4** Setup Vite, Tailwind CSS 4, konfirmasi dev server jalan

---

## Phase 1: Frontend — Auth & Layout ✅

- [x] **1.1** Auth Pages (Login, Register, Forgot Password, Reset Password, Email Verify, 2FA)
- [x] **1.2** App Layout (Sidebar, TopNav, Responsive shell)
- [x] **1.3** Dashboard Page (overview cards — dengan dummy data)
- [x] **1.4** Settings Pages (Profile, Security, Appearance)

---

## Phase 2: Frontend — Server Management (MVP)

- [x] **2.1** Server Index (list server dengan status cards)
- [x] **2.2** Server Create (add server wizard — form)
- [x] **2.3** Server Show (detail, quick actions, service status)
- [x] **2.4** Server Monitoring (real-time metrics charts)
- [x] **2.5** Server Provisioning (real-time log viewer, SSE stream UI)
- [x] **2.6** Server Settings

---

## Phase 3: Frontend — Web Apps & SSL ✅

- [x] **3.1** Web App Index / Create / Show / Settings
- [x] **3.2** SSL Management (Let's Encrypt, Custom SSL, status badges)
- [x] **3.3** Environment Variables Editor
- [x] **3.4** Git Deployment (connect repo, deploy button, history)
- [x] **3.5** Deployment Log (live streaming output with TerminalOutput component)

---

## Phase 4: Frontend — Database, Firewall, Cron, Backup ✅

- [x] **4.1** Database Index / Create
- [x] **4.2** Firewall Rules (list, add, delete rules)
- [x] **4.3** Cron Job Manager (list, add, expression builder)
- [x] **4.4** Backup Manager (list, trigger, restore)

---

## Phase 5: Frontend — Reusable Components ✅

- [x] **5.1** UI Components (StatusBadge, CopyButton, TerminalOutput, CronExpressionBuilder)
- [x] **5.2** Server Components (ServerCard, MetricsChart, ServiceStatus)
- [x] **5.3** WebApp Components (DeploymentLog, EnvEditor)
- [x] **5.4** Composables (useClipboard, useConfirm)
- [x] **5.5** Pinia Stores (server, webApp, notification)
- [x] **5.6** Missing shadcn-vue primitives (table, tabs, switch)

---

## Phase 6: Backend — Core Database & Auth

- [ ] **6.1** Migrations: plans, users, organizations, organization_users
- [ ] **6.2** Migrations: servers, server_services, server_metrics
- [ ] **6.3** Migrations: web_applications, ssl_certificates, environment_vars
- [ ] **6.4** Migrations: git_deployments, deployments
- [ ] **6.5** Migrations: databases, database_users, firewall_rules, cron_jobs, backups
- [ ] **6.6** Migrations: activity_logs, api_keys, subscriptions, payment_transactions
- [ ] **6.7** Eloquent Models + Relationships
- [ ] **6.8** Authentication Controllers (Register, Login, 2FA, OAuth)
- [ ] **6.9** Organization & Team logic (CRUD, roles, invitations)

---

## Phase 7: Backend — Server & Agent

- [ ] **7.1** ServerController (CRUD, connection test)
- [ ] **7.2** AgentRegisterController (token generation, one-liner script endpoint)
- [ ] **7.3** AgentCommandController (dispatch command to agent via WebSocket)
- [ ] **7.4** AgentMetricController (receive & store metrics)
- [ ] **7.5** ProvisionServer Job + LEMP installer
- [ ] **7.6** Agent HMAC Middleware + AuthService
- [ ] **7.7** Laravel Reverb WebSocket channels (server, deployment)
- [ ] **7.8** Agent Node.js app (WebSocket client, collectors, executors)

---

## Phase 8: Backend — Web Apps, SSL, Git Deploy

- [ ] **8.1** WebAppController (CRUD, Nginx config generation)
- [ ] **8.2** SslController + SslService (Let's Encrypt via certbot)
- [ ] **8.3** EnvController (encrypted env vars)
- [ ] **8.4** GitProviderService (GitHub/GitLab/Bitbucket API integration)
- [ ] **8.5** DeploymentController + RunDeployment Job
- [ ] **8.6** WebhookController (Git webhook receiver)

---

## Phase 9: Backend — Database, Firewall, Cron, Backup

- [ ] **9.1** DatabaseController + DatabaseUserController
- [ ] **9.2** FirewallRuleController (UFW rule management)
- [ ] **9.3** CronJobController
- [ ] **9.4** BackupController + RunBackup Job

---

## Phase 10: Backend — Monitoring & Notifications

- [ ] **10.1** ServerMetric historical aggregation (Laravel Scheduler)
- [ ] **10.2** Uptime checking (CheckServerUptime job)
- [ ] **10.3** SSL expiry check (CheckSslExpiry job)
- [ ] **10.4** Alert/Notification system (email, WhatsApp, Telegram)

---

## Phase 11: Backend — Billing & Marketplace

- [ ] **11.1** MidtransService (payment gateway integration)
- [ ] **11.2** SubscriptionController (plan management)
- [ ] **11.3** One-click app installer (WordPress, Laravel, n8n)

---

## Phase 12: Agent (Node.js / TypeScript)

- [ ] **12.1** Agent project scaffold (TypeScript, PM2, build setup)
- [ ] **12.2** WebSocket client (connect, reconnect, auth, heartbeat)
- [ ] **12.3** Metrics collectors (CPU, RAM, Disk, Network, Services)
- [ ] **12.4** Command executors (shell, nginx, php, mysql, ssl, git)
- [ ] **12.5** Provisioner (LEMP stack, webapp, firewall)
- [ ] **12.6** Security: HMAC signing, restricted shell exec, non-root user
- [ ] **12.7** Install one-liner script (`install.sh`)

---

_Legend: [ ] = pending, [x] = completed_
_Update dokumen ini setiap kali sebuah step selesai dikerjakan._
