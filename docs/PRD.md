# Product Requirements Document (PRD)
## ServerPanel — Indonesian Cloud Server Management Platform

**Version:** 1.0.0  
**Date:** June 2026  
**Status:** Draft  
**Stack:** Laravel 13 · Vue 3 · Inertia.js · Node 24 · Tauri v2 (optional desktop)

---

## 1. Executive Summary

ServerPanel adalah platform manajemen server berbasis web yang memungkinkan developer, freelancer, dan bisnis Indonesia untuk melakukan konfigurasi, provisioning, dan monitoring VPS mereka melalui dashboard yang intuitif — tanpa perlu keahlian sysadmin mendalam.

Diferensiasi utama dari RunCloud (kompetitor global):
- **Indonesia-first**: UI Bahasa Indonesia, support via WhatsApp, payment via Midtrans/QRIS
- **Laravel-optimized**: One-click Laravel stack, artisan runner, queue manager terintegrasi
- **Harga terjangkau**: Mulai Rp 49.000/bulan vs RunCloud $8/bulan (~Rp 128.000)
- **Lokal support**: Response time support < 4 jam pada jam kerja WIB

---

## 2. Problem Statement

### 2.1 Pain Points Developer Indonesia

| Pain Point | Deskripsi |
|---|---|
| **Konfigurasi manual ribet** | Setup LEMP stack, SSL, Nginx config butuh waktu 2-4 jam untuk yang belum terbiasa |
| **Harga tools global mahal** | RunCloud, Ploi, SpinupWP mahal dalam USD, tidak ada opsi pembayaran lokal |
| **Bahasa & support** | Dokumentasi dan support hanya dalam English |
| **Tidak ada optimasi Laravel** | Tools global bersifat generic, tidak ada fitur khusus ekosistem Laravel |
| **Monitoring terbatas** | VPS murah tidak include monitoring — harus setup sendiri |

### 2.2 Opportunity

- ~850.000+ developer aktif di Indonesia (data 2025)
- Pertumbuhan adopsi VPS di Indonesia 34% YoY (DigitalOcean, Vultr, IDCloudHost populer)
- Belum ada pemain lokal yang fokus di server management panel

---

## 3. Product Vision & Goals

### Vision
> "Setiap developer Indonesia bisa deploy dan manage server production-ready dalam waktu 5 menit, tanpa perlu jadi sysadmin."

### Goals (12 bulan pertama)
- **G1**: 500 paying users di bulan ke-6
- **G2**: 2.000 paying users di bulan ke-12
- **G3**: NPS score ≥ 50
- **G4**: Churn rate < 5% per bulan
- **G5**: MRR Rp 100.000.000 di akhir tahun pertama

---

## 4. Target Users

### 4.1 Primary Persona: "Rizki" — Laravel Freelancer

- **Usia**: 22–30 tahun
- **Profil**: Freelancer/solo dev, mengerjakan 3–8 project klien sekaligus
- **Tech**: Familiar Laravel, Vue, tapi tidak expert di Linux/sysadmin
- **Pain**: Tiap project baru harus setup server dari scratch, makan waktu
- **Budget**: Rp 50.000–200.000/bulan untuk tools
- **Goal**: Deploy cepat, tidak mau pusing soal server

### 4.2 Secondary Persona: "Budi" — Agency Technical Lead

- **Usia**: 28–38 tahun
- **Profil**: Manage tim 5–15 developer di agency digital
- **Pain**: Konsistensi konfigurasi antar server, onboarding developer junior ke server
- **Budget**: Rp 500.000–2.000.000/bulan untuk tim
- **Goal**: Standarisasi deployment, kontrol akses tim

### 4.3 Tertiary Persona: "Pak Hendra" — UMKM Tech Owner

- **Profil**: Punya bisnis, hire developer kontrak, perlu website di VPS sendiri
- **Pain**: Developer sebelumnya yang setup, sekarang tidak ada yang bisa maintain
- **Goal**: Dashboard yang bisa dipahami, tidak perlu technical

---

## 5. Scope & Features

### 5.1 MVP — Phase 1 (Bulan 1–4)

#### F01 — User Authentication & Onboarding
- Register / Login (email + password)
- Verifikasi email
- Onboarding wizard (tambah server pertama)
- 2FA via Google Authenticator
- OAuth: GitHub, Google

#### F02 — Server Connection & Provisioning
- Input server IP, SSH port, SSH key/password
- Auto-detect OS (Ubuntu 20.04, 22.04, 24.04 / Debian 11, 12)
- Install ServerPanel Agent via one-liner script
- Provisioning LEMP stack otomatis:
  - Nginx (latest stable)
  - PHP 8.2 / 8.3 / 8.4 (multi-version)
  - MySQL 8.0 / MariaDB 10.11
  - Redis 7 (opsional, fallback file/sync untuk dev)
  - Composer 2
  - Node.js 20/22/24 (via nvm)
- Status provisioning real-time via SSE/WebSocket
- Provisioning log viewer

