import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { PageWrapper } from "@/components/PageWrapper";
import { useInView } from "@/hooks/useInView";
import villa2 from "@/assets/villa2.jpeg";
import awadhi1 from "@/assets/awadhi1.jpeg";

const ALL_PROJECTS = [
  { id: "ahuja-villa",    name: "Ahuja Villa",    type: "Residential",  location: "India", image: "https://framerusercontent.com/images/f2kdZ2VnYMzJohVsHO2VMhmqNE.jpeg" },
  { id: "mar-lounge",     name: "Mar Lounge",     type: "Hospitality",  location: "India", image: "https://framerusercontent.com/images/ztk37bNpQiL8L10UgVszhD7OSk.jpeg" },
  { id: "awadhi-jewels",  name: "Awadhi Jewels",  type: "Commercial",   location: "India", image: awadhi1 },
  { id: "padel",          name: "Padel",           type: "Recreational", location: "India", image: "https://framerusercontent.com/images/TIej5lk8D06XR5B65DtRqzzLU.jpeg" },
  { id: "villa-17",       name: "Villa 17",        type: "Residential",  location: "India", image: villa2 },
];

const INITIAL_GRID_COUNT = 4;
const LOAD_MORE_COUNT = 4;

const EASE = [0.33, 1, 0.68, 1] as const;

export const ProjectsPage = () => {
  const [gridVisible, setGridVisible] = useState(INITIAL_GRID_COUNT);
  const { ref: gridRef, inView: gridInView } = useInView({ threshold: 0.05 });
  const { ref: indexRef, inView: indexInView } = useInView({ threshold: 0.05 });

  const gridProjects = ALL_PROJECTS.slice(0, gridVisible);
  const indexProjects = ALL_PROJECTS;

  return (
    <div className="text-black text-xs font-normal bg-orange-50 font-sans_serif cursor-none-desktop">
      <CustomCursor />
      <PageWrapper>
        <div className="flex flex-col min-h-screen bg-orange-50">
          <Navbar />

          {/* HERO */}
          <header className="relative flex flex-col justify-end min-h-screen w-full overflow-hidden p-[30px]">
            <div className="absolute inset-0 bg-black/50 z-[1]" />
            <div className="absolute inset-0 z-0">
              <img
                src="https://framerusercontent.com/images/f2kdZ2VnYMzJohVsHO2VMhmqNE.jpeg"
                alt=""
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <div className="relative z-[2] flex flex-col gap-y-4 pb-4">
              <motion.p
                className="text-white/60 text-sm font-light tracking-widest uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              >
                Focus on Creating Cohesive, Livable Spaces
              </motion.p>
              <div className="overflow-hidden">
                <motion.h1
                  className="text-white font-light leading-[1.1]"
                  style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  Projects
                </motion.h1>
              </div>
            </div>
          </header>

          {/* PROJECT GRID */}
          <section className="w-full px-5 md:px-[30px] py-[80px]">
            <div
              ref={gridRef as React.RefObject<HTMLDivElement>}
              className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
            >
              {gridProjects.map((project, i) => (
                <motion.a
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="group relative block overflow-hidden aspect-[4/3] no-underline"
                  initial={{ opacity: 0, y: 30 }}
                  animate={gridInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                  <div className="absolute bottom-0 left-0 p-5 md:p-6 z-[2]">
                    <p className="text-white/70 text-xs uppercase tracking-widest mb-1">{project.type}</p>
                    <h2 className="text-white font-light leading-tight" style={{ fontSize: "clamp(1.25rem, 3vw, 1.875rem)" }}>
                      {project.name}
                    </h2>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/0 group-hover:border-white/60 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                    <span className="text-white/0 group-hover:text-white/80 text-sm transition-colors duration-300">→</span>
                  </div>
                </motion.a>
              ))}
            </div>

            {gridVisible < ALL_PROJECTS.length && (
              <motion.div
                className="flex justify-center mt-12"
                initial={{ opacity: 0 }}
                animate={gridInView ? { opacity: 1 } : {}}
              >
                <button
                  onClick={() => setGridVisible((v) => Math.min(v + LOAD_MORE_COUNT, ALL_PROJECTS.length))}
                  className="border border-black text-sm font-dm_sans font-light px-10 py-4 hover:bg-black hover:text-white transition-colors duration-300"
                >
                  Load More
                </button>
              </motion.div>
            )}
          </section>

          <div className="w-full h-px bg-black/10" />

          {/* ALL PROJECTS INDEX */}
          <section className="w-full px-5 md:px-[30px] py-[80px]">
            <div className="overflow-hidden mb-12">
              <motion.h2
                className="font-light leading-[1.1]"
                style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
                initial={{ y: "100%", opacity: 0 }}
                whileInView={{ y: "0%", opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                All Projects
              </motion.h2>
            </div>

            <div
              ref={indexRef as React.RefObject<HTMLDivElement>}
              className="flex flex-col divide-y divide-black/10"
            >
              {indexProjects.map((project, i) => (
                <motion.a
                  key={project.id}
                  href={`/projects/${project.id}`}
                  className="flex items-center gap-5 md:gap-6 py-5 md:py-6 group no-underline hover:bg-orange-100/50 transition-colors rounded-xl px-4 -mx-4"
                  initial={{ opacity: 0, x: -20 }}
                  animate={indexInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                  whileHover={{ x: 6 }}
                >
                  <div className="w-16 h-14 md:w-24 md:h-18 overflow-hidden rounded-lg shrink-0">
                    <img
                      src={project.image}
                      alt={project.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-8 flex-1 min-w-0">
                    <span className="text-lg md:text-2xl font-light flex-1 text-black group-hover:text-black/60 transition-colors truncate">
                      {project.name}
                    </span>
                    <span className="text-xs font-light uppercase tracking-widest text-black/40 hidden md:block">
                      {project.type}
                    </span>
                  </div>
                  <span className="text-black/20 text-sm w-8 text-right shrink-0 hidden md:block">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </motion.a>
              ))}
            </div>
          </section>

          {/* UPCOMING PROJECTS - Extra bottom padding added */}
          <section className="w-full px-5 md:px-[30px] py-[80px] pb-24 md:pb-32 bg-orange-100/60">
            <motion.h2
              className="font-light mb-10"
              style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              Upcoming Projects
            </motion.h2>
            <div className="flex flex-col gap-4">
              {["Bay Square Office", "Apple Tree Garden", "Rebound", "Azu Restaurant"].map((name, i) => (
                <motion.p
                  key={i}
                  className="font-light text-lg md:text-2xl text-black/60 border-b border-black/10 pb-4"
                  initial={{ opacity: 0, x: -15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
                >
                  {name}
                </motion.p>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </PageWrapper>
    </div>
  );
};