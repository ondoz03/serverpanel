<?php

namespace App\Http\Controllers\Agent;

use App\Events\Server\ServerMetricsReceived;
use App\Http\Controllers\Controller;
use App\Models\Server;
use Illuminate\Http\Request;
use Illuminate\Support\Carbon;

class AgentMetricController extends Controller
{
    public function store(Request $request)
    {
        $request->validate([
            'server_id' => ['required', 'uuid'],
            'timestamp' => ['required', 'numeric'],
            'data' => ['required', 'array'],
            'data.cpu' => ['required', 'array'],
            'data.cpu.usage' => ['required', 'numeric'],
            'data.cpu.cores' => ['required', 'integer'],
            'data.cpu.load' => ['required', 'array', 'size:3'],
            'data.memory' => ['required', 'array'],
            'data.memory.used' => ['required', 'integer'],
            'data.memory.total' => ['required', 'integer'],
            'data.disk' => ['required', 'array'],
            'data.disk.partitions' => ['required', 'array'],
            'data.network' => ['required', 'array'],
            'data.network.interfaces' => ['required', 'array'],
            'data.services' => ['required', 'array'],
            'data.uptime' => ['required', 'integer'],
        ]);

        // Retrieve server model injected by the agent.auth middleware
        $server = $request->attributes->get('server');

        // Aggregate disk metrics (extract / root partition, fallback to first partition)
        $partitions = $request->input('data.disk.partitions');
        $rootPartition = collect($partitions)->firstWhere('mount', '/');
        if (!$rootPartition && !empty($partitions)) {
            $rootPartition = $partitions[0];
        }
        $diskTotal = $rootPartition['total'] ?? 0;
        $diskUsed = $rootPartition['used'] ?? 0;

        // Aggregate network metrics (sum all interfaces)
        $interfaces = $request->input('data.network.interfaces');
        $netIn = collect($interfaces)->sum('bytes_in');
        $netOut = collect($interfaces)->sum('bytes_out');

        // Store metric in database
        $metric = $server->metrics()->create([
            'cpu_usage' => $request->input('data.cpu.usage'),
            'memory_used' => $request->input('data.memory.used'),
            'memory_total' => $request->input('data.memory.total'),
            'disk_used' => $diskUsed,
            'disk_total' => $diskTotal,
            'load_avg_1' => $request->input('data.cpu.load.0'),
            'load_avg_5' => $request->input('data.cpu.load.1'),
            'net_in' => $netIn,
            'net_out' => $netOut,
            'recorded_at' => Carbon::createFromTimestampMs($request->timestamp),
        ]);

        // Sync service statuses (normalizing PHP service name)
        $services = $request->input('data.services');
        foreach ($services as $svc) {
            $name = $svc['name'];
            $normalizedName = $name;
            if (str_contains(strtolower($name), 'php')) {
                $normalizedName = 'php';
            }

            $service = $server->services()->where('name', $normalizedName)->first();
            if ($service) {
                $service->update([
                    'status' => $svc['status'] ?? 'unknown',
                    'checked_at' => now(),
                ]);
            }
        }

        // Update server details
        $server->update([
            'agent_last_seen' => now(),
            'status' => $server->status === 'pending' ? 'provisioning' : $server->status,
        ]);

        // Broadcast to clients via WebSocket
        broadcast(new ServerMetricsReceived($server, $metric, $services));

        return response()->json([
            'success' => true,
            'message' => 'Metrics stored and processed successfully.',
        ]);
    }
}
