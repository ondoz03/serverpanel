<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Welcome')->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return \Inertia\Inertia::render('Dashboard', [
            'stats' => [
                'total_servers' => 3,
                'active_servers' => 2,
                'total_apps' => 5,
                'alerts' => 1,
            ],
        ]);
    })->name('dashboard');

    Route::get('servers', [\App\Http\Controllers\Server\ServerController::class, 'index'])->name('servers.index');
    Route::inertia('servers/create', 'servers/Create')->name('servers.create');
    Route::get('servers/{server}', [\App\Http\Controllers\Server\ServerController::class, 'show'])->name('servers.show');
    Route::get('servers/{server}/monitoring', [\App\Http\Controllers\Server\ServerController::class, 'monitoring'])->name('servers.monitoring');
    Route::get('servers/{server}/provisioning', [\App\Http\Controllers\Server\ServerController::class, 'provisioning'])->name('servers.provisioning');
    Route::get('servers/{server}/settings', [\App\Http\Controllers\Server\ServerController::class, 'settings'])->name('servers.settings');
});

require __DIR__.'/settings.php';
