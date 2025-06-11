<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Aanbesteding;


class AanbestedingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Aanbesteding::create([
            'naam' => 'ICT Software onderwijsinstelling 1',
            'contactpersoon' => 'Justine Hoffman',
            'startdatum' => '2025-06-05',
            'einddatum' => '2025-07-10',
        ]);
    }
}
