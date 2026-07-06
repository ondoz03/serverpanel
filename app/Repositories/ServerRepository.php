<?php

namespace App\Repositories;

use App\Models\Server;

class ServerRepository extends BaseRepository
{
    protected function model(): string
    {
        return Server::class;
    }

    public function findByOrganization($orgId)
    {
        return Server::with(['services', 'latestMetric'])
            ->where('organization_id', $orgId)
            ->get();
    }

    public function findWithServices(string $id): Server
    {
        return Server::with('services')->findOrFail($id);
    }

    public function findWithMetrics(string $id): Server
    {
        return Server::with(['services', 'metrics' => function ($q) {
            $q->orderBy('recorded_at', 'desc')->limit(120);
        }])->findOrFail($id);
    }
}
