<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class LogResponse
{
    /**
     * Handle an incoming request and log the response.
     *
     * @param \Illuminate\Http\Request $request
     * @param \Closure $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        // Continue to the next middleware/request handler
        $response = $next($request);

        // Log the response (you can customize this log message as needed)
        Log::info('Response:', [
            'status' => $response->status(),
            'url' => $request->url(),
            'method' => $request->method(),
            'response_body' => $response->getContent(),
        ]);

        // Return the response
        return $response;
    }
}

