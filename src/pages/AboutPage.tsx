import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { PageWrapper } from "@/components/PageWrapper";
import { useInView } from "@/hooks/useInView";
import AboutHomeImage from "@/assets/abouthome.jpg";
import { useState } from "react";

const TEAM = [
  {
    name: "Anthoni Gantzmann",
    title: "Principal Architect",
    image: "https://framerusercontent.com/images/fkFNB8nJowsVydFUBtqhaNsqA.jpeg?scale-down-to=1024",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Anita Schroder",
    title: "Senior Architect",
    image: "https://framerusercontent.com/images/ZicVxApzxl4sxJuTicRbA1nt1Q.jpeg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Lewis Danton",
    title: "Junior Architect",
    image: "https://framerusercontent.com/images/vOcjqLoMUhi5GxDCun5WAsOSY.jpeg",
    linkedin: "https://www.linkedin.com/",
  },
];

const AWARDS = [
  { org: "AMP", title: "Architectural Design of The Year", year: "2024" },
  { org: "AIA Awards", title: "Interior Design of The Year", year: "2023" },
  { org: "The Arch", title: "The Communion: Story Behind", year: "2022" },
  { org: "ArchDaily", title: "Top 50 Architect Firm in Europe", year: "2021" },
];

const SERVICES_IMAGES = [
  "https://framerusercontent.com/images/vhTOTtueDBCx9yxBY9UPdO5eF9c.jpeg",
  "https://framerusercontent.com/images/cQ96QBtlZ09DlcjnzP1nobpNH4.jpeg",
  "https://framerusercontent.com/images/C5wWU0Nj6lv1KokCS11q95R2U.jpeg",
  "https://framerusercontent.com/images/Azi0qnhCSNl9F2DbbhcDdJ5PSU.jpeg",
];

const SERVICES_LIST = [
  "Interior Design",
  "Architecture",
  "Project Management",
  "Furniture Design",
];

const EASE = [0.33, 1, 0.68, 1] as const;

const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

