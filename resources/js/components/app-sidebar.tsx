import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import {
  HomeIcon,
  DocumentTextIcon,
  ClipboardDocumentListIcon,
  InformationCircleIcon,
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

  return (
    <Sidebar className="bg-white text-[#28424F] w-64 min-h-screen p-6" collapsible="none" variant="inset">
      {/* Logo bovenaan gecentreerd */}
      <SidebarHeader className="mb-10">
        <div className="flex justify-center">
          <Link href="/dashboard" className="inline-block">
            <img
              src="/images/logo-Contractables.png"
              alt="Contractables Logo"
              className="h-10"
            />
          </Link>
        </div>
      </SidebarHeader>

      {/* Navigatie-items */}
      <SidebarContent>
        <nav className="space-y-2">
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
                className={`flex items-center gap-3 px-4 py-2 rounded-md text-base font-medium transition-colors hover:bg-[#F2B423]/10 ${
                  url.startsWith(item.href) ? 'bg-[#F2B423]/20' : ''
                }`}
              >
                <item.icon className="w-5 h-5" />
                {item.title}
              </Link>
            )
          )}
        </nav>
      </SidebarContent>
    </Sidebar>
  );
}
