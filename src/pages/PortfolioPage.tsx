import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import portfolios from "@/data/portfolioExtracts.json";

type Portfolio = {
  slug: string;
  title: string;
  pdf: string;
  pageCount: number;
  embeddedImageCount: number;
  pages: { number: number; image: string; text: string }[];
};

const portfolioItems = portfolios as Portfolio[];

const descriptions: Record<string, string> = {
  commercial: "Commercial design experience centered on Bay Square Office, workplace planning, technical drawings, bespoke joinery, reception, lounge, and bar details.",
  "concept-moodboard": "Concept moodboards and hospitality direction, including Azu Restaurant and material-led visual narratives.",
  complete: "A broad UAE portfolio covering Mar Lounge, Apple Tree Garden, Villa 17, Al Awadhi Jewellery, Rebound, Hanger, and Let's Padel.",
  villa: "Residential villa experience led by Ahuja Villa, spatial planning, interior detailing, and refined material direction.",
};

export const PortfolioPage = () => {
  return (
    <div className="bg-[#12110f] text-white font-dm_sans">
      <Navbar />
      <main>
        <header className="min-h-[66vh] px-5 md:px-8 pt-24 pb-10 flex flex-col justify-end">
          <p className="text-white/45 text-[11px] uppercase tracking-[0.22em] mb-5">Portfolio Collection</p>
          <h1 className="font-newsreader font-light leading-[0.92]" style={{ fontSize: "clamp(4.5rem, 14vw, 14rem)" }}>
            Portfolio Library
          </h1>
        </header>

        <section className="px-5 md:px-8 pb-20 md:pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {portfolioItems.map((item, index) => (
              <a key={item.slug} href={`/portfolio/${item.slug}`} className="no-underline text-white border border-white/12 bg-[#181613]">
                <div className="aspect-[16/10] overflow-hidden bg-[#2a261f]">
                  <img src={item.pages[0]?.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-[#c9ad73] text-[11px] uppercase tracking-[0.18em] mb-4">
                    {String(index + 1).padStart(2, "0")} · {item.pageCount} pages · {item.embeddedImageCount} images
                  </p>
                  <h2 className="font-newsreader font-light text-4xl md:text-6xl leading-none mb-5">
                    {item.title}
                  </h2>
                  <p className="text-white/58 leading-relaxed">{descriptions[item.slug]}</p>
                </div>
              </a>
            ))}
          </div>
        </section>

        <section className="bg-[#ebe5d8] text-[#12110f] px-5 md:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12">
            <div>
              <p className="text-black/45 text-[11px] uppercase tracking-[0.22em] mb-5">Studio Content</p>
              <h2 className="font-newsreader font-light text-5xl md:text-7xl leading-none">Profile, skills, projects, drawings, and visual direction.</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {["11+ years design experience", "Residential, commercial, mixed-use and planning", "Client presentation, concept development, AutoCAD", "Material selection, technical detailing, project management"].map((item) => (
                <div key={item} className="border-t border-black/20 pt-5 text-black/68 text-lg leading-relaxed">
                  {item}
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
