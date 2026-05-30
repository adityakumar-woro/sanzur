import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { VideoShowcase } from "@/sections/VideoShowcase";
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
  "Authority approvals align the project with UAE submission and compliance requirements.",
  "Drawings, procurement logic, lighting layers, and vendor coordination turn feeling into buildable detail.",
  "Final accessories staging, site reviews, and handover tuning bring the interior into focus.",
];

const collectionImages = [
  { src: "/collection-spaces/living-room.png", x: "-10vw", y: "-31vh", rotate: -1 },
  { src: "/collection-spaces/dining-room.png", x: "-38vw", y: "-10vh", rotate: 0.8 },
  { src: "/collection-spaces/hospitality-lounge.png", x: "-28vw", y: "26vh", rotate: -0.6 },
  { src: "/collection-spaces/bedroom-suite.png", x: "2vw", y: "30vh", rotate: 0.5 },
  { src: "/collection-spaces/entry-foyer.png", x: "33vw", y: "16vh", rotate: -0.8 },
  { src: "/collection-spaces/retail-salon.png", x: "24vw", y: "-21vh", rotate: 0.7 },
];

const heroStatImages = [
  "https://c.animaapp.com/mp6oe93yBdeJlG/assets/15.png",
  "https://c.animaapp.com/mp6oe93yBdeJlG/assets/8.png",
  "https://c.animaapp.com/mp6oe93yBdeJlG/assets/12.png",
];

const CollectionFloatingImage = ({
  image,
  progress,
  index,
}: {
  image: (typeof collectionImages)[number];
  progress: MotionValue<number>;
  index: number;
}) => {
  const x = useTransform(progress, [0.08, 0.72], ["0vw", image.x]);
  const y = useTransform(progress, [0.08, 0.72], ["0vh", image.y]);
  const rotate = useTransform(progress, [0.08, 0.72], [index % 2 ? -6 : 6, image.rotate]);
  const scale = useTransform(progress, [0.08, 0.72], [0.62, 1]);
  const opacity = useTransform(progress, [0, 0.12], [0, 1]);

  return (
    <motion.div
      className="absolute left-1/2 top-1/2 aspect-[3/2] w-[24.4vw] overflow-hidden bg-[#d4c7b6]"
      style={{ x, y, rotate, scale, opacity }}
      transformTemplate={(_, generated) => `translate(-50%, -50%) ${generated}`}
    >
      <img src={image.src} alt="" className="h-full w-full object-cover" loading="lazy" />
    </motion.div>
  );
};

