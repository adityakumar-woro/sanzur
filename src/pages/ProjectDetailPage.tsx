import { useParams } from "react-router-dom";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
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
galleryImages: [
  awadhi2,
  awadhi3,
  awadhi4,
  awadhi1,
],
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
galleryImages: [
  villa1,
  villa3,
  villa4,
  villa5,
],
},
];

const NEXT_PROJECT_COUNT = 3;

const AnimatedSection = ({ children, className }: { children: React.ReactNode; className?: string }) => {
  const ref = useScrollReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`reveal ${className ?? ""}`}>
      {children}
    </div>
  );
};

export const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const project = ALL_PROJECTS.find((p) => p.id === id);

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

  // Build "next" projects (3 after the current, wrapping around)
  const currentIndex = ALL_PROJECTS.findIndex((p) => p.id === id);
  const nextProjects = Array.from({ length: NEXT_PROJECT_COUNT }, (_, i) =>
    ALL_PROJECTS[(currentIndex + i + 1) % ALL_PROJECTS.length]
  );

  return (
    <div className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-orange-50 box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif">
      <div className="box-border caret-transparent">
        <div className="relative content-center items-center bg-orange-50 flex flex-col h-min gap-y-0 w-full">
          <Navbar />

          {/* ── HERO ── (Fixed - No longer sticky) */}
          <header className="relative flex flex-col justify-end min-h-[85vh] min-h-[500px] w-full overflow-hidden p-[30px]">
            <div className="absolute inset-0 z-0">
              <img
                src={project.heroImage}
                alt={project.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-[1]" />
            <div className="relative z-[2] flex flex-col gap-y-3 pb-4 w-full max-w-[1200px]">
              <p className="text-white/60 text-sm font-light font-dm_sans tracking-widest uppercase">
                {project.type}
              </p>
              <h1 className="text-white text-[56px] md:text-[96px] font-light font-dm_sans leading-[1.05]">
                {project.name}
              </h1>
              <p className="text-white/70 text-lg md:text-2xl font-light font-dm_sans leading-[1.3] max-w-[700px]">
                {project.subtitle}
              </p>
            </div>
          </header>

          {/* ── PROJECT INFO ── */}
          <section className="w-full bg-orange-50 border-b border-black/20 px-[30px] py-[80px]">
            <div className="flex flex-col md:flex-row gap-10 md:gap-20 max-w-[1200px]">
              {/* meta */}
              <AnimatedSection className="flex flex-col gap-2 md:w-[220px] shrink-0">
                <p className="text-xs font-light font-dm_sans uppercase tracking-widest text-black/40 mb-3">Details</p>
                <p className="text-base font-light font-dm_sans text-black">{project.type}</p>
                <p className="text-sm font-light font-dm_sans text-black/60">{project.location}</p>
                <p className="text-sm font-light font-dm_sans text-black/60">{project.year}</p>
              </AnimatedSection>
              {/* description */}
              <AnimatedSection className="reveal-delay-1 flex-1">
                <p className="text-base md:text-lg font-light font-dm_sans text-black/70 leading-relaxed whitespace-pre-line">
                  {project.description}
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* ── GALLERY IMAGE 1 — full width ── */}
          <section className="w-full px-[30px] py-[30px]">
            <AnimatedSection>
              <div className="w-full overflow-hidden aspect-[16/9] bg-stone-200">
                <img
                  src={project.galleryImages[0]}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          </section>

          {/* ── CAPTION + GALLERY IMAGE 2 ── */}
          <section className="w-full px-[30px] py-[30px]">
            <div className="flex flex-col md:flex-row gap-8 items-start">
              <AnimatedSection className="md:w-[40%]">
                <p className="text-sm md:text-base font-light font-dm_sans text-black/60 leading-relaxed italic max-w-[380px]">
                  “{project.caption}”
                </p>
              </AnimatedSection>
              <AnimatedSection className="reveal-delay-1 md:w-[60%]">
                <div className="overflow-hidden aspect-[4/3] bg-stone-200">
                  <img
                    src={project.galleryImages[1]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* ── GALLERY 2-UP ── */}
          <section className="w-full px-[30px] py-[30px] pb-[80px]">
            <AnimatedSection>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="overflow-hidden aspect-[4/3] bg-stone-200">
                  <img
                    src={project.galleryImages[2]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="overflow-hidden aspect-[4/3] bg-stone-200">
                  <img
                    src={project.galleryImages[3] ?? project.galleryImages[0]}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </AnimatedSection>
          </section>

          {/* ── NEXT PROJECTS ── */}
          <section className="w-full bg-orange-50 border-t border-black/20 px-[30px] py-[80px]">
            <div className="flex items-center justify-between mb-12">
              <AnimatedSection>
                <h2 className="text-[36px] md:text-[56px] font-light font-dm_sans leading-[1.1]">
                  Next Projects
                </h2>
              </AnimatedSection>
              <AnimatedSection className="reveal-delay-1">
                <a
                  href="/projects"
                  className="text-sm font-light font-dm_sans text-black/50 hover:text-black transition-colors duration-200 no-underline"
                >
                  ← Back to All Projects
                </a>
              </AnimatedSection>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {nextProjects.map((np, i) => (
                <a
                  key={np.id}
                  href={`/projects/${np.id}`}
                  className="group flex flex-col gap-4 no-underline"
                  style={{ transitionDelay: `${i * 0.1}s` }}
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
                </a>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
};