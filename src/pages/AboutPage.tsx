import { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { images, services, studio } from "@/data/studio";

const EASE = [0.22, 1, 0.36, 1] as const;

const reveal = {
  hidden: { opacity: 0, y: 34, filter: "blur(10px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const VALUES = [
  {
    number: "01",
    title: "Restraint",
    text: "Luxury is edited until every gesture has purpose, weight, and silence.",
    image: "/about-values/restraint.png",
    alt: "Minimal stone plinth with a sculptural vessel in warm side light",
  },
  {
    number: "02",
    title: "Material Memory",
    text: "Stone, timber, plaster, metal, and textile are selected with vendor management, purchasing clarity, and attention to how each material ages, absorbs light, and holds touch.",
    image: "/about-values/material-memory.png",
    alt: "Interior material palette with stone, timber, brass, plaster, and woven textile samples",
  },
  {
    number: "03",
    title: "Human Rhythm",
    text: "Plans are shaped around rituals, privacy, arrival, hosting, pause, and retreat.",
    image: "/about-values/human-rhythm.png",
    alt: "Calm residential interior threshold with curtains, lounge chair, book, and morning light",
  },
  {
    number: "04",
    title: "Execution Calm",
    text: "Our process moves from briefing and spatial audit to concept direction, UAE authority approvals, site coordination, and final accessories staging.",
    image: "/about-values/execution-calm.png",
    alt: "Orderly designer table with architectural drawings, material samples, scale, and brass pen",
  },
];

const STUDIO_NOTES = [
  "Private villas with layered thresholds and softened light.",
  "Retail salons tuned for slower discovery and richer display.",
  "Hospitality environments with memorable arrival sequences.",
  "Objects, materials, and styling that make spaces feel collected.",
];

const WebGLAtmosphere = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let active = true;
    let cleanup: (() => void) | undefined;

    import("three").then((THREE) => {
      const mount = mountRef.current;
      if (!active || !mount) return;

      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
      renderer.setSize(mount.clientWidth, mount.clientHeight);
      mount.appendChild(renderer.domElement);

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(42, mount.clientWidth / mount.clientHeight, 0.1, 100);
      camera.position.z = 7;

      const group = new THREE.Group();
      const material = new THREE.MeshBasicMaterial({ color: 0xc9ad73, transparent: true, opacity: 0.18, wireframe: true });
      const secondMaterial = new THREE.MeshBasicMaterial({ color: 0xeee7da, transparent: true, opacity: 0.08, wireframe: true });
      const ring = new THREE.Mesh(new THREE.TorusGeometry(1.7, 0.025, 12, 180), material);
      const knot = new THREE.Mesh(new THREE.TorusKnotGeometry(1.05, 0.08, 120, 10), secondMaterial);
      ring.rotation.x = Math.PI / 2.7;
      knot.position.set(1.3, -0.4, 0);
      group.add(ring, knot);
      scene.add(group);

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
        group.rotation.y = frame;
        group.rotation.x = Math.sin(frame * 0.8) * 0.18;
        knot.rotation.y = -frame * 1.4;
        renderer.render(scene, camera);
        animationId = requestAnimationFrame(animate);
      };

      resize();
      animate();
      window.addEventListener("resize", resize);
      cleanup = () => {
        window.removeEventListener("resize", resize);
        cancelAnimationFrame(animationId);
        ring.geometry.dispose();
        knot.geometry.dispose();
        material.dispose();
        secondMaterial.dispose();
        renderer.dispose();
        renderer.domElement.remove();
      };
    });

    return () => {
      active = false;
      cleanup?.();
    };
  }, []);

  return <div ref={mountRef} className="pointer-events-none absolute inset-0 mix-blend-screen opacity-80" aria-hidden="true" />;
};

const SectionTitle = ({ eyebrow, title, copy, light = false }: { eyebrow: string; title: string; copy?: string; light?: boolean }) => (
  <motion.div variants={reveal} transition={{ duration: 0.8, ease: EASE }}>
    <p className={`mb-5 text-[10px] uppercase tracking-[0.28em] ${light ? "text-[#c9ad73]" : "text-black/45"}`}>{eyebrow}</p>
    <h2 className="font-newsreader font-light leading-[0.96]" style={{ fontSize: "clamp(2.9rem, 7vw, 7.2rem)" }}>
      {title}
    </h2>
    {copy ? <p className={`mt-7 max-w-2xl text-sm leading-relaxed md:text-base ${light ? "text-white/62" : "text-black/62"}`}>{copy}</p> : null}
  </motion.div>
);

