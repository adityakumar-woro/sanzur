import { useState } from "react";
import { mediaArchive } from "@/data/mediaArchive";

type MediaArchiveProps = {
  limit?: number;
  title?: string;
  intro?: string;
};

export const MediaArchive = ({ limit, title = "Photo Archive", intro }: MediaArchiveProps) => {
  const [page, setPage] = useState(1);
  const pageSize = limit ?? 24;
  const imageItems = mediaArchive.filter((item) => item.type === "image");
  const totalPages = Math.max(1, Math.ceil(imageItems.length / pageSize));
  const currentPage = Math.min(page, totalPages);
  const items = imageItems.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <section id="media-archive" className="bg-[#12110f] text-white px-5 md:px-8 py-20 md:py-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
        <div>
          <p className="text-white/45 text-[11px] uppercase tracking-[0.22em] mb-4">
            {imageItems.length} Photos · Page {currentPage} of {totalPages}
          </p>
          <h2 className="font-newsreader font-light text-5xl md:text-7xl leading-none">{title}</h2>
        </div>
        {intro && <p className="text-white/58 leading-relaxed max-w-xl">{intro}</p>}
      </div>

      <div className="columns-1 sm:columns-2 lg:columns-4 [column-gap:1rem]">
        {items.map((item, index) => (
          <figure
            key={item.file}
            className="group relative mb-4 break-inside-avoid overflow-hidden bg-[#2a261f]"
          >
            <div className={index % 9 === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}>
              <img
                src={item.src}
                alt={`Sanzur archive ${item.id}`}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <figcaption className="absolute left-3 bottom-3 rounded-sm bg-black/45 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-white/75 backdrop-blur">
              Photo {String((currentPage - 1) * pageSize + index + 1).padStart(2, "0")}
            </figcaption>
          </figure>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <button
            type="button"
            onClick={() => setPage((value) => Math.max(1, value - 1))}
            disabled={currentPage === 1}
            className="border border-white/20 px-5 py-3 text-sm uppercase tracking-[0.14em] text-white/70 disabled:opacity-30"
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((pageNumber) => (
            <button
              key={pageNumber}
              type="button"
              onClick={() => setPage(pageNumber)}
              className={`h-11 w-11 border text-sm ${pageNumber === currentPage ? "border-[#c9ad73] bg-[#c9ad73] text-[#12110f]" : "border-white/20 text-white/70"}`}
              aria-current={pageNumber === currentPage ? "page" : undefined}
            >
              {pageNumber}
            </button>
          ))}
          <button
            type="button"
            onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
            disabled={currentPage === totalPages}
            className="border border-white/20 px-5 py-3 text-sm uppercase tracking-[0.14em] text-white/70 disabled:opacity-30"
          >
            Next
          </button>
        </div>
      )}
    </section>
  );
};
