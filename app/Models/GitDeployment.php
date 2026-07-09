<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class GitDeployment extends Model
{
    use HasUuids;

    protected $fillable = [
        'web_app_id',
        'provider',
        'repo_url',
        'branch',
        'deploy_script',
        'webhook_secret',
        'auto_deploy',
    ];

    protected function casts(): array
    {
        return [
            'auto_deploy' => 'boolean',
        ];
    }

    public function webApplication(): BelongsTo
    {
        return $this->belongsTo(WebApplication::class, 'web_app_id');
    }

    public function deployments(): HasMany
    {
        return $this->hasMany(Deployment::class);
    }
}
