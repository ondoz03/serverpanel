<?php

namespace App\Jobs\Server;

use App\Models\Server;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class ProvisionServer implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public Server $server,
        public string $phpVersion = '8.3'
    ) {}

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        $log = "[" . now()->toDateTimeString() . "] [info] Initializing server provisioning pipeline.\n";
        $log .= "[" . now()->toDateTimeString() . "] [info] Hostname: " . ($this->server->hostname ?? 'unknown') . "\n";
        $log .= "[" . now()->toDateTimeString() . "] [info] Operating System: " . ($this->server->os ?? 'unknown') . "\n";
        $log .= "[" . now()->toDateTimeString() . "] [info] Architecture: " . ($this->server->arch ?? 'unknown') . "\n";
        $log .= "[" . now()->toDateTimeString() . "] [info] Agent Version: " . ($this->server->agent_version ?? 'unknown') . "\n";
        $log .= "[" . now()->toDateTimeString() . "] [info] Queueing LEMP stack installer.\n";

        $this->server->update([
            'status' => 'provisioning',
            'provisioning_log' => $log,
        ]);

        InstallLemp::dispatch($this->server, $this->phpVersion);
    }
}
