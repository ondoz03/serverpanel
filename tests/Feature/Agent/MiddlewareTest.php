<?php

namespace Tests\Feature\Agent;

use App\Models\Organization;
use App\Models\Server;
use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class MiddlewareTest extends TestCase
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
            'status' => 'active',
            'agent_token' => 'sp_live_testtoken12345678901234567890',
        ]);
    }

    public function test_middleware_blocks_request_with_missing_credentials()
    {
        $response = $this->postJson('/api/agent/command/response', [
            'command_id' => 'some-cmd',
            'success' => true,
        ]);

        $response->assertStatus(401);
        $response->assertJson(['success' => false, 'message' => 'Unauthorized. Missing token or signature.']);
    }

    public function test_middleware_blocks_request_with_invalid_token()
    {
        $response = $this->postJson('/api/agent/command/response', [
            'token' => 'sp_live_wrongtoken',
            'signature' => 'some-signature',
            'command_id' => 'some-cmd',
            'success' => true,
        ]);

        $response->assertStatus(401);
        $response->assertJson(['success' => false, 'message' => 'Unauthorized. Invalid token.']);
    }

    public function test_middleware_blocks_request_with_invalid_signature()
    {
        $response = $this->postJson('/api/agent/command/response', [
            'token' => $this->server->agent_token,
            'signature' => 'invalid-signature',
            'command_id' => 'some-cmd',
            'success' => true,
            'output' => 'Test',
            'exit_code' => 0,
            'duration_ms' => 100,
            'action' => 'service.restart',
        ]);

        $response->assertStatus(403);
        $response->assertJson(['success' => false, 'message' => 'Invalid signature.']);
    }

    public function test_middleware_allows_request_with_valid_body_credentials()
    {
        $commandId = 'some-uuid-command';
        $signature = hash_hmac('sha256', $commandId . '1', $this->server->agent_token);

        $response = $this->postJson('/api/agent/command/response', [
            'token' => $this->server->agent_token,
            'signature' => $signature,
            'command_id' => $commandId,
            'success' => true,
            'output' => 'Completed',
            'exit_code' => 0,
            'duration_ms' => 100,
            'action' => 'service.restart',
            'params' => [
                'service' => 'nginx',
            ],
        ]);

        $response->assertOk();
        $response->assertJson(['success' => true]);
    }

    public function test_middleware_allows_request_with_valid_header_credentials()
    {
        $commandId = 'some-uuid-command';
        $signature = hash_hmac('sha256', $commandId . '1', $this->server->agent_token);

        $response = $this->postJson(
            '/api/agent/command/response',
            [
                'command_id' => $commandId,
                'success' => true,
                'output' => 'Completed',
                'exit_code' => 0,
                'duration_ms' => 100,
                'action' => 'service.restart',
                'params' => [
                    'service' => 'nginx',
                ],
            ],
            [
                'X-Server-Token' => $this->server->agent_token,
                'X-Server-Signature' => $signature,
            ]
        );

        $response->assertOk();
        $response->assertJson(['success' => true]);
    }
}
