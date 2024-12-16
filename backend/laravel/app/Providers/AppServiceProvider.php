<?php

namespace App\Providers;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        $this->app->singleton(DatabaseConnectionTester::class, function ($app) {
            return new DatabaseConnectionTester();
        });
    }

    /**
     * Bootstrap any application services.
     */
    public function boot()
    {
        // Use the tester to run the database connection test logic
        Log::info('AppServiceProvider Booted');
    }
}
