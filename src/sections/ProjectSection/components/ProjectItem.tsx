import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export type ProjectItemProps = {
  number: string;
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  titleVariantClass: string;
};

export const ProjectItem = (props: ProjectItemProps) => {
  const ref = useRef<HTMLElement>(null);
  const hoverImageRef = useRef<HTMLDivElement>(null);

  // Parallax for background image (full range)
  const { scrollYProgress: parallaxProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Entrance animation — from when section enters viewport to when it's centered
  const { scrollYProgress: enterProgress } = useScroll({
    target: ref,
    offset: ["start end", "center 55%"],
  });

  const imgY = useTransform(parallaxProgress, [0, 1], ["-6%", "6%"]);

  // Scroll-driven fade + slide — content reveals as user scrolls into each project
  const contentOpacity = useTransform(enterProgress, [0, 0.55], [0, 1]);
  const contentY = useTransform(enterProgress, [0, 0.55], [72, 0]);

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    if (hoverImageRef.current) {
      hoverImageRef.current.style.transform = `scale(1.06) translate(${xPct * 12}px, ${yPct * 8}px)`;
    }
  };

  const onMouseLeave = () => {
    if (hoverImageRef.current) {
      hoverImageRef.current.style.transform = "scale(1) translate(0, 0)";
    }
  };

  return (
    <section
      ref={ref}
      className="relative bg-orange-50 flex flex-col shrink-0 h-min justify-center w-full"
    >
      <a
        href={props.href}
        className="relative flex flex-col shrink-0 h-[70vh] min-h-[500px] md:h-[100vh] justify-start w-full z-[1] overflow-hidden px-5 md:px-[30px] py-10 md:py-[100px] gap-y-14 md:gap-y-[250px]"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {/* Scroll-driven content wrapper */}
        <motion.div
          className="relative z-[2] flex flex-col justify-between h-full gap-y-14 md:gap-y-[250px]"
          style={{ opacity: contentOpacity, y: contentY }}
        >
          {/* Number */}
          <div className="overflow-hidden">
            <h1 className="text-white font-light font-dm_sans leading-none text-[36px] md:text-8xl">
              {props.number}
            </h1>
          </div>

          {/* Title + Description row */}
          <div className="flex flex-col gap-y-4 md:gap-y-0 md:flex-row md:items-center md:justify-between w-full">
            <div className={`flex flex-col shrink-0 justify-start break-words ${props.titleVariantClass}`}>
              <h1 className="text-white font-light font-dm_sans leading-[1.08] text-[36px] md:text-8xl break-words">
                {props.title}
              </h1>
            </div>

            <div className="flex flex-col shrink-0 h-min justify-start max-w-full md:max-w-[340px] w-full">
              <h5 className="text-white font-light font-inter break-words text-sm md:text-[21px] leading-relaxed">
                {props.description}
              </h5>
              <motion.div
                className="inline-flex items-center gap-2 text-white/60 text-sm font-dm_sans font-light mt-4"
                whileHover={{ x: 5 }}
              >
                <span>→</span>
                <span className="border-b border-white/30">View Project</span>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Dark overlay */}
        <div className="absolute bg-black h-full opacity-40 w-full z-[1] left-0 top-0 pointer-events-none" />

        {/* Background image with parallax + hover drift */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <motion.div
            ref={hoverImageRef}
            className="w-full h-full"
            style={{
              y: imgY,
              transition: "transform 0.6s cubic-bezier(0.33,1,0.68,1)",
            }}
          >
            <img
              src={props.imageSrc}
              alt=""
              className="w-full h-full object-cover scale-110"
            />
          </motion.div>
        </div>
      </a>
    </section>
  );
};
