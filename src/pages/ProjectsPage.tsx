import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { MediaArchive } from "@/components/MediaArchive";
import { projects } from "@/data/studio";

export const ProjectsPage = () => {
  return (
    <div className="bg-[#12110f] text-white font-dm_sans cursor-none-desktop">
      <CustomCursor />
      <Navbar />
      <main>
        <header className="min-h-[68vh] px-5 md:px-8 pt-24 pb-10 flex flex-col justify-end">
          <p className="text-white/45 text-[11px] uppercase tracking-[0.22em] mb-5">Portfolio</p>
          <h1 className="font-newsreader font-light leading-[0.9]" style={{ fontSize: "clamp(5rem, 16vw, 16rem)" }}>Projects</h1>
          <p className="text-white/68 text-lg md:text-xl leading-relaxed max-w-2xl mt-8">
            A curated index of residences, hospitality environments, retail interiors, and social destinations designed with a precise material language.
          </p>
        </header>

        <section className="px-5 md:px-8 pb-20 md:pb-28">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project, index) => (
              <a key={project.id} href={`/projects/${project.id}`} className="group no-underline text-white">
                <div className="relative aspect-[4/3] overflow-hidden bg-[#2a261f]">
                  <img src={project.image} alt={project.name} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute left-5 right-5 bottom-5 flex justify-between gap-6 items-end">
                    <div>
                      <p className="text-white/55 text-[11px] uppercase tracking-[0.18em] mb-2">{project.type} · {project.year}</p>
                      <h2 className="font-newsreader font-light text-4xl md:text-5xl">{project.name}</h2>
                    </div>
                    <span className="text-white/55 text-sm">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                </div>
                <p className="text-white/58 leading-relaxed mt-4 max-w-xl">{project.summary}</p>
              </a>
            ))}
          </div>
        </section>

        <section className="bg-[#ebe5d8] text-[#12110f] px-5 md:px-8 py-16 md:py-24">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-black/15 pb-8">
            <h2 className="font-newsreader font-light text-5xl md:text-7xl">Upcoming</h2>
            <p className="text-black/60 max-w-lg">Bay Square Office · Apple Tree Garden · Rebound · Azu Restaurant</p>
          </div>
        </section>

        <MediaArchive
          title="Complete Site Archive"
          intro="Every photo and video from the uploaded project archive is included here, lazy-loaded for browsing across the full set."
        />
      </main>
      <Footer />
    </div>
  );
};
