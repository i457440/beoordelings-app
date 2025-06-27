import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';
import { ChevronDownIcon, ChevronUpIcon, EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';

export default function Hulp() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faq = [
    {
      vraag: 'Wat doe ik als ik mijn wachtwoord ben vergeten?',
      antwoord: 'Zoek contact op met Contractables zodat zij een nieuwe kunnen aanmaken voor jou.',
    },
    {
      vraag: 'Wat gebeurt er als ik te laat ben met beoordelen?',
      antwoord: 'Neem contact op met de contactpersoon. Mogelijk kun je nog indienen.',
    },
    {
      vraag: 'Kan ik een beoordeling veranderen nadat ik deze heb ingediend?',
      antwoord: 'Nee, na het indienen is je beoordeling definitief.',
    },
    {
      vraag: 'Hoe voeg ik iemand toe aan mijn team?',
      antwoord: 'Alleen medewerkers van Contractables kunnen teamleden toevoegen. Neem hiervoor contact op met Contractables via support@contractables.nl.',
    },
    {
      vraag: 'Moet ik altijd feedback geven?',
      antwoord: 'Ja, dit helpt om inzicht te geven in de beoordeling en is verplicht bij afwijzing.',
    },
  ];

  return (
    <AppLayout breadcrumbs={[{ title: 'Hulp en uitleg', href: '#' }]}> 
      <Head title="Hulp en uitleg" />

      <div className="p-10 bg-[#F9F9F9] min-h-screen">
        <h1 className="text-2xl font-bold text-[#28424F] mb-1">Hulp en uitleg</h1>
        <p className="text-sm text-[#28424F] mb-6">
          Gebruik je het platform maar af en toe? Geen zorgen, hier vind je alles terug.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
          {/* Linker kolom */}
          <div className="flex flex-col gap-6">
            {/* Tips & Best practices */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-[#28424F] mb-2">Tips & Best practices</h2>
              <p className="text-sm text-[#28424F]">
                <strong>Beoordeel gestructureerd en met vertrouwen</strong><br />
                • Beoordeel op basis van de beoordelingscriteria en de informatie uit de inschrijving.<br />
                • Gebruik korte feedback, ook als je weinig ervaring hebt: wat vond je sterk of zwak?<br />
               <br />
                <strong>Werk stap voor stap</strong><br />
                • Volg het platform en beoordeel één onderdeel tegelijk. Dit helpt bij het behouden van overzicht.<br />
                • Kom je er niet uit? Neem contact op via de gegevens hieronder.
              </p>
            </div>

            {/* Contact info */}
            <div className="bg-white border border-gray-200 rounded-xl p-6">
              <h2 className="text-lg font-bold text-[#28424F] mb-2">Contact en ondersteuning</h2>
              <ul className="text-sm text-[#28424F] space-y-1">
                <li className="flex items-center">
                  <EnvelopeIcon className="w-4 h-4 text-[#F2B423] mr-2" />
                  <a href="mailto:support@contractables.nl" className="underline">support@contractables.nl</a>
                </li>
                <li className="flex items-center">
                  <PhoneIcon className="w-4 h-4 text-[#F2B423] mr-2" />
                  030 - 123 4567
                </li>
                <li className="flex items-center">
                  <MapPinIcon className="w-4 h-4 text-[#F2B423] mr-2" />
                  Rooiseweg 12, 5481 SJ Schijndel
                </li>
              </ul>
            </div>
          </div>

          {/* Rechterkolom: FAQ */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 h-full">
            <h2 className="text-lg font-bold text-[#28424F] mb-4">Veel gestelde vragen (FAQ)</h2>
            <div className="space-y-2">
              {faq.map((item, index) => (
                <div key={index} className="border border-[#D9D9D9] rounded bg-[#FCFAF8]">
                  <button
                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                    className="w-full flex justify-between items-center px-4 py-3 text-left text-[#28424F] text-sm font-medium"
                  >
                    {item.vraag}
                    {openIndex === index ? (
                      <ChevronUpIcon className="w-5 h-5 text-[#F2B423]" />
                    ) : (
                      <ChevronDownIcon className="w-5 h-5 text-[#F2B423]" />
                    )}
                  </button>
                  {openIndex === index && (
                    <div className="px-4 pb-4 text-sm text-gray-700">
                      {item.antwoord}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}