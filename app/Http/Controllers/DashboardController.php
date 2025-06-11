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
            'unreadNotifications' => $user->unreadNotifications,
            'unreadCount' => auth()->user()->unreadNotifications->count(),

        ]);
    }
}
