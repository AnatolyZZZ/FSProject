<?php
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    Log::warning('Test DB in route hit');
    return view('welcome');
});

// Apply the middleware only to the /test-db route
// Route::middleware(['check-db-health'])->get('/test-db', function () {
//     Log::info('Test DB route hit - before DB connection in request directly');
//     try {
//         // Attempt a DB query to check the connection
//         DB::table('sessions')->first();
//         Log::info('Test DB route - session fetched successfully in request directly');
//     } catch (\Exception $e) {
//         // Log any connection issues
//         Log::error('Test DB route in request directly- database connection error: ' . $e->getMessage());

//     }
//     return view('welcome');
// });

Route::get('/test-db', function () {
    Log::warning('Test DB in route hit');
    // dd('after log');
    // try {
    //     // Attempt a DB query to check the connection
    //     DB::table('sessions')->first();
    //     Log::info('Test DB route - session fetched successfully in request directly');
    // } catch (\Exception $e) {
    //     // Log any connection issues
    //     Log::error('Test DB route in request directly- database connection error: ' . $e->getMessage());

    // }
    return view('welcome');
});