import { Navbar } from "@/sections/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ParallaxGallery } from "@/sections/ParallaxGallery";
import { ProjectSection } from "@/sections/ProjectSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { NewsSection } from "@/sections/NewsSection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/sections/Footer";
import { HomeDecorSection } from "@/sections/HomeDecorSection";

export const App = () => {
  return (
    <div className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-orange-50 box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif">
      <div className="box-border caret-transparent">
        <div className="relative content-center items-center bg-orange-50 box-border caret-transparent gap-x-0 flex flex-col h-min justify-center min-h-[1000px] gap-y-0">
          <Navbar />
          <div className="relative box-border caret-transparent shrink-0 min-h-[auto] min-w-[auto]"></div>
          <HeroSection />
          <AboutSection />
          <ParallaxGallery />
          <ProjectSection
            number="01"
            title="Sanur House"
            description="Industrial House In The Middle Of The Tropical Island"
            href="./projects/sanur-house"
            imageSrc="https://c.animaapp.com/mnitwnjzSfY2Kl/assets/f2kdZ2VnYMzJohVsHO2VMhmqNE.jpeg"
            titleVariantClass="max-w-full w-[560px]"
          />
          <ProjectSection
            number="02"
            title="Villa Cavaleri"
            description="Luxurious Retreat in the Middle of Winery Field"
            href="./projects/villa-cavaleri"
            imageSrc="https://c.animaapp.com/mnitwnjzSfY2Kl/assets/ztk37bNpQiL8L10UgVszhD7OSk.jpeg"
            titleVariantClass="w-full md:w-[560px]"
          />
          <ProjectSection
            number="03"
            title="Lake Estate"
            description="A Tranquil Lakeside Escape"
            href="./projects/lake-estate"
            imageSrc="https://c.animaapp.com/mnitwnjzSfY2Kl/assets/qzYmXsT9I39dWLW2f0Z5Wcv1XYg.jpeg"
            titleVariantClass="w-full md:w-[560px]"
          />
          <ServicesSection />
          <NewsSection />
          <ContactSection />
          <Footer />
        </div>
        <div className="box-border caret-transparent"></div>
      </div>
      <div className="absolute box-border caret-transparent h-0 w-0 z-0 overflow-hidden left-0 bottom-0">
        <img
          src="https://c.animaapp.com/mnitwnjzSfY2Kl/assets/icon-8.svg"
          alt="Icon"
          className="box-border caret-transparent inline align-baseline"
        />
        <img
          src="https://c.animaapp.com/mnitwnjzSfY2Kl/assets/icon-9.svg"
          alt="Icon"
          className="box-border caret-transparent inline align-baseline"
        />
        <img
          src="https://c.animaapp.com/mnitwnjzSfY2Kl/assets/icon-10.svg"
          alt="Icon"
          className="box-border caret-transparent inline align-baseline"
        />
        <img
          src="https://c.animaapp.com/mnitwnjzSfY2Kl/assets/icon-11.svg"
          alt="Icon"
          className="box-border caret-transparent inline align-baseline"
        />
      </div>
    </div>
  );
};
