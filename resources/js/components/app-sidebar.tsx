import { NavUser } from '@/components/nav-user';
import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader } from '@/components/ui/sidebar';
import { type NavItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { HomeIcon, ListCheck } from 'lucide-react';
import { LucideIcon } from 'lucide-react';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: HomeIcon,
    },
    {
        title: 'Aanbestedingen',
        href: '/aanbestedingen',
        icon: ListCheck,
    },
    {
        title: 'Beoordelingen',
        href: '/beoordelingen',
        icon: ListCheck,
    },
    {
        title: 'Hulp en uitleg',
        href: '/hulp',
        icon: ListCheck,
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
                    {mainNavItems.map((item) => (
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
                    ))}
                </nav>
            </SidebarContent>

            {/* Gebruiker onderaan */}
            <SidebarFooter className="mt-auto">
                <div className="border-t border-[#28424F]/10 pt-4">
                    <NavUser />
                </div>
            </SidebarFooter>
        </Sidebar>
    );
}
