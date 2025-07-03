import AppLayout from '@/layouts/app-layout';
import { Head, Link } from '@inertiajs/react';
import { CheckIcon } from '@heroicons/react/24/outline';

const stappen = [
  { nummer: 1, label: 'Bekijk inschrijving' },
  { nummer: 2, label: 'Beoordelingscriteria' },
  { nummer: 3, label: 'Inschrijving beoordelen' },
  { nummer: 4, label: 'Beoordeling afronden' },
];

const huidigeStap = 2;

export default function Beoordelingscriteria({ inschrijving }) {
  return (
    <AppLayout breadcrumbs={[{ title: 'Beoordelingscriteria', href: '#' }]}>
      <Head title="Stap 2 – Beoordelingscriteria" />

      <div className="p-10 bg-[#F9F9F9] min-h-screen">
        <p className="text-sm text-[#28424F] mb-1">ICT Hardware voor onderwijsinstelling 1</p>
        <h1 className="text-4xl font-bold text-[#28424F] mb-6">{inschrijving.aanbieder ?? 'Leverancier 1'}</h1>

        {/* Hoofdblok met voortgang en inhoud */}
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

          {/* Titel en uitleg */}
          <h2 className="text-lg font-bold text-[#28424F] mb-2">Beoordelingscriteria bekijken</h2>
          <p className="text-xs text-[#28424F] mb-4">
            Bekijk hier de beoordelingscriteria en zie aan de hand van een voorbeeld of video hoe je ze toepast bij het beoordelen van inschrijvingen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="md:col-span-2 space-y-2">
              {[ 
                {
                  punten: '10 punten – Overtreft de verwachting',
                  tekst: 'Sterk en overtuigend antwoord. Duidelijke uitleg met voorbeelden. Laat zien dat de inschrijving echt meerwaarde biedt en goed aansluit op de doelstellingen.',
                },
                {
                  punten: '6 punten – Voldoet aan de verwachting',
                  tekst: 'Goed en compleet antwoord. Voldoende onderbouwing. Laat zien dat de inschrijving bijdraagt aan de doelstellingen, maar zonder extra meerwaarde.',
                },
                {
                  punten: '2 punten – Voldoet deels aan de verwachting',
                  tekst: 'Beperkt of onduidelijk antwoord. Mist onderbouwing of sluit maar deels aan op de vraag. Weinig tot matige meerwaarde zichtbaar.',
                },
                {
                  punten: '0 punten – Voldoet niet aan de verwachting',
                  tekst: 'Geen of zeer zwak antwoord. Geen onderbouwing of aansluiting op de vraag. Biedt geen zichtbare meerwaarde, of de vraag is niet beantwoord.',
                },
              ].map((item, idx) => (
                <div key={idx} className="border border-gray-200 bg-white p-2 rounded-xl text-xs">
                  <strong>{item.punten}</strong><br />
                  {item.tekst}
                </div>
              ))}
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-2 text-xs space-y-1">
              <div className="font-bold text-[#28424F]">Voorbeeldbeoordeling</div>
              <p><strong>Vraagstelling:</strong> Hoe organiseert u de levering en implementatie van 150 laptops binnen 3 weken, inclusief installatie en begeleiding?</p>
              <p><strong>Antwoord:</strong> We leveren binnen 3 weken, laptops zijn vooraf geconfigureerd. Installateurs zetten ze gebruiksklaar op locatie. Medewerkers krijgen een handleiding en instructiesessie van 1 uur. Problemen lossen we binnen 24 uur op via de servicedesk.</p>
              <p><strong>Beoordeling:</strong> 6 punten – Voldoet aan de verwachting.<br /><em>Toelichting:</em> Duidelijk en gestructureerd, sluit aan op de vraag.</p>
            </div>
          </div>
        </div>

        {/* Navigatieknoppen */}
       <div className="mt-6 flex justify-between">
            <Link
                href={route('inschrijving.bekijken', { inschrijving: inschrijving.id })}
                className="px-5 py-2 border border-[#F2B423] text-[#F2B423] rounded hover:bg-[#fff8e6] text-sm"
            >
                Vorige stap
            </Link>

            <div className="flex gap-2">
                <button
                type="button"
                className="px-5 py-2 border border-[#F2B423] text-[#F2B423] rounded hover:bg-[#fff8e6] text-sm"
                >
                Opslaan
                </button>

                <Link
                href={`/inschrijvingen/${inschrijving.id}/beoordelen`}
                className="px-5 py-2 bg-[#F2B423] text-white rounded hover:bg-[#d9a721] text-sm"
                >
                Volgende
                </Link>
            </div>
        </div>
      </div>
    </AppLayout>
  );
}