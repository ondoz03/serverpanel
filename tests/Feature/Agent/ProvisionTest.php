<?php

namespace Tests\Feature\Agent;

use App\Events\Server\ServerCommandDispatched;
use App\Events\Server\ServerCommandResponseReceived;
use App\Jobs\Server\InstallLemp;
use App\Jobs\Server\ProvisionServer;
use App\Models\Organization;
use App\Models\Server;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Event;
use Illuminate\Support\Facades\Queue;
use Tests\TestCase;

class ProvisionTest extends TestCase
{
    use RefreshDatabase;

    protected User $user;
    protected Organization $org;
    protected Server $server;

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
            'status' => 'pending',
            'agent_token' => 'sp_live_testtoken12345678901234567890',
        ]);

        // Clear pre-generated services from factory to avoid count collision in tests
        $this->server->services()->delete();
    }

    public function test_agent_registration_dispatches_provisionserver_job()
    {
        Queue::fake();

        $response = $this->postJson('/api/agent/register', [
            'token' => $this->server->agent_token,
            'hostname' => 'test-server',
            'os' => 'Ubuntu 24.04',
            'arch' => 'x86_64',
            'agent_version' => '1.0.0',
        ]);

        $response->assertOk();
        $response->assertJson(['success' => true]);

        $this->server->refresh();
        $this->assertEquals('provisioning', $this->server->status);

        Queue::assertPushed(ProvisionServer::class, function ($job) {
            return $job->server->id === $this->server->id;
        });
    }

    public function test_provisionserver_job_logs_details_and_dispatches_installlemp()
    {
        Queue::fake();

        $job = new ProvisionServer($this->server, '8.4');
        $job->handle();

        $this->server->refresh();
        $this->assertEquals('provisioning', $this->server->status);
        $this->assertStringContainsString('Initializing server provisioning pipeline', $this->server->provisioning_log);
        $this->assertStringContainsString('Queueing LEMP stack installer', $this->server->provisioning_log);

        Queue::assertPushed(InstallLemp::class, function ($job) {
            return $job->server->id === $this->server->id && $job->phpVersion === '8.4';
        });
    }

    public function test_installlemp_job_dispatches_websocket_command()
    {
        Event::fake([ServerCommandDispatched::class]);

        $this->server->update([
            'provisioning_log' => 'Initial logs',
        ]);

        $job = new InstallLemp($this->server, '8.4');
        $job->handle(app(\App\Services\Agent\AgentCommandService::class));

        $this->server->refresh();
        $this->assertStringContainsString('Dispatched stack installer', $this->server->provisioning_log);

        Event::assertDispatched(ServerCommandDispatched::class, function ($event) {
            $this->assertEquals($this->server->id, $event->server->id);
            $this->assertEquals('server.provision', $event->payload['action']);
            $this->assertEquals('8.4', $event->payload['params']['php_version']);
            return true;
        });
    }

    public function test_provision_response_callback_handles_success_correctly()
    {
        Event::fake([ServerCommandResponseReceived::class]);

        $commandId = 'some-uuid-command';
        $signature = hash_hmac('sha256', $commandId . '1', $this->server->agent_token);

        $this->server->update([
            'status' => 'provisioning',
            'provisioning_log' => "Logs line 1\n",
        ]);

        $response = $this->postJson('/api/agent/command/response', [
            'token' => $this->server->agent_token,
            'command_id' => $commandId,
            'success' => true,
            'output' => 'Provision completed successfully',
            'exit_code' => 0,
            'duration_ms' => 120000,
            'signature' => $signature,
            'action' => 'server.provision',
            'params' => [
                'php_version' => '8.4',
            ],
        ]);

        $response->assertOk();
        $response->assertJson(['success' => true]);

        $this->server->refresh();
        $this->assertEquals('active', $this->server->status);
        $this->assertNotNull($this->server->provisioned_at);
        $this->assertStringContainsString('LEMP stack installation completed successfully', $this->server->provisioning_log);

        // Check that initial services were created and set to active
        $services = $this->server->services()->get();
        $this->assertCount(5, $services);
        $this->assertEquals('active', $services->where('name', 'nginx')->first()->status);
        $this->assertEquals('active', $services->where('name', 'php')->first()->status);
        $this->assertEquals('8.4', $services->where('name', 'php')->first()->version);
        $this->assertEquals('active', $services->where('name', 'mysql')->first()->status);
        $this->assertEquals('active', $services->where('name', 'redis')->first()->status);
        $this->assertEquals('active', $services->where('name', 'fail2ban')->first()->status);

        Event::assertDispatched(ServerCommandResponseReceived::class);
    }

    public function test_provision_response_callback_handles_failure_correctly()
    {
        Event::fake([ServerCommandResponseReceived::class]);

        $commandId = 'some-uuid-command';
        $signature = hash_hmac('sha256', $commandId . '0', $this->server->agent_token);

        $this->server->update([
            'status' => 'provisioning',
            'provisioning_log' => "Logs line 1\n",
        ]);

        $response = $this->postJson('/api/agent/command/response', [
            'token' => $this->server->agent_token,
            'command_id' => $commandId,
            'success' => false,
            'output' => 'APT failed to install mysql-server',
            'exit_code' => 1,
            'duration_ms' => 45000,
            'error' => 'MySQL package installation error',
            'signature' => $signature,
            'action' => 'server.provision',
            'params' => [
                'php_version' => '8.4',
            ],
        ]);

        $response->assertOk();

        $this->server->refresh();
        $this->assertEquals('error', $this->server->status);
        $this->assertNull($this->server->provisioned_at);
        $this->assertStringContainsString('LEMP stack installation failed', $this->server->provisioning_log);
        $this->assertStringContainsString('MySQL package installation error', $this->server->provisioning_log);

        // Check services were NOT updated to active (no services created)
        $this->assertEquals(0, $this->server->services()->count());
    }
}
