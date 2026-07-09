<?php

namespace App\Policies;

use App\Models\Server;
use App\Models\User;

class ServerPolicy
{
    /**
     * Determine whether the user can view the server.
     */
    public function view(User $user, Server $server): bool
    {
        return $user->organizations()->where('organizations.id', $server->organization_id)->exists();
    }

    /**
     * Determine whether the user can update the server.
     */
    public function update(User $user, Server $server): bool
    {
        return $user->organizations()->where('organizations.id', $server->organization_id)->exists();
    }

    /**
     * Determine whether the user can delete the server.
     */
    public function delete(User $user, Server $server): bool
    {
        return $user->organizations()->where('organizations.id', $server->organization_id)->exists();
    }
}
