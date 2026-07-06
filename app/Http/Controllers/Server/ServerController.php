<?php

namespace App\Http\Controllers\Server;

use App\Http\Controllers\Controller;
use App\Http\Requests\Server\StoreServerRequest;
use App\Http\Requests\Server\UpdateServerRequest;
use App\Services\ServerService;
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
        return Inertia::render('servers/Show', [
            'server' => $this->serverService->getServer($id),
        ]);
    }

    public function monitoring(string $id)
    {
        return Inertia::render('servers/Monitoring', [
            'server' => $this->serverService->getServerMonitoring($id),
        ]);
    }

    public function provisioning(string $id)
    {
        return Inertia::render('servers/Provisioning', [
            'server' => $this->serverService->getServerBasic($id),
        ]);
    }

    public function settings(string $id)
    {
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
        $this->serverService->updateServer($id, $request->validated());

        return redirect()->back()
            ->with('success', 'Server updated successfully.');
    }

    public function destroy(string $id)
    {
        $this->serverService->deleteServer($id);

        return redirect()->route('servers.index')
            ->with('success', 'Server removed successfully.');
    }
}
