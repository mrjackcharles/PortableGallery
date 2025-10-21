export default function NavBar() {
    return (
        <nav className="bg-[#534B62] px-2 text-lg tracking-wide text-[#BDCACB]">
            <div className="relative mx-auto flex h-[58px] w-full items-center justify-center">
                <span className="font-semibold">Portable Gallery.</span>
                <span className="absolute right-1 text-sm font-medium text-[#BDCACB]">
                    0.1
                </span>
            </div>
        </nav>
    );
}
