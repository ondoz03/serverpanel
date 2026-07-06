<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class DatabaseUser extends Model
{
    protected $fillable = [
        'database_id',
        'server_id',
        'username',
        'password',
        'host',
        'privileges',
    ];

    protected function casts(): array
    {
        return [
            'privileges' => 'array',
        ];
    }

    public function database(): BelongsTo
    {
        return $this->belongsTo(Database::class);
    }

    public function server(): BelongsTo
    {
        return $this->belongsTo(Server::class);
    }
}
