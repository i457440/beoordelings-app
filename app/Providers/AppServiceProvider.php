<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Inertia\Inertia;

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
    public function boot(): void
    {
        Inertia::share([
            'auth' => fn () => ['user' => auth()->user()],
            'unreadNotifications' => fn () => auth()->user()?->unreadNotifications()->latest()->get()->map(fn ($n) => [
            'id' => $n->id,
            'message' => $n->data['message'] ?? 'Nieuwe melding',
            'created_at' => \Carbon\Carbon::parse($n->created_at)->diffForHumans(),
                ]),
        ]);
    }
}
