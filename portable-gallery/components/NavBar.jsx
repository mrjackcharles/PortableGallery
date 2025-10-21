export default function NavBar() {
    return (
        <nav className="bg-[#534B62] px-2 text-lg tracking-wide text-[#BDCACB]">
            <div className="relative mx-auto flex h-[58px] w-full items-center justify-center sm:justify-start">
                <span className="font-semibold sm:ml-2 sm:mr-auto">Portable Gallery.</span>
                <span className="absolute right-1 text-sm font-medium text-[#BDCACB] sm:static sm:ml-0 sm:mr-2 sm:translate-x-0">
                    0.1
                </span>
            </div>
        </nav>
    );
}
