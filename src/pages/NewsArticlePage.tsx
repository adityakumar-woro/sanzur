import { useParams } from "react-router-dom";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { articles } from "@/data/studio";

const BODY = [
  "The strongest rooms rarely announce every decision at once. They reveal themselves through proportion, transition, light, and the way a hand meets a surface.",
  "At Sanzur, our journal is where we unpack those decisions. We look at materials not as finishes, but as atmosphere. We study retail not as display, but as a sequence of pauses. We think about homes as rituals arranged in space.",
  "This note gathers the thinking behind a recurring studio belief: luxury becomes memorable when the design has enough confidence to leave room for silence.",
];

export const NewsArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const article = articles.find((item) => item.id === id);
  const related = articles.filter((item) => item.id !== id).slice(0, 3);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#12110f] text-white flex flex-col items-center justify-center gap-6 font-dm_sans">
        <p className="text-2xl font-light">Article not found.</p>
        <a href="/blogs" className="text-white/60 no-underline">Back to Blogs</a>
      </div>
    );
  }

  return (
    <div className="bg-[#12110f] text-white font-dm_sans">
      <Navbar />
      <main>
        <header className="relative min-h-[72vh] px-5 md:px-8 pt-16 pb-10 flex items-end overflow-hidden">
          <img src={article.image} alt={article.title} className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12110f] via-black/45 to-black/30" />
          <div className="relative z-10 max-w-5xl">
            <p className="text-[#c9ad73] text-[11px] uppercase tracking-[0.18em] mb-5">{article.category} · {article.date}</p>
            <h1 className="font-newsreader font-light leading-[0.98]" style={{ fontSize: "clamp(3.5rem, 9vw, 9rem)" }}>
              {article.title}
            </h1>
          </div>
        </header>

        <article className="bg-[#ebe5d8] text-[#12110f] px-5 md:px-8 py-20 md:py-28">
          <div className="max-w-3xl mx-auto">
            <p className="font-newsreader text-3xl md:text-5xl leading-tight mb-12">{article.excerpt}</p>
            <div className="space-y-7">
              {BODY.map((paragraph) => (
                <p key={paragraph} className="text-black/68 text-lg leading-relaxed">{paragraph}</p>
              ))}
            </div>
          </div>
        </article>

        <section className="px-5 md:px-8 py-20 md:py-28">
          <div className="flex items-end justify-between gap-8 mb-10">
            <h2 className="font-newsreader font-light text-5xl md:text-7xl">More Notes</h2>
            <a href="/blogs" className="text-white/55 no-underline text-sm uppercase tracking-[0.16em]">All blogs</a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {related.map((item) => (
              <a key={item.id} href={`/blogs/${item.id}`} className="no-underline text-white">
                <div className="aspect-[4/3] overflow-hidden bg-[#2a261f] mb-5">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover" />
                </div>
                <p className="text-white/38 text-[11px] uppercase tracking-[0.18em] mb-3">{item.category}</p>
                <h3 className="font-newsreader font-light text-3xl leading-none">{item.title}</h3>
              </a>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
