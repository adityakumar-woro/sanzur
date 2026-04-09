import { useParams } from "react-router-dom";
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
    body: [
      "Anthoni Gantzmann, the principal architect and founder of sanzur, has always believed that architecture is more than a profession — it is a calling. Growing up in Berlin surrounded by a rich tapestry of historical and modern architecture, Anthoni developed an early sensitivity to the way spaces shape human experience.",
      "After completing his studies at the Berliner Hochschule and a formative period at an award-winning studio in Tokyo, Anthoni returned to Europe with a refined design language: one that respects the past while embracing the possibilities of the present.",
      "sanzur was established with a clear intent — to create interiors and buildings that resonate on a personal level, that tell the story of the people who inhabit them. Under Anthoni&#39;s leadership, the studio has grown from a small practice into a recognized force in European design.",
      "Today, Anthoni leads a team of passionate architects and designers across offices in Berlin and Stockholm, working on projects that range from private residences to commercial hospitality spaces.",
    ],
  },
  {
    id: "top-3-architecture-bureau",
    title: "sanzur Nominated as Top 3 Architecture Bureau in Germany",
    category: "Award",
    date: "Jan 5, 2024",
    image: "https://framerusercontent.com/images/c7qpAUGpAVeH4OcIVA0bCOiQIV4.jpg",
    body: [
      "sanzur has been nominated as one of the top three architecture bureaus in Germany by the AIA Awards committee, recognizing the studio&#39;s consistent delivery of outstanding design and its positive contribution to the built environment.",
      "The nomination comes on the back of several high-profile projects completed in 2023, including the Lake Estate in Constance and the completion of Villa Cavaleri in Florence. The jury cited the studio&#39;s ability to work across scales and typologies while maintaining a distinctive aesthetic identity.",
      "&#34;We are deeply honored by this recognition,&#34; said principal architect Anthoni Gantzmann. &#34;It reflects the hard work of our entire team and our unwavering commitment to design excellence.&#34;",
      "The award ceremony will take place in Munich in March 2024, where the winner will be announced.",
    ],
  },
  {
    id: "latest-commercial-design",
    title: "Latest Commercial Design by sanzur",
    category: "Blog",
    date: "Dec 23, 2023",
    image: "https://framerusercontent.com/images/IjUpvkvBshn9VuR2lXanbUgCQK4.jpeg",
    body: [
      "sanzur has unveiled its latest commercial project, a multi-purpose venue in central Copenhagen named The Communion. Designed to serve as a restaurant, gallery, and event space, the project represents a new direction for the studio in terms of program complexity and scale.",
      "The design brief called for a space that could transform throughout the day — from a quiet morning café to a vibrant evening venue. sanzur responded with a fluid, open plan punctuated by movable joinery elements that allow the space to be reconfigured easily.",
      "Materials are warm and tactile: brushed brass, oiled oak, and hand-poured concrete work together to create an atmosphere that feels both refined and approachable. Lighting was conceived as an architectural element in its own right, with a bespoke chandelier installation anchoring the central hall.",
    ],
  },
  {
    id: "how-we-developed-our-work-culture",
    title: "How We Developed Our Work Culture",
    category: "Studio",
    date: "Nov 10, 2023",
    image: "https://framerusercontent.com/images/3T8vswzOiWNPxJn88d0s762Hzj8.jpg",
    body: [
      "Culture at sanzur wasn&#39;t something we designed from the top down — it emerged organically from the values and personalities of the people who joined us in the early years. We were small, passionate, and intensely curious about design.",
      "As the studio grew, we became more deliberate about nurturing those qualities. We introduced monthly design reviews where every voice is heard, from the most junior team member to senior partners. We started a reading group focused on architectural theory, philosophy, and art.",
      "We believe that a healthy studio culture is inseparable from good design. When people feel heard, trusted, and intellectually stimulated, it shows in the quality of the work they produce.",
      "Today, our team spans three nationalities and multiple disciplines. That diversity is one of our greatest strengths — it ensures that no project is ever approached from a single perspective.",
    ],
  },
  {
    id: "villa-248-nominated-villa-of-the-year",
    title: "Villa 248 Nominated as Villa of the Year",
    category: "Award",
    date: "Sep 9, 2023",
    image: "https://framerusercontent.com/images/AiYrbO60VVnedMK5uD0iIfdFoW0.jpeg",
    body: [
      "Villa 248, the bold residential project completed by sanzur on the Puerto Rican coastline, has been nominated for Villa of the Year by Architectural Digest&#39;s annual design awards.",
      "The project gained significant attention for its daring use of exposed concrete in a tropical context, and for the seamless way it integrates indoor and outdoor living across multiple levels of the hillside site.",
      "&#34;Villa 248 was a project that demanded total commitment,&#34; said lead designer Anita Schroder. &#34;The site was extraordinary, and the brief was ambitious. We are proud of what the team achieved there.&#34;",
      "The Villa of the Year award will be announced at Architectural Digest&#39;s annual gala in New York in November 2023.",
    ],
  },
];

