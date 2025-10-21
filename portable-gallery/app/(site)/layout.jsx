import NavBar from "@/components/NavBar";

export default function SiteLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#BDCACB] text-slate-900">
            <NavBar />
            <main className="flex min-h-[calc(100vh-58px)] flex-col px-6 py-16 text-center">
                {children}
            </main>
        </div>
    );
}
