import { useState } from "react";
import { mediaArchive } from "@/data/mediaArchive";

type MediaArchiveProps = {
  limit?: number;
  pageSize?: number;
  title?: string;
  intro?: string;
  showHeader?: boolean;
};

export const MediaArchive = ({ limit, pageSize = 10, title = "Photo Archive", intro, showHeader = true }: MediaArchiveProps) => {
  const [page, setPage] = useState(1);
  const resolvedPageSize = limit ?? pageSize;
  const imageItems = mediaArchive.filter((item) => item.type === "image");
  const totalPages = Math.max(1, Math.ceil(imageItems.length / resolvedPageSize));
  const currentPage = Math.min(page, totalPages);
  const items = imageItems.slice((currentPage - 1) * resolvedPageSize, currentPage * resolvedPageSize);

  return (
    <section id="media-archive" className="relative overflow-hidden bg-[#12110f] px-5 py-16 text-white md:px-8 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_8%,rgba(201,173,115,0.18),transparent_30%),linear-gradient(180deg,rgba(255,255,255,0.03),transparent_42%)]" />
      {showHeader && (
        <div className="relative z-10 mb-10 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-4 text-[10px] uppercase tracking-[0.24em] text-white/45">
              {imageItems.length} Photos · Page {currentPage} of {totalPages}
            </p>
            <h2 className="font-newsreader text-5xl font-light leading-none md:text-7xl">{title}</h2>
          </div>
          {intro && <p className="max-w-xl text-sm leading-relaxed text-white/58 md:text-base">{intro}</p>}
        </div>
      )}

      <div className="relative z-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5 lg:gap-4">
        {items.map((item, index) => (
          <figure
            key={item.file}
            className={`group relative overflow-hidden border border-white/10 bg-[#2a261f] ${index % 7 === 0 ? "sm:col-span-2 sm:row-span-2" : ""}`}
          >
            <div className={index % 7 === 0 ? "aspect-[4/3] sm:h-full" : "aspect-[3/4] sm:aspect-[4/5]"}>
              <img
                src={item.src}
                alt={`Sanzur archive ${item.id}`}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                loading={index < 6 ? "eager" : "lazy"}
                decoding="async"
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
              />
            </div>
            <figcaption className="absolute bottom-3 left-3 bg-black/45 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-white/75 backdrop-blur">
              Photo {String((currentPage - 1) * resolvedPageSize + index + 1).padStart(2, "0")}
            </figcaption>
          </figure>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="relative z-10 mt-10 flex flex-wrap items-center justify-center gap-2 md:gap-3">
          <button
            type="button"
            onClick={() => setPage((value) => Math.max(1, value - 1))}
            disabled={currentPage === 1}
            className="border border-white/20 px-4 py-3 text-[11px] uppercase tracking-[0.14em] text-white/70 transition hover:border-[#c9ad73]/70 hover:text-white disabled:opacity-30 md:px-5"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              type="button"
              onClick={() => setPage(pageNumber)}
              className={`h-10 w-10 border text-sm transition md:h-11 md:w-11 ${pageNumber === currentPage ? "border-[#c9ad73] bg-[#c9ad73] text-[#12110f]" : "border-white/20 text-white/70 hover:border-[#c9ad73]/70 hover:text-white"}`}
              aria-current={pageNumber === currentPage ? "page" : undefined}
            >
              {pageNumber}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
            disabled={currentPage === totalPages}
            className="border border-white/20 px-4 py-3 text-[11px] uppercase tracking-[0.14em] text-white/70 transition hover:border-[#c9ad73]/70 hover:text-white disabled:opacity-30 md:px-5"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};
