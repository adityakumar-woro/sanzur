import { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useIsMobile } from "@/hooks/useIsMobile";
import { ProjectItem, type ProjectItemProps } from "./components/ProjectItem";

/* ─── Single stacked card (desktop only) ─── */
const StackCard = ({
  data,
  progress,
  index,
  total,
}: {
  data: ProjectItemProps;
  progress: MotionValue<number>;
  index: number;
  total: number;
}) => {
  const hoverRef = useRef<HTMLDivElement>(null);
  const i = index;
  const n = total;
  const step = n > 1 ? 1 / (n - 1) : 1;

  // Card i (i > 0) slides up from 100% → 0% during its scroll range
  const enterStart = i === 0 ? 0 : (i - 1) * step;
  const enterEnd = i === 0 ? 0 : i * step;

  const y = useTransform(
    progress,
    i === 0 ? [0, 1] : [enterStart, enterEnd],
    i === 0 ? ["0%", "0%"] : ["100%", "0%"]
  );

  // While the NEXT card is coming in, this card gently scales back
  const coverStart = Math.min(i * step, 0.998);
  const coverEnd = Math.min((i + 1) * step, 1.0);
  const scale = useTransform(
    progress,
    [coverStart, coverEnd],
    [1, i < n - 1 ? 0.94 : 1]
  );

  const onMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const xPct = (e.clientX - rect.left) / rect.width - 0.5;
    const yPct = (e.clientY - rect.top) / rect.height - 0.5;
    if (hoverRef.current) {
      hoverRef.current.style.transform = `scale(1.06) translate(${xPct * 12}px, ${yPct * 8}px)`;
    }
  };

  const onMouseLeave = () => {
    if (hoverRef.current) {
      hoverRef.current.style.transform = "scale(1) translate(0, 0)";
    }
  };

  return (
    <motion.div
      className="absolute inset-0 will-change-transform"
      style={{ y, scale, zIndex: i + 1, transformOrigin: "center top" }}
    >
      <a
        href={data.href}
        className="relative flex flex-col h-full w-full overflow-hidden px-[30px] py-[100px] justify-between"
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
      >
        {/* Number */}
        <div className="relative z-[2]">
          <h1 className="text-white font-light font-dm_sans leading-none text-8xl">
            {data.number}
          </h1>
        </div>

        {/* Title + Description */}
        <div className="relative z-[2] flex flex-row items-end justify-between w-full">
          <div className={`flex flex-col shrink-0 justify-start break-words ${data.titleVariantClass}`}>
            <h1 className="text-white font-light font-dm_sans leading-[1.08] text-8xl break-words">
              {data.title}
            </h1>
          </div>
          <div className="flex flex-col shrink-0 h-min justify-start max-w-[340px]">
            <h5 className="text-white font-light font-inter break-words text-[21px] leading-relaxed">
              {data.description}
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

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 z-[1] pointer-events-none" />

        {/* Background image with hover drift */}
        <div className="absolute inset-0 overflow-hidden z-0">
          <div
            ref={hoverRef}
            className="w-full h-full"
            style={{ transition: "transform 0.6s cubic-bezier(0.33,1,0.68,1)" }}
          >
            <img
              src={data.imageSrc}
              alt=""
              className="w-full h-full object-cover scale-110"
            />
          </div>
        </div>
      </a>
    </motion.div>
  );
};

/* ─── Main export ─── */
export const ProjectsStack = ({ projects }: { projects: ProjectItemProps[] }) => {
  const isMobile = useIsMobile();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Mobile: use existing scroll-reveal ProjectItem for each project
  if (isMobile) {
    return (
      <div className="flex flex-col">
        {projects.map((p, i) => (
          <ProjectItem key={i} {...p} />
        ))}
      </div>
    );
  }

  // Desktop: sticky stacking container
  // Height = n * 100vh → each card transition gets 100vh of scroll distance
  return (
    <div
      ref={containerRef}
      style={{ height: `${projects.length * 100}vh` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen overflow-hidden bg-black">
        {projects.map((project, i) => (
          <StackCard
            key={i}
            data={project}
            progress={scrollYProgress}
            index={i}
            total={projects.length}
          />
        ))}
      </div>
    </div>
  );
};
