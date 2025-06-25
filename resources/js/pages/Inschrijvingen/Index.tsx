import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import VergelijkModal from '@/components/VergelijkModal';

export default function InschrijvingenIndex() {
  const { props } = usePage();
  const inschrijvingen = props.inschrijvingen || [];
  const aanbesteding = props.aanbesteding;

  const [showVergelijkModal, setShowVergelijkModal] = useState(false);

  return (
    <AppLayout breadcrumbs={[{ title: 'Inschrijvingen', href: '#' }]}>
      <Head title="Inschrijvingen - Contractables" />

      <div className="p-8 bg-[#F9F9F9] min-h-screen">
        <h1 className="text-3xl font-bold text-[#28424F]" style={{ fontFamily: 'Titillium Web' }}>
          Inschrijvingen: <span className="font-normal">{aanbesteding.naam}</span>
        </h1>

        <div className="flex items-center justify-between">
          <p className="text-[#28424F]" style={{ fontFamily: 'Roboto' }}>
            Klik op een inschrijving om te starten met beoordelen. Je begint met het bekijken van de inschrijvingsdetails.
          </p>
          <button
            type="button"
            onClick={() => setShowVergelijkModal(true)}
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
              <div className="px-4 py-3 border-r border-gray-200">
                <div className="bg-gray-200 h-4 w-6 rounded blur-sm" />
              </div>
              <div className="px-4 py-3 border-r border-gray-200">{inschrijving.aanbieder}</div>
              <div className="px-4 py-3 border-r border-gray-200">
                <span className="bg-[#2AACCC] text-white px-2 py-1 rounded-full text-xs">0/4</span>
              </div>
              <div className="px-4 py-3 border-r border-gray-200">0</div>
              <div className="px-4 py-3 border-r border-gray-200">0</div>
              <div className="px-4 py-3 border-r border-gray-200">
                <div className="bg-gray-200 h-4 w-16 rounded blur-sm" />
              </div>
              <div className="px-4 py-3 border-r border-gray-200">
                <div className="bg-gray-200 h-4 w-20 rounded blur-sm" />
              </div>
              <div className="px-4 py-3">
                <div className="bg-gray-200 h-4 w-16 rounded blur-sm" />
              </div>
            </div>
          ))}
        </div>

        {/* Vergelijk Modal */}
        {showVergelijkModal && (
          <VergelijkModal onClose={() => setShowVergelijkModal(false)} title="Vergelijk documenten">
            <div className="flex gap-4">
              <iframe
                src="/storage/documents/leverancier-1.pdf"
                className="w-1/2 h-[600px] border"
              />
              <iframe
                src="/storage/documents/leverancier-2.pdf"
                className="w-1/2 h-[600px] border"
              />
            </div>
          </VergelijkModal>
        )}
      </div>
    </AppLayout>
  );
}
