import { useState } from "react";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import villa2 from "@/assets/villa2.jpeg";
import awadhi1 from "@/assets/awadhi1.jpeg";

const ALL_PROJECTS = [
  {
    id: "ahuja-villa",
    name: "Ahuja Villa",
    type: "Residential",
    location: "India",
    image: "https://framerusercontent.com/images/f2kdZ2VnYMzJohVsHO2VMhmqNE.jpeg",
  },
  {
    id: "mar-lounge",
    name: "Mar Lounge",
    type: "Hospitality",
    location: "India",
    image: "https://framerusercontent.com/images/ztk37bNpQiL8L10UgVszhD7OSk.jpeg",
  },
  {
    id: "awadhi-jewels",
    name: "Awadhi Jewels",
    type: "Commercial",
    location: "India",
    image: awadhi1,
  },
  {
    id: "padel",
    name: "Padel",
    type: "Recreational",
    location: "India",
    image: "https://framerusercontent.com/images/TIej5lk8D06XR5B65DtRqzzLU.jpeg",
  },
  {
    id: "villa-17",
    name: "Villa 17",
    type: "Residential",
    location: "India",
    image: villa2,
  },
];

const INITIAL_GRID_COUNT = 4;
const INITIAL_INDEX_COUNT = 5;
const LOAD_MORE_COUNT = 4;

export const ProjectsPage = () => {
  const [gridVisible, setGridVisible] = useState(INITIAL_GRID_COUNT);
  const [indexVisible, setIndexVisible] = useState(INITIAL_INDEX_COUNT);

  const gridProjects = ALL_PROJECTS.slice(0, gridVisible);
  const indexProjects = ALL_PROJECTS.slice(0, indexVisible);

  return (
    <div className="text-black text-xs font-normal bg-orange-50 font-sans_serif">
      <div className="flex flex-col min-h-screen bg-orange-50">
        <Navbar />

        {/* ── HERO ── */}
        <header className="relative flex flex-col justify-end min-h-screen w-full overflow-hidden p-[30px]">
          <div className="absolute inset-0 bg-black/50 z-[1]" />
          <div className="absolute inset-0 z-0">
            <img
              src="https://framerusercontent.com/images/f2kdZ2VnYMzJohVsHO2VMhmqNE.jpeg"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative z-[2] flex flex-col gap-y-4 pb-4">
            <p className="text-white/60 text-sm font-light tracking-widest uppercase">
              Focus on Creating Cohesive, Livable Spaces
            </p>
            <h1 className="text-white text-[64px] md:text-[96px] font-light leading-[1.1]">
              Projects
            </h1>
          </div>
        </header>

        {/* ── PROJECT GRID ── */}
        <section className="w-full px-[30px] py-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {gridProjects.map((project) => (
              <a
                key={project.id}
                href={`/projects/${project.id}`}
                className="group relative block overflow-hidden aspect-[4/3] no-underline"
              >
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-0 left-0 p-6 z-[2]">
                  <p className="text-white/70 text-xs uppercase tracking-widest mb-1">
                    {project.type}
                  </p>
                  <h2 className="text-white text-2xl md:text-3xl font-light">
                    {project.name}
                  </h2>
                </div>
              </a>
            ))}
          </div>

          {gridVisible < ALL_PROJECTS.length && (
            <div className="flex justify-center mt-12">
              <button
                onClick={() =>
                  setGridVisible((v) =>
                    Math.min(v + LOAD_MORE_COUNT, ALL_PROJECTS.length)
                  )
                }
                className="border border-black text-sm px-10 py-4 hover:bg-black hover:text-white transition"
              >
                Load More
              </button>
            </div>
          )}
        </section>

        {/* ── DIVIDER ── */}
        <div className="w-full h-px bg-black/10" />

        {/* ── INDEX SECTION ── */}
        <section className="w-full px-[30px] py-[80px]">
          <h2 className="text-[48px] md:text-[64px] font-light mb-12">
            Upcoming Projects
          </h2>
          <div className="flex flex-col divide-y divide-black/10">
            {indexProjects.map((project, i) => (
              <a
                key={project.id}
                href={`/projects/${project.id}`}
                className="flex items-center gap-6 py-6 group no-underline hover:bg-orange-100/50 transition-colors rounded-xl px-4 -mx-4"
              >
                <div className="w-20 h-16 md:w-28 md:h-20 overflow-hidden rounded-lg">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-8 flex-1">
                  <span className="text-lg md:text-2xl font-light flex-1 text-black group-hover:text-black/80 transition-colors">
                    {project.name}
                  </span>
                </div>
                <span className="hidden md:block text-black/20 text-sm w-8 text-right">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </a>
            ))}
          </div>
        </section>

        {/* ── STATIC UPCOMING PROJECTS ── */}
        <section className="w-full px-[30px] py-[80px] bg-orange-100">
          <h2 className="text-[48px] md:text-[64px] font-light mb-12">
            Upcoming Projects
          </h2>
          <div className="flex flex-col gap-4 text-lg md:text-2xl font-light">
            <p>Bay Square Office</p>
            <p>Apple Tree Garden</p>
            <p>Rebound</p>
            <p>Azu Restaurant</p>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};