<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;

class NieuweAanbestedingBeschikbaar extends Notification
{
    use Queueable;

    public function via(object $notifiable): array
    {
        return ['database']; // ⬅️ gebruik de database als kanaal
    }

    public function toDatabase(object $notifiable): array
    {
        return [
            'title' => 'Nieuwe aanbesteding beschikbaar',
            'body' => 'Je kunt nu een nieuwe aanbesteding beoordelen.',
            'aanbesteding_id' => 1, // vervang dit eventueel door dynamisch ID
        ];
    }
}
