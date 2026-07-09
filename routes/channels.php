<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return (int) $user->id === (int) $id;
});

Broadcast::channel('server.{id}', function ($user, $id) {
    return $user->organizations()->whereHas('servers', function ($query) use ($id) {
        $query->where('id', $id);
    })->exists();
});

Broadcast::channel('deployment.{id}', function ($user, $id) {
    $deployment = \App\Models\Deployment::find($id);
    if (!$deployment) {
        return false;
    }
    return $user->organizations()->whereHas('servers', function ($query) use ($deployment) {
        $query->where('id', $deployment->webApplication->server_id);
    })->exists();
});
