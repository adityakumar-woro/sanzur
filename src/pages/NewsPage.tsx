import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { articles } from "@/data/studio";

export const NewsPage = () => {
  const featured = articles[0];
  const rest = articles.slice(1);

  return (
    <div className="bg-[#12110f] text-white font-dm_sans cursor-none-desktop">
      <CustomCursor />
      <Navbar />
      <main>
        <header className="min-h-[62vh] px-5 md:px-8 pt-24 pb-10 flex flex-col justify-end">
          <p className="text-white/45 text-[11px] uppercase tracking-[0.22em] mb-5">Blogs</p>
          <h1 className="font-newsreader font-light leading-[0.92]" style={{ fontSize: "clamp(4.5rem, 14vw, 14rem)" }}>Journal</h1>
          <p className="text-white/68 text-lg md:text-xl leading-relaxed max-w-2xl mt-8">
            Notes on interior architecture, material restraint, retail experience, and the studio thinking behind our projects.
          </p>
        </header>

        <section className="px-5 md:px-8 pb-20 md:pb-28">
          <a href={`/blogs/${featured.id}`} className="group grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-8 no-underline text-white border-y border-white/12 py-8">
            <div className="aspect-[16/10] overflow-hidden bg-[#2a261f]">
              <img src={featured.image} alt={featured.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="flex flex-col justify-between gap-8">
              <div>
                <p className="text-[#c9ad73] text-[11px] uppercase tracking-[0.18em] mb-5">{featured.category} · {featured.date}</p>
                <h2 className="font-newsreader font-light text-5xl md:text-7xl leading-none group-hover:text-[#c9ad73] transition-colors">{featured.title}</h2>
              </div>
              <p className="text-white/58 text-lg leading-relaxed">{featured.excerpt}</p>
            </div>
          </a>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-8">
            {rest.map((article) => (
              <a key={article.id} href={`/blogs/${article.id}`} className="group no-underline text-white">
                <div className="aspect-[4/3] overflow-hidden bg-[#2a261f] mb-5">
                  <img src={article.image} alt={article.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <p className="text-white/38 text-[11px] uppercase tracking-[0.18em] mb-3">{article.category} · {article.date}</p>
                <h3 className="font-newsreader font-light text-3xl leading-none mb-4 group-hover:text-[#c9ad73] transition-colors">{article.title}</h3>
                <p className="text-white/52 leading-relaxed">{article.excerpt}</p>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
