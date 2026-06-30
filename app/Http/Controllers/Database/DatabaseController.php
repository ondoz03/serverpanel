<?php

namespace App\Http\Controllers\Database;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class DatabaseController extends Controller
{
    public function index()
    {
        return Inertia::render('databases/Index', [
            'databases' => [
                [
                    'id' => 1,
                    'type' => 'MySQL 8.0',
                    'status' => 'active',
                    'memory' => '256 MB',
                    'database_count' => 5,
                    'user_count' => 3,
                    'created_at' => '2025-01-15 10:30:00',
                ],
                [
                    'id' => 2,
                    'type' => 'PostgreSQL 16',
                    'status' => 'active',
                    'memory' => '128 MB',
                    'database_count' => 2,
                    'user_count' => 2,
                    'created_at' => '2025-03-22 14:15:00',
                ],
                [
                    'id' => 3,
                    'type' => 'MySQL 8.0',
                    'status' => 'error',
                    'memory' => '512 MB',
                    'database_count' => 8,
                    'user_count' => 4,
                    'created_at' => '2025-02-10 09:00:00',
                ],
            ],
        ]);
    }

    public function create()
    {
        return Inertia::render('databases/Create');
    }
}
