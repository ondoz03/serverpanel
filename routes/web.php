<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Welcome')->name('home');

Route::get('install.sh', [\App\Http\Controllers\Agent\AgentRegisterController::class, 'installScript'])
    ->name('agent.install-script');

Route::middleware(['guest'])->group(function () {
    Route::get('auth/{provider}/redirect', [\App\Http\Controllers\Auth\OAuthController::class, 'redirect'])
        ->name('oauth.redirect');
    Route::get('auth/{provider}/callback', [\App\Http\Controllers\Auth\OAuthController::class, 'callback'])
        ->name('oauth.callback');
});

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

    // Server routes
    Route::post('servers', [\App\Http\Controllers\Server\ServerController::class, 'store'])->name('servers.store');
    Route::get('servers', [\App\Http\Controllers\Server\ServerController::class, 'index'])->name('servers.index');
    Route::inertia('servers/create', 'servers/Create')->name('servers.create');
    Route::get('servers/{server}', [\App\Http\Controllers\Server\ServerController::class, 'show'])->name('servers.show');
    Route::get('servers/{server}/monitoring', [\App\Http\Controllers\Server\ServerController::class, 'monitoring'])->name('servers.monitoring');
    Route::get('servers/{server}/provisioning', [\App\Http\Controllers\Server\ServerController::class, 'provisioning'])->name('servers.provisioning');
    Route::get('servers/{server}/settings', [\App\Http\Controllers\Server\ServerController::class, 'settings'])->name('servers.settings');
    Route::put('servers/{server}', [\App\Http\Controllers\Server\ServerController::class, 'update'])->name('servers.update');
    Route::delete('servers/{server}', [\App\Http\Controllers\Server\ServerController::class, 'destroy'])->name('servers.destroy');
    Route::post('servers/{server}/services/{service}/{action}', [\App\Http\Controllers\Server\ServerController::class, 'manageService'])
        ->name('servers.services.manage');

    // Web App routes
    Route::get('web-apps', [\App\Http\Controllers\WebApp\WebAppController::class, 'index'])->name('web-apps.index');
    Route::inertia('web-apps/create', 'webapps/Create')->name('web-apps.create');
    Route::get('web-apps/{webApp}', [\App\Http\Controllers\WebApp\WebAppController::class, 'show'])->name('web-apps.show');
    Route::get('web-apps/{webApp}/ssl', [\App\Http\Controllers\WebApp\WebAppController::class, 'ssl'])->name('web-apps.ssl');
    Route::get('web-apps/{webApp}/env', [\App\Http\Controllers\WebApp\WebAppController::class, 'env'])->name('web-apps.env');
    Route::get('web-apps/{webApp}/git', [\App\Http\Controllers\WebApp\WebAppController::class, 'git'])->name('web-apps.git');
    Route::get('web-apps/{webApp}/settings', [\App\Http\Controllers\WebApp\WebAppController::class, 'settings'])->name('web-apps.settings');

    // Database routes
    Route::get('databases', [\App\Http\Controllers\Database\DatabaseController::class, 'index'])->name('databases.index');
    Route::get('databases/create', [\App\Http\Controllers\Database\DatabaseController::class, 'create'])->name('databases.create');

    // Firewall routes
    Route::get('firewall', [\App\Http\Controllers\Firewall\FirewallController::class, 'index'])->name('firewall.index');

    // Cron Job routes
    Route::get('cron-jobs', [\App\Http\Controllers\Cron\CronController::class, 'index'])->name('cron-jobs.index');

    // Backup routes
    Route::get('backups', [\App\Http\Controllers\Backup\BackupController::class, 'index'])->name('backups.index');
});

require __DIR__.'/settings.php';
