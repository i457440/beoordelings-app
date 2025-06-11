import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function Aanbestedingen() {
  return (
    <AppLayout>
      <Head title="Aanbestedingen" />

      <div className="p-8 bg-[#F9F9F9] flex-1 overflow-auto">
        <h1 className="text-3xl font-bold text-[#28424F]" style={{ fontFamily: 'Titillium Web' }}>
          Aanbestedingen
        </h1>
        <p className="mt-2 text-[#28424F]" style={{ fontFamily: 'Roboto' }}>
          Klik op een aanbesteding om de bijbehorende inschrijvingen van leveranciers te bekijken.
        </p>
      </div>
    </AppLayout>
  );
}
