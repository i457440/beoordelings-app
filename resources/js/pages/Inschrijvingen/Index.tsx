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
        <div className=" flex items-center justify-between">
            <p className="text-[#28424F]" style={{ fontFamily: 'Roboto' }}>
                Klik op een inschrijving om te starten met beoordelen. Je begint met het bekijken van de inschrijvingsdetails.
            </p>
            <button
                type="button"
                className="bg-[#F2B423] hover:bg-[#dba61d] text-white font-semibold text-sm px-4 py-2 rounded-md shadow transition ml-4"
            >
                Vergelijk
            </button>
        </div>

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

          {inschrijvingen.map((inschrijving) => (
            <div
              key={inschrijving.id}
              className="grid grid-cols-8 bg-white text-[#28424F] border-t border-gray-200 text-sm hover:bg-gray-100 transition cursor-pointer"
            >
              {/* Rang - vaag */}
              <div className="px-4 py-3 border-r border-gray-200">
                <div className="bg-gray-200 h-4 w-6 rounded blur-sm" />
              </div>

              {/* Aanbieder */}
              <div className="px-4 py-3 border-r border-gray-200">{inschrijving.aanbieder}</div>

              {/* Voortgang */}
              <div className="px-4 py-3 border-r border-gray-200">
                <span className="bg-[#2AACCC] text-white px-2 py-1 rounded-full text-xs">0/4</span>
              </div>

              {/* KO */}
              <div className="px-4 py-3 border-r border-gray-200">0</div>

              {/* Onbeantwoord */}
              <div className="px-4 py-3 border-r border-gray-200">0</div>

              {/* Prijs - vaag */}
              <div className="px-4 py-3 border-r border-gray-200">
                <div className="bg-gray-200 h-4 w-16 rounded blur-sm" />
              </div>

              {/* Kwaliteitsscore - vaag */}
              <div className="px-4 py-3 border-r border-gray-200">
                <div className="bg-gray-200 h-4 w-20 rounded blur-sm" />
              </div>

              {/* Prijsdeficiënt - vaag */}
              <div className="px-4 py-3">
                <div className="bg-gray-200 h-4 w-16 rounded blur-sm" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
