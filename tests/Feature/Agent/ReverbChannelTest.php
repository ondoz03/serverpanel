<?php

namespace Tests\Feature\Agent;

use App\Models\Organization;
use App\Models\Server;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ReverbChannelTest extends TestCase
{
    use RefreshDatabase;

    protected User $user;
    protected User $otherUser;
    protected Organization $org;
    protected Server $server;

    protected function setUp(): void
    {
        $_ENV['BROADCAST_CONNECTION'] = 'reverb';
        $_ENV['REVERB_APP_KEY'] = 'testkey';
        $_ENV['REVERB_APP_SECRET'] = 'testsecret';
        $_ENV['REVERB_APP_ID'] = '123456';

        parent::setUp();

        $this->user = User::factory()->create();
        $this->otherUser = User::factory()->create();
        
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
    }

    public function test_browser_user_can_authorize_server_channel()
    {
        $this->actingAs($this->user);

        $response = $this->postJson('/broadcasting/auth', [
            'channel_name' => 'private-server.' . $this->server->id,
            'socket_id' => '1234.5678',
        ]);

        $response->assertOk();
        $response->assertJsonStructure(['auth']);
    }

    public function test_browser_user_without_access_is_denied()
    {
        $this->actingAs($this->otherUser);

        $response = $this->postJson('/broadcasting/auth', [
            'channel_name' => 'private-server.' . $this->server->id,
            'socket_id' => '1234.5678',
        ]);

        $response->assertStatus(403);
    }

    public function test_agent_can_authorize_reverb_subscription_successfully()
    {
        $socketId = '1234.5678';
        $channelName = 'private-server.' . $this->server->id;
        
        // HMAC signable string: socket_id + channel_name
        $signable = $socketId . $channelName;
        $signature = hash_hmac('sha256', $signable, $this->server->agent_token);

        $response = $this->postJson('/api/agent/broadcasting/auth', [
            'token' => $this->server->agent_token,
            'signature' => $signature,
            'socket_id' => $socketId,
            'channel_name' => $channelName,
        ]);

        $response->assertOk();
        
        $appKey = config('reverb.apps.apps.0.key') ?? env('REVERB_APP_KEY');
        $secret = config('reverb.apps.apps.0.secret') ?? env('REVERB_APP_SECRET');

        // Pusher/Reverb expected signature
        $expectedSignature = hash_hmac('sha256', $socketId . ':' . $channelName, $secret);
        $expectedAuth = $appKey . ':' . $expectedSignature;

        $response->assertJson(['auth' => $expectedAuth]);
    }

    public function test_agent_authorization_fails_if_subscribing_to_another_server_channel()
    {
        $socketId = '1234.5678';
        $channelName = 'private-server.different-server-uuid';
        
        $signable = $socketId . $channelName;
        $signature = hash_hmac('sha256', $signable, $this->server->agent_token);

        $response = $this->postJson('/api/agent/broadcasting/auth', [
            'token' => $this->server->agent_token,
            'signature' => $signature,
            'socket_id' => $socketId,
            'channel_name' => $channelName,
        ]);

        $response->assertStatus(403);
        $response->assertJson(['success' => false, 'message' => 'Unauthorized channel subscription.']);
    }

    public function test_browser_user_can_authorize_deployment_channel()
    {
        $webApp = \App\Models\WebApplication::create([
            'server_id' => $this->server->id,
            'name' => 'Test App',
            'domain' => 'testapp.com',
            'document_root' => '/var/www/testapp.com/public',
            'status' => 'active',
        ]);

        $deployment = \App\Models\Deployment::create([
            'web_app_id' => $webApp->id,
            'status' => 'pending',
            'triggered_by' => 'manual',
        ]);

        $this->actingAs($this->user);

        $response = $this->postJson('/broadcasting/auth', [
            'channel_name' => 'private-deployment.' . $deployment->id,
            'socket_id' => '1234.5678',
        ]);

        $response->assertOk();
        $response->assertJsonStructure(['auth']);
    }

    public function test_browser_user_without_access_to_deployment_channel_is_denied()
    {
        $webApp = \App\Models\WebApplication::create([
            'server_id' => $this->server->id,
            'name' => 'Test App',
            'domain' => 'testapp.com',
            'document_root' => '/var/www/testapp.com/public',
            'status' => 'active',
        ]);

        $deployment = \App\Models\Deployment::create([
            'web_app_id' => $webApp->id,
            'status' => 'pending',
            'triggered_by' => 'manual',
        ]);

        $this->actingAs($this->otherUser);

        $response = $this->postJson('/broadcasting/auth', [
            'channel_name' => 'private-deployment.' . $deployment->id,
            'socket_id' => '1234.5678',
        ]);

        $response->assertStatus(403);
    }
}
