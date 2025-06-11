<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Inschrijving extends Model
{
    protected $fillable = ['aanbieder', 'aanbesteding_id'];

    public function aanbesteding(): BelongsTo
    {
        return $this->belongsTo(Aanbesteding::class);
    }
}
