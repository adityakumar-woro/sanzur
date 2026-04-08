import { NewsHeader } from "@/sections/NewsSection/components/NewsHeader";
import { NewsGrid } from "@/sections/NewsSection/components/NewsGrid";

export const NewsSection = () => {
  return (
    <section className="relative content-center items-center bg-orange-50 box-border caret-transparent gap-x-[100px] flex flex-col shrink-0 h-min justify-start min-h-[auto] min-w-[auto] gap-y-[100px] w-full z-[3] overflow-hidden px-[30px] py-[100px] after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-b after:border-separate after:border-solid after:border-black/30 after:left-0 after:top-0 after:font-sans_serif">
      <NewsHeader />
      <NewsGrid />
    </section>
  );
};
