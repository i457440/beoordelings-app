<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\AanbestedingController;
use App\Http\Controllers\DashboardController;
use App\Http\Controllers\Auth\RegisteredUserController;
use App\Http\Controllers\InschrijvingController;
use Illuminate\Http\Request;

Route::get('/', function () {
    // Redirect naar de loginpagina als de gebruiker niet ingelogd is
    return auth()->check() ? Inertia::render('dashboard') : redirect()->route('login');
})->name('home');

// Verborgen registratie-url voor Contractables
Route::get('/registratie-contractables-abc123', [RegisteredUserController::class, 'create'])
    ->name('register.form');

Route::post('/registratie-contractables-abc123', [RegisteredUserController::class, 'store'])
    ->name('register.submit');

// als je inlogd kun je dit zien en je komt eerst in het dashboard 
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])->name('dashboard');

    Route::get('aanbestedingen', [AanbestedingController::class, 'index'])->name('aanbestedingen');
    Route::post('aanbestedingen', [AanbestedingController::class, 'store'])->name('aanbestedingen.store');

    Route::get('/aanbestedingen/{id}/inschrijvingen', [InschrijvingController::class, 'index'])->name('inschrijvingen.index');


    Route::get('hulp', function () {
        return Inertia::render('hulp');
    })->name('hulp');

    Route::post('/notifications/mark-as-read', function (Request $request) {
        auth()->user()->unreadNotifications->markAsRead();
        return back();
    })->name('notifications.read');
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
