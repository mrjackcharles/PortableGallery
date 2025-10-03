import Image from "next/image";

const photoPaths = [
    "/photos/APC_0089.JPG",
    "/photos/IMG_2885.JPG",
    "/photos/10790228048_IMG_1569.JPG",
];

export default function Home() {
    const images = photoPaths.filter(Boolean);

    return (
        <div className="min-h-screen bg-[#BDCACB] text-slate-900">
            <nav className="flex h-[58px] items-center bg-[#534B62] px-6 text-lg tracking-wide text-white">
                <span className="font-semibold">Portable Gallery.</span>
            </nav>

            <main className="flex min-h-[calc(100vh-58px)] flex-col px-6 py-16 text-center">
                <div className="flex flex-1 flex-col items-center justify-center pt-65">
                    <h1 className="text-4xl font-semibold sm:text-7xl">Portable Gallery.</h1>
                </div>

                <div className="mx-auto mt-10 grid w-full grid-cols-3 gap-y-60 pt-79">
                    {images.map((src, index) => (
                        <div key={src} className="flex justify-center">
                            <div className="h-100 w-80 bg-black p-[20px] shadow-sm">
                                <div className="relative h-full w-full overflow-hidden rounded-lg bg-white">
                                    <Image
                                        src={src}
                                        alt={`Portable Gallery image ${index + 1}`}
                                        fill
                                        className="object-cover"
                                        sizes="(max-width: 768px) 33vw, 240px"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center text-black">Jack Charles</div>
            </main>
        </div>
    );
}
