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
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot()
    {
        // Log to confirm if we're inside the boot method
        Log::info('AppServiceProvider NEW boot method executed');
       
        try {
            $session = DB::table('sessions')->first();
            if ($session) {
                Log::info('First session found: ', (array)$session);
            } else {
                Log::info('No sessions found.');
            }
        } catch (\Exception $e) {
            Log::error('Database connection error during boot: ' . $e->getMessage());
        }
    }
}
