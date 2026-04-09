import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const images = [
  {
    src: "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/f2kdZ2VnYMzJohVsHO2VMhmqNE.jpeg",
    xEnd: -420,
    yEnd: -340,
    rotation: -8,
    scale: [1, 0.85] as [number, number],
  },
  {
    src: "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/5o0R1uytbLqum3oZFhynbfelw5w.jpeg",
    xEnd: 420,
    yEnd: -360,
    rotation: 7,
    scale: [1, 0.88] as [number, number],
  },
  {
    src: "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/C5wWU0Nj6lv1KokCS11q95R2U.jpeg",
    xEnd: -380,
    yEnd: 320,
    rotation: 6,
    scale: [1, 0.82] as [number, number],
  },
  {
    src: "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/vhTOTtueDBCx9yxBY9UPdO5eF9c.jpeg",
    xEnd: 400,
    yEnd: 350,
    rotation: -6,
    scale: [1, 0.86] as [number, number],
  },
  {
    src: "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/pqX1CuSJYsP7oDqUxXpKvHgP4VY.jpeg",
    xEnd: -560,
    yEnd: -180,
    rotation: 10,
    scale: [1, 0.78] as [number, number],
  },
  {
    src: "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/6pjIypyuTQFWu4YUfZUgCTztLTA.jpeg",
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

const ParallaxImage = ({ src, xEnd, yEnd, rotation, scale, progress }: ParallaxImageProps) => {
  const x = useTransform(progress, [0, 1], [0, xEnd]);
  const y = useTransform(progress, [0, 1], [0, yEnd]);
  const rotate = useTransform(progress, [0, 1], [0, rotation]);
  const scaleValue = useTransform(progress, [0, 1], scale);

  return (
    <motion.div
      style={{ x, y, rotate, scale: scaleValue }}
      className="absolute w-[300px] h-[220px] md:w-[420px] md:h-[320px] overflow-hidden rounded-2xl shadow-2xl"
    >
      <img src={src} alt="" className="w-full h-full object-cover" />
    </motion.div>
  );
};

/* ── Mobile: simple 2-column scroll-reveal grid ── */
const MobileGallery = () => {
  const refs = images.map(() => useScrollReveal<HTMLDivElement>());
  return (
    <section className="bg-orange-50 w-full px-5 py-16">
      <div className="mb-10 text-center">
        <h2 className="font-bold leading-none tracking-tight text-neutral-900 text-[2.5rem]">
          Our Work
        </h2>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {images.map((img, i) => (
          <div
            key={i}
            ref={refs[i]}
            className="reveal reveal-up overflow-hidden rounded-xl aspect-[3/4] bg-stone-200"
            style={{ transitionDelay: `${(i % 2) * 0.1}s` }}
          >
            <img
              src={img.src}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

/* ── Desktop: full parallax scatter ── */
const DesktopGallery = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });
  const headingScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.04, 1]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.6, 1, 1, 0.6]);

  return (
    <section ref={sectionRef} className="relative bg-orange-50 w-full" style={{ height: "200vh" }}>
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ scale: headingScale, opacity: headingOpacity }}
          className="absolute z-10 text-center pointer-events-none select-none"
        >
          <h2
            className="font-bold leading-none tracking-tight text-neutral-900"
            style={{ fontSize: "clamp(3rem, 8vw, 7rem)" }}
          >
            Our Work
          </h2>
          <p className="mt-3 text-neutral-500 text-lg tracking-widest uppercase">
            Scroll to explore
          </p>
        </motion.div>

        {images.map((img, i) => (
          <ParallaxImage key={i} {...img} progress={scrollYProgress} />
        ))}
      </div>
    </section>
  );
};

export const ParallaxGallery = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MobileGallery /> : <DesktopGallery />;
};
