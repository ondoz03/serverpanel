<?php

namespace Database\Factories;

use App\Models\Server;
use App\Models\ServerService;
use App\Models\ServerMetric;
use Illuminate\Database\Eloquent\Factories\Factory;

class ServerFactory extends Factory
{
    protected $model = Server::class;

    public function definition(): array
    {
        $providers = ['Vultr', 'DigitalOcean', 'IDCloudHost', 'Hetzner', 'Linode'];
        $datacenters = ['SGP1', 'FRA1', 'NYC1', 'JKTA', 'AMS1'];

        return [
            'name' => fake()->randomElement(['Production', 'Staging', 'Development', 'Client-A', 'Client-B']) . '-' . fake()->numberBetween(1, 99),
            'ip_address' => fake()->ipv4(),
            'ssh_port' => 22,
            'hostname' => strtolower(fake()->word()) . '.serverpanel.test',
            'os' => fake()->randomElement(['ubuntu-22.04', 'ubuntu-24.04', 'debian-12']),
            'arch' => 'x86_64',
            'status' => fake()->randomElement(['active', 'active', 'active', 'provisioning', 'error']),
            'agent_token' => fake()->sha256(),
            'agent_version' => '1.0.0',
            'agent_last_seen' => fake()->dateTimeBetween('-5 minutes', 'now'),
            'agent_connected_at' => fake()->dateTimeBetween('-30 days', '-1 hour'),
            'provider' => fake()->randomElement($providers),
            'datacenter' => fake()->randomElement($datacenters),
            'plan_name' => fake()->randomElement(['1 vCPU, 1GB RAM', '1 vCPU, 2GB RAM', '2 vCPU, 4GB RAM', '4 vCPU, 8GB RAM']),
        ];
    }

    public function configure(): static
    {
        return $this->afterCreating(function (Server $server) {
            // Create services
            $services = [
                ['name' => 'nginx', 'status' => 'active', 'version' => '1.26'],
                ['name' => 'mysql', 'status' => $server->status === 'error' ? 'inactive' : 'active', 'version' => fake()->randomElement(['8.0', '10.11'])],
                ['name' => 'php', 'status' => 'active', 'version' => fake()->randomElement(['8.2', '8.3', '8.4'])],
            ];

            if (fake()->boolean(70)) {
                $services[] = ['name' => 'redis', 'status' => 'active', 'version' => '7.4'];
            }

            foreach ($services as $svc) {
                ServerService::create([
                    'server_id' => $server->id,
                    'name' => $svc['name'],
                    'status' => $svc['status'],
                    'version' => $svc['version'],
                    'checked_at' => now(),
                ]);
            }

            // Create metrics history (last 24 hours, one per hour)
            $now = now();
            for ($i = 24; $i >= 0; $i--) {
                $recordedAt = (clone $now)->subHours($i);
                ServerMetric::create([
                    'server_id' => $server->id,
                    'cpu_usage' => fake()->randomFloat(1, 5, 95),
                    'memory_used' => fake()->numberBetween(512, 4096) * 1024 * 1024,
                    'memory_total' => 4294967296, // 4GB
                    'disk_used' => fake()->numberBetween(10, 80) * 1073741824,
                    'disk_total' => 107374182400, // 100GB
                    'load_avg_1' => fake()->randomFloat(2, 0, 4),
                    'load_avg_5' => fake()->randomFloat(2, 0, 3),
                    'net_in' => fake()->numberBetween(1000, 9999999),
                    'net_out' => fake()->numberBetween(1000, 9999999),
                    'recorded_at' => $recordedAt,
                ]);
            }
        });
    }

    public function active(): static
    {
        return $this->state(fn() => ['status' => 'active']);
    }

    public function provisioning(): static
    {
        return $this->state(fn() => ['status' => 'provisioning']);
    }

    public function errored(): static
    {
        return $this->state(fn() => ['status' => 'error']);
    }
}
