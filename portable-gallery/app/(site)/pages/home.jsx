import HeroSection from "@/components/HeroSection";
import GalleryGrid from "@/components/GalleryGrid";
import { photoPaths } from "@/lib/photos";

export default function HomePage() {
    return (
        <>
            <HeroSection title="Portable Gallery." />
            <GalleryGrid images={photoPaths} />
            <footer className="mt-16 text-center text-black">Jack Charles</footer>
        </>
    );
}
