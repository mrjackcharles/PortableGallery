export default function SiteLayout({ children }) {
    return (
        <div className="min-h-screen bg-[#BDCACB] text-slate-900">
            <nav className="flex h-[58px] items-center bg-[#534B62] px-6 text-lg tracking-wide text-white">
                <span className="font-semibold">Portable Gallery.</span>
            </nav>
            <main className="flex min-h-[calc(100vh-58px)] flex-col px-6 py-16 text-center">
                {children}
            </main>
        </div>
    );
}
