import AppLayout from '@/layouts/app-layout';
import { Head, usePage } from '@inertiajs/react';
import { type Aanbesteding } from '@/types';
import { Link } from '@inertiajs/react';


export default function AanbestedingenIndex() {
  const { props } = usePage<{ aanbestedingen: Aanbesteding[] }>();
  const aanbestedingen = props.aanbestedingen || [];

  return (
    <AppLayout breadcrumbs={[{ title: 'Aanbestedingen', href: '/aanbestedingen' }]}>
      <Head title="Aanbestedingen" />

      <div className="p-8 bg-[#F9F9F9] min-h-screen">
        <h1 className="text-3xl font-bold text-[#28424F]" style={{ fontFamily: 'Titillium Web' }}>
            Aanbestedingen
        </h1>
        <p className="mt-2 text-[#28424F]" style={{ fontFamily: 'Roboto' }}>
          Bekijk hier alle actuele aanbestedingen en bijbehorende informatie.
        </p>

        {/* Tabel */}
        <div className="mt-8 w-full overflow-hidden rounded-xl border border-gray-200">
          <div className="grid grid-cols-[2fr_1fr_1fr_1fr] bg-[#F2B423] text-white font-semibold text-left">
            <div className="px-6 py-4 border-r border-white">Naam</div>
            <div className="px-6 py-4 border-r border-white">Contactpersoon</div>
            <div className="px-6 py-4 border-r border-white">Startdatum</div>
            <div className="px-6 py-4">Einddatum</div>
          </div>
          {aanbestedingen.map((aanbesteding) => (
            <Link
              key={aanbesteding.id}
              href={route('inschrijvingen.index', aanbesteding.id)}
              className="grid grid-cols-[2fr_1fr_1fr_1fr] bg-white text-[#28424F] border-t border-gray-200 hover:bg-gray-100 transition-colors"
            >
              <div className="px-6 py-4 border-r border-gray-200">{aanbesteding.naam}</div>
              <div className="px-6 py-4 border-r border-gray-200">{aanbesteding.contactpersoon}</div>
              <div className="px-6 py-4 border-r border-gray-200">{aanbesteding.startdatum}</div>
              <div className="px-6 py-4">{aanbesteding.einddatum}</div>
            </Link>
          ))}
        </div>
      </div>
    </AppLayout>
  );
}
