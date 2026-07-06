<?php

namespace App\Services;

use App\Models\Server;
use App\Repositories\ServerRepository;
use Illuminate\Support\Collection;

class ServerService
{
    public function __construct(
        protected ServerRepository $serverRepository
    ) {}

    public function listServers($orgId): Collection
    {
        return $this->serverRepository->findByOrganization($orgId)
            ->map(fn(Server $server) => [
                'id' => $server->id,
                'name' => $server->name,
                'ip_address' => $server->ip_address,
                'hostname' => $server->hostname,
                'os' => $server->os,
                'status' => $server->status,
                'agent_version' => $server->agent_version,
                'agent_last_seen' => $server->agent_last_seen?->toISOString(),
                'provider' => $server->provider,
                'datacenter' => $server->datacenter,
                'plan_name' => $server->plan_name,
                'cpu_usage' => $server->cpu_usage,
                'memory_used' => $server->memory_used,
                'memory_total' => $server->memory_total,
                'disk_used' => $server->disk_used,
                'disk_total' => $server->disk_total,
                'services' => $server->services->map(fn($s) => [
                    'name' => $s->name,
                    'status' => $s->status,
                    'version' => $s->version,
                ]),
                'uptime' => $server->uptime,
            ]);
    }

    public function getServer(string $id): array
    {
        $server = $this->serverRepository->findWithServices($id);

        return [
            'id' => $server->id,
            'name' => $server->name,
            'ip_address' => $server->ip_address,
            'hostname' => $server->hostname,
            'os' => $server->os,
            'status' => $server->status,
            'agent_version' => $server->agent_version,
            'agent_last_seen' => $server->agent_last_seen?->toISOString(),
            'provider' => $server->provider,
            'datacenter' => $server->datacenter,
            'plan_name' => $server->plan_name,
            'cpu_usage' => $server->cpu_usage,
            'memory_used' => $server->memory_used,
            'memory_total' => $server->memory_total,
            'disk_used' => $server->disk_used,
            'disk_total' => $server->disk_total,
            'services' => $server->services->map(fn($s) => [
                'name' => $s->name,
                'status' => $s->status,
                'version' => $s->version,
            ]),
            'uptime' => $server->uptime,
            'web_apps_count' => $server->webApplications()->count(),
            'databases_count' => $server->databases()->count(),
            'firewall_rules_count' => $server->firewallRules()->count(),
            'cron_jobs_count' => $server->cronJobs()->count(),
        ];
    }

    public function getServerMonitoring(string $id): array
    {
        $server = $this->serverRepository->findWithMetrics($id);

        return [
            'id' => $server->id,
            'name' => $server->name,
            'ip_address' => $server->ip_address,
            'hostname' => $server->hostname,
            'os' => $server->os,
            'status' => $server->status,
            'agent_version' => $server->agent_version,
            'agent_last_seen' => $server->agent_last_seen?->toISOString(),
            'provider' => $server->provider,
            'datacenter' => $server->datacenter,
            'plan_name' => $server->plan_name,
            'cpu_usage' => $server->cpu_usage,
            'memory_used' => $server->memory_used,
            'memory_total' => $server->memory_total,
            'disk_used' => $server->disk_used,
            'disk_total' => $server->disk_total,
            'services' => $server->services->map(fn($s) => [
                'name' => $s->name,
                'status' => $s->status,
                'version' => $s->version,
            ]),
            'uptime' => $server->uptime,
            'metrics' => $server->metrics,
        ];
    }

    public function getServerBasic(string $id): array
    {
        $server = $this->serverRepository->find($id);

        return [
            'id' => $server->id,
            'name' => $server->name,
            'ip_address' => $server->ip_address,
            'hostname' => $server->hostname,
            'os' => $server->os,
            'status' => $server->status,
            'agent_version' => $server->agent_version,
            'agent_last_seen' => $server->agent_last_seen?->toISOString(),
            'provider' => $server->provider,
            'datacenter' => $server->datacenter,
            'plan_name' => $server->plan_name,
            'cpu_usage' => $server->cpu_usage,
            'memory_used' => $server->memory_used,
            'memory_total' => $server->memory_total,
            'disk_used' => $server->disk_used,
            'disk_total' => $server->disk_total,
            'services' => [],
            'uptime' => $server->uptime,
        ];
    }

    public function getServerSettings(string $id): array
    {
        $server = $this->serverRepository->findWithServices($id);

        return [
            'id' => $server->id,
            'name' => $server->name,
            'ip_address' => $server->ip_address,
            'hostname' => $server->hostname,
            'os' => $server->os,
            'status' => $server->status,
            'agent_version' => $server->agent_version,
            'agent_last_seen' => $server->agent_last_seen?->toISOString(),
            'provider' => $server->provider,
            'datacenter' => $server->datacenter,
            'plan_name' => $server->plan_name,
            'cpu_usage' => $server->cpu_usage,
            'memory_used' => $server->memory_used,
            'memory_total' => $server->memory_total,
            'disk_used' => $server->disk_used,
            'disk_total' => $server->disk_total,
            'services' => $server->services->map(fn($s) => [
                'name' => $s->name,
                'status' => $s->status,
                'version' => $s->version,
            ]),
            'uptime' => $server->uptime,
        ];
    }

    public function createServer(array $data, $organizationId): Server
    {
        return $this->serverRepository->create([
            'organization_id' => $organizationId,
            'name' => $data['name'],
            'ip_address' => $data['ip_address'],
            'ssh_port' => $data['ssh_port'] ?? 22,
            'hostname' => $data['hostname'] ?? null,
            'os' => $data['os'] ?? null,
            'provider' => $data['provider'] ?? 'custom',
            'datacenter' => $data['datacenter'] ?? null,
            'status' => 'pending',
        ]);
    }

    public function updateServer(string $id, array $data): Server
    {
        return $this->serverRepository->update($id, $data);
    }

    public function deleteServer(string $id): bool
    {
        return $this->serverRepository->delete($id);
    }
}
