<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Document extends Model
{
    protected $fillable = ['titel', 'bestand', 'inschrijving_id'];

    protected $table = 'documenten';

    public function inschrijving()
    {
        return $this->belongsTo(Inschrijving::class);
    }
}
