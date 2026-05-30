import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const VIDEO_SRC = "/media/sanzur-featured-video.mp4";

export const FeaturedVideo = () => {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const scale = useTransform(scrollYProgress, [0, 0.92, 1], [1.12, 0.82, 0.82]);
  const borderRadius = useTransform(scrollYProgress, [0, 0.82, 1], [0, 26, 26]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.58, 1], [0.12, 0.34, 0.42]);
  const titleY = useTransform(scrollYProgress, [0, 0.58, 0.9], [42, 0, -18]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.2, 0.62, 0.84], [0, 1, 1, 0]);
  const maskOpacity = useTransform(scrollYProgress, [0, 0.16, 1], [0.92, 1, 1]);

  return (
    <div
      ref={ref}
      className="relative z-0 h-[200vh] w-full bg-[#050505] shadow-[0_-120px_160px_rgba(0,0,0,0.96)]"
      aria-label="Sanzur featured interior video"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-48 bg-gradient-to-b from-black via-black/75 to-transparent" />
      <div className="sticky top-0 flex h-screen w-full items-center justify-center overflow-hidden">
        <motion.div
          className="relative h-full w-full overflow-hidden bg-black shadow-[0_32px_120px_rgba(0,0,0,0.38)] md:h-[84vh] md:w-[90vw]"
          style={{ scale, borderRadius }}
        >
          <video
            src={VIDEO_SRC}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            className="h-full w-full object-cover"
          />
          <motion.div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/12" />
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-x-5 bottom-14 z-10 md:inset-x-16 md:bottom-16"
          style={{ y: titleY, opacity: titleOpacity }}
        >
          <p className="mb-4 text-[10px] uppercase tracking-[0.28em] text-white/56">
            Sanzur Interior Film
          </p>
          <h2 className="max-w-5xl font-newsreader text-[clamp(3rem,8vw,7.5rem)] font-light leading-[0.9] text-white">
            World Class Interior
          </h2>
        </motion.div>

        <motion.div
          className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-black via-[#050505]/90 to-transparent"
          style={{ opacity: maskOpacity }}
        />
        <motion.div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#050505] to-transparent"
          style={{ opacity: maskOpacity }}
        />
      </div>
    </div>
  );
};
