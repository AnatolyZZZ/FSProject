<?php

namespace App\Providers;

use App\Services\DatabaseConnectionTester;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Log;

class DBConnectionTestProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register()
    {
      
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(DatabaseConnectionTester $tester)
    {   
        Log::warning('Booting DBCP write to channel');
        // Execute the test connection method during boot
        $tester->testConnection('provider');
    }
}
