import { useParams } from "react-router-dom";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import portfolios from "@/data/portfolioExtracts.json";

type Portfolio = {
  slug: string;
  title: string;
  pdf: string;
  pageCount: number;
  embeddedImageCount: number;
  pages: { number: number; image: string; text: string }[];
  extractedImages: string[];
  summaryText: string;
};

const portfolioItems = portfolios as Portfolio[];

const projectLabels: Record<string, string[]> = {
  commercial: ["Bay Square Office", "Workplace Planning", "Joinery Details", "Reception and Lounge"],
  "concept-moodboard": ["Azu Restaurant", "Hospitality Moodboards", "Material Concepts", "Visual Direction"],
  complete: ["Mar Lounge", "Apple Tree Garden", "Villa 17", "Al Awadhi Jewellery", "Rebound", "Hanger", "Let's Padel"],
  villa: ["Hemant Ahuja Villa", "499 sqm planning", "Residential Details", "Spatial Flow"],
};

export const PortfolioDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const portfolio = portfolioItems.find((item) => item.slug === slug);

  if (!portfolio) {
    return (
      <div className="min-h-screen bg-[#12110f] text-white flex flex-col items-center justify-center gap-6 font-dm_sans">
        <p className="text-2xl font-light">Portfolio not found.</p>
        <a href="/portfolio" className="text-white/60 hover:text-white no-underline">Back to portfolio library</a>
      </div>
    );
  }

  const meaningfulText = portfolio.pages.filter((page) => page.text && page.text.length > 35);

  return (
    <div className="bg-[#12110f] text-white font-dm_sans cursor-none-desktop">
      <CustomCursor />
      <Navbar />
      <main>
        <header className="relative min-h-[76vh] px-5 md:px-8 pt-24 pb-10 flex items-end overflow-hidden">
          <img src={portfolio.pages[0]?.image} alt={portfolio.title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12110f] via-black/55 to-black/20" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-end w-full">
            <div>
              <p className="text-[#c9ad73] text-[11px] uppercase tracking-[0.18em] mb-5">
                {portfolio.pageCount} pages · {portfolio.embeddedImageCount} extracted images
              </p>
              <h1 className="font-newsreader font-light leading-[0.95]" style={{ fontSize: "clamp(3.8rem, 10vw, 10rem)" }}>
                {portfolio.title}
              </h1>
            </div>
            <div className="lg:pb-4">
              <p className="text-white/72 leading-relaxed mb-7">
                {portfolio.summaryText.replace(/\s+/g, " ").slice(0, 420)}...
              </p>
              <a href={portfolio.pdf} target="_blank" rel="noreferrer" className="inline-flex text-white text-sm uppercase tracking-[0.16em] border-b border-white/40 pb-2 no-underline hover:border-white">
                Open original portfolio
              </a>
            </div>
          </div>
        </header>

        <section className="bg-[#ebe5d8] text-[#12110f] px-5 md:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-12">
            <div>
              <p className="text-black/45 text-[11px] uppercase tracking-[0.22em] mb-5">Extracted Highlights</p>
              <h2 className="font-newsreader font-light text-5xl md:text-7xl leading-none">Content recovered from the portfolio.</h2>
            </div>
            <div className="flex flex-wrap gap-3 content-start">
              {(projectLabels[portfolio.slug] ?? []).map((label) => (
                <span key={label} className="border border-black/18 px-4 py-3 text-sm uppercase tracking-[0.12em] text-black/65">
                  {label}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="px-5 md:px-8 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
            <div>
              <p className="text-white/45 text-[11px] uppercase tracking-[0.22em] mb-4">Rendered Pages</p>
              <h2 className="font-newsreader font-light text-5xl md:text-7xl leading-none">Full Portfolio Experience</h2>
            </div>
            <p className="text-white/55 max-w-xl leading-relaxed">
              Every page has been rendered as a responsive website image, with extracted text shown below the corresponding spread where available.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {portfolio.pages.map((page) => (
              <article key={page.number} className="bg-[#181613] border border-white/10">
                <img src={page.image} alt={`${portfolio.title} page ${page.number}`} className="w-full bg-white" loading="lazy" />
                <div className="p-5">
                  <p className="text-[#c9ad73] text-[11px] uppercase tracking-[0.18em] mb-3">Page {String(page.number).padStart(2, "0")}</p>
                  {page.text ? (
                    <p className="text-white/58 leading-relaxed text-sm">{page.text}</p>
                  ) : (
                    <p className="text-white/30 leading-relaxed text-sm">Visual page with no extractable text layer.</p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#ebe5d8] text-[#12110f] px-5 md:px-8 py-20 md:py-28">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
            <div>
              <p className="text-black/45 text-[11px] uppercase tracking-[0.22em] mb-4">Extracted Images</p>
              <h2 className="font-newsreader font-light text-5xl md:text-7xl leading-none">Embedded Assets</h2>
            </div>
            <p className="text-black/58 max-w-xl leading-relaxed">
              These are the individual images extracted from the source file in addition to the rendered page layouts.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {portfolio.extractedImages.map((image, index) => (
              <div key={image} className="aspect-square overflow-hidden bg-[#d8ccba]">
                <img src={image} alt={`${portfolio.title} extracted image ${index + 1}`} className="h-full w-full object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </section>

        <section className="px-5 md:px-8 py-20 md:py-28">
          <div className="max-w-4xl">
            <p className="text-white/45 text-[11px] uppercase tracking-[0.22em] mb-5">Text Index</p>
            <h2 className="font-newsreader font-light text-5xl md:text-7xl leading-none mb-10">Readable Extract</h2>
            <div className="space-y-6">
              {meaningfulText.slice(0, 14).map((page) => (
                <div key={page.number} className="border-t border-white/12 pt-5">
                  <p className="text-[#c9ad73] text-sm mb-2">Page {page.number}</p>
                  <p className="text-white/62 leading-relaxed">{page.text}</p>
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
