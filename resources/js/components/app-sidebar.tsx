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
              className={`relative flex items-center w-full py-2 transition-colors ${
                url.startsWith(item.href)
                  ? 'bg-white font-bold text-[#28424F]'
                  : 'hover:bg-[#FFF3D4] text-[#28424F]'
              }`}
            >
              {/* Gele balk links bij actief */}
              {url.startsWith(item.href) && (
                <span className="absolute left-0 top-0 bottom-0 w-1 bg-[#F2B423]" />
              )}

              {/* Inhoud met padding */}
              <div className="flex items-center gap-3 pl-5 pr-4 w-full z-10">
                <item.icon className="w-5 h-5" />
                {item.title}
              </div>
            </Link>
            )
          )}
        </nav>
      </SidebarContent>
    </Sidebar>
  );
}
