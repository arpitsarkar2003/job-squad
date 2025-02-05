import { useEffect, useState } from "react";
import DashboardSidebar from "./components/DashboardSidebar";
import { Outlet, useLocation } from "react-router";

const DashboardLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [currentRole, setCurrentRole] = useState('candidate');
    const location = useLocation();

    useEffect(() => {
        const path = location.pathname;
        if (path.includes('/dashboard/company')) {
            setCurrentRole('company');
        } else if (path.includes('/dashboard/admin')) {
            setCurrentRole('admin');
        } else {
            setCurrentRole('candidate');
        }
    }, [location]);

    return (
        <div className="flex h-[90vh] border-t container mx-auto">
            {/* Sidebar */}
            <div className="border-r">
                <DashboardSidebar open={sidebarOpen} setOpen={setSidebarOpen} role={currentRole} />
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col overflow-hidden">
                <header className=" shadow-sm lg:hidden">
                    <div className="p-4">
                        <button
                            onClick={() => setSidebarOpen(true)}
                            className="text-gray-500 focus:outline-none"
                        >
                            <svg
                                className="h-6 w-6"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </header>

                <main className="flex-1 overflow-x-hidden overflow-y-auto scrollbar-hide relative">
                    <div className="container mx-auto px-6 py-8">
                        <Outlet />
                    </div>

                    {/* Blur Effect at Bottom */}
                    <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-white to-white/80 blur-md pointer-events-none"></div>
                </main>
            </div>
        </div>
    );
};

export default DashboardLayout;