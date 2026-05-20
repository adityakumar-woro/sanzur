import { useScrollReveal } from "@/hooks/useScrollReveal";

export const NewsHeader = () => {
  const refLabel = useScrollReveal();
  const refHeading = useScrollReveal<HTMLHeadingElement>();
  const refCta = useScrollReveal();

  return (
    <div className="relative content-start items-start box-border caret-transparent gap-x-2.5 flex flex-col shrink-0 h-min justify-start max-w-[1680px] min-h-[auto] min-w-[auto] gap-y-2.5 w-full overflow-hidden md:gap-x-[normal] md:flex-row md:justify-between md:gap-y-[normal]">
      <div className="flex flex-col gap-y-4 md:w-[55%]">
        <p
          ref={refLabel}
          className="reveal text-xs font-light font-dm_sans uppercase tracking-widest text-black/50"
        >
          Blogs
        </p>
        <h2
          ref={refHeading}
          className="reveal reveal-delay-1 text-[42px] md:text-[64px] font-light font-dm_sans leading-[1.1] text-black"
        >
          Latest from<br />sanzur
        </h2>
      </div>
      <div className="flex items-end pb-2 md:w-auto">
        <a
          ref={refCta}
          href="/blogs"
          className="reveal reveal-delay-2 text-base font-light font-dm_sans text-black no-underline"
        >
          View All →
        </a>
      </div>
    </div>
  );
};
