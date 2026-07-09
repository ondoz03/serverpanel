<?php

namespace App\Services\Agent;

use App\Models\Server;
use Illuminate\Http\Request;

class AuthService
{
    /**
     * Verify the HMAC-SHA256 signature of an incoming agent request.
     *
     * @param Request $request
     * @param Server $server
     * @param string $signature
     * @return bool
     */
    public function verifySignature(Request $request, Server $server, string $signature): bool
    {
        if ($request->has('command_id')) {
            // It's a command response callback (e.g., service restart, provisioning)
            $success = $request->input('success') ? '1' : '0';
            $signable = $request->input('command_id') . $success;
        } elseif ($request->has('socket_id') && $request->has('channel_name')) {
            // It's a broadcast channel auth request
            $signable = $request->input('socket_id') . $request->input('channel_name');
        } else {
            // It's a metrics payload callback
            $signable = $request->input('server_id') . $request->input('timestamp');
        }

        $expected = hash_hmac('sha256', $signable, $server->agent_token);

        return hash_equals($expected, $signature);
    }
}
