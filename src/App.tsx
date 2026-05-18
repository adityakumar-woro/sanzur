import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { images, process, projects, services } from "@/data/studio";

const EASE = [0.33, 1, 0.68, 1] as const;
const REVEAL = {
  hidden: { opacity: 0, y: 46 },
  visible: { opacity: 1, y: 0 },
};
const STAGGER = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const decorItems = [
  {
    title: "Hand-painted Bowls",
    material: "Wood · ceramic inlay · artisanal color",
    image: "/home-decor/artisan-bowls.jpeg",
  },
  {
    title: "Collector's Chess Set",
    material: "Carved wood · library styling · heirloom detail",
    image: "/home-decor/wooden-chess.jpeg",
  },
  {
    title: "Vintage Telephone",
    material: "Polished timber · brass accents · study object",
    image: "/home-decor/vintage-telephone.jpeg",
  },
];

const faqs = [
  {
    question: "What is the first step in the design process?",
    answer: "We begin with a focused discovery conversation, project goals, site context, references, budget comfort, and the feeling the space should hold.",
  },
  {
    question: "How long does a luxury interior project take?",
    answer: "Timelines depend on scale and execution scope. A focused room can move quickly, while full residences and commercial spaces usually follow staged design, documentation, procurement, and site coordination.",
  },
  {
    question: "Can we preview the space before execution?",
    answer: "Yes. We use concept direction, material palettes, drawings, and visual references so you can understand the atmosphere before execution begins.",
  },
  {
    question: "Do you offer turnkey project coordination?",
    answer: "Yes. We can support vendor coordination, site reviews, procurement direction, and final styling so the design intent carries through to handover.",
  },
];

const AtmosphericCanvas = ({ tone = "dark" }: { tone?: "dark" | "light" }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let frame = 0;
    let animationId = 0;

    const resize = () => {
      const ratio = window.devicePixelRatio || 1;
      canvas.width = Math.floor(canvas.offsetWidth * ratio);
      canvas.height = Math.floor(canvas.offsetHeight * ratio);
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);
    };

    const draw = () => {
      frame += 0.006;
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;
      ctx.clearRect(0, 0, width, height);

      const base = tone === "dark" ? "201, 173, 115" : "18, 17, 15";
      for (let i = 0; i < 36; i += 1) {
        const x = (Math.sin(frame + i * 0.72) * 0.5 + 0.5) * width;
        const y = (Math.cos(frame * 0.8 + i * 0.41) * 0.5 + 0.5) * height;
        const radius = 60 + ((i * 29) % 160);
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, radius);
        gradient.addColorStop(0, `rgba(${base}, ${tone === "dark" ? 0.095 : 0.055})`);
        gradient.addColorStop(1, `rgba(${base}, 0)`);
        ctx.fillStyle = gradient;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.strokeStyle = tone === "dark" ? "rgba(255,255,255,0.035)" : "rgba(18,17,15,0.045)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 8; i += 1) {
        const y = (height / 8) * i + Math.sin(frame + i) * 14;
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.bezierCurveTo(width * 0.32, y + Math.sin(frame + i) * 44, width * 0.66, y - 36, width, y + 16);
        ctx.stroke();
      }

      animationId = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationId);
    };
  }, [tone]);

  return <canvas ref={canvasRef} className="absolute inset-0 h-full w-full pointer-events-none" aria-hidden="true" />;
};

