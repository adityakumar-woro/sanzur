import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useScrollReveal } from "@/hooks/useScrollReveal";

/* LOCAL IMAGES */
import img1 from "@/assets/1.jpg";
import img2 from "@/assets/2.jpg";
import img3 from "@/assets/3.jpg";
import img4 from "@/assets/4.jpg";
import img5 from "@/assets/5.jpg";
import img6 from "@/assets/6.jpg";

const images = [
  {
    src: img1,
    xEnd: -420,
    yEnd: -340,
    rotation: -8,
    scale: [1, 0.85] as [number, number],
  },
  {
    src: img2,
    xEnd: 420,
    yEnd: -360,
    rotation: 7,
    scale: [1, 0.88] as [number, number],
  },
  {
    src: img3,
    xEnd: -380,
    yEnd: 320,
    rotation: 6,
    scale: [1, 0.82] as [number, number],
  },
  {
    src: img4,
    xEnd: 400,
    yEnd: 350,
    rotation: -6,
    scale: [1, 0.86] as [number, number],
  },
  {
    src: img5,
    xEnd: -560,
    yEnd: -180,
    rotation: 10,
    scale: [1, 0.78] as [number, number],
  },
  {
    src: img6,
    xEnd: 540,
    yEnd: 200,
    rotation: -9,
    scale: [1, 0.8] as [number, number],
  },
];

interface ParallaxImageProps {
  src: string;
  xEnd: number;
  yEnd: number;
  rotation: number;
  scale: [number, number];
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}

const ParallaxImage = ({
  src,
  xEnd,
  yEnd,
  rotation,
  scale,
  progress,
}: ParallaxImageProps) => {
  const x = useTransform(progress, [0, 1], [0, xEnd]);
  const y = useTransform(progress, [0, 1], [0, yEnd]);
  const rotate = useTransform(progress, [0, 1], [0, rotation]);
  const scaleValue = useTransform(progress, [0, 1], scale);

  return (
    <motion.div
      style={{
        x,
        y,
        rotate,
        scale: scaleValue,
      }}
      className="absolute w-[280px] h-[220px] md:w-[420px] md:h-[320px] overflow-hidden rounded-[28px] shadow-2xl"
    >
      <motion.img
        src={src}
        alt=""
        className="w-full h-full object-cover"
        whileHover={{ scale: 1.08 }}
        transition={{ duration: 0.6 }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10 hover:bg-black/0 transition-colors duration-500" />
    </motion.div>
  );
};

/* ───────────────────────────── */
/* MOBILE */
/* ───────────────────────────── */

const MobileGallery = () => {
  const refs = images.map(() => useScrollReveal<HTMLDivElement>());

  return (
    <section className="bg-[#f5f0e8] w-full px-5 py-20 overflow-hidden">
      {/* Heading */}
      <div className="mb-12 text-center">
        <p className="uppercase tracking-[0.35em] text-black/40 text-xs mb-4">
          Portfolio
        </p>

        <h2 className="font-light leading-[0.9] tracking-tight text-neutral-900 text-[3rem]">
          Our Work
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4">
        {images.map((img, i) => (
          <div
            key={i}
            ref={refs[i]}
            className="reveal reveal-up overflow-hidden rounded-[22px] aspect-[3/4] bg-stone-200"
            style={{
              transitionDelay: `${(i % 2) * 0.1}s`,
            }}
          >
            <motion.img
              src={img.src}
              alt=""
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

/* ───────────────────────────── */
/* DESKTOP */
/* ───────────────────────────── */

const DesktopGallery = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const headingScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1, 1.04, 1]
  );

  const headingOpacity = useTransform(
    scrollYProgress,
    [0, 0.1, 0.9, 1],
    [0.6, 1, 1, 0.6]
  );

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f5f0e8] w-full"
      style={{ height: "220vh" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Background Glow */}
        <div className="absolute w-[900px] h-[900px] rounded-full bg-black/[0.03] blur-3xl" />

        {/* Center Heading */}
        <motion.div
          style={{
            scale: headingScale,
            opacity: headingOpacity,
          }}
          className="absolute z-10 text-center pointer-events-none select-none"
        >
          <p className="uppercase tracking-[0.35em] text-black/40 text-xs mb-5">
            Portfolio
          </p>

          <h2
            className="font-light leading-[0.85] tracking-tight text-neutral-900"
            style={{
              fontSize: "clamp(3rem, 8vw, 7rem)",
            }}
          >
            Our Work
          </h2>

          <p className="mt-5 text-black/40 text-sm tracking-[0.3em] uppercase">
            Scroll to explore
          </p>
        </motion.div>

        {/* Floating Images */}
        {images.map((img, i) => (
          <ParallaxImage
            key={i}
            {...img}
            progress={scrollYProgress}
          />
        ))}
      </div>
    </section>
  );
};

/* ───────────────────────────── */

export const ParallaxGallery = () => {
  const isMobile = useIsMobile();

  return isMobile ? <MobileGallery /> : <DesktopGallery />;
};