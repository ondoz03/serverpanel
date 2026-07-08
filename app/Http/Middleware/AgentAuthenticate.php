<?php

namespace App\Http\Middleware;

use App\Models\Server;
use App\Services\Agent\AuthService;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AgentAuthenticate
{
    /**
     * Create a new middleware instance.
     */
    public function __construct(
        protected AuthService $authService
    ) {}

    /**
     * Handle an incoming request.
     *
     * @param  Request  $request
     * @param  Closure(Request): (Response)  $next
     * @return Response
     */
    public function handle(Request $request, Closure $next): Response
    {
        $token = $request->header('X-Server-Token') ?? $request->input('token');
        $signature = $request->header('X-Server-Signature') ?? $request->input('signature');

        if (!$token || !$signature) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized. Missing token or signature.',
            ], 401);
        }

        $server = Server::where('agent_token', $token)->first();

        if (!$server) {
            return response()->json([
                'success' => false,
                'message' => 'Unauthorized. Invalid token.',
            ], 401);
        }

        // Verify the signature using AuthService
        if (!$this->authService->verifySignature($request, $server, $signature)) {
            return response()->json([
                'success' => false,
                'message' => 'Invalid signature.',
            ], 403);
        }

        // Inject the authenticated server into request attributes
        $request->attributes->set('server', $server);

        return $next($request);
    }
}
