import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { PageWrapper } from "@/components/PageWrapper";
import { useInView } from "@/hooks/useInView";
import villa1 from "@/assets/villa1.jpeg";
import villa2 from "@/assets/villa2.jpeg";
import villa3 from "@/assets/villa3.jpeg";
import villa4 from "@/assets/villa4.jpeg";
import villa5 from "@/assets/villa5.jpeg";
import awadhi1 from "@/assets/awadhi1.jpeg";
import awadhi2 from "@/assets/awadhi2.jpeg";
import awadhi3 from "@/assets/awadhi3.jpeg";
import awadhi4 from "@/assets/awadhi4.jpeg";

const ALL_PROJECTS = [
  {
    id: "ahuja-villa",
    name: "Ahuja Villa",
    subtitle: "A complete living experience balancing functionality, comfort, and refined luxury",
    type: "Residential",
    location: "India",
    year: "2025",
    description:
      "More than a residence, Ahuja Villa is designed as a complete living experience, balancing functionality, comfort, and refined luxury across 499 sqm. Fluid transitions connect living, dining, and lounge areas, while private zones offer intimacy and retreat. Expansive living spaces contrast with intimate family lounges and bedrooms, with soft lighting, neutral palettes, and layered materials enhancing mood and comfort. Bespoke joinery, furniture, and detailing create cohesion, while layered lighting and landscaped outdoors extend the experience. Every element is crafted for intuitive, timeless elegance.",
    caption: "Timeless elegance through thoughtful spatial flow and refined detailing.",
    heroImage: "https://framerusercontent.com/images/f2kdZ2VnYMzJohVsHO2VMhmqNE.jpeg",
    galleryImages: [
      "https://framerusercontent.com/images/f2kdZ2VnYMzJohVsHO2VMhmqNE.jpeg",
      "https://framerusercontent.com/images/ztk37bNpQiL8L10UgVszhD7OSk.jpeg",
      "https://framerusercontent.com/images/qzYmXsT9I39dWLW2f0Z5Wcv1XYg.jpeg",
      "https://framerusercontent.com/images/TIej5lk8D06XR5B65DtRqzzLU.jpeg",
    ],
  },
  {
    id: "mar-lounge",
    name: "Mar Lounge",
    subtitle: "From intimate villa to refined coffee and confectionery destination",
    type: "Hospitality",
    location: "India",
    year: "2024",
    description:
      "This project began as a quiet residential villa, a space once defined by intimate routines, family gatherings, and the gentle rhythm of everyday living. The design approach was rooted in understanding its existing character, allowing the transformation to evolve organically rather than imposing a new identity.\n\nMar Lounge is the outcome of this thoughtful transition. The three-level residence has been reimagined into a refined coffee and confectionery destination, complemented by a poolside terrace that enhances its experiential appeal. What sets the project apart is its seamless adaptability — the space feels inherently aligned with its new purpose, as though it was always meant to evolve this way.\n\nThe spatial journey has been carefully curated. The ground floor welcomes guests with a vibrant, energetic café environment, while the upper levels unfold into distinct atmospheres, each offering a unique mood and rhythm. The experience culminates at the terrace, where the poolside setting at golden hour creates a sense of quiet retreat — a complete sensory transition within a single structure.",
    caption: "A thoughtful transformation that honors the past while embracing a new purpose.",
    heroImage: "https://framerusercontent.com/images/ztk37bNpQiL8L10UgVszhD7OSk.jpeg",
    galleryImages: [
      "https://framerusercontent.com/images/ztk37bNpQiL8L10UgVszhD7OSk.jpeg",
      "https://framerusercontent.com/images/f2kdZ2VnYMzJohVsHO2VMhmqNE.jpeg",
      "https://framerusercontent.com/images/qzYmXsT9I39dWLW2f0Z5Wcv1XYg.jpeg",
      "https://framerusercontent.com/images/TIej5lk8D06XR5B65DtRqzzLU.jpeg",
    ],
  },
  {
    id: "awadhi-jewels",
    name: "Al Awadhi Jewels",
    subtitle: "A jewellery retail space designed for discovery and quiet luxury",
    type: "Commercial",
    location: "India",
    year: "2024",
    description:
      "Jewellery retail spaces carry a unique responsibility; they must evoke a sense of value, inviting customers to pause, to appreciate, and to dream. At Al Awadhi, located within Al Maqtaa Mall, the ground floor was designed around the experience of discovery.\n\nWarm, wood-toned display cabinetry, refined gold accents, and a dramatic chandelier ceiling work in harmony to create an atmosphere that is both immersive and unhurried. These elements are not merely decorative; they are intentional, designed to slow the pace and encourage moments of connection with each piece. The shopfront, crafted from a combination of dark marble and glass, establishes a sense of elegance even before one steps inside.\n\nAbove, a discreet mezzanine level accommodates operational functions, allowing the retail floor to remain uninterrupted — preserving the sense of quiet luxury and focus that defines the experience below.",
    caption: "An immersive retail experience where every detail invites pause and appreciation.",
    heroImage: awadhi1,
    galleryImages: [awadhi2, awadhi3, awadhi4, awadhi1],
  },
  {
    id: "padel",
    name: "Padel",
    subtitle: "Recreational space designed for sport and community",
    type: "Recreational",
    location: "India",
    year: "2025",
    description:
      "Padel is a dynamic recreational project focused on creating an engaging environment for sport and social connection. The design emphasizes functionality, energy, and community while maintaining a clean, modern aesthetic suitable for both serious players and casual enthusiasts.",
    caption: "A vibrant recreational destination blending sport, community, and contemporary design.",
    heroImage: "https://framerusercontent.com/images/TIej5lk8D06XR5B65DtRqzzLU.jpeg",
    galleryImages: [
      "https://framerusercontent.com/images/TIej5lk8D06XR5B65DtRqzzLU.jpeg",
      "https://framerusercontent.com/images/pqX1CuSJYsP7oDqUxXpKvHgP4VY.jpeg",
      "https://framerusercontent.com/images/f2kdZ2VnYMzJohVsHO2VMhmqNE.jpeg",
      "https://framerusercontent.com/images/ztk37bNpQiL8L10UgVszhD7OSk.jpeg",
    ],
  },
  {
    id: "villa-17",
    name: "Villa 17",
    subtitle: "Luxury defined by quiet confidence and effortless comfort",
    type: "Residential",
    location: "India",
    year: "2024",
    description:
      "Luxury, to us, is never about excess; it is defined by a quiet confidence, where a space makes you feel completely at ease from the moment you arrive. Villa 17 was conceived around this very idea.\n\nEach space has been thoughtfully designed to serve the people who inhabit it. The master bedroom offers a sense of enveloping comfort at the end of a long day, the kitchen is both generous and intuitive — inviting moments of gathering and creation — while the dining area, with its interplay of marble and soft lighting, transforms even the most ordinary evenings into something memorable.\n\nThe response from those who have experienced the home has been deeply telling — a reluctance to leave, a desire to linger. For us, there is no greater measure of success than that.",
    caption: "Quiet luxury where comfort and thoughtful design create a desire to stay.",
    heroImage: villa2,
    galleryImages: [villa1, villa3, villa4, villa5],
  },
];

