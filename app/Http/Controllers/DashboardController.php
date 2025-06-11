<?php

namespace App\Http\Controllers;

use App\Models\Aanbesteding;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $aanbestedingen = Aanbesteding::all();

        return Inertia::render('dashboard', [
            'aanbestedingen' => $aanbestedingen,
        ]);
    }
}
