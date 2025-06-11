<?php

namespace App\Http\Controllers;

use App\Models\Aanbesteding;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Notifications\NieuweAanbestedingBeschikbaar;

class AanbestedingController extends Controller
{
    /**
     * Toon een lijst van alle aanbestedingen.
     */
    public function index()
    {
        $aanbestedingen = Aanbesteding::all();

        return Inertia::render('Aanbestedingen/Index', [
            'aanbestedingen' => $aanbestedingen
        ]);
    }

    /**
     * Sla een nieuwe aanbesteding op en verstuur notificaties.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'naam' => 'required|string|max:255',
            'contactpersoon' => 'nullable|string|max:255',
            'startdatum' => 'required|date',
            'einddatum' => 'required|date|after_or_equal:startdatum',
        ]);

        $aanbesteding = Aanbesteding::create($validated);

        // Stuur notificaties naar alle gebruikers
        $gebruikers = User::all();
        foreach ($gebruikers as $gebruiker) {
            $gebruiker->notify(new NieuweAanbestedingBeschikbaar($aanbesteding));
        }

        return redirect()->route('aanbestedingen')->with('success', 'Aanbesteding aangemaakt en notificaties verzonden.');
    }
}
