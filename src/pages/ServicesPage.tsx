import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { images, process, services } from "@/data/studio";

export const ServicesPage = () => {
  return (
    <div className="bg-[#12110f] text-white font-dm_sans">
      <Navbar />
      <main>
        <header className="relative min-h-[74vh] px-5 md:px-8 pt-16 pb-10 flex items-end overflow-hidden">
          <img src={images.editorialTwo} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12110f] via-black/45 to-black/30" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_430px] gap-10 items-end w-full">
            <div>
              <p className="text-white/55 text-[11px] uppercase tracking-[0.22em] mb-5">Services</p>
              <h1 className="font-newsreader font-light leading-[0.92]" style={{ fontSize: "clamp(4.5rem, 14vw, 14rem)" }}>Design & Delivery</h1>
            </div>
            <p className="text-white/75 text-lg leading-relaxed lg:pb-5">
              A complete studio service for clients who want a considered concept, a precise documentation process, and a polished final atmosphere.
            </p>
          </div>
        </header>

        <section className="bg-[#ebe5d8] text-[#12110f] px-5 md:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {services.map((service, index) => (
              <article key={service.name} className="grid grid-cols-1 md:grid-cols-[0.85fr_1fr] border border-black/12 bg-[#f4efe6]">
                <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
                  <img src={service.image} alt={service.name} className="h-full w-full object-cover" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-between gap-10 min-h-[320px]">
                  <span className="text-black/35">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h2 className="font-newsreader font-light text-4xl md:text-5xl leading-none mb-5">{service.name}</h2>
                    <p className="text-black/62 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative overflow-hidden px-5 md:px-8 py-20 md:py-28 bg-[#12110f]">
          <img src="/services/method-background.png" alt="" className="absolute inset-0 h-full w-full object-cover opacity-28" loading="lazy" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(18,17,15,0.96),rgba(18,17,15,0.78)_48%,rgba(18,17,15,0.9)),radial-gradient(circle_at_78%_22%,rgba(201,173,115,0.22),transparent_34%)]" />
          <div className="relative grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-14">
            <div>
              <p className="text-white/45 text-[11px] uppercase tracking-[0.22em] mb-5">Method</p>
              <h2 className="font-newsreader font-light text-5xl md:text-7xl leading-none">A disciplined path from feeling to form.</h2>
            </div>
            <div className="divide-y divide-white/12">
              {process.map((step, index) => (
                <div key={step} className="grid grid-cols-[56px_1fr] gap-5 py-7">
                  <span className="text-[#c9ad73]">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-light mb-2">{step}</h3>
                    <p className="text-white/52 leading-relaxed">
                      Each stage is reviewed with clear decisions, curated references, and documentation that keeps the design intent intact.
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
