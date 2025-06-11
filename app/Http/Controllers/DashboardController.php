<?php

namespace App\Http\Controllers;

use App\Models\Aanbesteding;
use Inertia\Inertia;
use Illuminate\Support\Facades\Auth;

class DashboardController extends Controller
{
    public function index()
    {
        $user = Auth::user();
        $aanbestedingen = Aanbesteding::all();

        return Inertia::render('dashboard', [
        'aanbestedingen' => $aanbestedingen,
        'unreadNotifications' => $user->unreadNotifications->map(function ($notification) {
            return [
                'id' => $notification->id,
                'title' => $notification->data['title'] ?? null,
                'body' => $notification->data['body'] ?? null,
                'created_at' => $notification->created_at,
            ];
        }),
        'unreadCount' => $user->unreadNotifications->count(),
    ]);
    }
}
