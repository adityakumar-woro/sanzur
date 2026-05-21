import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { articles, images, process, projects, services, studio } from "@/data/studio";

const EASE = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 42, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09 } },
};

const decorItems = [
  {
    title: "Hand-painted Bowls",
    material: "Wood, ceramic inlay, artisanal color",
    image: "/home-decor/artisan-bowls.jpeg",
  },
  {
    title: "Collector's Chess Set",
    material: "Carved wood, library styling, heirloom detail",
    image: "/home-decor/wooden-chess.jpeg",
  },
  {
    title: "Vintage Telephone",
    material: "Polished timber, brass accents, study object",
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

const philosophyCards = [
  { title: "Mood", image: images.editorialOne, copy: "A room begins with temperature, shadow, scent, and the quiet rhythm of arrival." },
  { title: "Plan", image: images.editorialTwo, copy: "Circulation is composed until every threshold, pause, and view feels intentional." },
  { title: "Detail", image: images.editorialFour, copy: "Stone, timber, metal, fabric, and light are edited into a calm material signature." },
  { title: "Handover", image: images.aboutHome, copy: "Styling and final alignment give the space its lived-in sense of completion." },
];

const timelineDetails = [
  "Discovery, site atmosphere, constraints, and ambition are distilled into a usable brief.",
  "Material direction, spatial mood, and key visual moments are composed into a clear concept.",
  "Drawings, procurement logic, lighting layers, and vendor coordination turn feeling into buildable detail.",
  "Final styling, site reviews, and handover tuning bring the interior into focus.",
];

const ScrollScene = ({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [70, -70]);

  return (
    <motion.section
      ref={ref}
      className={`relative isolate overflow-hidden px-5 py-20 md:px-8 md:py-28 ${dark ? "bg-[#11100e] text-white" : "bg-[#e8dfd0] text-[#12110f]"}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={stagger}
    >
      <motion.div
        style={{ y }}
        className={`pointer-events-none absolute -right-28 top-16 z-0 h-[26rem] w-[26rem] rounded-full blur-3xl ${dark ? "bg-[#c9ad73]/14" : "bg-[#c9ad73]/24"}`}
      />
      <motion.div
        className={`pointer-events-none absolute -left-20 bottom-[-10rem] z-0 h-[30rem] w-[30rem] rounded-full blur-3xl ${dark ? "bg-[#3b4b3f]/18" : "bg-[#59664f]/14"}`}
        animate={{ x: [0, 34, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />
      {children}
    </motion.section>
  );
};

const WebGLDepthField = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let active = true;
    let cleanup: (() => void) | undefined;

    import("three").then((THREE) => {
      const mount = mountRef.current;
      if (!active || !mount) return;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.6));
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      mount.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
      camera.position.z = 8;

      const material = new THREE.MeshBasicMaterial({ color: 0xc9ad73, transparent: true, opacity: 0.15, wireframe: true });
      const mesh = new THREE.Mesh(new THREE.TorusKnotGeometry(1.8, 0.18, 160, 12), material);
      mesh.position.set(2.2, -0.2, 0);
      scene.add(mesh);

      let frame = 0;
      let animationId = 0;
      const resize = () => {
        const width = mount.clientWidth;
        const height = mount.clientHeight;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
      };
      const animate = () => {
        frame += 0.006;
        mesh.rotation.x = Math.sin(frame) * 0.25;
        mesh.rotation.y = frame;
        renderer.render(scene, camera);
        animationId = requestAnimationFrame(animate);
      };

      resize();
      animate();
      window.addEventListener("resize", resize);
      cleanup = () => {
        window.removeEventListener("resize", resize);
        cancelAnimationFrame(animationId);
        mesh.geometry.dispose();
        material.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    });

    return () => {
      active = false;
      cleanup?.();
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 pointer-events-none opacity-80 mix-blend-screen" aria-hidden="true" />;
};

const SectionTitle = ({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) => (
  <motion.div variants={reveal} transition={{ duration: 0.8, ease: EASE }}>
    <p className={`mb-5 text-[10px] uppercase tracking-[0.28em] ${light ? "text-[#c9ad73]" : "text-black/42"}`}>{eyebrow}</p>
    <h2 className="font-newsreader font-light leading-[0.96]" style={{ fontSize: "clamp(2.8rem, 6.8vw, 7rem)" }}>
      {title}
    </h2>
    {copy ? <p className={`mt-7 max-w-2xl text-sm leading-relaxed md:text-base ${light ? "text-white/62" : "text-black/62"}`}>{copy}</p> : null}
  </motion.div>
);

export const App = () => {
  const [openFaq, setOpenFaq] = useState(0);
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);
  const heroTextY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);

  return (
    <div className="bg-[#11100e] text-white font-dm_sans selection:bg-[#c9ad73] selection:text-[#11100e]">
      <Navbar />
      <main>
        <header ref={heroRef} className="relative min-h-screen overflow-hidden bg-[#11100e]">
          <WebGLDepthField />
          <motion.img src={images.hero} alt="Sanzur interior" className="absolute inset-0 h-full w-full object-cover opacity-60" style={{ y: heroY, scale: heroScale }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(201,173,115,0.22),transparent_32%),linear-gradient(90deg,rgba(17,16,14,0.96),rgba(17,16,14,0.62)_50%,rgba(17,16,14,0.24))]" />
          <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#11100e] to-transparent" />

          <motion.div className="relative z-10 flex min-h-screen flex-col justify-end px-5 pb-8 pt-24 md:px-8" style={{ y: heroTextY }} initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={reveal} transition={{ duration: 0.85, ease: EASE }} className="mb-7 text-[11px] uppercase tracking-[0.28em] text-[#c9ad73]">
              Interior Architecture Studio - {studio.location}
            </motion.p>
            <div className="grid grid-cols-1 items-end gap-10 lg:grid-cols-[1.12fr_0.88fr]">
              <motion.h1 variants={reveal} transition={{ duration: 1, ease: EASE }} className="font-newsreader font-light leading-[0.86]" style={{ fontSize: "clamp(4.8rem, 12vw, 14rem)" }}>
                Spatial
                <br />
                Alchemy
              </motion.h1>
              <motion.div variants={reveal} transition={{ duration: 0.9, ease: EASE }} className="border border-white/14 bg-white/[0.07] p-5 backdrop-blur-xl md:p-6">
                <p className="max-w-xl text-base leading-relaxed text-white/70">
                  Luxury interiors, architectural planning, and collectible details for residences, retail, and hospitality spaces.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href="/contact" className="bg-[#e9e1d1] px-6 py-4 text-[11px] uppercase tracking-[0.18em] text-[#12110f] no-underline transition hover:bg-[#c9ad73]">Start a project</a>
                  <a href="/projects" className="border border-white/18 px-6 py-4 text-[11px] uppercase tracking-[0.18em] text-white no-underline transition hover:border-[#c9ad73] hover:text-[#c9ad73]">View work</a>
                </div>
              </motion.div>
            </div>
            <motion.div variants={reveal} transition={{ duration: 0.85, ease: EASE }} className="mt-10 grid grid-cols-2 gap-4 border-t border-white/12 pt-6 md:grid-cols-4">
              {["100+ curated rooms", "Residential, retail, hospitality", "Concept to handover", "Quiet luxury language"].map((item) => (
                <p key={item} className="text-[11px] uppercase tracking-[0.18em] text-white/48">{item}</p>
              ))}
            </motion.div>
          </motion.div>
        </header>

        <section className="overflow-hidden border-y border-white/10 bg-[#11100e] py-5 text-white/64">
          <motion.div className="flex whitespace-nowrap" animate={{ x: ["0%", "-50%"] }} transition={{ duration: 26, repeat: Infinity, ease: "linear" }}>
            {[...Array(2)].map((_, loop) => (
              <div key={loop} className="flex">
                {["SANZUR", "QUIET LUXURY", "INTERIOR ARCHITECTURE", "PRIVATE RESIDENCES", "RETAIL AND HOSPITALITY", "TURNKEY DESIGN"].map((item) => (
                  <span key={`${loop}-${item}`} className="mx-8 text-[12px] uppercase tracking-[0.26em]">{item}</span>
                ))}
              </div>
            ))}
          </motion.div>
        </section>

        <ScrollScene>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.72fr_1.28fr] lg:gap-10">
            <motion.div variants={reveal} transition={{ duration: 0.8, ease: EASE }} className="grid gap-4 lg:grid-rows-[auto_1fr]">
              <div className="border-b border-black/12 pb-5">
                <p className="mb-4 text-[10px] uppercase tracking-[0.24em] text-black/42">Studio Ethos</p>
                <p className="max-w-sm text-sm leading-relaxed text-black/58">Material, proportion, light, and movement are composed as one continuous interior experience.</p>
              </div>
              <div className="relative min-h-[360px] overflow-hidden bg-[#d4c7b6] lg:min-h-0">
                <motion.img src={images.about} alt="Sanzur studio ethos" className="absolute inset-0 h-full w-full object-cover" initial={{ scale: 1.12, filter: "blur(6px)" }} whileInView={{ scale: 1, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 1.25, ease: EASE }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/48 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-3 text-white">
                  {["Atmosphere", "Proportion"].map((item) => (
                    <div key={item} className="border border-white/18 bg-white/12 p-3 text-[10px] uppercase tracking-[0.18em] backdrop-blur-xl">{item}</div>
                  ))}
                </div>
              </div>
            </motion.div>
            <div className="grid content-between">
              <SectionTitle eyebrow="Philosophy" title="Luxury begins where a room feels inevitable." copy="Sanzur designs with atmosphere first, then resolves the plan, materials, lighting, joinery, and styling until the experience feels effortless." />
              <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2">
                {philosophyCards.map((card, index) => (
                  <motion.div key={card.title} variants={reveal} transition={{ duration: 0.7, ease: EASE }} whileHover={{ y: -8 }} className="group relative min-h-[280px] overflow-hidden border border-black/10 bg-white/28 p-5 backdrop-blur-md">
                    <motion.img src={card.image} alt={`${card.title} interior atmosphere`} className="absolute inset-0 h-full w-full object-cover opacity-55 transition duration-700 group-hover:scale-110 group-hover:opacity-72" loading="lazy" sizes="(max-width: 768px) 92vw, 34vw" style={{ y: index % 2 ? -10 : 10 }} />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(238,231,218,0.12),rgba(17,16,14,0.72)),radial-gradient(circle_at_70%_20%,rgba(255,255,255,0.2),transparent_28%)]" />
                    <motion.div className="absolute right-5 top-5 h-16 w-16 rounded-full border border-white/30" animate={{ y: [0, -12, 0], rotate: [0, 18, 0] }} transition={{ duration: 7 + index, repeat: Infinity, ease: "easeInOut" }} />
                    <div className="relative z-10 flex h-full min-h-[240px] flex-col justify-between text-white">
                      <p className="text-[11px] text-white/60">{String(index + 1).padStart(2, "0")}</p>
                      <div>
                        <h3 className="font-newsreader text-4xl font-light leading-none md:text-5xl">{card.title}</h3>
                        <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/72">{card.copy}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </ScrollScene>

        <ScrollScene dark>
          <div className="mb-12 grid grid-cols-1 items-end gap-8 border-b border-white/10 pb-8 lg:grid-cols-[0.8fr_1.2fr]">
            <SectionTitle eyebrow="Signature Projects" title="Rooms told as cinematic sequences." copy="A sharper portfolio layout with equal visual weight, deeper hover states, and editorial rhythm." light />
            <motion.div variants={reveal} transition={{ duration: 0.75, ease: EASE }} className="grid grid-cols-2 gap-3 text-[10px] uppercase tracking-[0.2em] text-white/48 md:grid-cols-4">
              {["Residential", "Hospitality", "Retail", "Lifestyle"].map((item) => <span key={item} className="border border-white/10 p-3">{item}</span>)}
            </motion.div>
          </div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
            {projects.slice(0, 5).map((project, index) => (
              <motion.a key={project.id} href={`/projects/${project.id}`} variants={reveal} transition={{ duration: 0.75, ease: EASE }} whileHover={{ y: -8 }} className="group relative min-h-[420px] overflow-hidden border border-white/12 bg-white/[0.045] text-white no-underline xl:min-h-[520px]">
                <motion.img src={project.image} alt={project.name} className="absolute inset-0 h-full w-full object-cover opacity-72 transition duration-1000 group-hover:scale-110 group-hover:opacity-92" initial={{ scale: 1.1, filter: "blur(7px)" }} whileInView={{ scale: 1, filter: "blur(0px)" }} viewport={{ once: true }} transition={{ duration: 1.25, ease: EASE }} loading={index < 2 ? "eager" : "lazy"} sizes={index === 0 ? "(max-width: 1024px) 92vw, 58vw" : "(max-width: 1024px) 92vw, 40vw"} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#11100e] via-[#11100e]/18 to-transparent transition duration-700 group-hover:from-black/90" />
                <div className="absolute left-4 top-4 border border-white/16 bg-black/22 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white/68 backdrop-blur">{String(index + 1).padStart(2, "0")}</div>
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="mb-5 flex items-center justify-between gap-4 text-[10px] uppercase tracking-[0.22em] text-white/54">
                    <span>{project.type}</span>
                    <span>{project.year}</span>
                  </div>
                  <h3 className="font-newsreader text-4xl font-light leading-none md:text-5xl">{project.name}</h3>
                  <p className="mt-5 max-w-xl text-sm leading-relaxed text-white/64">{project.summary}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </ScrollScene>

        <ScrollScene>
          <WebGLDepthField />
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <div className="lg:sticky lg:top-28 h-fit">
              <SectionTitle eyebrow="What We Offer" title="Concept, detail, and delivery in one studio." copy="A structured design process with enough clarity to imagine the result before the work begins." />
              <a href="/services" className="mt-8 inline-flex border-b border-black/30 pb-2 text-[11px] uppercase tracking-[0.18em] text-[#12110f] no-underline transition hover:border-[#c9ad73] hover:text-[#8b6e30]">Explore services</a>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {services.map((service, index) => (
                <motion.article key={service.name} variants={reveal} transition={{ duration: 0.68, ease: EASE }} whileHover={{ y: -10, rotateX: 2 }} className="group relative overflow-hidden border border-black/10 bg-[#f2eadf]/82 p-4 shadow-[0_24px_80px_rgba(17,16,14,0.08)] backdrop-blur">
                  <motion.div className="absolute -right-12 -top-12 h-36 w-36 rounded-full border border-[#c9ad73]/35" animate={{ y: [0, 18, 0], x: [0, -10, 0] }} transition={{ duration: 8 + index, repeat: Infinity, ease: "easeInOut" }} />
                  <div className="relative aspect-[5/4] overflow-hidden bg-[#d4c7b6]">
                    <img src={service.image} alt={service.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.08]" loading="lazy" sizes="(max-width: 768px) 92vw, 34vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/34 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                  </div>
                  <div className="p-3 pt-6">
                    <p className="mb-4 text-sm text-black/34">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="font-newsreader text-3xl font-light leading-none md:text-4xl">{service.name}</h3>
                    <p className="mt-5 text-sm leading-relaxed text-black/58">{service.description}</p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </ScrollScene>

        <ScrollScene dark>
          <div className="absolute inset-0 opacity-20" style={{ backgroundImage: `url(${images.editorialSix})`, backgroundSize: "cover", backgroundPosition: "center" }} />
          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <SectionTitle eyebrow="The Journey" title="A cinematic process with practical control." copy="The work moves from feeling to documentation to site, so imagination and execution stay connected." light />
            <div className="relative border-l border-[#c9ad73]/34 pl-6 md:pl-10">
              {process.map((item, index) => (
                <motion.div key={item} variants={reveal} transition={{ duration: 0.68, ease: EASE }} className="group relative grid grid-cols-1 gap-3 border-b border-white/10 py-7 md:grid-cols-[88px_1fr] md:gap-6">
                  <motion.span className="absolute -left-[31px] top-8 h-4 w-4 rounded-full border border-[#c9ad73] bg-[#11100e] shadow-[0_0_32px_rgba(201,173,115,0.55)] md:-left-[47px]" whileInView={{ scale: [0.7, 1.25, 1] }} viewport={{ once: true }} transition={{ duration: 0.75, ease: EASE, delay: index * 0.08 }} />
                  <span className="font-newsreader text-4xl font-light text-[#c9ad73]">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="text-xl font-light leading-snug text-white/82 md:text-3xl">{item}</p>
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/52">{timelineDetails[index]}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollScene>

        <ScrollScene>
          <div className="mb-12 grid grid-cols-1 gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <SectionTitle eyebrow="Home Decor" title="Objects that make an interior feel collected." />
            <motion.p variants={reveal} transition={{ duration: 0.75, ease: EASE }} className="max-w-2xl text-lg leading-relaxed text-black/62 lg:pt-8">
              Curated accents, handcrafted pieces, and conversation objects selected to make interiors feel personal, grounded, and quietly luxurious.
            </motion.p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {decorItems.map((item, index) => (
              <motion.article key={item.title} variants={reveal} transition={{ duration: 0.68, ease: EASE }} className="group flex h-full flex-col">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#d4c7b6]">
                  <motion.img src={item.image} alt={item.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.07]" loading="lazy" sizes="(max-width: 768px) 92vw, 31vw" whileInView={{ scale: [1.08, 1] }} viewport={{ once: true }} transition={{ duration: 1.1, ease: EASE }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/42 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
                </div>
                <div className="mt-5 flex min-h-[128px] items-start justify-between gap-5 border-t border-black/12 pt-5">
                  <div>
                    <p className="mb-2 text-sm text-black/35">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="font-newsreader text-3xl font-light leading-none md:text-4xl">{item.title}</h3>
                  </div>
                  <p className="max-w-[180px] text-right text-sm leading-relaxed text-black/52">{item.material}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </ScrollScene>

        <ScrollScene dark>
          <div className="mb-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <SectionTitle eyebrow="Journal" title="Notes on materials, mood, and modern luxury." light />
            <a href="/blogs" className="text-sm uppercase tracking-[0.16em] text-white/64 no-underline">Read the journal</a>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {articles.slice(0, 3).map((article, index) => (
              <motion.a key={article.id} href={`/blogs/${article.id}`} variants={reveal} transition={{ duration: 0.68, ease: EASE }} className="border border-white/12 bg-white/[0.05] p-4 text-white no-underline backdrop-blur-md">
                <div className="aspect-[4/3] overflow-hidden bg-[#2a261f]">
                  <img src={article.image} alt={article.title} className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="pt-6">
                  <p className="mb-4 text-[11px] uppercase tracking-[0.18em] text-[#c9ad73]">{String(index + 1).padStart(2, "0")} - {article.category}</p>
                  <h3 className="font-newsreader text-4xl font-light leading-none">{article.title}</h3>
                  <p className="mt-5 leading-relaxed text-white/58">{article.excerpt}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </ScrollScene>

        <ScrollScene>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_10%,rgba(201,173,115,0.18),transparent_28%),radial-gradient(circle_at_88%_80%,rgba(89,102,79,0.16),transparent_30%)]" />
          <div className="relative grid grid-cols-1 gap-12 lg:grid-cols-[0.78fr_1.22fr]">
            <SectionTitle eyebrow="FAQ" title="Common questions before we begin." />
            <div className="space-y-3">
              {faqs.map((item, index) => (
                <motion.div key={item.question} variants={reveal} transition={{ duration: 0.65, ease: EASE }} className="group border border-black/10 bg-white/24 px-4 backdrop-blur-xl transition hover:border-[#c9ad73]/50 hover:shadow-[0_18px_70px_rgba(201,173,115,0.16)] md:px-6">
                  <button type="button" onClick={() => setOpenFaq((current) => (current === index ? -1 : index))} className="flex w-full items-center justify-between gap-8 py-6 text-left" aria-expanded={openFaq === index}>
                    <span className="text-lg font-light leading-snug md:text-2xl">{item.question}</span>
                    <motion.span className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-black/20 text-black/45 transition group-hover:border-[#c9ad73] group-hover:text-[#8b6e30]" animate={{ rotate: openFaq === index ? 45 : 0 }} transition={{ duration: 0.28, ease: EASE }}>+</motion.span>
                  </button>
                  <motion.div initial={false} animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }} transition={{ duration: 0.38, ease: EASE }} className="overflow-hidden">
                    <p className="max-w-3xl pb-7 text-sm leading-relaxed text-black/58 md:text-base">{item.answer}</p>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </div>
        </ScrollScene>

        <ScrollScene dark>
          <WebGLDepthField />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(201,173,115,0.22),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.08),transparent_45%)]" />
          <div className="relative grid min-h-[62vh] grid-cols-1 items-end gap-12 lg:grid-cols-[1fr_0.8fr]">
            <SectionTitle eyebrow="Begin" title="Let us shape the next room you remember." light />
            <motion.div variants={reveal} transition={{ duration: 0.75, ease: EASE }} whileHover={{ y: -8 }} className="relative overflow-hidden border border-white/12 bg-white/[0.07] p-6 backdrop-blur-xl md:p-8">
              <motion.div className="absolute -right-16 -top-16 h-44 w-44 rounded-full border border-[#c9ad73]/28" animate={{ rotate: 360, scale: [1, 1.08, 1] }} transition={{ rotate: { duration: 22, repeat: Infinity, ease: "linear" }, scale: { duration: 8, repeat: Infinity, ease: "easeInOut" } }} />
              <p className="relative mb-8 text-base leading-relaxed text-white/66">Bring us the site, the ambition, or the feeling you cannot quite name yet. We will translate it into a complete spatial direction.</p>
              <div className="flex flex-wrap gap-3">
                <motion.a whileHover={{ scale: 1.04 }} href="/contact" className="bg-[#e9e1d1] px-7 py-4 text-[11px] uppercase tracking-[0.18em] text-[#12110f] no-underline">Start a project</motion.a>
                <motion.a whileHover={{ scale: 1.04 }} href={`mailto:${studio.email}`} className="border border-white/16 px-7 py-4 text-[11px] uppercase tracking-[0.18em] text-white no-underline">Email studio</motion.a>
              </div>
            </motion.div>
          </div>
        </ScrollScene>
      </main>
      <Footer />
    </div>
  );
};
