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

export const PortfolioPage = () => {
  return (
    <div className="bg-[#12110f] text-white font-dm_sans">
      <Navbar />
      <main>
        <header className="min-h-[54vh] px-5 md:px-8 pt-16 pb-10 flex flex-col justify-end">
          <p className="text-white/45 text-[11px] uppercase tracking-[0.22em] mb-5">Portfolio Collection</p>
          <h1 className="font-newsreader font-light leading-[0.92]" style={{ fontSize: "clamp(4.5rem, 14vw, 14rem)" }}>
            Portfolio
          </h1>
        </header>

        <section className="px-5 md:px-8 pb-16 md:pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {portfolioItems.map((item) => (
              <a key={item.slug} href={`/portfolio/${item.slug}`} className="no-underline text-white border border-white/12 bg-[#181613]">
                <div className="aspect-[16/10] overflow-hidden bg-[#2a261f]">
                  <img src={item.pages[0]?.image} alt={item.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-6 md:p-8">
                  <p className="text-[#c9ad73] text-[11px] uppercase tracking-[0.18em] mb-4">
                    Portfolio
                  </p>
                  <h2 className="font-newsreader font-light text-4xl md:text-6xl leading-none mb-5">
                    {item.title}
                  </h2>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
