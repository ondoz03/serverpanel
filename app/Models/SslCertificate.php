<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class SslCertificate extends Model
{
    protected $fillable = [
        'web_app_id',
        'type',
        'domain',
        'cert_path',
        'key_path',
        'chain_path',
        'expires_at',
        'wildcard',
        'status',
        'renewed_at',
    ];

    protected function casts(): array
    {
        return [
            'expires_at' => 'datetime',
            'renewed_at' => 'datetime',
            'wildcard' => 'boolean',
        ];
    }

    public function webApplication(): BelongsTo
    {
        return $this->belongsTo(WebApplication::class);
    }
}
