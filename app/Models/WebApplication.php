<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class WebApplication extends Model
{
    use HasUuids;

    protected $fillable = [
        'server_id',
        'name',
        'domain',
        'aliases',
        'document_root',
        'php_version',
        'web_server',
        'environment',
        'system_user',
        'public_path',
        'stack',
        'status',
        'nginx_config',
        'php_ini_overrides',
    ];

    protected function casts(): array
    {
        return [
            'aliases' => 'array',
            'php_ini_overrides' => 'array',
        ];
    }

    public function server(): BelongsTo
    {
        return $this->belongsTo(Server::class);
    }

    public function sslCertificates(): HasMany
    {
        return $this->hasMany(SslCertificate::class);
    }

    public function environmentVariables(): HasMany
    {
        return $this->hasMany(EnvironmentVariable::class);
    }

    public function gitDeployment(): HasMany
    {
        return $this->hasMany(GitDeployment::class, 'web_app_id');
    }

    public function deployments(): HasMany
    {
        return $this->hasMany(Deployment::class, 'web_app_id');
    }
}
