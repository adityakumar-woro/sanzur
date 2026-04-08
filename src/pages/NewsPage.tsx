import { useState } from "react";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";

const ALL_ARTICLES = [
  {
    id: "meet-anthoni",
    title: "Meet Anthoni: The Visionary Behind sanzur",
    category: "Studio",
    date: "Apr 2, 2024",
    image: "https://framerusercontent.com/images/76IaKs5JWcJKb3g9FTLbXakrkQ.jpeg",
    href: "/news/meet-anthoni",
  },
  {
    id: "top-3-bureau",
    title: "sanzur Nominated as Top 3 Architecture Bureau in Germany",
    category: "Award",
    date: "Jan 5, 2024",
    image: "https://framerusercontent.com/images/c7qpAUGpAVeH4OcIVA0bCOiQIV4.jpg",
    href: "/news/top-3-architecture-bureau",
  },
  {
    id: "latest-commercial",
    title: "Latest Commercial Design by sanzur",
    category: "News",
    date: "Dec 23, 2023",
    image: "https://framerusercontent.com/images/IjUpvkvBshn9VuR2lXanbUgCQK4.jpeg",
    href: "/news/latest-commercial-design",
  },
  {
    id: "work-culture",
    title: "How We Developed Our Work Culture",
    category: "Studio",
    date: "Nov 10, 2023",
    image: "https://framerusercontent.com/images/3T8vswzOiWNPxJn88d0s762Hzj8.jpg",
    href: "/news/how-we-developed-our-work-culture",
  },
  {
    id: "villa-248-nominated",
    title: "Villa 248 Nominated as Villa of the Year",
    category: "Award",
    date: "Sep 9, 2023",
    image: "https://framerusercontent.com/images/AiYrbO60VVnedMK5uD0iIfdFoW0.jpeg",
    href: "/news/villa-248-nominated-villa-of-the-year",
  },
];

const INITIAL_COUNT = 5;
const LOAD_MORE_COUNT = 3;

const CATEGORY_COLORS: Record<string, string> = {
  Studio: "bg-stone-200 text-stone-700",
  Award: "bg-amber-100 text-amber-800",
  News: "bg-blue-50 text-blue-700",
};

export const NewsPage = () => {
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const articles = ALL_ARTICLES.slice(0, visible);

  return (
    <div className="bg-orange-50 font-sans_serif text-black text-xs flex flex-col min-h-screen">
      <Navbar />

      {/* ── HERO ── */}
      <header className="relative flex flex-col justify-end h-[50vh] md:h-[60vh] w-full overflow-hidden p-[30px]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://framerusercontent.com/images/76IaKs5JWcJKb3g9FTLbXakrkQ.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/50 z-[1]" />
        <div className="relative z-[2] flex flex-col gap-y-3">
          <p className="text-white/60 text-sm font-light font-dm_sans tracking-widest uppercase">
            Dive into our latest thoughts on design, industry trends, and behind-the-scenes looks at our projects.
          </p>
          <h1 className="text-white text-[56px] md:text-[96px] font-light font-dm_sans leading-[1.05]">
            News
          </h1>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        {/* Intro Text */}
        <section className="w-full bg-orange-50 px-[30px] pt-[60px] pb-10">
          <div className="max-w-[800px]">
            <p className="text-black/60 text-base md:text-lg font-light font-dm_sans leading-relaxed">
              Dive into our latest thoughts on design, industry trends, and behind-the-scenes looks at our projects. 
              Follow along as we share our journey and the inspirations behind our work.
            </p>
          </div>
        </section>

        {/* Featured Article */}
        {articles[0] && (
          <section className="w-full px-[30px] pb-[60px]">
            <a
              href={articles[0].href}
              className="group block relative overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-stone-200"
            >
              <img
                src={articles[0].image}
                alt={articles[0].title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 z-[2] flex flex-col gap-3">
                <span
                  className={`self-start text-xs font-light font-dm_sans uppercase tracking-widest px-3 py-1 rounded-full ${
                    CATEGORY_COLORS[articles[0].category] ?? "bg-white/20 text-white"
                  }`}
                >
                  {articles[0].category}
                </span>
                <h2 className="text-white text-2xl md:text-[40px] font-light font-dm_sans leading-[1.15] max-w-2xl">
                  {articles[0].title}
                </h2>
                <p className="text-white/60 text-sm font-light font-dm_sans">{articles[0].date}</p>
              </div>
            </a>
          </section>
        )}

        {/* Articles Grid */}
        <section className="w-full px-[30px] pb-20 flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((article) => (
              <a
                key={article.id}
                href={article.href}
                className="group flex flex-col gap-4 no-underline"
              >
                <div className="relative overflow-hidden aspect-[4/3] bg-stone-200 rounded-lg">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span
                      className={`text-xs font-light font-dm_sans uppercase tracking-widest px-3 py-1 rounded-full ${
                        CATEGORY_COLORS[article.category] ?? "bg-stone-100 text-stone-600"
                      }`}
                    >
                      {article.category}
                    </span>
                    <span className="text-black/40 text-xs font-light font-dm_sans">{article.date}</span>
                  </div>
                  <h3 className="text-black text-lg md:text-xl font-light font-dm_sans leading-[1.3] group-hover:opacity-60 transition-opacity duration-200">
                    {article.title}
                  </h3>
                </div>
              </a>
            ))}
          </div>

          {/* Load More Button */}
          {visible < ALL_ARTICLES.length && (
            <div className="flex justify-center mt-16">
              <button
                onClick={() => setVisible((v) => Math.min(v + LOAD_MORE_COUNT, ALL_ARTICLES.length))}
                className="border border-black text-black text-sm font-light font-dm_sans px-10 py-4 hover:bg-black hover:text-white transition-colors duration-300"
              >
                Load More
              </button>
            </div>
          )}
        </section>

        {/* Newsletter */}
        <section className="w-full bg-[#6b6560] px-[30px] py-[60px] mt-auto">
          <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
            <div className="flex flex-col gap-2">
              <p className="text-white font-light font-dm_sans text-base">Subscribe to Our Newsletter</p>
              <p className="text-white/60 text-sm font-light font-dm_sans">Stay updated with the latest from sanzur</p>
            </div>
            <div className="flex items-center gap-4 border-b border-white pb-2 md:min-w-[320px]">
              <input
                type="email"
                placeholder="email"
                className="bg-transparent text-white text-lg font-light font-dm_sans flex-1 outline-none placeholder:text-white/50"
              />
              <button className="flex items-center gap-2 text-white text-[21px] font-light font-dm_sans whitespace-nowrap hover:opacity-70 transition-opacity">
                <img
                  src="https://c.animaapp.com/mnitwnjzSfY2Kl/assets/icon-1.svg"
                  alt="submit"
                  className="w-5 h-[18px]"
                />
                Submit
              </button>
            </div>
          </div>
        </section>
      </div>

      {/* Footer - Always at the very bottom */}
      <Footer />
          </div>
  );
};