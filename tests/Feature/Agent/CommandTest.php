<?php

namespace Tests\Feature\Agent;

use App\Events\Server\ServerCommandDispatched;
use App\Events\Server\ServerCommandResponseReceived;
use App\Models\ActivityLog;
use App\Models\Organization;
use App\Models\Server;
use App\Models\ServerService;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;
use Tests\TestCase;

class CommandTest extends TestCase
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
        $this->service->update(['status' => 'inactive']);
    }

    public function test_can_dispatch_service_command_successfully()
    {
        Event::fake([ServerCommandDispatched::class]);

        $this->actingAs($this->user);

        $response = $this->post(route('servers.services.manage', [
            'server' => $this->server->id,
            'service' => 'nginx',
            'action' => 'restart',
        ]));

        $response->assertRedirect();
        $response->assertSessionHas('command_id');

        $commandId = session('command_id');

        Event::assertDispatched(ServerCommandDispatched::class, function ($event) use ($commandId) {
            $this->assertEquals($this->server->id, $event->server->id);
            $this->assertEquals($commandId, $event->payload['command_id']);
            $this->assertEquals('service.restart', $event->payload['action']);
            $this->assertEquals('nginx', $event->payload['params']['service']);
            
            // Check HMAC signature validation
            $expectedSignature = hash_hmac('sha256', $commandId . $event->payload['issued_at'], $this->server->agent_token);
            $this->assertEquals($expectedSignature, $event->payload['signature']);

            return true;
        });
    }

    public function test_fails_dispatch_with_invalid_service()
    {
        Event::fake([ServerCommandDispatched::class]);

        $this->actingAs($this->user);

        $response = $this->post(route('servers.services.manage', [
            'server' => $this->server->id,
            'service' => 'invalid-service',
            'action' => 'restart',
        ]));

        $response->assertSessionHasErrors(['service']);
        Event::assertNotDispatched(ServerCommandDispatched::class);
    }

    public function test_agent_callback_updates_service_status_and_broadcasts()
    {
        Event::fake([ServerCommandResponseReceived::class]);

        $commandId = 'some-uuid-command';
        $signature = hash_hmac('sha256', $commandId . '1', $this->server->agent_token);

        $response = $this->postJson('/api/agent/command/response', [
            'token' => $this->server->agent_token,
            'command_id' => $commandId,
            'success' => true,
            'output' => 'Restarting nginx... OK',
            'exit_code' => 0,
            'duration_ms' => 150,
            'signature' => $signature,
            'action' => 'service.restart',
            'params' => [
                'service' => 'nginx',
            ],
        ]);

        $response->assertOk();
        $response->assertJson(['success' => true]);

        // Check if database service was updated to active
        $this->service->refresh();
        $this->assertEquals('active', $this->service->status);

        // Check if activity log was written
        $log = ActivityLog::first();
        $this->assertNotNull($log);
        $this->assertEquals('service.restart', $log->event);
        $this->assertEquals($this->server->id, $log->subject_id);
        $this->assertEquals($commandId, $log->properties['command_id']);
        $this->assertTrue($log->properties['success']);

        // Check if event was broadcasted to client
        Event::assertDispatched(ServerCommandResponseReceived::class, function ($event) use ($commandId) {
            $this->assertEquals($this->server->id, $event->server->id);
            $this->assertEquals($commandId, $event->response['command_id']);
            $this->assertTrue($event->response['success']);
            $this->assertEquals('service.restart', $event->response['action']);
            return true;
        });
    }

    public function test_agent_callback_fails_with_invalid_signature()
    {
        $commandId = 'some-uuid-command';
        $signature = 'invalid-signature';

        $response = $this->postJson('/api/agent/command/response', [
            'token' => $this->server->agent_token,
            'command_id' => $commandId,
            'success' => true,
            'output' => 'Restarting nginx... OK',
            'exit_code' => 0,
            'duration_ms' => 150,
            'signature' => $signature,
            'action' => 'service.restart',
            'params' => [
                'service' => 'nginx',
            ],
        ]);

        $response->assertStatus(403);
        $response->assertJson(['success' => false, 'message' => 'Invalid signature.']);

        // Ensure database state was NOT updated
        $this->service->refresh();
        $this->assertEquals('inactive', $this->service->status);
    }
}
