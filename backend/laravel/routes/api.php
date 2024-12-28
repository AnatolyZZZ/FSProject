<?php
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;
use App\Http\Middleware\LogResponse;

Route::middleware([LogResponse::class])->group(function () {
    Route::post('/test', [TestController::class, 'store']);
    Route::options('/test', function () {
        return response('', 200);
    });
});

