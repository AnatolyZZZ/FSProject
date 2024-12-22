<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Http\Request;

class CheckDatabaseConnection
{
    public function handle(Request $request, Closure $next)
    {
        Log::info('Middleware executed');
        try {
            // Attempt to run a simple query to check if the connection is alive
            DB::connection()->getPdo();
            Log::info('MySQL connection is alive in middleware.');
        } catch (\Exception $e) {
            Log::error('Database connection error in middleware: ' . $e->getMessage());
        }

        return $next($request);
    }
}
