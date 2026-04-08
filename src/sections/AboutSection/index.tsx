import React from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

export const AboutSection = () => {
  const { ref, inView } = useInView();

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
  };
  const item = {
    hidden: { y: 40, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.7, ease: [0.33, 1, 0.68, 1] } },
  };

  return (
    <section id="about" className="relative bg-[#f5f0e8] z-20 px-7 py-24 border-b border-black/10">
      <motion.div
        ref={ref}
        variants={container}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="mx-auto"
      >
        {/* Top row: label + heading */}
        <div className="flex flex-col md:flex-row md:justify-between gap-8 md:gap-12 mb-16 md:mb-20">
          <motion.div variants={item}>
            <p className="font-newsreader italic text-2xl">About Us</p>
          </motion.div>
          <motion.div variants={item} className="max-w-xl">
            <h2 className="font-dm_sans font-light text-5xl md:text-[64px] leading-[1.15]">
              Where Spaces Breathe, and Design Resonates
            </h2>
          </motion.div>
        </div>
                {/* Content row: image + text */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-12">
          <motion.div
            variants={item}
            className="w-full md:w-[41%] h-[420px] md:h-[481px] overflow-hidden"
          >
            <motion.img
              src="https://c.animaapp.com/mnosma4ux0dL0l/assets/ReJwRbXJwTFxetSzciMpxrBfK8A.jpeg"
              alt="Interior"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.04 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </motion.div>

          <motion.div variants={item} className="w-full md:w-[48%] flex flex-col justify-between gap-8">
            <div>
              <p className="font-dm_sans font-light text-sm md:text-base leading-relaxed text-black/80 mb-5">
                We are a passionate interior design practice dedicated to crafting timeless, client-centric spaces that blend functionality with refined aesthetics. With over a decade of experience across residential and commercial projects,
              </p>
              <p className="font-dm_sans font-light text-sm md:text-base leading-relaxed text-black/80">
                we transform ideas into immersive environments where thoughtful planning, innovation, and detail come together to elevate everyday living.
              </p>
            </div>
            <AnimatedLink label="Meet Our Team" href="#contact" />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};
const AnimatedLink = ({ label, href }: { label: string; href: string }) => (
  <motion.a
    href={href}
    onClick={(e) => { e.preventDefault(); document.querySelector(href)?.scrollIntoView({ behavior: "smooth" }); }}
    className="inline-flex items-center gap-2 group cursor-pointer w-fit"
    whileHover={{ x: 4 }}
    transition={{ duration: 0.2 }}
  >
    <span className="font-dm_sans font-light text-sm md:text-base text-black">→</span>
    <span className="font-dm_sans font-light text-sm md:text-base text-black border-b border-black/30 group-hover:border-black transition-colors duration-200">
      {label}
    </span>
  </motion.a>
);