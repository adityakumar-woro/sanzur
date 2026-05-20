import { useParams } from "react-router-dom";
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

export const PortfolioDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const portfolio = portfolioItems.find((item) => item.slug === slug);

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-[#12110f] text-white flex flex-col items-center justify-center gap-6 font-dm_sans">
        <p className="text-2xl font-light">Portfolio not found.</p>
        <a href="/portfolio" className="text-white/60 no-underline">Back to portfolio library</a>
      </div>
    );
  }

  return (
    <div className="bg-[#12110f] text-white font-dm_sans">
      <Navbar />
      <main>
        <header className="relative min-h-[58vh] px-5 md:px-8 pt-16 pb-10 flex items-end overflow-hidden">
          <img src={portfolio.pages[0]?.image} alt={portfolio.title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12110f] via-black/55 to-black/20" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-10 items-end w-full">
            <div>
              <p className="text-[#c9ad73] text-[11px] uppercase tracking-[0.18em] mb-5">
                Portfolio
              </p>
              <h1 className="font-newsreader font-light leading-[0.95]" style={{ fontSize: "clamp(3.8rem, 10vw, 10rem)" }}>
                {portfolio.title}
              </h1>
            </div>
            <div className="lg:pb-4">
              <a href={portfolio.pdf} target="_blank" rel="noreferrer" className="inline-flex text-white text-sm uppercase tracking-[0.16em] border-b border-white/40 pb-2 no-underline">
                Open portfolio
              </a>
            </div>
          </div>
        </header>

        <section className="px-5 md:px-8 py-14 md:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {portfolio.pages.map((page) => (
              <article key={page.number} className="bg-[#181613] border border-white/10 overflow-hidden">
                <img src={page.image} alt={`${portfolio.title} page ${page.number}`} className="w-full bg-white" loading="lazy" />
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
