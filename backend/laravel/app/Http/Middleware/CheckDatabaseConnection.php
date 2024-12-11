<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class CheckDatabaseConnection
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        try {
            // Attempt to run a simple query to check if the connection is alive
            DB::connection()->getPdo();
            Log::info('MySQL connection is alive.');
        } catch (\Exception $e) {
            Log::error('Database connection error during request: ' . $e->getMessage());
        }

        return $next($request);
    }
}
