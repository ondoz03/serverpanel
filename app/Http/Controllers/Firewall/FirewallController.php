<?php

namespace App\Http\Controllers\Firewall;

use App\Http\Controllers\Controller;
use Inertia\Inertia;

class FirewallController extends Controller
{
    public function index()
    {
        return Inertia::render('firewall/Index', [
            'rules' => [
                [
                    'id' => 1,
                    'name' => 'SSH Access',
                    'direction' => 'inbound',
                    'action' => 'allow',
                    'protocol' => 'TCP',
                    'port' => 22,
                    'source' => '0.0.0.0/0',
                    'status' => 'active',
                ],
                [
                    'id' => 2,
                    'name' => 'Web HTTP',
                    'direction' => 'inbound',
                    'action' => 'allow',
                    'protocol' => 'TCP',
                    'port' => 80,
                    'source' => '0.0.0.0/0',
                    'status' => 'active',
                ],
                [
                    'id' => 3,
                    'name' => 'Web HTTPS',
                    'direction' => 'inbound',
                    'action' => 'allow',
                    'protocol' => 'TCP',
                    'port' => 443,
                    'source' => '0.0.0.0/0',
                    'status' => 'active',
                ],
                [
                    'id' => 4,
                    'name' => 'Database',
                    'direction' => 'inbound',
                    'action' => 'deny',
                    'protocol' => 'TCP',
                    'port' => 3306,
                    'source' => '0.0.0.0/0',
                    'status' => 'active',
                ],
                [
                    'id' => 5,
                    'name' => 'Outbound DNS',
                    'direction' => 'outbound',
                    'action' => 'allow',
                    'protocol' => 'UDP',
                    'port' => 53,
                    'source' => '0.0.0.0/0',
                    'status' => 'active',
                ],
                [
                    'id' => 6,
                    'name' => 'Block All Outbound',
                    'direction' => 'outbound',
                    'action' => 'deny',
                    'protocol' => 'TCP',
                    'port' => 0,
                    'source' => '0.0.0.0/0',
                    'status' => 'active',
                ],
            ],
        ]);
    }
}
