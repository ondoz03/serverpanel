<?php

namespace Tests\Feature\Agent;

use App\Events\Server\ServerMetricsReceived;
use App\Models\Organization;
use App\Models\Server;
use App\Models\ServerMetric;
use App\Models\ServerService;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;
use Tests\TestCase;

class MetricsTest extends TestCase
{
    use RefreshDatabase;

    protected User $user;
    protected Organization $org;
    protected Server $server;
    protected ServerService $service;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = User::factory()->create();
        $this->org = Organization::create([
            'name' => 'Test Org',
            'slug' => 'test-org',
            'owner_id' => $this->user->id,
        ]);
        $this->user->organizations()->attach($this->org, ['role' => 'owner']);

        $this->server = Server::factory()->create([
            'organization_id' => $this->org->id,
            'status' => 'active',
            'agent_token' => 'sp_live_testtoken12345678901234567890',
        ]);

        $this->service = $this->server->services()->where('name', 'nginx')->first();
        $this->service->update(['status' => 'active']);

        ServerMetric::query()->delete();
    }

    public function test_agent_can_store_metrics_successfully()
    {
        Event::fake([ServerMetricsReceived::class]);

        $timestamp = time() * 1000;
        $signature = hash_hmac('sha256', $this->server->id . $timestamp, $this->server->agent_token);

        $payload = [
            'token' => $this->server->agent_token,
            'server_id' => $this->server->id,
            'timestamp' => $timestamp,
            'signature' => $signature,
            'data' => [
                'cpu' => [
                    'usage' => 45.5,
                    'cores' => 4,
                    'load' => [0.85, 0.65, 0.45],
                ],
                'memory' => [
                    'used' => 2147483648, // 2GB
                    'total' => 8589934592, // 8GB
                    'swap_used' => 0,
                    'swap_total' => 2147483648,
                ],
                'disk' => [
                    'partitions' => [
                        [
                            'mount' => '/',
                            'used' => 20000000000, // 20GB
                            'total' => 100000000000, // 100GB
                            'filesystem' => 'ext4',
                        ],
                        [
                            'mount' => '/boot',
                            'used' => 500000000,
                            'total' => 1000000000,
                            'filesystem' => 'ext2',
                        ]
                    ],
                ],
                'network' => [
                    'interfaces' => [
                        [
                            'name' => 'eth0',
                            'bytes_in' => 500000,
                            'bytes_out' => 1200000,
                            'packets_in' => 1000,
                            'packets_out' => 2000,
                        ],
                        [
                            'name' => 'lo',
                            'bytes_in' => 5000,
                            'bytes_out' => 5000,
                            'packets_in' => 50,
                            'packets_out' => 50,
                        ]
                    ],
                ],
                'services' => [
                    [
                        'name' => 'nginx',
                        'status' => 'inactive',
                        'pid' => null,
                    ],
                    [
                        'name' => 'php8.3-fpm',
                        'status' => 'active',
                        'pid' => 1234,
                    ]
                ],
                'uptime' => 7200,
            ],
        ];

        $response = $this->postJson('/api/agent/metrics', $payload);

        $response->assertOk();
        $response->assertJson(['success' => true]);

        // Assert ServerMetric database record
        $metric = ServerMetric::first();
        $this->assertNotNull($metric);
        $this->assertEquals(45.5, $metric->cpu_usage);
        $this->assertEquals(2147483648, $metric->memory_used);
        $this->assertEquals(8589934592, $metric->memory_total);
        $this->assertEquals(20000000000, $metric->disk_used); // Matches root partition mount '/'
        $this->assertEquals(100000000000, $metric->disk_total);
        $this->assertEquals(0.85, $metric->load_avg_1);
        $this->assertEquals(0.65, $metric->load_avg_5);
        $this->assertEquals(505000, $metric->net_in); // Sum of eth0 + lo
        $this->assertEquals(1205000, $metric->net_out); // Sum of eth0 + lo

        // Assert Server Services state updates
        $this->service->refresh();
        $this->assertEquals('inactive', $this->service->status); // nginx updated to inactive in database

        // Check if PHP service (normalized php8.3-fpm) was updated
        $phpService = $this->server->services()->where('name', 'php')->first();
        if ($phpService) {
            $this->assertEquals('active', $phpService->status);
        }

        // Assert Server last seen was updated
        $this->server->refresh();
        $this->assertNotNull($this->server->agent_last_seen);

        // Assert Event was broadcasted
        Event::assertDispatched(ServerMetricsReceived::class, function ($event) use ($metric) {
            $this->assertEquals($this->server->id, $event->server->id);
            $this->assertEquals($metric->id, $event->metric->id);
            $this->assertCount(2, $event->services);
            return true;
        });
    }

    public function test_agent_store_metrics_fails_with_invalid_signature()
    {
        $timestamp = time() * 1000;
        $signature = 'invalid-signature';

        $payload = [
            'token' => $this->server->agent_token,
            'server_id' => $this->server->id,
            'timestamp' => $timestamp,
            'signature' => $signature,
            'data' => [
                'cpu' => [
                    'usage' => 45.5,
                    'cores' => 4,
                    'load' => [0.85, 0.65, 0.45],
                ],
                'memory' => [
                    'used' => 2147483648,
                    'total' => 8589934592,
                    'swap_used' => 0,
                    'swap_total' => 2147483648,
                ],
                'disk' => [
                    'partitions' => [
                        [
                            'mount' => '/',
                            'used' => 20000000000,
                            'total' => 100000000000,
                            'filesystem' => 'ext4',
                        ]
                    ],
                ],
                'network' => [
                    'interfaces' => [
                        [
                            'name' => 'eth0',
                            'bytes_in' => 500000,
                            'bytes_out' => 1200000,
                            'packets_in' => 1000,
                            'packets_out' => 2000,
                        ]
                    ],
                ],
                'services' => [
                    [
                        'name' => 'nginx',
                        'status' => 'inactive',
                        'pid' => null,
                    ]
                ],
                'uptime' => 7200,
            ],
        ];

        $response = $this->postJson('/api/agent/metrics', $payload);

        $response->assertStatus(403);
        $response->assertJson(['success' => false, 'message' => 'Invalid signature.']);

        // Assert database record was not created
        $this->assertEquals(0, ServerMetric::count());
    }

    public function test_agent_store_metrics_fails_with_validation_errors()
    {
        $timestamp = time() * 1000;
        $signature = hash_hmac('sha256', $this->server->id . $timestamp, $this->server->agent_token);

        $payload = [
            'token' => $this->server->agent_token,
            'server_id' => $this->server->id,
            'timestamp' => $timestamp,
            'signature' => $signature,
            'data' => [],
        ];

        $response = $this->postJson('/api/agent/metrics', $payload);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['data.cpu']);
    }
}
