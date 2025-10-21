import Image from "next/image";

const captions = ["Green", "Creme", "Blue"];

export default function GalleryGrid({ images = [] }) {
    return (
        <section className="mx-auto mt-[22vh] grid w-full max-w-5xl grid-cols-1 gap-12 sm:mt-[24vh] sm:grid-cols-2 lg:mt-[26vh] lg:grid-cols-3">
            {images.map((src, index) => (
                <div key={src} className="flex flex-col items-center gap-4">
                    <div className="w-full max-w-xs bg-[#F9FAFB] p-5 shadow-sm">
                        <div className="relative aspect-[3/4] w-full overflow-hidden bg-white">
                            <Image
                                src={src}
                                alt={`Portable Gallery image ${index + 1}`}
                                fill
                                className="object-cover"
                                sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 240px"
                            />
                        </div>
                    </div>
                    <span className="inline-block rounded bg-[#1f2933] px-4 py-2 text-sm font-medium text-white">
                        {captions[index] ?? "Untitled"}
                    </span>
                </div>
            ))}
        </section>
    );
}
