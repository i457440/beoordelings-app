import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';

export default function InschrijvingenIndex() {
  const { props } = usePage();
  const inschrijvingen = props.inschrijvingen || [];
  const aanbesteding = props.aanbesteding;

  return (
    <AppLayout breadcrumbs={[{ title: 'Inschrijvingen', href: '#' }]}>
      <Head title="Inschrijvingen" />

      <div className="p-8 bg-[#F9F9F9] min-h-screen">
        <h1 className="text-3xl font-bold text-[#28424F]" style={{ fontFamily: 'Titillium Web' }}>
          Inschrijvingen: <span className="font-normal">{aanbesteding.naam}</span>
        </h1>
        <p className="mt-2 text-[#28424F]" style={{ fontFamily: 'Roboto' }}>
          Klik op een inschrijving om te starten met beoordelen. Je begint met het bekijken van de inschrijvingsdetails.
        </p>

        {/* Tabel */}
        <div className="mt-8 overflow-hidden rounded-xl border border-gray-200">
          <div className="grid grid-cols-8 bg-[#F2B423] text-white font-semibold text-left text-sm">
            <div className="px-4 py-3 border-r border-white">Rang</div>
            <div className="px-4 py-3 border-r border-white">Aanbieder</div>
            <div className="px-4 py-3 border-r border-white">Voortgang</div>
            <div className="px-4 py-3 border-r border-white">KO</div>
            <div className="px-4 py-3 border-r border-white">Onbeantwoord</div>
            <div className="px-4 py-3 border-r border-white">Prijs</div>
            <div className="px-4 py-3 border-r border-white text-center">
              Kwaliteitsscore<br /><span className="text-xs font-normal">(Maximaal 50/50)</span>
            </div>
            <div className="px-4 py-3">Prijsdeficiënt</div>
          </div>

          {inschrijvingen.map((inschrijving, index) => (
            <div
              key={inschrijving.id}
              className="grid grid-cols-8 bg-white text-[#28424F] border-t border-gray-200 text-sm hover:bg-gray-100 transition cursor-pointer"
            >
              <div className="px-4 py-3 border-r border-gray-200">{index + 1}</div>
              <div className="px-4 py-3 border-r border-gray-200">{inschrijving.aanbieder}</div>
              <div className="px-4 py-3 border-r border-gray-200">
                <span className="bg-[#2AACCC] text-white px-2 py-1 rounded-full text-xs">0/4</span>
              </div>
              <div className="px-4 py-3 border-r border-gray-200">0</div>
              <div className="px-4 py-3 border-r border-gray-200">0</div>
              <div className="px-4 py-3 border-r border-gray-200">—</div>
              <div className="px-4 py-3 border-r border-gray-200">—</div>
              <div className="px-4 py-3">—</div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
