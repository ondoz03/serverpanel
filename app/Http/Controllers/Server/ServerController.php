<?php

namespace App\Http\Controllers\Server;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ServerController extends Controller
{
    public function index()
    {
        $servers = [
            [
                'id' => '1a2b3c4d-1',
                'name' => 'Production-01',
                'ip_address' => '152.42.12.84',
                'hostname' => 'prod-01.serverpanel.id',
                'os' => 'ubuntu-22.04',
                'status' => 'active',
                'agent_version' => '1.0.0',
                'agent_last_seen' => now()->subSeconds(30)->toISOString(),
                'provider' => 'Vultr',
                'datacenter' => 'SGP1',
                'plan_name' => '1 vCPU, 2GB RAM',
                'cpu_usage' => 23,
                'memory_used' => 1073741824,
                'memory_total' => 2147483648,
                'disk_used' => 21474836480,
                'disk_total' => 53687091200,
                'services' => [
                    ['name' => 'nginx', 'status' => 'active', 'version' => '1.26'],
                    ['name' => 'mysql', 'status' => 'active', 'version' => '8.0'],
                    ['name' => 'php', 'status' => 'active', 'version' => '8.3'],
                    ['name' => 'redis', 'status' => 'active', 'version' => '7.4'],
                ],
                'uptime' => 345600,
            ],
            [
                'id' => '1a2b3c4d-2',
                'name' => 'Staging-01',
                'ip_address' => '152.42.13.12',
                'hostname' => 'staging-01.serverpanel.id',
                'os' => 'ubuntu-24.04',
                'status' => 'provisioning',
                'agent_version' => '1.0.0',
                'agent_last_seen' => now()->subMinutes(2)->toISOString(),
                'provider' => 'DigitalOcean',
                'datacenter' => 'SGP1',
                'plan_name' => '2 vCPU, 4GB RAM',
                'cpu_usage' => 45,
                'memory_used' => 2147483648,
                'memory_total' => 4294967296,
                'disk_used' => 10737418240,
                'disk_total' => 85899345920,
                'services' => [
                    ['name' => 'nginx', 'status' => 'active', 'version' => '1.26'],
                    ['name' => 'mysql', 'status' => 'active', 'version' => '8.0'],
                    ['name' => 'php', 'status' => 'active', 'version' => '8.4'],
                ],
                'uptime' => 86400,
            ],
            [
                'id' => '1a2b3c4d-3',
                'name' => 'Client-A-Backend',
                'ip_address' => '103.25.44.21',
                'hostname' => 'client-a.serverpanel.id',
                'os' => 'debian-12',
                'status' => 'error',
                'agent_version' => '0.9.5',
                'agent_last_seen' => now()->subHours(3)->toISOString(),
                'provider' => 'IDCloudHost',
                'datacenter' => 'JKTA',
                'plan_name' => '1 vCPU, 1GB RAM',
                'cpu_usage' => 92,
                'memory_used' => 943718400,
                'memory_total' => 1073741824,
                'disk_used' => 42949672960,
                'disk_total' => 53687091200,
                'services' => [
                    ['name' => 'nginx', 'status' => 'active', 'version' => '1.26'],
                    ['name' => 'mysql', 'status' => 'inactive', 'version' => '10.11'],
                    ['name' => 'php', 'status' => 'active', 'version' => '8.2'],
                ],
                'uptime' => 691200,
            ],
        ];

        return Inertia::render('servers/Index', [
            'servers' => $servers,
        ]);
    }

