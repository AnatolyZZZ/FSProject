<?php
use App\Http\Controllers\TestController;
use Illuminate\Support\Facades\Route;

Route::post('/test', [TestController::class, 'store']);
