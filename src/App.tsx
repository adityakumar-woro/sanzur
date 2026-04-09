import { useState } from "react";
import { Navbar } from "@/sections/Navbar";
import { HeroSection } from "@/sections/HeroSection";
import { AboutSection } from "@/sections/AboutSection";
import { ParallaxGallery } from "@/sections/ParallaxGallery";
import { ProjectSection } from "@/sections/ProjectSection";
import { HomeDecorSection } from "@/sections/HomeDecorSection";
import { ServicesSection } from "@/sections/ServicesSection";
import { NewsSection } from "@/sections/NewsSection";
import { ContactSection } from "@/sections/ContactSection";
import { Footer } from "@/sections/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { LoadingScreen } from "@/components/LoadingScreen";
import awadhi1 from "@/assets/awadhi1.jpeg";
import villa2 from "@/assets/villa2.jpeg";

export const App = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}

      <CustomCursor />

      <div className="text-black text-xs not-italic normal-nums font-normal bg-orange-50 font-sans_serif cursor-none-desktop">
        <div className="relative content-center items-center bg-orange-50 flex flex-col h-min justify-center">
          <Navbar />
          <HeroSection />
          <AboutSection />
          <ParallaxGallery />

          <ProjectSection
            number="01"
            title="Ahuja Villa"
            description="A complete living experience balancing functionality, comfort, and refined luxury"
            href="/projects/ahuja-villa"
            imageSrc="https://framerusercontent.com/images/f2kdZ2VnYMzJohVsHO2VMhmqNE.jpeg"
            titleVariantClass="max-w-full w-full md:w-[560px]"
          />
          <ProjectSection
            number="02"
            title="Mar Lounge"
            description="From intimate villa to refined coffee and confectionery destination"
            href="/projects/mar-lounge"
            imageSrc="https://framerusercontent.com/images/ztk37bNpQiL8L10UgVszhD7OSk.jpeg"
            titleVariantClass="w-full md:w-[560px]"
          />
          <ProjectSection
            number="03"
            title="Awadhi Jewels"
            description="A jewellery retail space designed for discovery and quiet luxury"
            href="/projects/awadhi-jewels"
            imageSrc={awadhi1}
            titleVariantClass="w-full md:w-[560px]"
          />
          <ProjectSection
            number="04"
            title="Padel"
            description="Recreational space designed for sport and community"
            href="/projects/padel"
            imageSrc="https://framerusercontent.com/images/TIej5lk8D06XR5B65DtRqzzLU.jpeg"
            titleVariantClass="w-full md:w-[560px]"
          />
          <ProjectSection
            number="05"
            title="Villa 17"
            description="Luxury defined by quiet confidence and effortless comfort"
            href="/projects/villa-17"
            imageSrc={villa2}
            titleVariantClass="w-full md:w-[560px]"
          />

          <HomeDecorSection />
          <ServicesSection />
          <NewsSection />
          <ContactSection />
          <Footer />
        </div>
      </div>
    </>
  );
};
