<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Deployment extends Model
{
    use HasUuids;

    protected $fillable = [
        'git_deployment_id',
        'web_app_id',
        'triggered_by',
        'triggered_user_id',
        'commit_hash',
        'commit_message',
        'branch',
        'status',
        'log',
        'started_at',
        'finished_at',
        'duration_seconds',
        'rollback_of',
    ];

    protected function casts(): array
    {
        return [
            'started_at' => 'datetime',
            'finished_at' => 'datetime',
        ];
    }

    public function webApplication(): BelongsTo
    {
        return $this->belongsTo(WebApplication::class, 'web_app_id');
    }

    public function gitDeployment(): BelongsTo
    {
        return $this->belongsTo(GitDeployment::class);
    }

    public function triggeredUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'triggered_user_id');
    }
}
