<?php

namespace Tests\Feature\Server;

use App\Models\Organization;
use App\Models\Server;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ServerAuthorizationTest extends TestCase
{
    use RefreshDatabase;

    protected User $user;
    protected User $otherUser;
    protected Organization $org;
    protected Organization $otherOrg;
    protected Server $server;

    protected function setUp(): void
    {
        parent::setUp();

        $this->user = User::factory()->create();
        $this->otherUser = User::factory()->create();

        $this->org = Organization::create([
            'name' => 'My Org',
            'slug' => 'my-org',
            'owner_id' => $this->user->id,
        ]);
        $this->user->organizations()->attach($this->org, ['role' => 'owner']);

        $this->otherOrg = Organization::create([
            'name' => 'Other Org',
            'slug' => 'other-org',
            'owner_id' => $this->otherUser->id,
        ]);
        $this->otherUser->organizations()->attach($this->otherOrg, ['role' => 'owner']);

        $this->server = Server::factory()->create([
            'organization_id' => $this->org->id,
            'status' => 'active',
            'agent_token' => 'sp_live_myorgtoken12345678901234567890',
        ]);
    }

    public function test_authorized_user_can_access_own_server_endpoints()
    {
        $this->actingAs($this->user);

        // Show
        $this->get(route('servers.show', $this->server->id))->assertOk();

        // Monitoring
        $this->get(route('servers.monitoring', $this->server->id))->assertOk();

        // Settings
        $this->get(route('servers.settings', $this->server->id))->assertOk();

        // Provisioning
        $this->server->update(['status' => 'provisioning']);
        $this->get(route('servers.provisioning', $this->server->id))->assertOk();
    }

    public function test_unauthorized_user_is_forbidden_from_viewing_server()
    {
        $this->actingAs($this->otherUser);

        $this->get(route('servers.show', $this->server->id))->assertStatus(403);
        $this->get(route('servers.monitoring', $this->server->id))->assertStatus(403);
        $this->get(route('servers.settings', $this->server->id))->assertStatus(403);
        $this->get(route('servers.provisioning', $this->server->id))->assertStatus(403);
    }

    public function test_unauthorized_user_is_forbidden_from_updating_server()
    {
        $this->actingAs($this->otherUser);

        $this->put(route('servers.update', $this->server->id), [
            'name' => 'New Name',
        ])->assertStatus(403);
    }

    public function test_unauthorized_user_is_forbidden_from_deleting_server()
    {
        $this->actingAs($this->otherUser);

        $this->delete(route('servers.destroy', $this->server->id))->assertStatus(403);
    }

    public function test_unauthorized_user_is_forbidden_from_managing_services()
    {
        $this->actingAs($this->otherUser);

        $this->post(route('servers.services.manage', [
            'server' => $this->server->id,
            'service' => 'nginx',
            'action' => 'restart'
        ]))->assertStatus(403);
    }
}