const NEXT_PROJECT_COUNT = 3;
const EASE = [0.33, 1, 0.68, 1] as const;

export const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = ALL_PROJECTS.find((p) => p.id === id);
  const { ref: infoRef, inView: infoInView } = useInView({ threshold: 0.1 });
  const { ref: galleryRef, inView: galleryInView } = useInView({ threshold: 0.05 });
  const { ref: nextRef, inView: nextInView } = useInView({ threshold: 0.05 });

  if (!project) {
    return (
      <div className="min-h-screen bg-orange-50 flex flex-col items-center justify-center gap-6 font-dm_sans">
        <p className="text-2xl font-light text-black">Project not found.</p>
        <a href="/projects" className="text-black/60 hover:text-black text-sm no-underline">
          ← Back to Projects
        </a>
      </div>
    );
  }

  const currentIndex = ALL_PROJECTS.findIndex((p) => p.id === id);
  const nextProjects = Array.from({ length: NEXT_PROJECT_COUNT }, (_, i) =>
    ALL_PROJECTS[(currentIndex + i + 1) % ALL_PROJECTS.length]
  );

  return (
    <div className="text-black text-xs font-normal bg-orange-50 font-sans_serif cursor-none-desktop">
      <CustomCursor />
      <PageWrapper>
        <div className="flex flex-col min-h-screen bg-orange-50">
          <Navbar />

          {/* HERO */}
          <header className="relative flex flex-col justify-end min-h-[85vh] w-full overflow-hidden p-[30px]">
            <div className="absolute inset-0 z-0">
              <img
                src={project.heroImage}
                alt={project.name}
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]" />
            <div className="relative z-[2] flex flex-col gap-y-3 pb-4 w-full">
              <motion.p
                className="text-white/60 text-sm font-light tracking-widest uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              >
                {project.type}
              </motion.p>
              <div className="overflow-hidden">
                <motion.h1
                  className="text-white font-light leading-[1.05]"
                  style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  {project.name}
                </motion.h1>
              </div>
              <motion.p
                className="text-white/70 font-light font-dm_sans leading-[1.3] max-w-[700px]"
                style={{ fontSize: "clamp(1rem, 2vw, 1.5rem)" }}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.6, ease: EASE }}
              >
                {project.subtitle}
              </motion.p>
            </div>
          </header>

          {/* PROJECT INFO */}
          <section
            ref={infoRef as React.RefObject<HTMLElement>}
            className="w-full bg-orange-50 border-b border-black/20 px-5 md:px-[30px] py-[80px]"
          >
            <div className="flex flex-col md:flex-row gap-10 md:gap-20 max-w-[1200px]">
              <motion.div
                className="flex flex-col gap-2 md:w-[220px] shrink-0"
                initial={{ opacity: 0, y: 20 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <p className="text-xs font-light font-dm_sans uppercase tracking-widest text-black/40 mb-3">Details</p>
                <p className="text-base font-light font-dm_sans text-black">{project.type}</p>
                <p className="text-sm font-light font-dm_sans text-black/60">{project.location}</p>
                <p className="text-sm font-light font-dm_sans text-black/60">{project.year}</p>
              </motion.div>
              <motion.div
                className="flex-1"
                initial={{ opacity: 0, y: 20 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              >
                <p className="text-base md:text-lg font-light font-dm_sans text-black/70 leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </motion.div>
            </div>
          </section>

          {/* GALLERY */}
          <section
            ref={galleryRef as React.RefObject<HTMLElement>}
            className="w-full px-5 md:px-[30px] py-[30px]"
          >
            <motion.div
              className="w-full overflow-hidden aspect-[16/9] bg-stone-200 mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <img src={project.galleryImages[0]} alt="" className="w-full h-full object-cover" />
            </motion.div>

            <div className="flex flex-col md:flex-row gap-6 mb-6">
              <motion.div
                className="md:w-[40%] flex items-center"
                initial={{ opacity: 0, x: -20 }}
                animate={galleryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
              >
                <p className="text-sm md:text-base font-light font-dm_sans text-black/60 leading-relaxed italic max-w-[380px]">
                  "{project.caption}"
                </p>
              </motion.div>
              <motion.div
                className="md:w-[60%] overflow-hidden aspect-[4/3] bg-stone-200"
                initial={{ opacity: 0, x: 20 }}
                animate={galleryInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
              >
                <img src={project.galleryImages[1]} alt="" className="w-full h-full object-cover" />
              </motion.div>
            </div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            >
              <div className="overflow-hidden aspect-[4/3] bg-stone-200">
                <img src={project.galleryImages[2]} alt="" className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden aspect-[4/3] bg-stone-200">
                <img src={project.galleryImages[3] ?? project.galleryImages[0]} alt="" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </section>

          {/* NEXT PROJECTS - Extra bottom padding added */}
          <section
            ref={nextRef as React.RefObject<HTMLElement>}
            className="w-full bg-orange-50 border-t border-black/20 px-5 md:px-[30px] py-[80px] pb-24 md:pb-32"
          >
            <div className="flex items-center justify-between mb-12">
              <motion.h2
                className="font-light font-dm_sans leading-[1.1]"
                style={{ fontSize: "clamp(2rem, 5vw, 3.5rem)" }}
                initial={{ opacity: 0, y: 20 }}
                animate={nextInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: EASE }}
              >
                Next Projects
              </motion.h2>
              <motion.a
                href="/projects"
                className="text-sm font-light font-dm_sans text-black/50 hover:text-black transition-colors duration-200 no-underline"
                initial={{ opacity: 0 }}
                animate={nextInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.2, ease: EASE }}
              >
                ← Back to All Projects
              </motion.a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nextProjects.map((np, i) => (
                <motion.a
                  key={np.id}
                  href={`/projects/${np.id}`}
                  className="group flex flex-col gap-4 no-underline"
                  initial={{ opacity: 0, y: 30 }}
                  animate={nextInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1, ease: EASE }}
                >
                  <div className="relative overflow-hidden aspect-[4/3] bg-stone-200">
                    <img
                      src={np.heroImage}
                      alt={np.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-light font-dm_sans uppercase tracking-widest text-black/40">
                      {np.type}
                    </p>
                    <h3 className="text-lg md:text-xl font-light font-dm_sans text-black group-hover:opacity-60 transition-opacity duration-200">
                      {np.name}
                    </h3>
                    <p className="text-sm font-light font-dm_sans text-black/50">{np.location}</p>
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