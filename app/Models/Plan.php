<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Plan extends Model
{
    protected $fillable = [
        'name',
        'slug',
        'price_idr',
        'max_servers',
        'max_apps',
        'max_users',
        'has_backup',
        'has_git',
        'features',
    ];

    protected function casts(): array
    {
        return [
            'features' => 'array',
            'has_backup' => 'boolean',
            'has_git' => 'boolean',
        ];
    }

    public function organizations(): HasMany
    {
        return $this->hasMany(Organization::class);
    }
}
