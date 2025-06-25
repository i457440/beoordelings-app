<?php

namespace App\Http\Controllers;

use App\Models\Aanbesteding;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InschrijvingController extends Controller
{
    public function index($id)
    {
        // Haal de aanbesteding op met inschrijvingen en documenten
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
}
