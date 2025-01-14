<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LogResponse
{
    public function handle(Request $request, Closure $next)
    {
        $startTime = microtime(true);

        Log::info('Request', [
            'url' => $request->fullUrl(),
            'start_time' => $startTime,
            'method' => $request->method(),
        ]);
        // Process the request and get the response
        $response = $next($request);

        $endTime = microtime(true);
        $duration = $endTime - $startTime;

        // Log the response (you can customize this log message as needed)
        Log::info('Response:', [
            'status' => $response->status(),
            'url' => $request->url(),
            'method' => $request->method(),
            'response_body' => $response->getContent(),
            'start_time' => $startTime,
            'time_taken_ms' => round($duration * 1000, 2),
        ]);

        // Return the response
        return $response;
    }
}

