<?php

namespace App\Models;

use Database\Factories\ServerFactory;
use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Server extends Model
{
    /** @use HasFactory<ServerFactory> */
    use HasFactory, HasUuids;

    protected $fillable = [
        'organization_id',
        'name',
        'ip_address',
        'ssh_port',
        'hostname',
        'os',
        'arch',
        'status',
        'agent_token',
        'agent_version',
        'agent_last_seen',
        'agent_connected_at',
        'ssh_public_key',
        'provider',
        'datacenter',
        'plan_name',
        'provisioned_at',
        'provisioning_log',
    ];

    protected $hidden = [
        'agent_token',
    ];

    protected function casts(): array
    {
        return [
            'ssh_port' => 'integer',
            'agent_last_seen' => 'datetime',
            'agent_connected_at' => 'datetime',
            'provisioned_at' => 'datetime',
        ];
    }

    public function organization(): BelongsTo
    {
        return $this->belongsTo(Organization::class);
    }

    public function services(): HasMany
    {
        return $this->hasMany(ServerService::class);
    }

    public function metrics(): HasMany
    {
        return $this->hasMany(ServerMetric::class);
    }

    public function latestMetric()
    {
        return $this->hasOne(ServerMetric::class)->latestOfMany('recorded_at');
    }

    public function webApplications(): HasMany
    {
        return $this->hasMany(WebApplication::class);
    }

    public function databases(): HasMany
    {
        return $this->hasMany(Database::class);
    }

    public function firewallRules(): HasMany
    {
        return $this->hasMany(FirewallRule::class);
    }

    public function cronJobs(): HasMany
    {
        return $this->hasMany(CronJob::class);
    }

    public function backups(): HasMany
    {
        return $this->hasMany(Backup::class);
    }

    /**
     * Get CPU usage from the latest metric.
     */
    public function getCpuUsageAttribute(): ?float
    {
        return $this->latestMetric?->cpu_usage;
    }

    /**
     * Get memory used from the latest metric.
     */
    public function getMemoryUsedAttribute(): ?int
    {
        return $this->latestMetric?->memory_used;
    }

    /**
     * Get memory total from the latest metric.
     */
    public function getMemoryTotalAttribute(): ?int
    {
        return $this->latestMetric?->memory_total;
    }

    /**
     * Get disk used from the latest metric.
     */
    public function getDiskUsedAttribute(): ?int
    {
        return $this->latestMetric?->disk_used;
    }

    /**
     * Get disk total from the latest metric.
     */
    public function getDiskTotalAttribute(): ?int
    {
        return $this->latestMetric?->disk_total;
    }

    /**
     * Get uptime from the latest metric (load_avg_1 as placeholder).
     */
    public function getUptimeAttribute(): ?int
    {
        return $this->agent_last_seen?->diffInSeconds(now());
    }
}
