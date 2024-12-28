<?php

namespace App\Services;

use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class DatabaseConnectionTester
{
    public function testConnection(string $place): void
    {
        try {
            // Log where the connection test is running
            Log::info('Testing connection in: ' . $place);

            // Test the PDO connection
            DB::connection()->getPdo();
            Log::info('getPdo worked...');

            // Retrieve and log user count
            $users = DB::table('users')->count();
            Log::info('Number of users: ' . $users);

            // Retrieve and log session count
            $sessions = DB::table('sessions')->count();
            Log::info('Number of sessions: ' . $sessions);

            // Connection is good
            Log::info('Connection is good');
        } catch (\Exception $e) {
            // Log the error message if connection fails
            Log::error('Database connection failed: ' . $e->getMessage());
        }
    }
}
