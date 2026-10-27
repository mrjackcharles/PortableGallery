import localFont from "next/font/local";
import HeroSection from "@/components/HeroSection";
import GalleryGrid from "@/components/GalleryGrid";
import { photos } from "@/lib/photos";

const rubikPuddles = localFont({
    src: "../../fonts/RubikPuddles-Regular.ttf",
    display: "swap",
});

export default function HomePage() {
    return (
        <>
            <HeroSection title="Portable Gallery." />
            <div
                className="h-[24vh] shrink-0 sm:h-[22vh] lg:h-[26vh]"
                aria-hidden="true"
            />
            <GalleryGrid images={photos} />
            <footer className={`mt-50 text-center text-base text-black ${rubikPuddles.className}`}>
                J.P.C
            </footer>
        </>
    );
}
