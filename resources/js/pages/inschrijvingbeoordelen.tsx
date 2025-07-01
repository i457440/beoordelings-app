import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

const stappen = [
  { nummer: 1, label: 'Bekijk inschrijving' },
  { nummer: 2, label: 'Beoordelingscriteria' },
  { nummer: 3, label: 'Inschrijving beoordelen' },
  { nummer: 4, label: 'Beoordeling afronden' },
];

const huidigeStap = 3;

export default function InschrijvingBeoordelen({ inschrijving }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const vragen = [
    {
      titel: 'Levering en gebruiksklaar maken van hardware',
      doel: 'De inschrijver toont aan op welke wijze de hardware snel, zorgvuldig en gebruiksklaar wordt geleverd met minimale belasting voor de school.',
      document: 'Aanpak Levering & Installatie - ICT Hardware.pdf',
    },
    {
      titel: 'Beheer en onderhoud',
      doel: 'De inschrijver legt uit hoe het beheer van de hardware plaatsvindt, inclusief updates en reparaties.',
      document: 'Beheerplan ICT Hardware.pdf',
    },
    {
      titel: 'Duurzaamheid en levensduur',
      doel: 'De inschrijver onderbouwt de duurzaamheid van de hardware en hoe deze bijdraagt aan de levensduur.',
      document: 'Duurzaamheidsstrategie.pdf',
    },
    {
      titel: 'Prijs',
      doel: 'De inschrijver geeft inzicht in de prijsstelling en de verhouding tussen prijs en geleverde kwaliteit.',
      document: 'Prijsopgave ICT Hardware.pdf',
    },
  ];

  const [antwoorden, setAntwoorden] = useState(
    vragen.map(() => ({
      score: null,
      motivering: '',
    }))
  );

  const handleScoreChange = (vraagIndex: number, score: number) => {
    const nieuw = [...antwoorden];
    nieuw[vraagIndex].score = score;
    setAntwoorden(nieuw);
  };

  const handleMotiveringChange = (vraagIndex: number, tekst: string) => {
    const nieuw = [...antwoorden];
    nieuw[vraagIndex].motivering = tekst;
    setAntwoorden(nieuw);
  };

  return (
    <AppLayout breadcrumbs={[{ title: 'Inschrijving beoordelen', href: '#' }]}>
      <Head title="Stap 3 – Inschrijving beoordelen" />

      <div className="p-10 bg-[#F9F9F9] min-h-screen">
        <p className="text-sm text-[#28424F] mb-1">ICT Hardware voor onderwijsinstelling 1</p>
        <h1 className="text-4xl font-bold text-[#28424F] mb-6">
          {inschrijving.aanbieder ?? 'Leverancier 1'}
        </h1>

        <div className="bg-white border border-gray-200 rounded-xl flex flex-col max-h-[calc(82vh-200px)]">
          <div className="grid grid-cols-4 text-sm border-b border-gray-200">
            {stappen.map((stap) => {
              const isActief = stap.nummer === huidigeStap;
              const isVoltooid = stap.nummer < huidigeStap;

              return (
                <div
                  key={stap.nummer}
                  className={`flex items-center gap-2 px-6 py-4 ${
                    isActief ? 'bg-white' : 'bg-[#fefcf9]'
                  }`}
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

          <div className="p-6 overflow-y-auto flex-1">
            <h2 className="text-xl font-bold text-[#28424F] mb-2">Inschrijving beoordelen</h2>
            <p className="text-sm text-[#28424F] mb-4">Geef scores en voeg feedback toe</p>

            {vragen.map((vraag, index) => (
              <div key={index} className="border border-gray-200 rounded bg-[#fefaf5] mb-2">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex justify-between items-center px-4 py-3 text-left text-[#28424F] bg-[#FCFAF8] font-semibold text-sm"
                >
                  <span>Vraagstelling {index + 1} - {vraag.titel}</span>
                  {openIndex === index ? (
                    <ChevronUpIcon className="w-5 h-5 text-[#F2B423]" />
                  ) : (
                    <ChevronDownIcon className="w-5 h-5 text-[#F2B423]" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="p-4 grid grid-cols-1 md:grid-cols-3 gap-6 bg-[#FCFAF8] text-sm">
                    <div className="md:col-span-2 space-y-2">
                      <p><strong>Doelstelling:</strong> {vraag.doel}</p>
                      <p><strong>Ingeleverd document:</strong>{' '}
                        <a href="/storage/documents/voorbeeld.pdf" className="text-blue-600 underline">
                          {vraag.document}
                        </a>
                      </p>
                      <fieldset className="space-y-1">
                        <legend className="font-semibold">Beoordeling (Kies score):</legend>
                        {[10, 6, 2, 0].map((value) => (
                          <label key={value} className="flex items-center gap-2">
                            <input
                              type="radio"
                              name={`vraag-${index}`}
                              value={value}
                              checked={antwoorden[index].score === value}
                              onChange={() => handleScoreChange(index, value)}
                              className="accent-[#F2B423]"
                            />
                            {{
                              10: 'Overtreft verwachting (10)',
                              6: 'Voldoet aan verwachting (6)',
                              2: 'Deels voldoende (2)',
                              0: 'Voldoet niet (0)',
                            }[value]}
                          </label>
                        ))}
                      </fieldset>
                    </div>

                    <div>
                      <label className="block font-semibold mb-1">Motivering:</label>
                      <textarea
                        placeholder="Motivering..."
                        className="w-full h-32 border border-gray-300 rounded p-2 text-sm"
                        value={antwoorden[index].motivering}
                        onChange={(e) => handleMotiveringChange(index, e.target.value)}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-between">
          <Link
            href={route('inschrijving.beoordelingscriteria', { inschrijving: inschrijving.id })}
            className="px-5 py-2 border border-[#F2B423] text-[#F2B423] rounded hover:bg-[#fff8e6] text-sm"
          >
            Vorige stap
          </Link>
          <Link
            href={`/inschrijvingen/${inschrijving.id}/afronden`}
            className="px-5 py-2 bg-[#F2B423] text-white rounded hover:bg-[#d9a721] text-sm"
          >
            Volgende
          </Link>
        </div>
      </div>
    </AppLayout>
  );
}
