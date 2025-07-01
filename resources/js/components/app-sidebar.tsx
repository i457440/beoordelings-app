// AppSidebar.tsx
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
} from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import {
  HomeIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  InformationCircleIcon,
  DocumentIcon,
  ClipboardIcon,
  PencilSquareIcon,
  CheckCircleIcon,
} from '@heroicons/react/24/outline';

const mainNavItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: HomeIcon,
  },
  {
    title: 'Aanbestedingen',
    href: '/aanbestedingen',
    icon: DocumentTextIcon,
  },
  {
    title: 'Beoordelingen',
    href: '/beoordelingen',
    icon: ClipboardDocumentListIcon,
  },
  {
    title: 'Hulp en uitleg',
    href: '/hulp',
    icon: InformationCircleIcon,
  },
];

export function AppSidebar() {
  const { url } = usePage();

  const isBeoordelingRoute =
    url.includes('/inschrijvingen/') ||
    url.includes('/beoordelingscriteria') ||
    url.includes('/beoordelen') ||
    url.includes('/afronden');

  const activeStapIndex = (() => {
  if (url.includes('/beoordelingscriteria')) return 2;
  if (url.includes('/beoordelen')) return 3;
  if (url.includes('/afronden')) return 4;
  if (url.includes('/inschrijvingen/') && url.includes('/bekijken')) return 1;
  return null;
})();

  return (
    <Sidebar className="bg-white text-[#28424F] w-64 min-h-screen pt-4" collapsible="none" variant="inset">
      {/* Logo */}
      <SidebarHeader className="mb-5">
        <div className="flex justify-center">
          <Link href="/dashboard" className="inline-block">
            <img
              src="/images/logo-Contractables.png"
              alt="Contractables Logo"
              className="h-9"
            />
          </Link>
        </div>
      </SidebarHeader>

      {/* Navigatie */}
      <SidebarContent>
        <nav className="space-y-2 px-2">
          {mainNavItems.map((item) =>
            item.title === 'Beoordelingen' ? (
              <div
                key={item.href}
                className="flex items-center gap-3 px-4 py-2 rounded-md text-base font-medium opacity-30 cursor-not-allowed"
              >
                <item.icon className="w-5 h-5" />
                {item.title}
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`relative flex items-center w-full py-2 transition-colors ${
                  url.startsWith(item.href)
                    ? 'bg-white font-bold text-[#28424F]'
                    : 'hover:bg-[#FFF3D4] text-[#28424F]'
                }`}
              >
                {url.startsWith(item.href) && (
                  <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#F2B423]" />
                )}
                <div className="flex items-center gap-3 pl-5 pr-4 w-full z-10">
                  <item.icon className="w-5 h-5" />
                  {item.title}
                </div>
              </Link>
            )
          )}
        </nav>

        {/* Extra beoordelingsmenu zichtbaar op alle beoordelingsroutes */}
        {isBeoordelingRoute && (
          <div className="mt-10 border-t border-gray-200 pt-6 px-2">
            <h3 className="text-sm font-bold text-[#28424F] mb-2 px-3">Beoordelingstappen</h3>
            <ul className="text-xs space-y-1">
              {[1, 2, 3, 4].map((stap) => {
                const items = [
                  {
                    label: 'Stap 1 - Bekijk inschrijving',
                    icon: DocumentIcon,
                  },
                  {
                    label: 'Stap 2 - Beoordelingscriteria',
                    icon: ClipboardIcon,
                  },
                  {
                    label: 'Stap 3 - Beoordelen',
                    icon: PencilSquareIcon,
                  },
                  {
                    label: 'Stap 4 - Beoordeling afronden',
                    icon: CheckCircleIcon,
                  },
                ];

                const item = items[stap - 1];
                const isActive = activeStapIndex === stap;
                const isCompleted = activeStapIndex > stap;

                return (
                  <li
                    key={stap}
                    className={`relative flex items-center gap-2 px-3 py-2 rounded-md ${
                      isActive
                        ? 'bg-[#FEEFC7] text-[#28424F] font-semibold'
                        : isCompleted
                        ? 'text-[#28424F]'
                        : 'text-gray-400'
                    }`}
                  >
                    {isActive && (
                      <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#F2B423] rounded-l-md" />
                    )}
                    <item.icon className="w-4 h-4" />
                    {item.label}
                    {isCompleted && (
                      <span className="ml-auto text-green-500 text-lg">✓</span>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </SidebarContent>
    </Sidebar>
  );
}
