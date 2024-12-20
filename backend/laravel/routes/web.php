<?php
use App\Http\Middleware\CheckDatabaseConnection; 
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\TestController;

Route::get('/', function () {
    return view('welcome');
});
Route::post('/api/test', [TestController::class, 'store']);

// Apply the middleware only to the /test-db route
Route::middleware([CheckDatabaseConnection::class])->get('/test-db', function () {
    Log::info('Test DB route hit - before DB connection');
    try {
        // Attempt a DB query to check the connection
        DB::table('sessions')->first();
        Log::info('Test DB route - session fetched successfully');
    } catch (\Exception $e) {
        // Log any connection issues
        Log::error('Test DB route - database connection error: ' . $e->getMessage());
    }
});