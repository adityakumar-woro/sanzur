import { ServicesHeader } from "@/sections/ServicesSection/components/ServicesHeader";
import { ServicesList } from "@/sections/ServicesSection/components/ServicesList";
import { ServicesImages } from "@/sections/ServicesSection/components/ServicesImages";

export const ServicesSection = () => {
  return (
    <section className="relative content-center items-center bg-orange-50 box-border caret-transparent gap-x-[25px] flex flex-col shrink-0 h-[2792px] justify-start min-h-[auto] min-w-[auto] gap-y-[25px] w-full z-[3] overflow-visible pt-[70px] pb-[150px] px-[30px] md:gap-x-[normal] md:h-[1354px] md:justify-between md:gap-y-[normal] md:overflow-hidden after:accent-auto after:box-border after:caret-transparent after:text-black after:block after:text-xs after:not-italic after:normal-nums after:font-normal after:h-full after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-none after:absolute after:text-start after:no-underline after:indent-[0px] after:normal-case after:visible after:w-full after:border-b after:border-separate after:border-solid after:border-black/30 after:left-0 after:top-0 after:font-sans_serif">
      <div className="relative content-start items-start bg-orange-50 box-border caret-transparent gap-x-10 flex flex-col shrink-0 h-min justify-center max-w-[1680px] min-h-[auto] min-w-[auto] gap-y-10 w-full z-[2] overflow-hidden">
        <ServicesHeader variant="heading" />
        <ServicesHeader variant="description" />
      </div>
      <div className="box-content caret-black block md:aspect-auto md:box-border md:caret-transparent md:contents md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
        <div className="static box-content caret-black shrink max-w-none min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:max-w-[1680px] md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
          <div className="static [align-items:normal] box-content caret-black block h-auto justify-normal max-w-none w-auto md:relative md:content-end md:items-end md:aspect-auto md:box-border md:caret-transparent md:flex md:h-min md:justify-between md:max-w-full md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto]">
            <ServicesList />
            <ServicesImages
              containerClass="md:h-[672px] md:w-[49%]"
              firstImageWrapperClass="md:left-[2.13163e-14%]"
              secondImageWrapperClass="md:bottom-[-672px] md:h-[672px] md:left-[2.13163e-14%]"
              thirdImageWrapperClass="md:bottom-[-1344px] md:h-[672px] md:left-[2.13163e-14%]"
              fourthImageWrapperClass="md:bottom-[-2016px] md:h-[672px] md:left-[2.13163e-14%]"
              firstImageSrc="https://c.animaapp.com/mnitwnjzSfY2Kl/assets/ReJwRbXJwTFxetSzciMpxrBfK8A.jpeg"
              secondImageSrc="https://c.animaapp.com/mnitwnjzSfY2Kl/assets/pqX1CuSJYsP7oDqUxXpKvHgP4VY.jpeg"
              thirdImageSrc="https://c.animaapp.com/mnitwnjzSfY2Kl/assets/5o0R1uytbLqum3oZFhynbfelw5w.jpeg"
              fourthImageSrc="https://c.animaapp.com/mnitwnjzSfY2Kl/assets/AtdiKWyuN2qHdjex8ctxe8TjV8.jpeg"
              firstImageClass="md:aspect-[auto_2400_/_2400]"
              secondImageClass="md:aspect-[auto_2400_/_2400]"
              thirdImageClass="md:aspect-[auto_2399_/_1371]"
              fourthImageClass="md:aspect-[auto_1600_/_2400]"
              imageSizes="calc(min(100vw - 60px, 1680px) * 0.4912)"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