#### F03 — Web Application Management
- Tambah Web Application (domain/subdomain)
- Pilih PHP version per app
- Pilih web server config: Nginx / Nginx + Apache2 (reverse proxy)
- Document root configuration
- Environment type: Production / Staging / Development
- Basic Nginx config editor (dengan validasi)
- App isolation (setiap app jalan sebagai user Linux terpisah)

#### F04 — SSL/TLS Management
- One-click Let's Encrypt SSL (via certbot)
- Auto-renewal SSL (cron certbot)
- Custom SSL (upload certificate + private key)
- Wildcard SSL support
- Force HTTPS redirect toggle
- SSL expiry monitoring & alert

#### F05 — Firewall Management
- Default rule: hanya buka port 22, 80, 443, dan port agent
- UI untuk tambah/hapus custom rule (port, protocol, IP whitelist)
- IPv4 & IPv6 support
- Fail2Ban integration (SSH brute force protection)
- IP banning manual dari dashboard

#### F06 — Dashboard & Monitoring (Basic)
- Server overview: CPU, RAM, Disk, Network (real-time)
- Uptime monitoring (ping setiap 1 menit)
- Downtime alert via email
- Service status (Nginx, MySQL, PHP-FPM, Redis)
- Restart service dari dashboard

---

### 5.2 Phase 2 (Bulan 5–8)

#### F07 — Database Management
- Create/drop database
- Create/drop database user + assign privileges
- phpMyAdmin integration (per app, isolated)
- Database backup manual & terjadwal
- Backup ke storage: Local / S3-compatible (IDCloudHost Object Storage, Wasabi)
- Restore backup dari dashboard

#### F08 — Git Deployment
- Connect Git provider: GitHub, GitLab, Bitbucket
- Deploy via push-to-deploy (webhook)
- Deploy hook URL (manual trigger atau dari CI/CD eksternal)
- Branch selection per environment
- Deployment script (composer install, npm build, artisan migrate, dll)
- Deployment history & rollback ke commit sebelumnya
- Zero-downtime deployment (atomic deploy via symlink)

#### F09 — Laravel-Specific Features ⭐ (differentiator)
- Artisan command runner (jalankan artisan dari dashboard)
- Queue worker management (start/stop/restart, jumlah worker)
- Laravel Horizon integration (jika terinstall)
- Laravel Scheduler toggle
- `.env` editor per app (dengan enkripsi di database)
- Cache clear (config, route, view, application)
- Storage link manager
- Laravel version detector

#### F10 — Cron Job Manager
- Tambah/edit/hapus cron job via UI
- Cron expression builder (wizard)
- Cron job log (output, exit code)
- Alert jika cron gagal

#### F11 — File Manager (Basic)
- Browse file system per app directory
- Upload/download file
- Edit file teks (editor sederhana)
- Set permission (chmod)
- Tidak expose root filesystem

---

### 5.3 Phase 3 (Bulan 9–12)

#### F12 — Team & Collaboration
- Invite anggota tim via email
- Role: Owner, Admin, Developer, Viewer
- Custom permission per server atau per app
- Activity log (siapa, melakukan apa, kapan)
- API key per user

#### F13 — Advanced Monitoring
- Grafik historis: CPU, RAM, Disk, Network (7 hari, 30 hari)
- Alert custom (CPU > 80%, Disk > 90%, dll)
- Notifikasi: Email, WhatsApp (via WA Business API), Telegram Bot
- Slow query log viewer (MySQL)
- PHP error log viewer

#### F14 — Multi-Server Management
- Dashboard overview semua server
- Bulk action (restart service di multiple server)
- Server grouping / labeling
- Server transfer antar akun

#### F15 — Marketplace & One-Click Apps
- WordPress
- Laravel (fresh install + konfigurasi otomatis)
- Node.js app (PM2 managed)
- Mautic
- n8n (self-hosted automation)

---

## 6. Non-Functional Requirements

### 6.1 Performance
- Dashboard load time < 2 detik (TTI)
- Real-time stats update setiap 5 detik
- Provisioning LEMP stack selesai dalam < 10 menit
- API response time < 500ms (p95)
- Uptime SLA platform: 99.9%

### 6.2 Security
- Semua komunikasi agent↔platform via HTTPS + HMAC signature
- SSH key disimpan terenkripsi di database (AES-256)
- Agent token auto-rotate setiap 30 hari
- Rate limiting semua API endpoint
- CSP headers, HSTS, X-Frame-Options pada dashboard
- Input sanitasi & SQL injection prevention (Laravel ORM)
- Audit log semua aksi sensitif

### 6.3 Scalability
- Platform menggunakan queue (Laravel Horizon) untuk semua background job
- Horizontal scaling platform sendiri via load balancer
- Database connection pooling (PgBouncer/ProxySQL)
- CDN untuk static assets

### 6.4 Compatibility
- OS yang didukung agent: Ubuntu 20.04, 22.04, 24.04 / Debian 11, 12
- Browser: Chrome 120+, Firefox 120+, Safari 17+, Edge 120+
- Minimal server spec untuk install agent: 1 vCPU, 512MB RAM, 10GB disk

