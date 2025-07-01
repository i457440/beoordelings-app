import { useState } from 'react';
import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { FileText, CheckCircle } from 'lucide-react';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';

export default function InschrijvingBekijken({ inschrijving }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const vragen = [
    'Levering en gebruiksklaar maken van hardware',
    'Beheer en onderhoud',
    'Duurzaamheid en levensduur',
    'Prijs',
  ];

  const stappen = [
    { nummer: 1, label: 'Bekijk inschrijving' },
    { nummer: 2, label: 'Beoordelingscriteria' },
    { nummer: 3, label: 'Inschrijving beoordelen' },
    { nummer: 4, label: 'Beoordeling afronden' },
  ];

  const huidigeStap = 1;

  return (
    <AppLayout breadcrumbs={[{ title: 'Inschrijving bekijken', href: '#' }]}> 
      <Head title={`Inschrijving - ${inschrijving.aanbieder}`} />

      <div className="p-10 bg-[#F9F9F9] min-h-screen">
        <p className="text-sm text-[#28424F] mb-1">ICT Hardware voor onderwijsinstelling 1</p>
        <h1 className="text-4xl font-bold text-[#28424F] mb-6">{inschrijving.aanbieder ?? 'Leverancier 1'}</h1>

        {/* Hoofdblok met stappen én inhoud */}
        <div className="bg-white border border-gray-200 rounded-xl p-6">
          {/* Visuele voortgang */}
          <div className="grid grid-cols-4 text-sm border-b border-gray-200 -m-6 mb-6 rounded-t-xl overflow-hidden">
            {stappen.map((stap) => {
              const isActief = stap.nummer === huidigeStap;
              const isVoltooid = stap.nummer < huidigeStap;

              return (
                <div
                  key={stap.nummer}
                  className={`flex items-center gap-2 px-6 py-4 ${isActief ? 'bg-white' : 'bg-[#fefcf9]'}`}
                >
                  <div
                    className={`w-6 h-6 flex items-center justify-center rounded-full text-sm font-bold border ${
                      isVoltooid
                        ? 'text-green-500 border-green-500'
                        : isActief
                        ? 'text-[#F2B423] border-[#F2B423]'
                        : 'text-gray-400 border-gray-300'
                    }`}
                  >
                    {isVoltooid ? (
                      <CheckIcon className="w-4 h-4" />
                    ) : (
                      stap.nummer
                    )}
                  </div>
                  <span
                    className={
                      isVoltooid
                        ? 'text-green-500'
                        : isActief
                        ? 'text-[#F2B423] font-semibold'
                        : 'text-gray-400'
                    }
                  >
                    {stap.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Inhoud */}
          <h2 className="text-xl font-bold text-[#28424F] mb-2">Inschrijving inzien</h2>
          <p className="text-sm text-[#28424F] mb-4">
            Hier kun je de details bekijken van wat de leverancier heeft ingeleverd en kijken of het compleet is.
          </p>

          <div className="space-y-2">
            {vragen.map((vraag, index) => (
              <div key={index} className="border border-[#D9D9D9] rounded bg-[#FCFAF8]">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left text-[#28424F] font-semibold text-sm"
                >
                  <span>Vraag stelling {index + 1} - {vraag}</span>
                  {openIndex === index ? (
                    <ChevronUpIcon className="w-5 h-5 text-[#F2B423]" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-[#F2B423]" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-4 text-sm text-gray-700 space-y-2">
                    <div className="flex items-center gap-2">
                      <FileText size={16} className="text-gray-600" />
                      <span>
                        <strong>Document:</strong>{' '}
                        <a
                          href="/storage/documents/leverancier-1.pdf"
                          target="_blank"
                          className="text-blue-600 underline"
                        >
                        Aanpak Levering & Installatie - ICT Hardware.pdf
                        </a>{' '}
                        (Bekijk of download)
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-green-700">
                      <CheckCircle size={16} />
                      <span><strong>Status:</strong> Compleet – documenten is correct ingeleverd.</span>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Actieknoppen buiten het witte blok */}
        <div className="mt-6 flex justify-end gap-4">
          <button className="px-5 py-2 border border-[#F2B423] text-[#F2B423] rounded hover:bg-[#fff8e6] text-sm">
            Opslaan
          </button>
          <Link
            href={route('inschrijving.beoordelingscriteria', { inschrijving: inschrijving.id })}
            className="px-5 py-2 bg-[#F2B423] text-white rounded hover:bg-[#d9a721] text-sm"
          >
            Volgende
          </Link>
        </div>
      </div>
    </AppLayout>
  );
}
