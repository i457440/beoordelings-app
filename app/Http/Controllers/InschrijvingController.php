<?php

namespace App\Http\Controllers;

use App\Models\Aanbesteding;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InschrijvingController extends Controller
{
    public function index($id)
    {
        $aanbesteding = Aanbesteding::with('inschrijvings')->findOrFail($id);

        return Inertia::render('Inschrijvingen/Index', [
            'aanbesteding' => $aanbesteding,
            'inschrijvingen' => $aanbesteding->inschrijvings,
        ]);
    }
}
