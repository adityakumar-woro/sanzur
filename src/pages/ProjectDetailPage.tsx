import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { PageWrapper } from "@/components/PageWrapper";
import { useInView } from "@/hooks/useInView";
import { ahujaVillaDescription, ahujaVillaImages, awadhiJewelsImages, marLoungeDescription, marLoungeImages, padelImages, villa17Description, villa17Images } from "@/data/studio";

const ALL_PROJECTS = [
  {
    id: "ahuja-villa",
    name: "Ahuja Villa",
    subtitle: "A complete living experience balancing functionality, comfort, and refined luxury",
    type: "Residential",
    location: "India",
    year: "2025",
    description: ahujaVillaDescription,
    caption: "",
    heroImage: ahujaVillaImages[0],
    galleryImages: ahujaVillaImages,
  },
  {
    id: "mar-lounge",
    name: "Mar Lounge",
    subtitle: "From intimate villa to refined coffee and confectionery destination",
    type: "Hospitality",
    location: "India",
    year: "2024",
    description: marLoungeDescription,
    caption: "A thoughtful transformation that honors the past while embracing a new purpose.",
    heroImage: marLoungeImages[0],
    galleryImages: marLoungeImages,
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
    heroImage: awadhiJewelsImages[0],
    galleryImages: awadhiJewelsImages,
  },
  {
    id: "padel",
    name: "Padel Court",
    subtitle: "Recreational space designed for sport and community",
    type: "Recreational",
    location: "India",
    year: "2025",
    description:
      "Padel is a dynamic recreational project focused on creating an engaging environment for sport and social connection. The design emphasizes functionality, energy, and community while maintaining a clean, modern aesthetic suitable for both serious players and casual enthusiasts.",
    caption: "A vibrant recreational destination blending sport, community, and contemporary design.",
    heroImage: padelImages[0],
    galleryImages: padelImages,
  },
  {
    id: "villa-17",
    name: "Villa 17",
    subtitle: "Luxury defined by quiet confidence and effortless comfort",
    type: "Residential",
    location: "India",
    year: "2024",
    description: villa17Description,
    caption: "Quiet luxury where comfort and thoughtful design create a desire to stay.",
    heroImage: villa17Images[0],
    galleryImages: villa17Images,
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
        <a href="/projects" className="text-black/60 text-sm no-underline">
          ← Back to Projects
        </a>
      </div>
    );
  }

  const currentIndex = ALL_PROJECTS.findIndex((p) => p.id === id);
  const nextProjects = Array.from({ length: NEXT_PROJECT_COUNT }, (_, i) =>
    ALL_PROJECTS[(currentIndex + i + 1) % ALL_PROJECTS.length]
  );
  const primaryGalleryImage = project.galleryImages[0] ?? project.heroImage;
  const supportingGalleryImages = project.galleryImages.slice(1);

  return (
    <div className="text-black text-xs font-normal bg-orange-50 font-sans_serif">
      <PageWrapper>
        <div className="flex flex-col min-h-screen bg-orange-50">
          <Navbar />

          {/* HERO */}
          <header className="relative flex flex-col justify-end min-h-[82vh] w-full overflow-hidden p-5 md:p-8">
            <div className="absolute inset-0 z-0">
              <img
                src={project.heroImage}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-black/10 z-[1]" />
            <div className="relative z-[2] flex flex-col gap-y-4 pb-4 w-full">
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
              <motion.div
                className="mt-5 grid grid-cols-1 sm:grid-cols-3 border-y border-white/20 max-w-[520px]"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.72, ease: EASE }}
              >
                {[
                  ["Type", project.type],
                  ["Location", project.location],
                  ["Year", project.year],
                ].map(([label, value]) => (
                  <div key={label} className="py-3 sm:py-4 sm:pr-4 border-b sm:border-b-0 sm:border-r border-white/20 last:border-b-0 sm:last:border-r-0">
                    <p className="text-[10px] font-light font-dm_sans uppercase tracking-widest text-white/45 mb-1">
                      {label}
                    </p>
                    <p className="text-sm font-light font-dm_sans text-white/85">{value}</p>
                  </div>
                ))}
              </motion.div>
            </div>
          </header>

          {/* PROJECT INFO */}
          <section
            ref={infoRef as React.RefObject<HTMLElement>}
            className="w-full bg-orange-50 border-b border-black/20 px-5 md:px-[30px] py-[80px] md:py-[110px]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-[0.7fr_1.3fr] gap-10 md:gap-20 max-w-[1320px]">
              <motion.div
                className="flex flex-col gap-5"
                initial={{ opacity: 0, y: 20 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE }}
              >
                <p className="text-xs font-light font-dm_sans uppercase tracking-widest text-black/40">
                  Project Narrative
                </p>
                {project.caption && (
                  <p className="text-2xl md:text-4xl font-light font-dm_sans text-black leading-[1.15] max-w-[560px]">
                    {project.caption}
                  </p>
                )}
              </motion.div>
              <motion.div
                className="flex flex-col gap-8"
                initial={{ opacity: 0, y: 20 }}
                animate={infoInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              >
                <p className="text-base md:text-lg font-light font-dm_sans text-black/70 leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 border-t border-black/15 pt-5">
                  {[
                    ["Category", project.type],
                    ["Place", project.location],
                    ["Completed", project.year],
                  ].map(([label, value]) => (
                    <div key={label} className="pr-4">
                      <p className="text-[10px] font-light font-dm_sans uppercase tracking-widest text-black/35 mb-2">
                        {label}
                      </p>
                      <p className="text-sm md:text-base font-light font-dm_sans text-black/75">{value}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </section>

          {/* GALLERY */}
          <section
            ref={galleryRef as React.RefObject<HTMLElement>}
            className="w-full px-5 md:px-[30px] py-[30px] md:py-[44px]"
          >
            <motion.div
              className="w-full overflow-hidden aspect-[16/10] md:aspect-[16/8] bg-stone-200"
              initial={{ opacity: 0, y: 30 }}
              animate={galleryInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, ease: EASE }}
            >
              <img src={primaryGalleryImage} alt={`${project.name} overview`} className="w-full h-full object-cover" />
            </motion.div>

            {supportingGalleryImages.length > 0 && (
              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6 md:py-8"
                initial={{ opacity: 0, y: 30 }}
                animate={galleryInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.22, ease: EASE }}
              >
                {supportingGalleryImages.map((image, index) => (
                  <div
                    key={`${image}-${index}`}
                    className={`${index % 4 === 0 ? "lg:col-span-2" : ""} overflow-hidden aspect-[4/3] bg-stone-200`}
                  >
                    <img src={image} alt={`${project.name} view ${index + 2}`} className="w-full h-full object-cover" loading="lazy" />
                  </div>
                ))}
              </motion.div>
            )}
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
                className="text-sm font-light font-dm_sans text-black/50 no-underline"
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
                    className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="text-xs font-light font-dm_sans uppercase tracking-widest text-black/40">
                      {np.type}
                    </p>
                    <h3 className="text-lg md:text-xl font-light font-dm_sans text-black">
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
