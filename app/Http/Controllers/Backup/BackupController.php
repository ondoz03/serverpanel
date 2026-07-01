<?php

namespace App\Http\Controllers\Backup;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class BackupController extends Controller
{
    public function index()
    {
        return Inertia::render('backups/Index', [
            'backups' => [
                [
                    'id' => 1,
                    'name' => 'Full Server Backup',
                    'type' => 'full',
                    'status' => 'completed',
                    'size' => '2.4 GB',
                    'storage' => 's3',
                    'created_at' => '2025-06-30 02:00:00',
                    'completed_at' => '2025-06-30 02:45:00',
                ],
                [
                    'id' => 2,
                    'name' => 'Incremental Database',
                    'type' => 'incremental',
                    'status' => 'completed',
                    'size' => '156 MB',
                    'storage' => 'local',
                    'created_at' => '2025-06-30 06:00:00',
                    'completed_at' => '2025-06-30 06:12:00',
                ],
                [
                    'id' => 3,
                    'name' => 'Incremental Files',
                    'type' => 'incremental',
                    'status' => 'running',
                    'size' => '--',
                    'storage' => 's3',
                    'created_at' => '2025-06-30 11:00:00',
                    'completed_at' => null,
                ],
                [
                    'id' => 4,
                    'name' => 'Weekly Full Backup',
                    'type' => 'full',
                    'status' => 'failed',
                    'size' => '1.8 GB',
                    'storage' => 'local',
                    'created_at' => '2025-06-29 02:00:00',
                    'completed_at' => null,
                ],
            ],
        ]);
    }
}
