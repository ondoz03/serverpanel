<?php

namespace Tests\Feature\Agent;

use App\Models\Organization;
use App\Models\Server;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class RegistrationTest extends TestCase
{
    use RefreshDatabase;

    public function test_server_creation_generates_agent_token()
    {
        $user = User::factory()->create();
        
        $org = Organization::create([
            'name' => 'Test Org',
            'slug' => 'test-org',
            'owner_id' => $user->id,
        ]);

        $user->organizations()->attach($org, ['role' => 'owner']);

        $this->actingAs($user);

        $response = $this->post(route('servers.store'), [
            'name' => 'Test Server',
            'ip_address' => '127.0.0.1',
            'ssh_port' => 22,
            'auth_method' => 'key',
            'provider' => 'custom',
        ]);

        $server = Server::first();

        $this->assertNotNull($server->agent_token);
        $this->assertStringStartsWith('sp_live_', $server->agent_token);
        $this->assertEquals('pending', $server->status);
        $response->assertRedirect(route('servers.show', $server->id));
    }

    public function test_can_download_install_script()
    {
        $response = $this->get(route('agent.install-script'));

        $response->assertOk();
        $response->assertHeader('Content-Type', 'text/plain; charset=UTF-8');
        $response->assertSee('Installing ServerPanel Agent...');
    }

    public function test_agent_can_register_successfully()
    {
        $user = User::factory()->create();
        $org = Organization::create([
            'name' => 'Test Org',
            'slug' => 'test-org',
            'owner_id' => $user->id,
        ]);

        $server = Server::factory()->create([
            'organization_id' => $org->id,
            'status' => 'pending',
            'agent_token' => 'sp_live_testtoken12345678901234567890',
        ]);

        $response = $this->postJson('/api/agent/register', [
            'token' => $server->agent_token,
            'hostname' => 'test-vps',
            'os' => 'Ubuntu 22.04.4 LTS',
            'arch' => 'x86_64',
            'agent_version' => '1.0.0',
        ]);

        $response->assertOk();
        $response->assertJson([
            'success' => true,
            'server_id' => $server->id,
        ]);

        $server->refresh();
        $this->assertEquals('provisioning', $server->status);
        $this->assertEquals('test-vps', $server->hostname);
        $this->assertEquals('Ubuntu 22.04.4 LTS', $server->os);
        $this->assertEquals('x86_64', $server->arch);
        $this->assertEquals('1.0.0', $server->agent_version);
        $this->assertNotNull($server->agent_last_seen);
        $this->assertNotNull($server->agent_connected_at);
    }

    public function test_agent_registration_fails_with_invalid_token()
    {
        $response = $this->postJson('/api/agent/register', [
            'token' => 'sp_live_invalid',
            'hostname' => 'test-vps',
            'os' => 'Ubuntu 22.04.4 LTS',
            'arch' => 'x86_64',
            'agent_version' => '1.0.0',
        ]);

        $response->assertStatus(422);
        $response->assertJsonValidationErrors(['token']);
    }
}
