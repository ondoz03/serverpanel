<?php

namespace App\Http\Controllers\Agent;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class AgentBroadcastAuthController extends Controller
{
    public function authenticate(Request $request)
    {
        $request->validate([
            'socket_id' => ['required', 'string'],
            'channel_name' => ['required', 'string'],
        ]);

        $server = $request->attributes->get('server');

        // The agent is only authorized to subscribe to its own private channel: private-server.{serverId}
        $expectedChannelName = 'private-server.' . $server->id;

        if ($request->channel_name !== $expectedChannelName) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized channel subscription.',
            ], 403);
        }

        $appKey = config('reverb.apps.apps.0.key') ?? env('REVERB_APP_KEY');
        $secret = config('reverb.apps.apps.0.secret') ?? env('REVERB_APP_SECRET');

        if (!$appKey || !$secret) {
            return response()->json([
                'success' => false,
                'message' => 'Reverb credentials not configured on the server.',
            ], 500);
        }

        $socketId = $request->socket_id;
        $channelName = $request->channel_name;

        // Pusher/Reverb authentication protocol:
        // Signature = HMAC-SHA256(socket_id + ":" + channel_name, secret)
        $stringToSign = $socketId . ':' . $channelName;
        $signature = hash_hmac('sha256', $stringToSign, $secret);

        return response()->json([
            'auth' => $appKey . ':' . $signature,
        ]);
    }
}