export const AboutPage = () => {
  const heroRef = useRef<HTMLElement | null>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1.08, 1]);

  return (
    <div className="bg-[#12110f] text-white font-dm_sans">
      <Navbar />
      <main>
        <header ref={heroRef} className="relative flex min-h-[72vh] items-end overflow-hidden px-5 pb-10 pt-16 md:px-8">
          <WebGLAtmosphere />
          <motion.img src={images.aboutHome} alt="Sanzur interior atmosphere" className="absolute inset-0 h-full w-full object-cover opacity-64" style={{ y: heroY, scale: heroScale }} />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_20%,rgba(201,173,115,0.22),transparent_34%),linear-gradient(90deg,rgba(18,17,15,0.94),rgba(18,17,15,0.52)_58%,rgba(18,17,15,0.2))]" />
          <motion.div className="relative z-10 max-w-6xl" initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={reveal} transition={{ duration: 0.8, ease: EASE }} className="mb-5 text-[10px] uppercase tracking-[0.28em] text-[#c9ad73]">
              About Us
            </motion.p>
            <motion.h1 variants={reveal} transition={{ duration: 0.95, ease: EASE }} className="font-newsreader font-light leading-[0.96]" style={{ fontSize: "clamp(4rem, 10.5vw, 11rem)" }}>
              A studio for quiet architectural luxury.
            </motion.h1>
            <motion.p variants={reveal} transition={{ duration: 0.8, ease: EASE }} className="mt-7 max-w-2xl text-sm leading-relaxed text-white/68 md:text-base">
              We shape interiors through atmosphere, proportion, material intelligence, and calm execution.
            </motion.p>
          </motion.div>
        </header>

        <motion.section className="relative overflow-hidden bg-[#ebe5d8] px-5 py-14 text-[#12110f] md:px-8 md:py-20" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(201,173,115,0.16),transparent_34%),radial-gradient(circle_at_86%_88%,rgba(89,102,79,0.12),transparent_34%)]" />
          <div className="relative grid grid-cols-1 items-stretch gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <motion.div variants={reveal} transition={{ duration: 0.8, ease: EASE }} className="relative min-h-[520px] overflow-hidden bg-[#d4c7b6]">
              <img src={images.about} alt="" className="absolute inset-0 h-full w-full object-cover" loading="eager" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <motion.div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-3" variants={stagger}>
                {[images.editorialOne, images.editorialThree, images.editorialFive].map((image) => (
                  <motion.div key={image} variants={reveal} whileHover={{ y: -5 }} transition={{ duration: 0.32, ease: EASE }} className="aspect-[4/5] overflow-hidden border border-white/20 bg-white/10 backdrop-blur">
                    <img src={image} alt="" className="h-full w-full object-cover" loading="lazy" sizes="(max-width: 1024px) 28vw, 10vw" />
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div variants={reveal} transition={{ duration: 0.8, ease: EASE }} className="grid content-between gap-6 border border-black/10 bg-white/24 p-6 backdrop-blur-xl md:p-8">
              <SectionTitle
                eyebrow="Studio"
                title="Designed with restraint. Detailed for memory."
                copy="Sanzur works across private villas, retail salons, hospitality concepts, and lifestyle spaces. Each project is developed as a complete spatial experience, from first feeling to final styling."
              />
              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {STUDIO_NOTES.map((note, index) => (
                  <motion.div key={note} variants={reveal} transition={{ duration: 0.6, ease: EASE, delay: index * 0.03 }} className="border-t border-black/15 pt-4 text-sm leading-relaxed text-black/62">
                    {note}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section className="relative overflow-hidden px-5 py-16 md:px-8 md:py-24" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,#12110f,#17130e_52%,#12110f)]" />
          <div className="relative mb-10 border-b border-white/10 pb-10">
            <SectionTitle eyebrow="Design Values" title="Calm language. Exacting craft." copy="A simpler, more architectural system for the principles behind each commission." light />
          </div>
          <div className="relative grid grid-cols-1 gap-4 md:grid-cols-2">
            {VALUES.map(({ number, title, text, image, alt }) => (
              <motion.article key={title} variants={reveal} whileHover={{ y: -6 }} transition={{ duration: 0.68, ease: EASE }} className="group grid min-h-[260px] grid-cols-1 overflow-hidden border border-white/12 bg-white/[0.045] md:grid-cols-[0.42fr_0.58fr]">
                <div className="relative min-h-[220px] overflow-hidden">
                  <img src={image} alt={alt} className="absolute inset-0 h-full w-full object-cover opacity-75 transition duration-700 group-hover:scale-105" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                  <span className="absolute bottom-4 left-4 font-newsreader text-5xl font-light text-[#c9ad73]">{number}</span>
                </div>
                <div className="flex flex-col justify-end p-6 md:p-7">
                  <h3 className="mb-5 font-newsreader text-4xl font-light leading-none md:text-5xl">{title}</h3>
                  <p className="text-sm leading-relaxed text-white/62">{text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.section>

        <motion.section className="relative overflow-hidden bg-[#ebe5d8] px-5 py-16 text-[#12110f] md:px-8 md:py-24" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.18 }} variants={stagger}>
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
            <div>
              <SectionTitle eyebrow="Practice" title="Interior architecture, styling, and delivery under one visual direction." />
              <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-2">
                {services.map((service, index) => (
                  <motion.div key={service.name} variants={reveal} transition={{ duration: 0.62, ease: EASE, delay: index * 0.03 }} className="border-t border-black/15 pt-5">
                    <p className="mb-3 text-sm text-black/35">{String(index + 1).padStart(2, "0")}</p>
                    <h3 className="font-newsreader text-3xl font-light leading-none">{service.name}</h3>
                    <p className="mt-4 text-sm leading-relaxed text-black/58">{service.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div variants={reveal} transition={{ duration: 0.8, ease: EASE }} className="relative min-h-[540px] overflow-hidden bg-[#d4c7b6]">
              <img src={images.editorialTwo} alt="Luxury interior detail" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/62 via-transparent to-transparent" />
              <motion.div className="absolute bottom-6 left-6 right-6 border border-white/18 bg-white/12 p-5 text-white backdrop-blur-xl" whileHover={{ y: -5 }} transition={{ duration: 0.35, ease: EASE }}>
                <p className="text-[10px] uppercase tracking-[0.24em] text-[#c9ad73]">Studio Contact</p>
                <a href={`mailto:${studio.email}`} className="mt-4 block font-newsreader text-3xl font-light leading-none text-white no-underline md:text-4xl">
                  {studio.email}
                </a>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </main>
      <Footer />
    </div>
  );
};
