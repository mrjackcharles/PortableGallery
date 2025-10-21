import Image from "next/image";

export default function GalleryGrid({ images = [] }) {
    return (
        <section className="mx-auto mt-10 grid w-full grid-cols-3 gap-y-60 pt-79">
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
        </section>
    );
}
