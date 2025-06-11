<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use App\Models\Aanbesteding;

class NieuweAanbestedingBeschikbaar extends Notification
{
    use Queueable;

    protected $aanbesteding;

    public function __construct(Aanbesteding $aanbesteding)
    {
        $this->aanbesteding = $aanbesteding;
    }

    public function via(object $notifiable): array
    {
        return ['database'];
    }

    public function toDatabase(object $notifiable): array
    {
        return [
            'title' => 'Nieuwe aanbesteding beschikbaar',
            'body' => "Aanbesteding '{$this->aanbesteding->naam}' is klaar om te beoordelen.",
            'aanbesteding_id' => $this->aanbesteding->id,
        ];
    }
}
