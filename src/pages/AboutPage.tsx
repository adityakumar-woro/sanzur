import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { images } from "@/data/studio";

const VALUES = [
  ["01", "Restraint", "Luxury is edited until only the essential gesture remains."],
  ["02", "Material Memory", "Stone, timber, plaster, metal, and textile are chosen for how they age and hold light."],
  ["03", "Human Rhythm", "Every plan begins with the rituals, pace, and privacy of the people who will inhabit it."],
];

export const AboutPage = () => {
  return (
    <div className="bg-[#12110f] text-white font-dm_sans cursor-none-desktop">
      <CustomCursor />
      <Navbar />
      <main>
        <header className="relative min-h-[82vh] px-5 md:px-8 pt-24 pb-10 flex items-end overflow-hidden">
          <img src={images.aboutHome} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12110f] via-black/35 to-black/25" />
          <div className="relative z-10 max-w-6xl">
            <p className="text-white/55 text-[11px] uppercase tracking-[0.22em] mb-5">About Sanzur</p>
            <h1 className="font-newsreader font-light leading-[0.95]" style={{ fontSize: "clamp(4.2rem, 12vw, 12rem)" }}>
              A studio for quiet architectural luxury.
            </h1>
          </div>
        </header>

        <section className="bg-[#ebe5d8] text-[#12110f] px-5 md:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 lg:gap-20">
            <div className="aspect-[4/5] overflow-hidden">
              <img src={images.about} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col justify-between gap-12">
              <div>
                <p className="text-black/45 text-[11px] uppercase tracking-[0.22em] mb-5">Studio</p>
                <h2 className="font-newsreader font-light text-5xl md:text-7xl leading-none">
                  We design environments that feel inevitable, personal, and composed.
                </h2>
              </div>
              <p className="text-black/65 text-lg leading-relaxed max-w-2xl">
                Sanzur works across private villas, retail salons, hospitality concepts, and lifestyle spaces. Our approach blends interior architecture, bespoke detailing, and execution guidance so that every room carries the same calm intelligence from first sketch to final styling.
              </p>
            </div>
          </div>
        </section>

        <section className="px-5 md:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {VALUES.map(([number, title, text]) => (
              <div key={title} className="border border-white/12 p-6 md:p-8 min-h-[330px] flex flex-col justify-between">
                <span className="text-[#c9ad73]">{number}</span>
                <div>
                  <h3 className="font-newsreader font-light text-4xl mb-5">{title}</h3>
                  <p className="text-white/58 leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-[#ebe5d8] text-[#12110f] px-5 md:px-8 py-20 md:py-28">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[images.editorialOne, images.editorialThree, images.editorialFive, images.editorialSix].map((image, index) => (
              <div key={index} className="aspect-[3/4] overflow-hidden">
                <img src={image} alt="" className="h-full w-full object-cover" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 border-t border-black/15 pt-10">
            <div>
              <p className="text-5xl md:text-7xl font-newsreader font-light">50+</p>
              <p className="text-black/55 mt-2">Spaces shaped</p>
            </div>
            <div>
              <p className="text-5xl md:text-7xl font-newsreader font-light">4</p>
              <p className="text-black/55 mt-2">Core disciplines</p>
            </div>
            <div>
              <p className="text-5xl md:text-7xl font-newsreader font-light">1</p>
              <p className="text-black/55 mt-2">Integrated design language</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
