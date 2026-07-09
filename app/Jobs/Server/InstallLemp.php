<?php

namespace App\Jobs\Server;

use App\Models\Server;
use App\Services\Agent\AgentCommandService;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Queue\Queueable;

class InstallLemp implements ShouldQueue
{
    use Queueable;

    /**
     * Create a new job instance.
     */
    public function __construct(
        public Server $server,
        public string $phpVersion
    ) {}

    /**
     * Execute the job.
     */
    public function handle(AgentCommandService $commandService): void
    {
        $log = $this->server->provisioning_log;
        $log .= "[" . now()->toDateTimeString() . "] [info] Dispatched stack installer: Nginx, PHP " . $this->phpVersion . ", MySQL, Redis, Composer, Node.js.\n";

        $this->server->update([
            'provisioning_log' => $log,
        ]);

        $commandService->dispatchCommand($this->server, 'server.provision', [
            'php_version' => $this->phpVersion,
        ]);
    }
}
