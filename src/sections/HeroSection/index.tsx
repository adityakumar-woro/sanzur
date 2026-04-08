import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <header
  ref={ref}
  className="relative w-full h-screen bg-black overflow-hidden z-10"
>
      {/* Background image with parallax */}
      <motion.div className="absolute inset-0 z-0 scale-110" style={{ y: bgY }}>
        <img
          src="https://c.animaapp.com/mnosma4ux0dL0l/assets/vhTOTtueDBCx9yxBY9UPdO5eF9c.jpeg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/90" />
      </motion.div>

      {/* Big LIVING text top left */}
      <motion.div
        className="absolute left-0 top-[18%] z-10 px-7"
        initial={{ x: -80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
      >
        <h1 className="font-dm_sans font-light text-white leading-none" style={{ fontSize: "clamp(80px, 12vw, 200px)" }}>
          SANZUR
        </h1>
      </motion.div>

      {/* Plus symbol center-right */}
      <motion.div
        className="absolute z-10"
        style={{ left: "60%", top: "42%" }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
      >
        <span className="text-white font-dm_sans font-light leading-none" style={{ fontSize: "clamp(60px, 8vw, 120px)" }}>
          +
        </span>
      </motion.div>
            {/* Big FUNCTION text bottom right */}
      <motion.div
        className="absolute right-0 z-10"
        style={{ bottom: "12%" }}
        initial={{ x: 80, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      >
        <h1 className="font-dm_sans font-light text-white leading-none pr-0" style={{ fontSize: "clamp(80px, 12vw, 200px)" }}>
          FUNCTION
        </h1>
      </motion.div>

      {/* Bottom bar */}
      <div className="absolute bottom-7 left-7 right-7 z-10 flex items-end justify-between">
        {/* Description */}
        <motion.div
          className="max-w-xs"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <p className="text-white font-dm_sans font-light text-sm leading-relaxed">
            Crafting interiors that blend serenity and style, Found + Formed brings thoughtful design to life with a meticulous touch and a focus on the details that matter.
          </p>
        </motion.div>

        {/* CTA */}
        <motion.a
          href="#about"
          onClick={(e) => { e.preventDefault(); document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" }); }}
          className="flex items-center gap-2.5 text-white group overflow-hidden"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          whileHover={{ x: 4 }}
        >
          <span className="font-dm_sans font-light text-sm">→</span>
          <span className="font-dm_sans font-light text-sm">Explore Our Vision</span>
        </motion.a>
      </div>
    </header>
  );
};
