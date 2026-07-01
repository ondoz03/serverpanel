<?php

namespace App\Http\Controllers\Cron;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class CronController extends Controller
{
    public function index()
    {
        return Inertia::render('cron/Index', [
            'jobs' => [
                [
                    'id' => 1,
                    'name' => 'Queue Worker',
                    'command' => 'php artisan queue:work --stop-when-empty',
                    'schedule' => '*/5 * * * *',
                    'status' => 'active',
                    'last_run' => '2025-06-30 12:05:00',
                    'next_run' => '2025-06-30 12:10:00',
                ],
                [
                    'id' => 2,
                    'name' => 'Daily Report',
                    'command' => 'php artisan report:generate daily',
                    'schedule' => '0 3 * * *',
                    'status' => 'active',
                    'last_run' => '2025-06-30 03:00:00',
                    'next_run' => '2025-07-01 03:00:00',
                ],
                [
                    'id' => 3,
                    'name' => 'Weekly Cleanup',
                    'command' => 'php artisan logs:cleanup',
                    'schedule' => '0 0 * * 0',
                    'status' => 'active',
                    'last_run' => '2025-06-29 00:00:00',
                    'next_run' => '2025-07-06 00:00:00',
                ],
                [
                    'id' => 4,
                    'name' => 'Health Check',
                    'command' => 'php artisan monitor:health',
                    'schedule' => '*/15 * * * *',
                    'status' => 'paused',
                    'last_run' => '2025-06-29 18:00:00',
                    'next_run' => null,
                ],
            ],
        ]);
    }
}
