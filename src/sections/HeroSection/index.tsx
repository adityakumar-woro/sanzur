import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroImage from "@/assets/hb.jpg";

const EASE = [0.16, 1, 0.3, 1] as const;

const LetterReveal = ({
  text,
  baseDelay = 0,
  stagger = 0.04,
  className = "",
  fontSize,
}: {
  text: string;
  baseDelay?: number;
  stagger?: number;
  className?: string;
  fontSize?: string;
}) => (
  <span
    className={`inline-flex overflow-hidden ${className}`}
    aria-label={text}
    style={fontSize ? { fontSize } : undefined}
  >
    {text.split("").map((char, i) => (
      <motion.span
        key={i}
        className="inline-block"
        initial={{ y: "110%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{
          duration: 1,
          delay: baseDelay + i * stagger,
          ease: EASE,
        }}
      >
        {char}
      </motion.span>
    ))}
  </span>
);

export const HeroSection = () => {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.0]);
  const overlayOpacity = useTransform(
    scrollYProgress,
    [0, 0.6],
    [0, 0.45]
  );

  return (
    <header
      ref={ref}
      className="relative w-full h-[50vh] md:h-screen bg-black overflow-hidden z-10"
    >
      {/* Background image */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: bgY, scale: bgScale }}
      >
        <img
          src={heroImage}
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/90" />
      </motion.div>

      {/* Dark overlay */}
      <motion.div
        className="absolute inset-0 z-[1] bg-black pointer-events-none"
        style={{ opacity: overlayOpacity }}
      />

      {/* SANZUR */}
      <div className="absolute left-0 top-[16%] z-10 px-5 md:px-7">
        <LetterReveal
          text="SANZUR"
          baseDelay={0.15}
          className="font-dm_sans font-light text-white leading-none"
          fontSize="clamp(52px, 12vw, 200px)"
        />
      </div>

      {/* Plus */}
      <motion.div
        className="absolute z-10"
        style={{ left: "60%", top: "42%" }}
        initial={{ scale: 0, opacity: 0, rotate: -180 }}
        animate={{ scale: 1, opacity: 1, rotate: 0 }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.55 }}
      >
        <span
          className="text-white font-dm_sans font-light leading-none"
          style={{ fontSize: "clamp(40px, 8vw, 120px)" }}
        >
          +
        </span>
      </motion.div>

      {/* FUNCTION */}
      <div className="absolute right-0 z-10" style={{ bottom: "14%" }}>
        <LetterReveal
          text="FUNCTION"
          baseDelay={0.22}
          className="font-dm_sans font-light text-white leading-none"
          fontSize="clamp(52px, 12vw, 200px)"
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute left-1/2 bottom-24 md:bottom-28 z-10 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <span className="text-white/40 font-dm_sans font-light text-[10px] tracking-[0.2em] uppercase">
          Scroll
        </span>

        <motion.div
          className="w-px h-10 bg-white/30 origin-top"
          animate={{ scaleY: [1, 0, 1] }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Bottom bar */}
      <div className="absolute bottom-5 md:bottom-7 left-5 md:left-7 right-5 md:right-7 z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <motion.div
          className="hidden sm:block max-w-[260px] md:max-w-xs"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.95 }}
        >
          <p className="text-white font-dm_sans font-light text-xs md:text-sm leading-relaxed">
            Crafting interiors that blend serenity and style — Sanzur brings
            thoughtful design to life with meticulous attention to the details
            that matter.
          </p>
        </motion.div>

        <motion.a
          href="#about"
          onClick={(e: React.MouseEvent) => {
            e.preventDefault();
            document
              .querySelector("#about")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex items-center gap-2.5 text-white group overflow-hidden touch-manipulation"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          whileHover={{ x: 6 }}
        >
          <motion.span
            className="font-dm_sans font-light text-sm"
            animate={{ x: [0, 4, 0] }}
            transition={{
              duration: 1.6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5,
            }}
          >
            →
          </motion.span>

          <span className="font-dm_sans font-light text-sm border-b border-white/30 group-hover:border-white transition-colors duration-300">
            Explore Our Vision
          </span>
        </motion.a>
      </div>
    </header>
  );
};