<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class ServerMetric extends Model
{
    protected $fillable = [
        'server_id',
        'cpu_usage',
        'memory_used',
        'memory_total',
        'disk_used',
        'disk_total',
        'load_avg_1',
        'load_avg_5',
        'net_in',
        'net_out',
        'recorded_at',
    ];

    protected function casts(): array
    {
        return [
            'recorded_at' => 'datetime',
        ];
    }

    public function server(): BelongsTo
    {
        return $this->belongsTo(Server::class);
    }
}
