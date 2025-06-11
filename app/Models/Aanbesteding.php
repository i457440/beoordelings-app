<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class Aanbesteding extends Model
{
    protected $fillable = [
        'naam',
        'contactpersoon',
        'startdatum',
        'einddatum',
    ];

    public function inschrijvings(): HasMany
    {
        return $this->hasMany(Inschrijving::class);
    }
}
