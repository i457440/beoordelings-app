import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { AppSidebar } from '@/components/app-sidebar';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren, useState } from 'react';
import { BellIcon, UserIcon, Cog6ToothIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline';
import { usePage, Link, router } from '@inertiajs/react';
import { formatDistanceToNow } from 'date-fns';
import { nl } from 'date-fns/locale';


export default function AppSidebarLayout({ children, breadcrumbs = [] }: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {
    const { props } = usePage();
    const unreadNotifications = Array.isArray(props.unreadNotifications) ? props.unreadNotifications : [];
    const user = props.auth?.user;
    const [showUserDropdown, setShowUserDropdown] = useState(false);
    const [showNotifications, setShowNotifications] = useState(false);
    const [showNotificationsDropdown, setShowNotificationsDropdown] = useState(false);


    const handleLogout = () => {
        router.post(route('logout'));
    };

    const handleBellClick = () => {
        router.post(route('notifications.read'));
        setShowNotifications(!showNotifications);
    };

    return (
        <AppShell variant="sidebar">
            <AppSidebar />
            <AppContent variant="sidebar">
                <div className="bg-[#F2B423] px-7 py-5 flex justify-between items-center text-white mb-4 relative">
                    <div className="text-xl font-bold" style={{ fontFamily: 'Titillium Web, sans-serif' }}>
                        Keizer Karel College
                    </div>

                    <div className="flex items-center gap-4 pr-4 relative">
                        <span className="text-base font-bold" style={{ fontFamily: 'Roboto, sans-serif' }}>
                            {user?.name || 'Gebruiker'}
                        </span>

                        {/* Gebruiker dropdown */}
                        <div
                            className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer"
                            onClick={() => setShowUserDropdown(!showUserDropdown)}
                        >
                            <UserIcon className="w-5 h-5 text-[#F2B423]" />
                        </div>

                        {/* Belletje + dropdown */}
                        <div className="relative" onClick={() => setShowNotificationsDropdown(!showNotificationsDropdown)}
                        >
                        <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center cursor-pointer">
                            <BellIcon className="w-5 h-5 text-[#F2B423]" />
                        </div>
                        {unreadNotifications.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-red-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-semibold">
                            {unreadNotifications.length}
                            </span>
                        )}

                        {showNotificationsDropdown && (
                            <div className="absolute right-0 mt-2 w-80 bg-white text-[#28424F] rounded-xl shadow-lg z-50 pt-3 text-sm border border-gray-200">
                            <div className="px-4 font-bold mb-2">Meldingen</div>
                            <ul>
                                {unreadNotifications.map((n) => (
                                    <li key={n.id} className="px-4 py-2 border-t border-gray-100 text-sm">
                                        <div className="font-semibold">{n.title}</div>
                                        <div className="text-xs text-gray-600">{n.body}</div>
                                        <div className="text-[10px] text-gray-400 mt-1">{new Date(n.created_at).toLocaleString()}</div>
                                    </li>
                                ))}
                            </ul>
                            <button
                                onClick={() => {
                                router.post(route('notifications.read'));
                                setShowNotificationsDropdown(false);
                                }}
                                className="w-full text-center text-sm text-[#F2B423] cursor-pointer -600 py-2 border-t border-gray-200 hover:bg-[#F2B423] hover:text-white transition"
                            >
                                Markeer als gelezen
                            </button>
                            </div>
                        )}
                        </div>


                        {/* Dropdown menu gebruiker */}
                        {showUserDropdown && (
                            <div className="absolute right-0 top-14 w-64 bg-white text-[#28424F] rounded-xl shadow-lg z-50 pt-3 text-sm border border-gray-200">
                                <div className="px-4 pb-3 border-b border-gray-200">
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 bg-gray-200 text-[#28424F] flex items-center justify-center rounded-full text-lg font-bold">
                                            {user?.name?.charAt(0).toUpperCase()}
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-black">{user?.name}</div>
                                            <div className="text-xs text-gray-500">{user?.email}</div>
                                        </div>
                                    </div>
                                </div>

                                <Link
                                    href="/settings/profile"
                                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition cursor-pointer"
                                >
                                    <Cog6ToothIcon className="w-5 h-5" />
                                    <span className="text-sm">Instellingen</span>
                                </Link>

                                <button
                                    onClick={handleLogout}
                                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-100 transition cursor-pointer w-full text-left"
                                >
                                    <ArrowRightOnRectangleIcon className="w-5 h-5" />
                                    <span className="text-sm">Uitloggen</span>
                                </button>
                            </div>
                        )}
                    </div>
                </div>

                {children}
            </AppContent>
        </AppShell>
    );
}