const EASE = [0.33, 1, 0.68, 1] as const;

export const NewsArticlePage = () => {
  const { id } = useParams<{ id: string }>();
  const article = ALL_ARTICLES.find((a) => a.id === id);
  const { ref: bodyRef, inView: bodyInView } = useInView({ threshold: 0.05 });
  const { ref: relatedRef, inView: relatedInView } = useInView({ threshold: 0.05 });

  if (!article) {
    return (
      <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center gap-6 font-dm_sans">
        <p className="text-2xl font-light text-black">Article not found.</p>
        <a href="/blogs" className="text-black/60 hover:text-black text-sm no-underline">
          ← Back to Blogs
        </a>
      </div>
    );
  }

  const currentIndex = ALL_ARTICLES.findIndex((a) => a.id === id);
  const relatedArticles = ALL_ARTICLES.filter((_, i) => i !== currentIndex).slice(0, 3);

  return (
    <div className="text-black text-xs font-normal bg-orange-50 font-sans_serif cursor-none-desktop">
      <CustomCursor />
      <PageWrapper>
        <div className="flex flex-col min-h-screen bg-orange-50">
          <Navbar />

          {/* ── HERO ── */}
          <header className="relative flex flex-col justify-end h-[70vh] min-h-[480px] w-full overflow-hidden p-[30px]">
            <div className="absolute inset-0 z-0">
              <img
                src={article.image}
                alt={article.title}
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-[1]" />
            <div className="relative z-[2] flex flex-col gap-y-3 pb-4 w-full max-w-[900px]">
              <motion.div
                className="flex items-center gap-4"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              >
                <span className="text-white/60 text-xs font-light font-dm_sans uppercase tracking-widest">
                  {article.category}
                </span>
                <span className="text-white/40 text-xs">|</span>
                <span className="text-white/60 text-xs font-light font-dm_sans">{article.date}</span>
              </motion.div>
              <div className="overflow-hidden">
                <motion.h1
                  className="text-white font-light font-dm_sans leading-[1.1]"
                  style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {article.title}
                </motion.h1>
              </div>
            </div>
          </header>

          {/* ── ARTICLE BODY ── */}
          <section
            ref={bodyRef as React.RefObject<HTMLElement>}
            className="w-full bg-orange-50 px-5 md:px-[30px] py-[80px]"
          >
            <div className="max-w-[780px] mx-auto flex flex-col gap-8">
              {article.body.map((para, i) => (
                <motion.p
                  key={i}
                  className="text-base md:text-lg font-light font-dm_sans text-black/80 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: para }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={bodyInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
                />
              ))}
            </div>
          </section>

          <div className="w-full h-px bg-black/10" />

          {/* ── RELATED ARTICLES ── */}
          <section
            ref={relatedRef as React.RefObject<HTMLElement>}
            className="w-full bg-orange-50 px-5 md:px-[30px] py-[80px]"
          >
            <div className="flex items-center justify-between mb-12">
              <motion.h2
                className="font-light font-dm_sans leading-[1.1]"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: EASE }}
              >
                More Articles
              </motion.h2>
              <motion.a
                href="/blogs"
                className="text-sm font-light font-dm_sans text-black/50 hover:text-black transition-colors duration-200 no-underline"
                initial={{ opacity: 0 }}
                animate={relatedInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              >
                ← Back to Blogs
              </motion.a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedArticles.map((rel, i) => (
                <motion.a
                  key={rel.id}
                  href={`/blogs/${rel.id}`}
                  className="group flex flex-col gap-4 no-underline"
                  initial={{ opacity: 0, y: 30 }}
                  animate={relatedInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: EASE }}
                >
                  <div className="relative overflow-hidden aspect-[4/3] bg-stone-200">
                    <img
                      src={rel.image}
                      alt={rel.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-3">
                      <span className="text-xs font-light font-dm_sans uppercase tracking-widest text-black/50">
                        {rel.category}
                      </span>
                      <span className="text-black/30 text-xs">|</span>
                      <span className="text-black/40 text-xs font-light font-dm_sans">{rel.date}</span>
                    </div>
                    <h3 className="text-base md:text-lg font-light font-dm_sans text-black group-hover:opacity-60 transition-opacity duration-200 leading-[1.3]">
                      {rel.title}
                    </h3>
                  </div>
                </motion.a>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </PageWrapper>
    </div>
  );
};
