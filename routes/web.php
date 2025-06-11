<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AanbestedingController;
use App\Http\Controllers\DashboardController;



Route::get('/', function () {
    // Redirect naar de loginpagina als de gebruiker niet ingelogd is
    return auth()->check() ? Inertia::render('dashboard') : redirect()->route('login');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('aanbestedingen', [AanbestedingController::class, 'index'])->name('aanbestedingen');


    Route::get('hulp', function () {
        return Inertia::render('hulp');
    })->name('hulp');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';