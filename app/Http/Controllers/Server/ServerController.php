<?php

namespace App\Http\Controllers\Server;

use App\Http\Controllers\Controller;
use App\Http\Requests\Server\StoreServerRequest;
use App\Http\Requests\Server\UpdateServerRequest;
use App\Services\ServerService;
use Illuminate\Support\Facades\Gate;
use Inertia\Inertia;

class ServerController extends Controller
{
    public function __construct(
        protected ServerService $serverService
    ) {}

    public function index()
    {
        $organizationId = auth()->user()->organizations()->first()?->id;

        if (!$organizationId) {
            return Inertia::render('servers/Index', ['servers' => []]);
        }

        return Inertia::render('servers/Index', [
            'servers' => $this->serverService->listServers($organizationId),
        ]);
    }

    public function show(string $id)
    {
        $serverModel = \App\Models\Server::findOrFail($id);
        Gate::authorize('view', $serverModel);

        $server = $this->serverService->getServer($id);

        if ($server['status'] === 'provisioning') {
            return redirect()->route('servers.provisioning', $id);
        }

        return Inertia::render('servers/Show', [
            'server' => $server,
        ]);
    }

    public function monitoring(string $id)
    {
        $serverModel = \App\Models\Server::findOrFail($id);
        Gate::authorize('view', $serverModel);

        return Inertia::render('servers/Monitoring', [
            'server' => $this->serverService->getServerMonitoring($id),
        ]);
    }

    public function provisioning(string $id)
    {
        $serverModel = \App\Models\Server::findOrFail($id);
        Gate::authorize('view', $serverModel);

        return Inertia::render('servers/Provisioning', [
            'server' => $this->serverService->getServerBasic($id),
        ]);
    }

    public function settings(string $id)
    {
        $serverModel = \App\Models\Server::findOrFail($id);
        Gate::authorize('view', $serverModel);

        return Inertia::render('servers/Settings', [
            'server' => $this->serverService->getServerSettings($id),
        ]);
    }

    public function store(StoreServerRequest $request)
    {
        $organizationId = auth()->user()->organizations()->first()?->id;

        if (!$organizationId) {
            return redirect()->back()->withErrors(['organization' => 'No organization found.']);
        }

        $server = $this->serverService->createServer($request->validated(), $organizationId);

        return redirect()->route('servers.show', $server->id)
            ->with('success', 'Server created successfully.');
    }

    public function update(UpdateServerRequest $request, string $id)
    {
        $serverModel = \App\Models\Server::findOrFail($id);
        Gate::authorize('update', $serverModel);

        $this->serverService->updateServer($id, $request->validated());

        return redirect()->back()
            ->with('success', 'Server updated successfully.');
    }

    public function destroy(string $id)
    {
        $serverModel = \App\Models\Server::findOrFail($id);
        Gate::authorize('delete', $serverModel);

        $this->serverService->deleteServer($id);

        return redirect()->route('servers.index')
            ->with('success', 'Server removed successfully.');
    }

    public function manageService(string $id, string $service, string $action, \App\Services\Agent\AgentCommandService $agentCommandService)
    {
        $server = \App\Models\Server::findOrFail($id);
        Gate::authorize('update', $server);

        // Validate service name
        $allowedServices = ['nginx', 'mysql', 'php', 'redis', 'fail2ban'];
        if (!in_array($service, $allowedServices)) {
            return redirect()->back()->withErrors(['service' => 'Invalid service name.']);
        }

        // Validate action
        $allowedActions = ['start', 'stop', 'restart'];
        if (!in_array($action, $allowedActions)) {
            return redirect()->back()->withErrors(['action' => 'Invalid action.']);
        }

        // Dispatch command via service
        $commandId = $agentCommandService->dispatchServiceCommand($server, $service, $action);

        return redirect()->back()
            ->with('success', "Command to {$action} {$service} dispatched successfully.")
            ->with('command_id', $commandId);
    }
}
