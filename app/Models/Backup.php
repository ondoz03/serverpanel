<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Backup extends Model
{
    use HasUuids;

    protected $fillable = [
        'server_id',
        'web_app_id',
        'database_id',
        'type',
        'storage_type',
        'storage_path',
        'size_bytes',
        'status',
        'triggered_by',
        'checksum',
        'encrypted',
        'expires_at',
    ];

    protected function casts(): array
    {
        return [
            'expires_at' => 'datetime',
            'encrypted' => 'boolean',
            'size_bytes' => 'integer',
        ];
    }

    public function server(): BelongsTo
    {
        return $this->belongsTo(Server::class);
    }

    public function webApplication(): BelongsTo
    {
        return $this->belongsTo(WebApplication::class);
    }
}
