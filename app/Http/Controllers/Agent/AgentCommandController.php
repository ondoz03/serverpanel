<?php

namespace App\Http\Controllers\Agent;

use App\Events\Server\ServerCommandResponseReceived;
use App\Http\Controllers\Controller;
use App\Models\ActivityLog;
use App\Models\Server;
use Illuminate\Http\Request;

class AgentCommandController extends Controller
{
    public function response(Request $request)
    {
        $request->validate([
            'command_id' => ['required', 'string'],
            'success' => ['required', 'boolean'],
            'output' => ['nullable', 'string'],
            'exit_code' => ['required', 'integer'],
            'duration_ms' => ['required', 'integer'],
            'error' => ['nullable', 'string'],
            'action' => ['required', 'string'],
            'params' => ['nullable', 'array'],
        ]);

        // Retrieve server model injected by the agent.auth middleware
        $server = $request->attributes->get('server');

        $success = $request->success;
        $action = $request->action;
        $params = $request->params ?? [];

        // Synchronize service status in database if it's a service command
        if (str_starts_with($action, 'service.')) {
            $serviceName = $params['service'] ?? null;
            if ($serviceName) {
                $service = $server->services()->where('name', $serviceName)->first();
                if ($service) {
                    $serviceAction = str_replace('service.', '', $action);
                    if ($success) {
                        $newStatus = ($serviceAction === 'stop') ? 'inactive' : 'active';
                    } else {
                        $newStatus = 'failed';
                    }
                    $service->update([
                        'status' => $newStatus,
                        'checked_at' => now(),
                    ]);
                }
            }
        }

        // Handle server provisioning command callback
        if ($action === 'server.provision') {
            $log = $server->provisioning_log;
            if ($success) {
                $log .= "[" . now()->toDateTimeString() . "] [success] LEMP stack installation completed successfully.\n";
                
                $defaultServices = [
                    ['name' => 'nginx', 'version' => '1.26'],
                    ['name' => 'mysql', 'version' => '8.0'],
                    ['name' => 'php', 'version' => $params['php_version'] ?? '8.3'],
                    ['name' => 'redis', 'version' => '7.0'],
                    ['name' => 'fail2ban', 'version' => '1.0'],
                ];

                foreach ($defaultServices as $svc) {
                    $server->services()->updateOrCreate(
                        ['name' => $svc['name']],
                        [
                            'status' => 'active',
                            'version' => $svc['version'],
                            'checked_at' => now(),
                        ]
                    );
                }

                $server->update([
                    'status' => 'active',
                    'provisioned_at' => now(),
                    'provisioning_log' => $log,
                ]);
            } else {
                $log .= "[" . now()->toDateTimeString() . "] [error] LEMP stack installation failed: " . ($request->error ?? 'unknown error') . "\n";
                $server->update([
                    'status' => 'error',
                    'provisioning_log' => $log,
                ]);
            }
        }

        // Log the activity
        ActivityLog::create([
            'organization_id' => $server->organization_id,
            'user_id' => null,
            'event' => $action,
            'subject_type' => Server::class,
            'subject_id' => $server->id,
            'properties' => [
                'command_id' => $request->command_id,
                'success' => $success,
                'output' => $request->output,
                'exit_code' => $request->exit_code,
                'duration_ms' => $request->duration_ms,
                'error' => $request->error,
                'params' => $params,
            ],
            'ip_address' => $request->ip(),
            'user_agent' => $request->userAgent(),
        ]);

        // Broadcast response payload to browser clients
        broadcast(new ServerCommandResponseReceived($server, [
            'command_id' => $request->command_id,
            'success' => $success,
            'output' => $request->output,
            'exit_code' => $request->exit_code,
            'duration_ms' => $request->duration_ms,
            'error' => $request->error,
            'action' => $action,
            'params' => $params,
        ]));

        return response()->json([
            'success' => true,
            'message' => 'Command response processed successfully.',
        ]);
    }
}
