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
      <div className="relative overflow-hidden aspect-[4/3] bg-stone-200">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-3">
          <span className="text-xs font-light font-dm_sans uppercase tracking-widest text-black/50">
            {category}
          </span>
          <span className="text-black/30 text-xs font-light">|</span>
          <span className="text-black/40 text-xs font-light font-dm_sans">{date}</span>
        </div>
        <h3 className="text-black text-lg md:text-xl font-light font-dm_sans leading-[1.3] group-hover:opacity-60 transition-opacity duration-200">
          {title}
        </h3>
      </div>
    </a>
  );
};
