<?php

namespace App\Http\Controllers\WebApp;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class WebAppController extends Controller
{
    public function index()
    {
        $apps = [
            [
                'id' => 'app-1', 'server_id' => 'srv-1', 'name' => 'Company Website',
                'domain' => 'company.com', 'aliases' => ['www.company.com'],
                'document_root' => '/var/www/company.com/public', 'php_version' => '8.3',
                'web_server' => 'nginx', 'environment' => 'production', 'stack' => 'laravel',
                'status' => 'active', 'system_user' => 'company',
                'ssl' => ['id' => 'ssl-1', 'domain' => 'company.com', 'type' => 'letsencrypt', 'issuer' => "Let's Encrypt", 'expires_at' => now()->addDays(60)->toDateString(), 'status' => 'active', 'wildcard' => true, 'auto_renew' => true],
                'git' => ['id' => 'git-1', 'provider' => 'github', 'repo_url' => 'github.com/company/website', 'branch' => 'main', 'auto_deploy' => true],
            ],
            [
                'id' => 'app-2', 'server_id' => 'srv-1', 'name' => 'API Backend',
                'domain' => 'api.company.com', 'aliases' => [],
                'document_root' => '/var/www/api/public', 'php_version' => '8.4',
                'web_server' => 'nginx', 'environment' => 'production', 'stack' => 'laravel',
                'status' => 'active', 'system_user' => 'api',
                'ssl' => ['id' => 'ssl-2', 'domain' => 'api.company.com', 'type' => 'letsencrypt', 'issuer' => "Let's Encrypt", 'expires_at' => now()->addDays(45)->toDateString(), 'status' => 'active', 'wildcard' => false, 'auto_renew' => true],
                'git' => ['id' => 'git-2', 'provider' => 'gitlab', 'repo_url' => 'gitlab.com/company/api', 'branch' => 'develop', 'auto_deploy' => false],
            ],
            [
                'id' => 'app-3', 'server_id' => 'srv-2', 'name' => 'Client Blog',
                'domain' => 'blog.client.com', 'aliases' => [],
                'document_root' => '/var/www/blog', 'php_version' => '8.2',
                'web_server' => 'nginx_apache', 'environment' => 'staging', 'stack' => 'wordpress',
                'status' => 'error', 'system_user' => 'blog',
                'ssl' => ['id' => 'ssl-3', 'domain' => 'blog.client.com', 'type' => 'custom', 'issuer' => 'DigiCert', 'expires_at' => now()->subDays(10)->toDateString(), 'status' => 'expired', 'wildcard' => false, 'auto_renew' => false],
                'git' => null,
            ],
        ];

        return Inertia::render('webapps/Index', ['apps' => $apps]);
    }

    public function create()
    {
        return Inertia::render('webapps/Create');
    }

    public function show(string $id)
    {
        return Inertia::render('webapps/Show', [
            'app' => [
                'id' => $id, 'server_id' => 'srv-1', 'name' => 'Company Website',
                'domain' => 'company.com', 'aliases' => ['www.company.com'],
                'document_root' => '/var/www/company.com/public', 'php_version' => '8.3',
                'web_server' => 'nginx', 'environment' => 'production', 'stack' => 'laravel',
                'status' => 'active', 'system_user' => 'company',
                'ssl' => ['id' => 'ssl-1', 'domain' => 'company.com', 'type' => 'letsencrypt', 'issuer' => "Let's Encrypt", 'expires_at' => now()->addDays(60)->toDateString(), 'status' => 'active', 'wildcard' => true, 'auto_renew' => true],
                'git' => ['id' => 'git-1', 'provider' => 'github', 'repo_url' => 'github.com/company/website', 'branch' => 'main', 'auto_deploy' => true],
            ],
        ]);
    }

    public function ssl(string $id)
    {
        return Inertia::render('webapps/Ssl', [
            'certificates' => [
                ['id' => 'ssl-1', 'domain' => 'company.com', 'type' => 'letsencrypt', 'issuer' => "Let's Encrypt", 'expires_at' => now()->addDays(60)->toDateString(), 'status' => 'active', 'wildcard' => true, 'auto_renew' => true],
                ['id' => 'ssl-2', 'domain' => 'api.company.com', 'type' => 'letsencrypt', 'issuer' => "Let's Encrypt", 'expires_at' => now()->addDays(45)->toDateString(), 'status' => 'active', 'wildcard' => false, 'auto_renew' => true],
            ],
            'app' => ['id' => $id, 'name' => 'Company Website', 'domain' => 'company.com'],
        ]);
    }

    public function env(string $id)
    {
        return Inertia::render('webapps/Env', [
            'variables' => [
                ['key' => 'APP_ENV', 'value' => 'production', 'is_secret' => false],
                ['key' => 'APP_DEBUG', 'value' => 'false', 'is_secret' => false],
                ['key' => 'DB_HOST', 'value' => '127.0.0.1', 'is_secret' => false],
                ['key' => 'DB_DATABASE', 'value' => 'company_db', 'is_secret' => false],
                ['key' => 'DB_USERNAME', 'value' => 'company_user', 'is_secret' => true],
                ['key' => 'DB_PASSWORD', 'value' => '********', 'is_secret' => true],
                ['key' => 'REDIS_HOST', 'value' => '127.0.0.1', 'is_secret' => false],
                ['key' => 'AWS_ACCESS_KEY_ID', 'value' => 'AKIA****', 'is_secret' => true],
                ['key' => 'AWS_SECRET_ACCESS_KEY', 'value' => '********', 'is_secret' => true],
            ],
            'app' => ['id' => $id, 'name' => 'Company Website'],
        ]);
    }

    public function git(string $id)
    {
        return Inertia::render('webapps/Git', [
            'deployment' => [
                'id' => 'git-1', 'provider' => 'github', 'repo_url' => 'github.com/company/website',
                'branch' => 'main', 'auto_deploy' => true,
            ],
            'app' => ['id' => $id, 'name' => 'Company Website'],
            'recent_deployments' => [
                ['id' => 'dep-3', 'commit_hash' => '9f8e7d6', 'commit_message' => 'fix: resolve cache issue', 'branch' => 'main', 'status' => 'success', 'triggered_by' => 'push', 'started_at' => now()->subHours(2)->toISOString(), 'finished_at' => now()->subHours(2)->addMinutes(3)->toISOString(), 'duration_seconds' => 180],
                ['id' => 'dep-2', 'commit_hash' => '1a2b3c4', 'commit_message' => 'feat: add payment gateway', 'branch' => 'main', 'status' => 'success', 'triggered_by' => 'manual', 'started_at' => now()->subDay()->toISOString(), 'finished_at' => now()->subDay()->addMinutes(5)->toISOString(), 'duration_seconds' => 300],
                ['id' => 'dep-1', 'commit_hash' => '5e6f7a8', 'commit_message' => 'Initial deploy', 'branch' => 'main', 'status' => 'success', 'triggered_by' => 'push', 'started_at' => now()->subDays(5)->toISOString(), 'finished_at' => now()->subDays(5)->addMinutes(8)->toISOString(), 'duration_seconds' => 480],
            ],
        ]);
    }

    public function settings(string $id)
    {
        return Inertia::render('webapps/Settings', [
            'app' => [
                'id' => $id, 'name' => 'Company Website', 'domain' => 'company.com',
                'php_version' => '8.3', 'web_server' => 'nginx', 'document_root' => '/var/www/company.com/public',
                'system_user' => 'company', 'stack' => 'laravel', 'environment' => 'production',
            ],
        ]);
    }
}
