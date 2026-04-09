import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { PageWrapper } from "@/components/PageWrapper";
import { useInView } from "@/hooks/useInView";

const ALL_ARTICLES = [
  {
    id: "meet-anthoni",
    title: "Meet Anthoni: The Visionary Behind sanzur",
    category: "Studio",
    date: "Apr 2, 2024",
    image: "https://framerusercontent.com/images/76IaKs5JWcJKb3g9FTLbXakrkQ.jpeg",
    href: "/blogs/meet-anthoni",
  },
  {
    id: "top-3-bureau",
    title: "sanzur Nominated as Top 3 Architecture Bureau in Germany",
    category: "Award",
    date: "Jan 5, 2024",
    image: "https://framerusercontent.com/images/c7qpAUGpAVeH4OcIVA0bCOiQIV4.jpg",
    href: "/blogs/top-3-architecture-bureau",
  },
  {
    id: "latest-commercial",
    title: "Latest Commercial Design by sanzur",
    category: "Blog",
    date: "Dec 23, 2023",
    image: "https://framerusercontent.com/images/IjUpvkvBshn9VuR2lXanbUgCQK4.jpeg",
    href: "/blogs/latest-commercial-design",
  },
  {
    id: "work-culture",
    title: "How We Developed Our Work Culture",
    category: "Studio",
    date: "Nov 10, 2023",
    image: "https://framerusercontent.com/images/3T8vswzOiWNPxJn88d0s762Hzj8.jpg",
    href: "/blogs/how-we-developed-our-work-culture",
  },
  {
    id: "villa-248-nominated",
    title: "Villa 248 Nominated as Villa of the Year",
    category: "Award",
    date: "Sep 9, 2023",
    image: "https://framerusercontent.com/images/AiYrbO60VVnedMK5uD0iIfdFoW0.jpeg",
    href: "/blogs/villa-248-nominated-villa-of-the-year",
  },
];

const INITIAL_COUNT = 5;
const LOAD_MORE_COUNT = 3;

const EASE = [0.33, 1, 0.68, 1] as const;

const CATEGORY_COLORS: Record<string, string> = {
  Studio: "bg-stone-200 text-stone-700",
  Award: "bg-amber-100 text-amber-800",
  Blog: "bg-blue-50 text-blue-700",
};

export const NewsPage = () => {
  const [visible, setVisible] = useState(INITIAL_COUNT);
  const { ref: gridRef, inView: gridInView } = useInView({ threshold: 0.05 });
  const articles = ALL_ARTICLES.slice(0, visible);

  return (
    <div className="text-black text-xs font-normal bg-orange-50 font-sans_serif cursor-none-desktop">
      <CustomCursor />
      <PageWrapper>
        <div className="flex flex-col min-h-screen bg-orange-50">
          <Navbar />

          {/* ── HERO ── */}
          <header className="relative flex flex-col justify-end h-[50vh] md:h-[65vh] w-full overflow-hidden p-[30px]">
            <div className="absolute inset-0 z-0">
              <img
                src="https://framerusercontent.com/images/76IaKs5JWcJKb3g9FTLbXakrkQ.jpeg"
                alt=""
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 z-[1]" />
            <div className="relative z-[2] flex flex-col gap-y-3">
              <motion.p
                className="text-white/60 text-sm font-light tracking-widest uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              >
                Thoughts on design, trends &amp; behind the scenes
              </motion.p>
              <div className="overflow-hidden">
                <motion.h1
                  className="text-white font-light leading-[1.05]"
                  style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  Blogs
                </motion.h1>
              </div>
            </div>
          </header>

          {/* Intro */}
          <section className="w-full px-5 md:px-[30px] pt-[60px] pb-10">
            <motion.p
              className="text-black/60 text-base md:text-lg font-light font-dm_sans leading-relaxed max-w-[800px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              Dive into our latest thoughts on design, industry trends, and behind-the-scenes looks at our projects.
              Follow along as we share our journey and the inspirations behind our work.
            </motion.p>
          </section>

          {/* Featured Article */}
          {articles[0] && (
            <section className="w-full px-5 md:px-[30px] pb-[60px]">
              <motion.a
                href={articles[0].href}
                className="group block relative overflow-hidden aspect-[16/9] md:aspect-[21/9] bg-stone-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: EASE }}
              >
                <img
                  src={articles[0].image}
                  alt={articles[0].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 md:p-8 z-[2] flex flex-col gap-3">
                  <span
                    className={`self-start text-xs font-light font-dm_sans uppercase tracking-widest px-3 py-1 rounded-full ${
                      CATEGORY_COLORS[articles[0].category] ?? "bg-white/20 text-white"
                    }`}
                  >
                    {articles[0].category}
                  </span>
                  <h2
                    className="text-white font-light font-dm_sans leading-[1.15] max-w-2xl"
                    style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
                  >
                    {articles[0].title}
                  </h2>
                  <p className="text-white/60 text-sm font-light font-dm_sans">{articles[0].date}</p>
                </div>
              </motion.a>
            </section>
          )}

          {/* Articles Grid */}
          <section
            ref={gridRef as React.RefObject<HTMLElement>}
            className="w-full px-5 md:px-[30px] pb-[120px]"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articles.slice(1).map((article, i) => (
                <motion.a
                  key={article.id}
                  href={article.href}
                  className="group flex flex-col gap-4 no-underline"
                  initial={{ opacity: 0, y: 30 }}
                  animate={gridInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
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
                </motion.a>
              ))}
            </div>

            {visible < ALL_ARTICLES.length && (
              <motion.div
                className="flex justify-center mt-16"
                initial={{ opacity: 0 }}
                animate={gridInView ? { opacity: 1 } : {}}
                transition={{ delay: 0.4 }}
              >
                <button
                  onClick={() => setVisible((v) => Math.min(v + LOAD_MORE_COUNT, ALL_ARTICLES.length))}
                  className="border border-black text-black text-sm font-light font-dm_sans px-10 py-4 hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Load More
                </button>
              </motion.div>
            )}
          </section>

          {/* Newsletter */}
          <section className="w-full bg-[#6b6560] px-5 md:px-[30px] py-[60px]">
            <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-white font-light font-dm_sans text-base">Subscribe to Our Newsletter</p>
                <p className="text-white/60 text-sm font-light font-dm_sans">Stay updated with the latest from sanzur</p>
              </div>
              <div className="flex items-center gap-4 border-b border-white pb-2 w-full md:min-w-[320px] md:w-auto">
                <input
                  type="email"
                  placeholder="email"
                  className="bg-transparent text-white text-lg font-light font-dm_sans flex-1 outline-none placeholder:text-white/50"
                />
                <button className="flex items-center gap-2 text-white text-lg font-light font-dm_sans whitespace-nowrap hover:opacity-70 transition-opacity">
                  <img src="https://c.animaapp.com/mnitwnjzSfY2Kl/assets/icon-1.svg" alt="submit" className="w-5 h-[18px]" />
                  Submit
                </button>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </PageWrapper>
    </div>
  );
};
