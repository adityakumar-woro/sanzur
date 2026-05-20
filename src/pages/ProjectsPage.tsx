import { useState } from "react";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { projects } from "@/data/studio";

const PAGE_SIZE = 10;

export const ProjectsPage = () => {
  const [page, setPage] = useState(1);
  const totalPages = Math.max(1, Math.ceil(projects.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const visibleProjects = projects.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  return (
    <div className="bg-[#12110f] text-white font-dm_sans">
      <Navbar />
      <main>
        <header className="relative flex min-h-[68vh] flex-col justify-end overflow-hidden px-5 pb-10 pt-16 md:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_78%_14%,rgba(201,173,115,0.2),transparent_30%),linear-gradient(135deg,#12110f,#1d1710_48%,#0d0c0a)]" />
          <div className="relative z-10">
            <p className="mb-5 text-[10px] uppercase tracking-[0.24em] text-[#c9ad73]">Portfolio</p>
            <h1 className="font-newsreader font-light leading-[0.9]" style={{ fontSize: "clamp(4.5rem, 14vw, 14rem)" }}>Projects</h1>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-white/68 md:text-base">
              A curated index of residences, hospitality environments, retail interiors, and social destinations designed with a precise material language.
            </p>
          </div>
        </header>

        <section className="px-5 pb-20 pt-6 md:px-8 md:pb-28">
          <div className="mb-8 flex items-center justify-between border-y border-white/10 py-4 text-[10px] uppercase tracking-[0.22em] text-white/45">
            <span>{projects.length} commissions</span>
            <a href="/archive" className="text-[#c9ad73] no-underline">Open archive</a>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {visibleProjects.map((project, index) => (
              <a key={project.id} href={`/projects/${project.id}`} className="group text-white no-underline">
                <div className="relative aspect-[4/3] overflow-hidden border border-white/10 bg-[#2a261f] sm:aspect-[3/4] xl:aspect-[4/5]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading={index < 2 ? "eager" : "lazy"}
                    decoding="async"
                    sizes="(max-width: 640px) 92vw, (max-width: 1280px) 46vw, 31vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/76 via-black/12 to-transparent transition duration-500 group-hover:from-black/86" />
                  <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-6">
                    <div>
                      <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-white/55">{project.type} · {project.year}</p>
                      <h2 className="font-newsreader text-4xl font-light leading-none md:text-5xl">{project.name}</h2>
                    </div>
                    <span className="text-sm text-white/55">{String((currentPage - 1) * PAGE_SIZE + index + 1).padStart(2, "0")}</span>
                  </div>
                </div>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-white/58">{project.summary}</p>
              </a>
            ))}
          </div>

          {totalPages > 1 && (
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <button type="button" onClick={() => setPage((value) => Math.max(1, value - 1))} disabled={currentPage === 1} className="border border-white/20 px-5 py-3 text-[11px] uppercase tracking-[0.14em] text-white/70 disabled:opacity-30">
                Previous
              </button>
              {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
                <button key={pageNumber} type="button" onClick={() => setPage(pageNumber)} className={`h-11 w-11 border text-sm ${pageNumber === currentPage ? "border-[#c9ad73] bg-[#c9ad73] text-[#12110f]" : "border-white/20 text-white/70"}`} aria-current={pageNumber === currentPage ? "page" : undefined}>
                  {pageNumber}
                </button>
              ))}
              <button type="button" onClick={() => setPage((value) => Math.min(totalPages, value + 1))} disabled={currentPage === totalPages} className="border border-white/20 px-5 py-3 text-[11px] uppercase tracking-[0.14em] text-white/70 disabled:opacity-30">
                Next
              </button>
            </div>
          )}
        </section>

        <section className="bg-[#ebe5d8] px-5 py-16 text-[#12110f] md:px-8 md:py-24">
          <div className="flex flex-col justify-between gap-8 border-b border-black/15 pb-8 md:flex-row md:items-end">
            <h2 className="font-newsreader text-5xl font-light md:text-7xl">Upcoming</h2>
            <p className="max-w-lg text-sm leading-relaxed text-black/60">Bay Square Office · Apple Tree Garden · Rebound · Azu Restaurant</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
