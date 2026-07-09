<?php

namespace App\Services\Agent;

use App\Events\Server\ServerCommandDispatched;
use App\Models\Server;
use Illuminate\Support\Str;

class AgentCommandService
{
    /**
     * Dispatch a generic command to the agent.
     *
     * @param Server $server
     * @param string $action
     * @param array $params
     * @return string The command ID
     */
    public function dispatchCommand(Server $server, string $action, array $params = []): string
    {
        $commandId = (string) Str::uuid();
        $issuedAt = time();
        
        $payload = [
            'type' => 'command',
            'command_id' => $commandId,
            'action' => $action,
            'params' => $params,
            'issued_at' => $issuedAt,
        ];

        // Sign the payload using HMAC-SHA256
        $payload['signature'] = hash_hmac('sha256', $commandId . $issuedAt, $server->agent_token);

        // Broadcast the event via WebSocket (ShouldBroadcastNow)
        broadcast(new ServerCommandDispatched($server, $payload));

        return $commandId;
    }

    /**
     * Dispatch a service management command to the agent.
     *
     * @param Server $server
     * @param string $service
     * @param string $action
     * @return string The command ID
     */
    public function dispatchServiceCommand(Server $server, string $service, string $action): string
    {
        return $this->dispatchCommand($server, "service.{$action}", [
            'service' => $service,
        ]);
    }
}
