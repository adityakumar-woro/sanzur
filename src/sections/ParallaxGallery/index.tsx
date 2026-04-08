import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const images = [
  {
    src: "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/f2kdZ2VnYMzJohVsHO2VMhmqNE.jpeg",
    // top-left corner
    xStart: 0,
    xEnd: -420,
    yStart: 0,
    yEnd: -340,
    rotation: -8,
    scale: [1, 0.85],
  },
  {
    src: "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/5o0R1uytbLqum3oZFhynbfelw5w.jpeg",
    // top-right corner
    xStart: 0,
    xEnd: 420,
    yStart: 0,
    yEnd: -360,
    rotation: 7,
    scale: [1, 0.88],
  },
  {
    src: "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/C5wWU0Nj6lv1KokCS11q95R2U.jpeg",
    // bottom-left corner
    xStart: 0,
    xEnd: -380,
    yStart: 0,
    yEnd: 320,
    rotation: 6,
    scale: [1, 0.82],
  },
  {
    src: "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/vhTOTtueDBCx9yxBY9UPdO5eF9c.jpeg",
    // bottom-right corner
    xStart: 0,
    xEnd: 400,
    yStart: 0,
    yEnd: 350,
    rotation: -6,
    scale: [1, 0.86],
  },
  {
    src: "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/pqX1CuSJYsP7oDqUxXpKvHgP4VY.jpeg",
    // far top-left
    xStart: 0,
    xEnd: -560,
    yStart: 0,
    yEnd: -180,
    rotation: 10,
    scale: [1, 0.78],
  },
  {
    src: "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/6pjIypyuTQFWu4YUfZUgCTztLTA.jpeg",
    // far bottom-right
    xStart: 0,
    xEnd: 540,
    yStart: 0,
    yEnd: 200,
    rotation: -9,
    scale: [1, 0.8],
  },
];

interface ParallaxImageProps {
  src: string;
  xStart: number;
  xEnd: number;
  yStart: number;
  yEnd: number;
  rotation: number;
  scale: number[];
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
      style={{ x, y, rotate, scale: scaleValue }}
      className="absolute w-[420px] h-[320px] overflow-hidden rounded-2xl shadow-2xl"
    >
      <img
        src={src}
        alt=""
        className="w-full h-full object-cover"
      />
    </motion.div>
  );
};

export const ParallaxGallery = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const headingScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.04, 1]);
  const headingOpacity = useTransform(scrollYProgress, [0, 0.1, 0.9, 1], [0.6, 1, 1, 0.6]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-orange-50 w-full"
      style={{ height: "200vh" }}
    >
      {/* Sticky container */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        {/* Center heading */}
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

        {/* Parallax images — all start centered */}
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
