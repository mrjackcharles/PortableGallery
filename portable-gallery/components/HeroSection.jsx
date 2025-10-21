export default function HeroSection({ title, subtitle }) {
    return (
        <section className="flex flex-1 flex-col items-center justify-center pt-65">
            <h1 className="text-4xl font-semibold sm:text-7xl">{title}</h1>
            {subtitle ? <p className="mt-4 text-lg text-slate-800">{subtitle}</p> : null}
        </section>
    );
}
