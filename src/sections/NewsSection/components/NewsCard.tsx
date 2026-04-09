import { useScrollReveal } from "@/hooks/useScrollReveal";

type NewsCardProps = {
  category: string;
  date: string;
  title: string;
  image: string;
  href: string;
  delayClass?: string;
};

export const NewsCard = ({
  category,
  date,
  title,
  image,
  href,
  delayClass = "",
}: NewsCardProps) => {
  const ref = useScrollReveal<HTMLAnchorElement>();

  return (
    <a
      ref={ref}
      href={href}
      className={`reveal reveal-up ${delayClass} group flex flex-col gap-4 no-underline`}
    >
      {/* Image container */}
      <div className="relative overflow-hidden aspect-[4/3] bg-stone-200">
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-500 z-[1]" />
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-107"
          style={{ transformOrigin: "center center" }}
        />
        {/* Category chip — slides up on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-3 z-[2] translate-y-full group-hover:translate-y-0 transition-transform duration-400 ease-out bg-gradient-to-t from-black/60 to-transparent">
          <span className="text-white text-[10px] font-light font-dm_sans uppercase tracking-widest">
            {category}
          </span>
        </div>
      </div>

      {/* Meta */}
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="text-xs font-light font-dm_sans uppercase tracking-widest text-black/50">
            {category}
          </span>
          <span className="text-black/30 text-xs font-light">|</span>
          <span className="text-black/40 text-xs font-light font-dm_sans">{date}</span>
        </div>

        <h3 className="text-black text-base md:text-lg font-light font-dm_sans leading-[1.35] group-hover:opacity-60 transition-opacity duration-300">
          {title}
        </h3>

        {/* Animated underline */}
        <div className="h-px bg-black/10 w-0 group-hover:w-full transition-all duration-500 ease-out" />
      </div>
    </a>
  );
};
