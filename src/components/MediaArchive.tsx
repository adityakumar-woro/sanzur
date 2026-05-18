import { mediaArchive } from "@/data/mediaArchive";

type MediaArchiveProps = {
  limit?: number;
  title?: string;
  intro?: string;
};

export const MediaArchive = ({ limit, title = "Photo & Video Archive", intro }: MediaArchiveProps) => {
  const items = typeof limit === "number" ? mediaArchive.slice(0, limit) : mediaArchive;

  return (
    <section id="media-archive" className="bg-[#12110f] text-white px-5 md:px-8 py-20 md:py-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-10">
        <div>
          <p className="text-white/45 text-[11px] uppercase tracking-[0.22em] mb-4">
            {mediaArchive.filter((item) => item.type === "image").length} Photos · {mediaArchive.filter((item) => item.type === "video").length} Videos
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
            <div className={item.type === "video" || index % 9 === 0 ? "aspect-[16/10]" : "aspect-[4/5]"}>
              {item.type === "video" ? (
                <video
                  src={item.src}
                  className="h-full w-full object-cover"
                  controls
                  muted
                  playsInline
                  preload="metadata"
                />
              ) : (
                <img
                  src={item.src}
                  alt={`Sanzur archive ${item.id}`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              )}
            </div>
            <figcaption className="absolute left-3 bottom-3 rounded-sm bg-black/45 px-2 py-1 text-[10px] uppercase tracking-[0.16em] text-white/75 backdrop-blur">
              {item.type === "video" ? "Film" : "Photo"} {String(index + 1).padStart(2, "0")}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
};