export const App = () => {
  const [hoveredProject, setHoveredProject] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <div className="bg-[#12110f] text-white font-dm_sans cursor-none-desktop">
      <CustomCursor />
      <Navbar />

      <main>
        <header ref={heroRef} className="relative min-h-screen overflow-hidden bg-[#e9e1d1] text-[#12110f]">
          <AtmosphericCanvas tone="light" />
          <motion.img
            src={images.hero}
            alt=""
            className="absolute right-0 top-0 hidden h-full w-[44vw] object-cover lg:block"
            style={{ y: heroY, scale: heroScale }}
          />
          <div className="absolute right-0 top-0 hidden h-full w-[44vw] bg-gradient-to-l from-transparent to-[#e9e1d1] lg:block" />

          <motion.div
            className="relative z-10 min-h-screen px-5 md:px-8 pt-20 pb-8 flex flex-col justify-end"
            initial="hidden"
            animate="visible"
            variants={STAGGER}
          >
            <motion.div variants={REVEAL} transition={{ duration: 0.85, ease: EASE }} className="mb-8 flex items-center gap-4">
              <span className="h-px w-16 bg-[#12110f]/35" />
              <span className="text-[11px] uppercase tracking-[0.24em] text-[#12110f]/55">Interior Architecture Studio</span>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 items-end">
              <div>
                <motion.h1
                  variants={REVEAL}
                  transition={{ duration: 1, ease: EASE }}
                  className="font-newsreader font-light leading-[0.83] tracking-normal"
                  style={{ fontSize: "clamp(5rem, 14vw, 16rem)" }}
                >
                  Reimagine
                  <br />
                  Your Space
                </motion.h1>
              </div>

              <motion.div variants={REVEAL} transition={{ duration: 0.85, ease: EASE }} className="grid grid-cols-[0.75fr_1fr] gap-4 items-end lg:pb-6">
                <motion.div animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} className="aspect-[3/4] overflow-hidden bg-[#d8ccba]">
                  <img src={images.editorialThree} alt="" className="h-full w-full object-cover" />
                </motion.div>
                <div>
                  <p className="mb-6 max-w-md text-base md:text-lg leading-relaxed text-[#12110f]/68">
                    A premium studio experience blending soulful interiors, sharp architectural planning, and collectible details.
                  </p>
                  <motion.a
                    href="/contact"
                    className="inline-flex rounded-full bg-[#12110f] px-6 py-4 text-white no-underline text-sm uppercase tracking-[0.16em]"
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    Get started
                  </motion.a>
                </div>
              </motion.div>
            </div>

            <motion.div variants={REVEAL} transition={{ duration: 0.85, ease: EASE }} className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 border-t border-[#12110f]/15 pt-5">
              {["100+ curated rooms", "Residential · Retail · Hospitality", "Concept to handover"].map((item) => (
                <p key={item} className="text-sm uppercase tracking-[0.16em] text-[#12110f]/50">{item}</p>
              ))}
            </motion.div>
          </motion.div>
        </header>

        <section className="overflow-hidden bg-[#12110f] py-5 text-white/70">
          <motion.div className="flex whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 24, repeat: Infinity, ease: "linear" }}>
            {[...Array(2)].map((_, loop) => (
              <div key={loop} className="flex">
                {["SANZUR", "ROOM FOR EXPERIENCE", "INTERIOR ARCHITECTURE", "LUXURY DECOR", "TURNKEY DESIGN"].map((item) => (
                  <span key={`${loop}-${item}`} className="mx-8 text-[12px] uppercase tracking-[0.24em]">{item}</span>
                ))}
              </div>
            ))}
          </motion.div>
        </section>

        <motion.section className="relative overflow-hidden bg-[#ebe5d8] text-[#12110f] px-5 md:px-8 py-20 md:py-28" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.22 }} variants={STAGGER}>
          <AtmosphericCanvas tone="light" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-20 items-start">
            <motion.div variants={REVEAL} transition={{ duration: 0.75, ease: EASE }}>
              <p className="text-[11px] uppercase tracking-[0.22em] text-black/45 mb-6">Studio Ethos</p>
              <div className="relative aspect-[4/5] overflow-hidden bg-[#d8ccba]">
                <motion.img
                  src={images.about}
                  alt="Sanzur studio ethos interior detail"
                  className="h-full w-full object-cover"
                  initial={{ scale: 1.12 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.35, ease: EASE }}
                />
              </div>
            </motion.div>
            <motion.div variants={REVEAL} transition={{ duration: 0.75, ease: EASE }}>
              <h2 className="font-newsreader font-light leading-[1]" style={{ fontSize: "clamp(2.8rem, 7vw, 7rem)" }}>
                Rooms that feel composed before they feel decorated.
              </h2>
              <p className="mt-8 text-black/65 max-w-2xl text-base md:text-lg leading-relaxed">
                We design private residences, boutique retail, hospitality spaces, and lifestyle destinations with a language that is tactile, measured, and deeply personal.
              </p>
              <div className="mt-12 grid grid-cols-2 gap-4 max-w-2xl">
                {[images.editorialOne, images.editorialFive].map((image) => (
                  <motion.div key={image} className="aspect-[5/4] overflow-hidden bg-[#d8ccba]" whileHover={{ scale: 0.98 }}>
                    <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="relative bg-[#12110f] text-white px-5 md:px-8 py-20 md:py-28 overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={STAGGER}>
          <AtmosphericCanvas />
          <motion.div variants={REVEAL} transition={{ duration: 0.75, ease: EASE }} className="relative z-10 flex items-end justify-between gap-6 mb-12">
            <div>
              <p className="text-white/45 text-[11px] uppercase tracking-[0.22em] mb-3">Projects</p>
              <h2 className="font-newsreader font-light text-5xl md:text-8xl leading-none">Delivered Work</h2>
            </div>
            <a href="/projects" className="hidden md:inline-flex text-white/70 hover:text-white no-underline text-sm uppercase tracking-[0.16em]">View all</a>
          </motion.div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_430px] gap-10 items-start">
            <div className="divide-y divide-white/12 border-y border-white/12">
              {projects.slice(0, 5).map((project, index) => (
                <motion.a
                  key={project.id}
                  href={`/projects/${project.id}`}
                  onMouseEnter={() => setHoveredProject(index)}
                  className="group grid grid-cols-[64px_1fr] md:grid-cols-[76px_1fr_180px_140px] gap-4 md:gap-8 items-center py-7 no-underline text-white"
                  variants={REVEAL}
                  transition={{ duration: 0.65, ease: EASE }}
                  whileHover={{ x: 12 }}
                >
                  <span className="text-white/35 text-sm">{String(index + 1).padStart(2, "0")}</span>
                  <span className="font-newsreader font-light text-4xl md:text-6xl group-hover:text-[#c9ad73] transition-colors">{project.name}</span>
                  <span className="text-white/45 text-sm uppercase tracking-[0.14em]">{project.type}</span>
                  <span className="text-white/35 text-sm hidden md:block">{project.location}</span>
                </motion.a>
              ))}
            </div>
            <motion.div className="sticky top-28 hidden lg:block aspect-[4/5] overflow-hidden bg-[#2a261f]" layout>
              <motion.img
                key={projects[hoveredProject]?.image}
                src={projects[hoveredProject]?.image}
                alt={projects[hoveredProject]?.name}
                className="h-full w-full object-cover"
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.65, ease: EASE }}
              />
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="bg-[#ebe5d8] text-[#12110f] px-5 md:px-8 py-20 md:py-28" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={STAGGER}>
          <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-12 lg:gap-20">
            <motion.div variants={REVEAL} transition={{ duration: 0.75, ease: EASE }} className="lg:sticky lg:top-28 h-fit">
              <p className="text-black/45 text-[11px] uppercase tracking-[0.22em] mb-4">What we offer</p>
              <h2 className="font-newsreader font-light text-5xl md:text-7xl leading-none">Expert interior design solutions.</h2>
              <p className="mt-7 text-black/62 text-lg leading-relaxed max-w-md">A design process with enough clarity to imagine the result before the work begins.</p>
              <a href="/services" className="inline-flex mt-8 text-sm uppercase tracking-[0.16em] border-b border-black/30 pb-2 no-underline text-[#12110f] hover:border-black">
                Explore services
              </a>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {services.slice(0, 3).map((service, index) => (
                <motion.div key={service.name} variants={REVEAL} whileHover={{ y: -10 }} transition={{ duration: 0.42, ease: EASE }} className="border border-black/12 bg-[#f3eee5] p-4">
                  <div className="aspect-[4/5] overflow-hidden mb-6">
                    <img src={service.image} alt="" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
                  </div>
                  <p className="text-black/35 text-sm mb-2">{index === 0 ? "6K+ Completed" : "Expertise"}</p>
                  <h3 className="font-newsreader font-light text-3xl mb-4">{service.name}</h3>
                  <p className="text-black/62 leading-relaxed">{service.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section className="bg-[#ebe5d8] text-[#12110f] px-5 md:px-8 py-20 md:py-28 border-t border-black/10" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={STAGGER}>
          <div className="grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-12 lg:gap-20 mb-12">
            <motion.div variants={REVEAL} transition={{ duration: 0.75, ease: EASE }}>
              <p className="text-black/45 text-[11px] uppercase tracking-[0.22em] mb-5">Home Decor</p>
              <h2 className="font-newsreader font-light text-5xl md:text-7xl leading-none">Objects that bring memory into a room.</h2>
            </motion.div>
            <motion.p variants={REVEAL} transition={{ duration: 0.75, ease: EASE }} className="text-black/62 text-lg leading-relaxed max-w-2xl lg:pt-8">
              Curated accents, handcrafted pieces, and conversation objects selected to make interiors feel collected, personal, and quietly luxurious.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {decorItems.map((item, index) => (
              <motion.article key={item.title} variants={REVEAL} whileHover={{ y: -10 }} transition={{ duration: 0.42, ease: EASE }} className="group">
                <div className="aspect-[4/3] overflow-hidden bg-[#d8ccba]">
                  <img src={item.image} alt={item.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="pt-5 flex items-start justify-between gap-5 border-t border-black/12 mt-5">
                  <div>
                    <p className="text-black/35 text-sm mb-2">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="font-newsreader font-light text-3xl leading-none">{item.title}</h3>
                  </div>
                  <p className="text-black/52 text-sm leading-relaxed max-w-[180px] text-right">{item.material}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section className="relative bg-[#12110f] text-white px-5 md:px-8 py-20 md:py-28 overflow-hidden" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={STAGGER}>
          <AtmosphericCanvas />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-end">
            <motion.div variants={REVEAL} transition={{ duration: 0.75, ease: EASE }}>
              <p className="text-white/45 text-[11px] uppercase tracking-[0.22em] mb-5">Process</p>
              <h2 className="font-newsreader font-light leading-[1]" style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}>Designed slowly. Built precisely.</h2>
            </motion.div>
            <div className="divide-y divide-white/12">
              {process.map((item, index) => (
                <motion.div key={item} variants={REVEAL} transition={{ duration: 0.65, ease: EASE }} className="flex gap-8 py-6">
                  <span className="text-[#c9ad73]">{String(index + 1).padStart(2, "0")}</span>
                  <p className="text-white/78 text-xl md:text-2xl font-light">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative z-10 mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
            {[images.editorialOne, images.editorialTwo, images.editorialFour, images.aboutHome].map((image, index) => (
              <motion.div key={index} variants={REVEAL} whileHover={{ scale: 0.985 }} className="aspect-[3/4] overflow-hidden bg-[#2a261f]">
                <img src={image} alt="" className="h-full w-full object-cover" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.section className="bg-[#ebe5d8] text-[#12110f] px-5 md:px-8 py-20 md:py-28" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={STAGGER}>
          <div className="grid grid-cols-1 lg:grid-cols-[0.78fr_1.22fr] gap-12">
            <motion.div variants={REVEAL} transition={{ duration: 0.75, ease: EASE }}>
              <p className="text-black/45 text-[11px] uppercase tracking-[0.22em] mb-5">FAQ's</p>
              <h2 className="font-newsreader font-light text-5xl md:text-7xl leading-none">Common questions before we begin.</h2>
            </motion.div>
            <div className="divide-y divide-black/15 border-y border-black/15">
              {faqs.map((item, index) => (
                <motion.div key={item.question} variants={REVEAL} transition={{ duration: 0.65, ease: EASE }} className="py-1">
                  <button
                    type="button"
                    onClick={() => setOpenFaq((current) => (current === index ? -1 : index))}
                    className="group flex w-full items-center justify-between gap-8 py-6 text-left"
                    aria-expanded={openFaq === index}
                  >
                    <span className="text-xl md:text-2xl font-light group-hover:text-black/60 transition-colors">{item.question}</span>
                    <motion.span
                      className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/20 text-black/45"
                      animate={{ rotate: openFaq === index ? 45 : 0 }}
                      transition={{ duration: 0.28, ease: EASE }}
                    >
                      +
                    </motion.span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }}
                    transition={{ duration: 0.38, ease: EASE }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-3xl pb-7 text-base md:text-lg leading-relaxed text-black/58">{item.answer}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        <motion.section className="bg-[#12110f] text-white px-5 md:px-8 py-20 md:py-28" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={STAGGER}>
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_0.8fr] gap-12 items-center">
            <motion.div variants={REVEAL} transition={{ duration: 0.75, ease: EASE }}>
              <p className="text-white/45 text-[11px] uppercase tracking-[0.22em] mb-5">Begin</p>
              <h2 className="font-newsreader font-light leading-[1]" style={{ fontSize: "clamp(3rem, 8vw, 8rem)" }}>Let us shape the next room you remember.</h2>
            </motion.div>
            <motion.div variants={REVEAL} transition={{ duration: 0.75, ease: EASE }}>
              <p className="text-white/65 text-lg leading-relaxed mb-8">
                Bring us the site, the ambition, or the feeling you cannot quite name yet. We will translate it into a complete spatial direction.
              </p>
              <motion.a href="/contact" className="inline-flex rounded-full bg-[#e9e1d1] text-[#12110f] px-7 py-4 no-underline text-sm uppercase tracking-[0.16em]" whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.98 }}>
                Start a project
              </motion.a>
            </motion.div>
          </div>
        </motion.section>
      </main>

      <Footer />
    </div>
  );
};
