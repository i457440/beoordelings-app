import AppLayout from '@/layouts/app-layout';
import { Link } from '@inertiajs/react';
import { type BreadcrumbItem } from '@/types';
import { Head, usePage } from '@inertiajs/react';
import { useState } from 'react';
import {startOfMonth,endOfMonth,startOfWeek,endOfWeek,addDays,addMonths,subMonths,format,isSameMonth,isSameDay} from 'date-fns';

type Aanbesteding = {
  id: number;
  naam: string;
  einddatum: string;
};

const breadcrumbs: BreadcrumbItem[] = [
  { title: 'Dashboard', href: '/dashboard' },
];


export default function Dashboard() {
  const { props } = usePage<{ aanbestedingen: Aanbesteding[] }>();
    const user = props.auth?.user;
    const aanbestedingen = props.aanbestedingen || [];  

  const [currentMonth, setCurrentMonth] = useState(new Date());

  const renderHeader = () => (
    <div className="flex justify-between items-center mb-4">
      <button onClick={() => setCurrentMonth(subMonths(currentMonth, 1))} className="text-[#28424F] font-bold text-lg">←</button>
      <h2 className="text-lg font-semibold text-[#28424F]">
        {format(currentMonth, 'MMMM yyyy')}
      </h2>
      <button onClick={() => setCurrentMonth(addMonths(currentMonth, 1))} className="text-[#28424F] font-bold text-lg">→</button>
    </div>
  );

  const renderDays = () => {
    const days = [];
    const startDate = startOfWeek(currentMonth);
    for (let i = 0; i < 7; i++) {
      days.push(
        <div key={i} className="text-sm font-medium text-[#28424F] text-center">
          {format(addDays(startDate, i), 'EEE')}
        </div>
      );
    }
    return <div className="grid grid-cols-7 mb-2">{days}</div>;
  };

  const renderCells = () => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;

    while (day <= endDate) {
      for (let i = 0; i < 7; i++) {
        const isCurrentMonth = isSameMonth(day, monthStart);
        const isToday = isSameDay(day, new Date());

        days.push(
          <div
            key={day.toString()}
            className={`text-center py-1 text-sm rounded-md ${
              isCurrentMonth ? 'text-[#28424F]' : 'text-gray-300'
            } ${isToday ? 'bg-[#F2B423] text-white' : 'hover:bg-gray-100'}`}
          >
            {format(day, 'd')}
          </div>
        );

        day = addDays(day, 1);
      }

      rows.push(
        <div key={day.toString()} className="grid grid-cols-7 gap-1">
          {days}
        </div>
      );

      days = [];
    }

    return <div className="space-y-1">{rows}</div>;
  };

  return (
    <AppLayout breadcrumbs={breadcrumbs}>
      <Head title="Dashboard" />

      <div className="p-8 bg-[#F9F9F9] flex-1 overflow-auto">
        {/* Welkomtekst */}
        <h1 className="text-3xl font-bold text-[#28424F]" style={{ fontFamily: 'Titillium Web' }}>
          Welkom, {user?.name || 'Gebruiker'}
        </h1>
        <p className="mt-2 text-[#28424F]" style={{ fontFamily: 'Roboto' }}>
          Hieronder zie je jouw lopende aanbestedingen en de status van je beoordelingen. Klik op een aanbesteding om de inschrijvingen te bekijken en via daar het beoordelingsproces te starten.
        </p>

        {/* Tabel iets langer gemaakt */}
        <div className="mt-8 w-4/5 overflow-hidden rounded-xl border border-gray-200">
          <div className="grid grid-cols-[2fr_1fr_1fr] bg-[#F2B423] text-white font-semibold text-left">
            <div className="px-6 py-4 border-r border-white">Lopende aanbestedingen</div>
            <div className="px-6 py-4 border-r border-white">Status</div>
            <div className="px-6 py-4">Einddatum</div>
          </div>
          {aanbestedingen.map((aanbesteding) => (
            <Link
                key={aanbesteding.id}
                href="/aanbestedingen"
                className="grid grid-cols-[2fr_1fr_1fr] bg-white text-[#28424F] text-left border-t border-gray-200 hover:bg-gray-100 transition-colors"
            >
                <div className="px-6 py-4 border-r border-gray-200">{aanbesteding.naam}</div>
                <div className="px-6 py-4 border-r border-gray-200">Nog te beoordelen</div>
                <div className="px-6 py-4">{aanbesteding.einddatum}</div>
            </Link>
          ))}
        </div>

        {/* Kalender */}
        <div className="mt-10 w-full max-w-md bg-white p-4 rounded-xl border border-gray-200">
          {renderHeader()}
          {renderDays()}
          {renderCells()}
        </div>
      </div>
    </AppLayout>
  );
}