export const AboutPage = () => {
  const { ref: introRef, inView: introInView } = useInView({ threshold: 0.1 });
  const { ref: servicesRef, inView: servicesInView } = useInView({ threshold: 0.05 });
  const { ref: teamRef, inView: teamInView } = useInView({ threshold: 0.05 });
  const { ref: awardsRef, inView: awardsInView } = useInView({ threshold: 0.05 });

  const [hoveredService, setHoveredService] = useState<number | null>(null);

  return (
    <div className="text-black text-xs font-normal bg-orange-50 font-sans_serif cursor-none-desktop">
      <CustomCursor />

      <PageWrapper>
        <div className="flex flex-col min-h-screen bg-orange-50">
          <Navbar />

          {/* HERO */}
          <header className="relative flex flex-col justify-end min-h-[85vh] md:min-h-screen w-full overflow-hidden p-[30px]">
            <div className="absolute inset-0 z-0">
              <img
                src={AboutHomeImage}
                alt="About Hero"
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/40 z-[1]" />

            <div className="relative z-[2] flex flex-col gap-y-4 pb-4">
              <motion.p
                className="text-white/60 text-sm font-light tracking-widest uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              >
                Tell A Story
              </motion.p>

              <div className="overflow-hidden">
                <motion.h1
                  className="text-white font-light leading-[1.05]"
                  style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  Every Space
                  <br />
                  Should
                </motion.h1>
              </div>
            </div>
          </header>

          {/* ABOUT US / INTRO */}
          <section
            ref={introRef as React.RefObject<HTMLElement>}
            className="w-full bg-orange-50 border-b border-black/20 px-5 md:px-[30px] py-[80px] md:py-[100px]"
          >
            <div className="max-w-[1100px] mx-auto">
              <div className="max-w-3xl">
                <motion.p
                  className="text-xs font-light font-dm_sans uppercase tracking-widest text-black/50 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={introInView ? { opacity: 1, y: 0 } : {}}
                >
                  About Us
                </motion.p>

                <motion.h2
                  className="font-light font-dm_sans leading-[1.1] mb-10"
                  style={{ fontSize: "clamp(1.8rem, 4vw, 3.5rem)" }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={introInView ? { opacity: 1, y: 0 } : {}}
                >
                  We are a passionate interior design practice dedicated to crafting timeless, client-centric spaces.
                </motion.h2>

                <motion.p
                  className="text-base md:text-lg font-light font-dm_sans text-black/70 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={introInView ? { opacity: 1, y: 0 } : {}}
                >
                  We are a passionate interior design practice dedicated to crafting timeless, client-centric spaces that blend functionality with refined aesthetics. With over a decade of experience across residential and commercial projects, we transform ideas into immersive environments where thoughtful planning, innovation, and detail come together to elevate everyday living.
                </motion.p>
              </div>
            </div>
          </section>

          {/* WHAT WE DO - HOVER IMAGE PREVIEW */}
          <section
            ref={servicesRef as React.RefObject<HTMLElement>}
            className="w-full bg-orange-50 border-b border-black/20 px-5 md:px-[30px] py-20 md:py-28"
          >
            <div className="max-w-[1680px] mx-auto">
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
                {/* Services List */}
                <div className="lg:w-[45%]">
                  <motion.h2
                    className="font-light font-dm_sans leading-[1.1] mb-8"
                    style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                  >
                    What We Do
                  </motion.h2>

                  <div className="space-y-6">
                    {SERVICES_LIST.map((service, i) => (
                      <motion.div
                        key={i}
                        className="group flex items-center justify-between border-b border-black/10 pb-5 cursor-pointer"
                        initial={{ opacity: 0, x: -30 }}
                        animate={servicesInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.1 + i * 0.08 }}
                        onHoverStart={() => setHoveredService(i)}
                        onHoverEnd={() => setHoveredService(null)}
                      >
                        <div className="flex items-center gap-4">
                          <span className="text-xs font-light text-black/40 w-8">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="text-2xl font-light group-hover:text-orange-800 transition-colors">
                            {service}
                          </span>
                        </div>
                        <span className="text-3xl opacity-0 group-hover:opacity-100 transition-all duration-300">→</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Image Preview Area */}
                <div className="lg:w-[55%] relative min-h-[520px] md:min-h-[620px] rounded-3xl overflow-hidden bg-stone-100 shadow-xl">
                  <AnimatePresence mode="wait">
                    {hoveredService !== null ? (
                      <motion.img
                        key={hoveredService}
                        src={SERVICES_IMAGES[hoveredService]}
                        alt={SERVICES_LIST[hoveredService]}
                        className="absolute inset-0 w-full h-full object-cover"
                        initial={{ opacity: 0, scale: 1.08 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 1.06 }}
                        transition={{ duration: 0.7, ease: EASE }}
                      />
                    ) : (
                      <div className="absolute inset-0 grid grid-cols-2 gap-3 p-6 opacity-75">
                        {SERVICES_IMAGES.map((src, i) => (
                          <img
                            key={i}
                            src={src}
                            alt=""
                            className="rounded-2xl object-cover w-full h-full"
                          />
                        ))}
                      </div>
                    )}
                  </AnimatePresence>

                  <AnimatePresence>
                    {hoveredService !== null && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        className="absolute bottom-8 left-8 bg-black/70 text-white px-6 py-3 rounded-full text-sm font-light backdrop-blur-md"
                      >
                        {SERVICES_LIST[hoveredService]}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </section>

          {/* OUR TEAM */}
          <section
            ref={teamRef as React.RefObject<HTMLElement>}
            className="w-full bg-orange-50 border-b border-black/20 px-5 md:px-[30px] py-[80px]"
          >
            <motion.p
              className="text-xs font-light font-dm_sans uppercase tracking-widest text-black/50 mb-4"
              initial={{ opacity: 0 }}
              animate={teamInView ? { opacity: 1 } : {}}
            >
              Our Team
            </motion.p>

            <motion.h2
              className="font-light font-dm_sans leading-[1.1] mb-16"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={teamInView ? { opacity: 1, y: 0 } : {}}
            >
              The People Behind
              <br />
              sanzur
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
              {TEAM.map((member, i) => (
                <motion.div
                  key={member.name}
                  className="flex flex-col gap-4"
                  initial={{ opacity: 0, y: 30 }}
                  animate={teamInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.12 }}
                >
                  <div className="overflow-hidden bg-stone-200 aspect-[3/4] group">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>

                  <div className="flex items-start justify-between pt-1">
                    <div>
                      <p className="text-xs font-light font-dm_sans uppercase tracking-widest text-black/50">
                        {member.title}
                      </p>
                      <h3 className="text-lg md:text-xl font-light font-dm_sans">
                        {member.name}
                      </h3>
                    </div>

                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black/50 hover:text-black transition-colors mt-1"
                    >
                      <LinkedInIcon />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* RECOGNITION / AWARDS */}
          <section
            ref={awardsRef as React.RefObject<HTMLElement>}
            className="w-full bg-orange-50 px-5 md:px-[30px] py-[80px]"
          >
            <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-20 mb-16">
              <motion.div
                className="md:w-1/2"
                initial={{ opacity: 0, y: 30 }}
                animate={awardsInView ? { opacity: 1, y: 0 } : {}}
              >
                <h2 className="font-light font-dm_sans leading-[1.1]" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
                  Recognition
                </h2>
              </motion.div>

              <motion.div
                className="md:w-1/2 flex items-end"
                initial={{ opacity: 0, y: 20 }}
                animate={awardsInView ? { opacity: 1, y: 0 } : {}}
              >
                <p className="text-sm md:text-base font-light font-dm_sans text-black/70 leading-relaxed">
                  Our work has been recognized for its quality and design excellence, earning accolades from industry peers and media alike.
                </p>
              </motion.div>
            </div>

            <div className="flex flex-col divide-y divide-black/20">
              {AWARDS.map((award, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col md:flex-row md:items-center justify-between gap-2 py-6"
                  initial={{ opacity: 0, x: -20 }}
                  animate={awardsInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <span className="text-xs font-light font-dm_sans uppercase tracking-widest text-black/50 md:w-[200px]">
                    {award.org}
                  </span>
                  <span className="text-lg md:text-2xl font-light font-dm_sans flex-1">
                    {award.title}
                  </span>
                  <span className="text-sm font-light font-dm_sans text-black/50 text-right">
                    {award.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </PageWrapper>
    </div>
  );
};