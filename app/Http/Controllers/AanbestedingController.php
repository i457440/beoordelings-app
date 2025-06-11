<?php

namespace App\Http\Controllers;

use App\Models\Aanbesteding;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AanbestedingController extends Controller
{
    public function index()
    {
        $aanbestedingen = Aanbesteding::all();

        return Inertia::render('Aanbestedingen/Index', [
            'aanbestedingen' => $aanbestedingen
        ]);
    }
}