const SpacesTransformedSection = () => {
  const ref = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const firstTextY = useTransform(scrollYProgress, [0.12, 0.55], [36, 0]);
  const secondTextY = useTransform(scrollYProgress, [0.2, 0.65], [48, 0]);
  const textOpacity = useTransform(scrollYProgress, [0.1, 0.34], [0, 1]);

  return (
  <section ref={ref} className="relative h-[180vh] overflow-visible bg-[#fcf2e8] text-[#161411]">
    <div className="sticky top-0 min-h-screen overflow-hidden px-5 py-24 md:px-0 md:py-0">
      <div className="mx-auto flex max-w-6xl flex-col gap-5 md:hidden">
      <div className="grid grid-cols-2 gap-3">
        {collectionImages.map((image, index) => (
          <div key={`${image.src}-${index}`} className="aspect-[3/2] overflow-hidden bg-[#d4c7b6]">
            <img src={image.src} alt="" className="h-full w-full object-cover" loading="lazy" />
          </div>
        ))}
      </div>
      <div className="py-10">
        <p className="text-[28px] font-light leading-[1.08]">A Collection of<br />Spaces Transformed</p>
        <p className="mt-8 pl-[28%] text-[28px] font-light leading-[1.08]">Through Our Refined<br />Design Approach.</p>
      </div>
    </div>

    <div className="hidden md:block">
      {collectionImages.map((image, index) => (
        <CollectionFloatingImage key={`${image.src}-${index}`} image={image} progress={scrollYProgress} index={index} />
      ))}

      <motion.div
        className="absolute left-[38.25%] top-[47.8%] font-dm_sans text-[21px] font-light leading-[1.14] tracking-normal"
        style={{ y: firstTextY, opacity: textOpacity }}
      >
        A Collection of
        <br />
        Spaces Transformed
      </motion.div>
      <motion.div
        className="absolute left-[47.2%] top-[55.8%] font-dm_sans text-[21px] font-light leading-[1.14] tracking-normal"
        style={{ y: secondTextY, opacity: textOpacity }}
      >
        Through Our Refined
        <br />
        Design Approach.
      </motion.div>
    </div>
    </div>
  </section>
  );
};

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
        <header ref={heroRef} className="relative z-[40] flex min-h-screen justify-center overflow-visible bg-[#050505] px-6 pb-0 pt-0 md:pb-0 md:pt-0">
          <motion.div
            className="relative flex h-[1000px] max-h-[800px] min-h-[auto] w-full max-w-[1100px] flex-col items-center justify-center gap-11 overflow-visible px-0 md:justify-between"
            style={{ y: heroTextY }}
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <div className="absolute inset-0 z-[1] overflow-hidden">
              <motion.div
                className="absolute left-[calc(50%_-_373.5px)] top-[-649px] z-0 h-[948px] w-[747px] overflow-hidden rounded-xl bg-[radial-gradient(55%_50%,rgb(156,156,156)_0%,rgba(0,0,0,0)_100%)] md:left-[calc(50%_-_400px)] md:top-[-675px] md:h-[980px] md:w-[800px]"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.25, ease: EASE }}
              />
              <motion.div className="absolute inset-0 z-0 overflow-hidden rounded-[1px]" style={{ y: heroY, scale: heroScale }}>
                <img
                  src="https://c.animaapp.com/mp6oe93yBdeJlG/assets/image-1.png"
                  alt=""
                  className="pointer-events-none absolute inset-0 h-full w-full object-fill"
                  loading="eager"
                />
              </motion.div>
            </div>

            <motion.div variants={reveal} transition={{ duration: 0.95, ease: EASE }} className="relative z-[4] flex w-full flex-col items-center justify-center pt-24 md:pt-[90px]">
              <h1 className="text-center font-inter_display text-5xl font-light leading-[43.2px] tracking-normal text-white md:text-[144px] md:leading-[129.6px]">
                <span className="inline-block bg-[linear-gradient(276deg,rgb(255,255,255)_0%,rgba(148,148,148,0.96)_100%)] bg-clip-text text-transparent">
                  Reimagine
                </span>
              </h1>
              <h1 className="text-center font-inter_display text-5xl font-light leading-[43.2px] tracking-normal text-white md:text-[144px] md:leading-[129.6px]">
                <span className="inline-block bg-[linear-gradient(276deg,rgb(255,255,255)_0%,rgba(166,166,166,0.96)_100%)] bg-clip-text text-transparent">
                  Your Space
                </span>
              </h1>
            </motion.div>

            <div className="flex w-full flex-col items-center justify-between gap-8 px-0 md:flex-row md:items-end md:px-11">
              <motion.div variants={reveal} transition={{ duration: 0.85, ease: EASE, delay: 0.1 }} className="relative z-[3] flex w-full flex-col items-center gap-3 md:w-min md:items-start">
                <div className="relative h-11 w-[90px]">
                  {heroStatImages.map((image, index) => (
                    <figure
                      key={image}
                      className="absolute top-0 h-11 w-11 overflow-hidden rounded-full border border-neutral-800 bg-[#161411]"
                      style={{ left: index === 0 ? 0 : index === 1 ? 23 : 46 }}
                    >
                      <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" />
                    </figure>
                  ))}
                </div>
                <p className="max-w-[220px] text-center font-inter_display text-sm font-light leading-relaxed text-stone-300 md:text-left md:text-lg md:leading-[1.2]">
                  More than 100+ spaces have been shaped by Sanzur.
                </p>
              </motion.div>

              <motion.figure
                className="absolute bottom-[-118px] left-[calc(50%_-_165px)] z-[90] hidden h-[470px] w-[330px] rotate-[15deg] overflow-hidden rounded-xl bg-[#211f1c] shadow-[0_40px_120px_rgba(0,0,0,0.55)] md:block"
                initial={{ opacity: 0, y: 120, rotate: 4, x: "-50%" }}
                animate={{ opacity: 1, y: 0, rotate: 15, x: 0 }}
                transition={{ duration: 1.1, ease: EASE, delay: 0.25 }}
              >
                <img
                  src="https://c.animaapp.com/mp6oe93yBdeJlG/assets/7.jpg"
                  alt="Interior Work Hero Image"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </motion.figure>

              <motion.div variants={reveal} transition={{ duration: 0.85, ease: EASE, delay: 0.18 }} className="relative z-[3] flex w-full flex-col items-center gap-6 md:w-min md:items-end">
                <p className="w-full max-w-[290px] text-center font-inter_display text-sm font-light leading-relaxed text-stone-300 md:w-[250px] md:text-right md:text-lg md:leading-[1.2]">
                  The intellect crafts the stunning, the soul shapes the residence, the sweet home.
                </p>
                <a href="/contact" className="group relative flex w-fit items-center justify-center gap-3 overflow-hidden rounded-full bg-white px-6 py-3 text-[#11100e] no-underline">
                  <span className="relative z-[2] font-inter_display text-lg font-medium leading-[1.2]">Get started</span>
                  <img
                    src="https://c.animaapp.com/mp6oe93yBdeJlG/assets/icon-4.svg"
                    alt=""
                    className="relative z-[2] h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
                  />
                  <span className="absolute bottom-[-136px] left-[-63px] top-[-217px] z-[1] w-[50px] rotate-[27deg] bg-zinc-300 transition-transform duration-700 group-hover:translate-x-[260px]" />
                </a>
              </motion.div>
            </div>
          </motion.div>
        </header>

        <VideoShowcase />

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

        <SpacesTransformedSection />

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
              <SectionTitle eyebrow="Philosophy" title="Luxury begins where a space feels inevitable." copy="Sanzur designs with atmosphere first, then resolves the plan, materials, lighting, joinery, and styling until the experience feels effortless." />
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
