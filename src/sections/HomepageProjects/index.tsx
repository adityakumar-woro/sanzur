import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import villa2 from "@/assets/villa2.jpeg";
import awadhi1 from "@/assets/awadhi1.jpeg";

const PROJECTS = [
  {
    id: "ahuja-villa",
    name: "Ahuja Villa",
    type: "Residential",
    image: "https://framerusercontent.com/images/f2kdZ2VnYMzJohVsHO2VMhmqNE.jpeg",
  },
  {
    id: "mar-lounge",
    name: "Mar Lounge",
    type: "Hospitality",
    image: "https://framerusercontent.com/images/ztk37bNpQiL8L10UgVszhD7OSk.jpeg",
  },
  {
    id: "awadhi-jewels",
    name: "Awadhi Jewels",
    type: "Commercial",
    image: awadhi1,
  },
  {
    id: "padel",
    name: "Padel",
    type: "Recreational",
    image: "https://framerusercontent.com/images/TIej5lk8D06XR5B65DtRqzzLU.jpeg",
  },
  {
    id: "villa-17",
    name: "Villa 17",
    type: "Residential",
    image: villa2,
  },
];

const EASE = [0.33, 1, 0.68, 1] as const;

export const HomepageProjects = () => {
  const { ref: headingRef, inView: headingInView } = useInView({ threshold: 0.1 });
  const { ref: gridRef, inView: gridInView } = useInView({ threshold: 0.04 });

  return (
    <section className="relative bg-orange-50 w-full border-b border-black/10 px-5 md:px-[30px] py-20 md:py-[100px]">

      {/* Section header */}
      <div
        ref={headingRef as React.RefObject<HTMLDivElement>}
        className="flex items-end justify-between mb-12 md:mb-16"
      >
        <div className="overflow-hidden">
          <motion.h2
            className="font-dm_sans font-light text-black leading-[1.1]"
            style={{ fontSize: "clamp(2.2rem, 5vw, 4.5rem)" }}
            initial={{ y: "100%", opacity: 0 }}
            animate={headingInView ? { y: "0%", opacity: 1 } : {}}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Our Projects
          </motion.h2>
        </div>
        <motion.a
          href="/projects"
          className="hidden md:inline-flex items-center gap-2 text-sm font-light font-dm_sans text-black/50 hover:text-black no-underline transition-colors duration-200"
          initial={{ opacity: 0 }}
          animate={headingInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
          whileHover={{ x: 4 }}
        >
          <span>View All</span>
          <span>→</span>
        </motion.a>
      </div>

      {/* Projects grid */}
      <div
        ref={gridRef as React.RefObject<HTMLDivElement>}
        className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6"
      >
        {PROJECTS.map((project, i) => (
          <motion.a
            key={project.id}
            href={`/projects/${project.id}`}
            className="group relative block overflow-hidden aspect-[4/3] no-underline"
            initial={{ opacity: 0, y: 30 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: i * 0.1, ease: EASE }}
          >
            {/* Image */}
            <img
              src={project.image}
              alt={project.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

            {/* Hover darkening */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />

            {/* Project info */}
            <div className="absolute bottom-0 left-0 p-5 md:p-6 z-[2]">
              <p className="text-white/70 text-xs uppercase tracking-widest mb-1 font-dm_sans font-light">
                {project.type}
              </p>
              <h3
                className="text-white font-dm_sans font-light leading-tight"
                style={{ fontSize: "clamp(1.25rem, 3vw, 1.875rem)" }}
              >
                {project.name}
              </h3>
            </div>

            {/* Arrow on hover */}
            <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-white/0 group-hover:border-white/60 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
              <span className="text-white/0 group-hover:text-white/80 text-sm transition-colors duration-300">
                →
              </span>
            </div>
          </motion.a>
        ))}
      </div>

      {/* Mobile "View All" */}
      <div className="flex justify-center mt-10 md:hidden">
        <a
          href="/projects"
          className="border border-black text-black text-sm font-light font-dm_sans px-10 py-4 hover:bg-black hover:text-white transition-colors duration-300 no-underline"
        >
          View All Projects
        </a>
      </div>
    </section>
  );
};
