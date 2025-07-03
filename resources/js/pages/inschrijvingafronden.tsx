import AppLayout from '@/layouts/app-layout';
import { Head, Link, usePage } from '@inertiajs/react';
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const stappen = [
  { nummer: 1, label: 'Bekijk inschrijving' },
  { nummer: 2, label: 'Beoordelingscriteria' },
  { nummer: 3, label: 'Inschrijving beoordelen' },
  { nummer: 4, label: 'Beoordeling afronden' },
];

const huidigeStap = 4;

export default function InschrijvingAfronden() {
  const { props } = usePage();
  const inschrijving = props.inschrijving;
  const antwoorden = props.antwoorden || [];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <AppLayout breadcrumbs={[{ title: 'Beoordeling afronden', href: '#' }]}>
      <Head title="Stap 4 – Beoordeling afronden" />

      <div className="p-10 bg-[#F9F9F9] min-h-screen">
        <p className="text-sm text-[#28424F] mb-1">ICT Hardware voor onderwijsinstelling 1</p>
        <h1 className="text-4xl font-bold text-[#28424F] mb-6">
          {inschrijving?.aanbieder ?? 'Leverancier 1'}
        </h1>

        <div className="bg-white border border-gray-200 rounded-xl p-6">
          {/* Visuele voortgangsbalk */}
          <div className="-m-6 mb-6 rounded-t-xl border-b border-gray-200 grid grid-cols-4 text-sm overflow-hidden">
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
                    {isVoltooid ? <CheckIcon className="w-4 h-4" /> : stap.nummer}
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-[#28424F] mb-2">Afronding van beoordeling</h2>
              <p className="text-sm text-[#28424F] mb-4">Controleer je beoordeling en bevestig je keuzes.</p>

              {antwoorden.map((antwoord: any, index: number) => (
                <div key={index} className="border border-gray-200 rounded">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex justify-between items-center px-4 py-3 text-left text-[#28424F] bg-[#FCFAF8] font-semibold text-sm"
                  >
                    <span>Vraagstelling {index + 1}</span>
                    {openIndex === index ? (
                      <ChevronUpIcon className="w-5 h-5 text-[#F2B423]" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-[#F2B423]" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-4 py-2 text-sm bg-white space-y-2">
                      <p>
                        <strong>Score:</strong>{' '}
                        <span className="inline-block bg-[#F2B423] text-white px-2 rounded">
                          {antwoord.score}
                        </span>
                      </p>
                      <p><strong>Motivering:</strong> {antwoord.motivering}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-10 md:pt-9">
              <label className="block font-semibold">Opmerkingen over deze inschrijving:</label>
              <textarea
                className="w-full h-32 border border-gray-300 rounded p-2 text-sm"
                placeholder="Opmerking......."
              />

              <div>
                <a href="/downloads/rapportage.pdf" className="text-[#F2B423] text-sm underline">
                  Download rapportage 📥
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex justify-between">
            <Link
                href={route('inschrijving.beoordelen', { inschrijving: inschrijving.id })}
                className="px-5 py-2 border border-[#F2B423] text-[#F2B423] rounded hover:bg-[#fff8e6] text-sm"
            >
                Vorige stap
            </Link>

            <div className="flex gap-2">
                <button
                type="button"
                className="px-5 py-2 border border-[#F2B423] text-[#F2B423] rounded hover:bg-[#fff8e6] text-sm"
                onClick={() => console.log('Opslaan geklikt')} // Vervang met je opslaafunctie
                >
                Opslaan
                </button>

                <button
                className="px-5 py-2 bg-[#F2B423] text-white rounded hover:bg-[#d9a721] text-sm"
                >
                Afronden
                </button>
            </div>
        </div>

      </div>
    </AppLayout>
  );
}
