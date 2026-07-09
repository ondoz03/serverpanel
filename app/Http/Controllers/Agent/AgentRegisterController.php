<?php

namespace App\Http\Controllers\Agent;

use App\Http\Controllers\Controller;
use App\Jobs\Server\ProvisionServer;
use App\Models\Server;
use Illuminate\Http\Request;

class AgentRegisterController extends Controller
{
    public function register(Request $request)
    {
        $request->validate([
            'token' => ['required', 'string', 'exists:servers,agent_token'],
            'hostname' => ['required', 'string', 'max:255'],
            'os' => ['required', 'string', 'max:100'],
            'arch' => ['required', 'string', 'max:20'],
            'agent_version' => ['required', 'string', 'max:20'],
        ]);

        $server = Server::where('agent_token', $request->token)->firstOrFail();

        $server->update([
            'hostname' => $request->hostname,
            'os' => $request->os,
            'arch' => $request->arch,
            'agent_version' => $request->agent_version,
            'status' => 'provisioning',
            'agent_last_seen' => now(),
            'agent_connected_at' => now(),
        ]);

        // Dispatch server provisioning job
        ProvisionServer::dispatch($server);

        return response()->json([
            'success' => true,
            'server_id' => $server->id,
            'message' => 'Agent registered successfully.',
        ]);
    }

    public function installScript()
    {
        $scriptPath = resource_path('views/scripts/install.sh');

        if (!file_exists($scriptPath)) {
            abort(404, 'Installation script not found.');
        }

        return response(file_get_contents($scriptPath), 200, [
            'Content-Type' => 'text/plain; charset=UTF-8',
        ]);
    }
}
