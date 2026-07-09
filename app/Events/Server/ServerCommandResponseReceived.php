<?php

namespace App\Events\Server;

use App\Models\Server;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ServerCommandResponseReceived implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public function __construct(
        public Server $server,
        public array $response
    ) {}

    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('server.' . $this->server->id),
        ];
    }

    public function broadcastAs(): string
    {
        return 'ServerCommandResponseReceived';
    }
}
