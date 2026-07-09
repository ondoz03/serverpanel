<?php

use App\Http\Controllers\Agent\AgentRegisterController;
use Illuminate\Support\Facades\Route;

Route::post('/agent/register', [AgentRegisterController::class, 'register']);

Route::middleware('agent.auth')->group(function () {
    Route::post('/agent/command/response', [\App\Http\Controllers\Agent\AgentCommandController::class, 'response']);
    Route::post('/agent/metrics', [\App\Http\Controllers\Agent\AgentMetricController::class, 'store']);
    Route::post('/agent/broadcasting/auth', [\App\Http\Controllers\Agent\AgentBroadcastAuthController::class, 'authenticate']);
});
