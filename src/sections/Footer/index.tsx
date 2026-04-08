import { FooterNav } from "@/sections/Footer/components/FooterNav";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
      <div className="static box-content caret-black shrink h-auto min-h-0 min-w-0 transform-none w-auto z-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:h-[1000px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:translate-y-[-600px] md:mb-[-600px] md:w-full md:z-[4] md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <footer className="static [align-items:normal] bg-transparent box-content caret-black block flex-row h-auto justify-normal w-auto md:relative md:content-start md:items-start md:aspect-auto md:bg-stone-500 md:box-border md:caret-transparent md:flex md:flex-col md:h-full md:justify-between md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:p-[30px] md:scroll-m-0 md:scroll-p-[auto]">
          <FooterNav />
          <FooterBottom />
        </footer>
      </div>
    </div>
  );
};
