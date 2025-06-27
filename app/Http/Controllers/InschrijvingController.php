<?php

namespace App\Http\Controllers;

use App\Models\Aanbesteding;
use App\Models\Inschrijving;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InschrijvingController extends Controller
{
    // Overzicht van inschrijvingen per aanbesteding
    public function index($id)
    {
        $aanbesteding = Aanbesteding::with('inschrijvings.documenten')->findOrFail($id);

        $documenten = collect();

        foreach ($aanbesteding->inschrijvings as $inschrijving) {
            if ($inschrijving->documenten && $inschrijving->documenten->count() > 0) {
                foreach ($inschrijving->documenten as $document) {
                    $documenten->push([
                        'id' => $document->id,
                        'titel' => $document->titel,
                        'bestand' => $document->bestand,
                        'inschrijving_id' => $inschrijving->id,
                        'aanbieder' => $inschrijving->aanbieder,
                    ]);
                }
            }
        }

        return Inertia::render('Inschrijvingen/Index', [
            'aanbesteding' => $aanbesteding,
            'inschrijvingen' => $aanbesteding->inschrijvings,
            'documenten' => $documenten->values(),
        ]);
    }

    // Stap 1 bekijken: inschrijving inzien
    public function showStap1(Inschrijving $inschrijving)
    {
        // Laad bijbehorende documenten
        $inschrijving->load('documenten');

        return Inertia::render('InschrijvingBekijken', [
            'inschrijving' => $inschrijving,
        ]);
    }
}
