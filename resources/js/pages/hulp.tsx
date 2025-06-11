import AppLayout from '@/layouts/app-layout';
import { Head } from '@inertiajs/react';

export default function hulp() {
  return (
    <AppLayout>
      <Head title="Hulp en uitleg" />

      <div className="p-8 bg-[#F9F9F9] flex-1 overflow-auto">
        <h1 className="text-3xl font-bold text-[#28424F]" style={{ fontFamily: 'Titillium Web' }}>
          Hulp en uitleg
        </h1>
        <p className="mt-2 text-[#28424F]" style={{ fontFamily: 'Roboto' }}>
          Gebruik je het platform maar af en toe? Geen zorgen, hier vind je alles terug.
        </p>
      </div>
    </AppLayout>
  );
}