    public function show(string $id)
    {
        $server = [
            'id' => $id,
            'name' => 'Production-01',
            'ip_address' => '152.42.12.84',
            'hostname' => 'prod-01.serverpanel.id',
            'os' => 'ubuntu-22.04',
            'status' => 'active',
            'agent_version' => '1.0.0',
            'agent_last_seen' => now()->subSeconds(30)->toISOString(),
            'provider' => 'Vultr',
            'datacenter' => 'SGP1',
            'plan_name' => '1 vCPU, 2GB RAM',
            'cpu_usage' => 23,
            'memory_used' => 1073741824,
            'memory_total' => 2147483648,
            'disk_used' => 21474836480,
            'disk_total' => 53687091200,
            'services' => [
                ['name' => 'nginx', 'status' => 'active', 'version' => '1.26'],
                ['name' => 'mysql', 'status' => 'active', 'version' => '8.0'],
                ['name' => 'php', 'status' => 'active', 'version' => '8.3'],
                ['name' => 'redis', 'status' => 'active', 'version' => '7.4'],
            ],
            'uptime' => 345600,
            'web_apps_count' => 3,
            'databases_count' => 2,
            'firewall_rules_count' => 5,
            'cron_jobs_count' => 2,
        ];

        return Inertia::render('servers/Show', [
            'server' => $server,
        ]);
    }

    public function monitoring(string $id)
    {
        $server = [
            'id' => $id,
            'name' => 'Production-01',
            'ip_address' => '152.42.12.84',
            'hostname' => 'prod-01.serverpanel.id',
            'os' => 'ubuntu-22.04',
            'status' => 'active',
            'agent_version' => '1.0.0',
            'agent_last_seen' => now()->subSeconds(30)->toISOString(),
            'provider' => 'Vultr',
            'datacenter' => 'SGP1',
            'plan_name' => '1 vCPU, 2GB RAM',
            'cpu_usage' => 23,
            'memory_used' => 1073741824,
            'memory_total' => 2147483648,
            'disk_used' => 21474836480,
            'disk_total' => 53687091200,
            'services' => [
                ['name' => 'nginx', 'status' => 'active', 'version' => '1.26'],
                ['name' => 'mysql', 'status' => 'active', 'version' => '8.0'],
                ['name' => 'php', 'status' => 'active', 'version' => '8.3'],
                ['name' => 'redis', 'status' => 'active', 'version' => '7.4'],
            ],
            'uptime' => 345600,
        ];

        return Inertia::render('servers/Monitoring', [
            'server' => $server,
        ]);
    }

    public function provisioning(string $id)
    {
        $server = [
            'id' => $id,
            'name' => 'Staging-01',
            'ip_address' => '152.42.13.12',
            'hostname' => 'staging-01.serverpanel.id',
            'os' => 'ubuntu-24.04',
            'status' => 'provisioning',
            'agent_version' => '1.0.0',
            'agent_last_seen' => now()->toISOString(),
            'provider' => 'DigitalOcean',
            'datacenter' => 'SGP1',
            'plan_name' => '2 vCPU, 4GB RAM',
            'cpu_usage' => 45,
            'memory_used' => 2147483648,
            'memory_total' => 4294967296,
            'disk_used' => 10737418240,
            'disk_total' => 85899345920,
            'services' => [],
            'uptime' => 3600,
        ];

        return Inertia::render('servers/Provisioning', [
            'server' => $server,
        ]);
    }

    public function settings(string $id)
    {
        $server = [
            'id' => $id,
            'name' => 'Production-01',
            'ip_address' => '152.42.12.84',
            'hostname' => 'prod-01.serverpanel.id',
            'os' => 'ubuntu-22.04',
            'status' => 'active',
            'agent_version' => '1.0.0',
            'agent_last_seen' => now()->subSeconds(30)->toISOString(),
            'provider' => 'Vultr',
            'datacenter' => 'SGP1',
            'plan_name' => '1 vCPU, 2GB RAM',
            'cpu_usage' => 23,
            'memory_used' => 1073741824,
            'memory_total' => 2147483648,
            'disk_used' => 21474836480,
            'disk_total' => 53687091200,
            'services' => [
                ['name' => 'nginx', 'status' => 'active', 'version' => '1.26'],
                ['name' => 'mysql', 'status' => 'active', 'version' => '8.0'],
                ['name' => 'php', 'status' => 'active', 'version' => '8.3'],
                ['name' => 'redis', 'status' => 'active', 'version' => '7.4'],
            ],
            'uptime' => 345600,
        ];

        return Inertia::render('servers/Settings', [
            'server' => $server,
        ]);
    }
}