---

## 7. User Journeys

### 7.1 Journey: Onboarding Server Baru

```
1. User register & verifikasi email
2. Dashboard kosong → CTA "Tambah Server Pertama"
3. User input: Server IP, SSH port, pilih auth method (password/key)
4. Platform generate one-liner install script
5. User jalankan script di server (copy-paste ke terminal)
6. Agent install & connect ke platform (real-time progress di dashboard)
7. Platform auto-detect OS & verifikasi koneksi
8. User pilih: Install LEMP Stack atau Custom
9. Provisioning berjalan (real-time log via SSE)
10. Selesai → Server aktif di dashboard
```

### 7.2 Journey: Deploy Aplikasi Laravel Baru

```
1. Masuk ke server → klik "Tambah Web Application"
2. Input domain, pilih PHP 8.3, pilih document root
3. Platform buat Nginx config + PHP-FPM pool untuk app
4. Klik "Enable SSL" → Let's Encrypt auto-issued
5. Masuk ke tab "Git Deployment" → connect GitHub repo
6. Set branch (main), set deploy script
7. Push ke GitHub → webhook trigger deploy otomatis
8. Dashboard tampilkan deployment log real-time
9. App live ✓
```

### 7.3 Journey: Monitor & Restart Service

```
1. Dapat alert email "CPU usage tinggi di server X"
2. Login dashboard → lihat grafik CPU spike
3. Cek top process via integrated process viewer
4. Restart PHP-FPM dari dashboard
5. Monitor stabilisasi CPU dari grafik real-time
```

---

## 8. Pricing Strategy

### 8.1 Tier

| Plan | Harga | Server | Web Apps | Backup | Team |
|---|---|---|---|---|---|
| **Starter** | Rp 49.000/bln | 1 | 3 | Manual | 1 user |
| **Pro** | Rp 149.000/bln | 5 | Unlimited | Otomatis harian | 3 users |
| **Business** | Rp 399.000/bln | 20 | Unlimited | Otomatis + S3 | 10 users |
| **Enterprise** | Custom | Unlimited | Unlimited | Custom | Unlimited |

### 8.2 Trial & Freemium
- Trial 14 hari gratis (tanpa credit card)
- Setelah trial, downgrade ke Starter atau pilih plan
- Diskon 20% untuk pembayaran tahunan

### 8.3 Payment Methods (via Midtrans)
- Transfer bank (BCA, Mandiri, BRI, BNI)
- QRIS
- GoPay, OVO, DANA, ShopeePay
- Virtual Account
- Kartu kredit (Visa/Mastercard)

---

## 9. Success Metrics (KPIs)

### Product Metrics
| Metric | Target M6 | Target M12 |
|---|---|---|
| MAU | 1.500 | 5.000 |
| Paying users | 500 | 2.000 |
| MRR | Rp 50jt | Rp 150jt |
| Churn rate | < 8% | < 5% |
| NPS | ≥ 40 | ≥ 55 |

### Technical Metrics
| Metric | Target |
|---|---|
| Provisioning success rate | > 98% |
| Platform uptime | > 99.9% |
| Agent response time | < 200ms |
| Support ticket resolution | < 4 jam (jam kerja) |

---

## 10. Risks & Mitigations

| Risk | Probability | Impact | Mitigasi |
|---|---|---|---|
| Provisioning gagal di OS edge case | Medium | High | Test matrix CI/CD, graceful rollback |
| Security breach (SSH key leak) | Low | Critical | Enkripsi AES-256, audit reguler, bug bounty |
| Kompetitor global turunkan harga | Medium | Medium | Fokus pada fitur lokal & support |
| Skalabilitas platform saat user besar | Low | High | Load test dari awal, auto-scaling infra |
| Churn tinggi karena migrasi ribet | Medium | High | Data export & migration tools |

---

## 11. Out of Scope (v1.0)

- Mobile app native (Android/iOS)
- Managed DNS (kelola DNS record)
- Email server management (Postfix, Dovecot)
- Container/Docker management
- Kubernetes support
- Windows Server support
- Support selain VPS Linux (dedicated server, shared hosting)

---

## 12. Launch Plan

### Pre-launch (Bulan 1–2)
- Landing page dengan waitlist
- Community seeding: grup Telegram developer Indonesia, IndoHackers, Facebook Groups
- Beta testing dengan 20 developer terpilih

### Soft Launch (Bulan 3–4)
- Beta akses gratis 3 bulan untuk early waitlist
- Feedback loop intensif (weekly interview dengan user)
- Bug fixing & stabilisasi

### Public Launch (Bulan 5)
- Product Hunt launch
- Press release ke tech media Indonesia (Dailysocial, Tekno Liputan6, IDN Times Tech)
- Konten edukasi: Tutorial setup Laravel di VPS dengan ServerPanel
- Affiliate program untuk developer yang refer teman

---

*Dokumen ini bersifat living document dan akan diupdate seiring perkembangan produk.*
