import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SplitText } from "@/components/SplitText";

const SERVICE_IMAGES = [
  {
    src: "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/ReJwRbXJwTFxetSzciMpxrBfK8A.jpeg",
    aspect: "aspect-square",
  },
  {
    src: "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/pqX1CuSJYsP7oDqUxXpKvHgP4VY.jpeg",
    aspect: "aspect-square",
  },
  {
    src: "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/5o0R1uytbLqum3oZFhynbfelw5w.jpeg",
    aspect: "aspect-video",
  },
  {
    src: "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/AtdiKWyuN2qHdjex8ctxe8TjV8.jpeg",
    aspect: "aspect-[3/4]",
  },
];

const SERVICES = [
  { num: "01", label: "Interior Design" },
  { num: "02", label: "Architecture" },
  { num: "03", label: "Project Management" },
  { num: "04", label: "Furniture Design" },
];

export const ServicesSection = () => {
  const { ref: headingRef } = useInView({ threshold: 0.1 });
  const { ref: listRef, inView: listInView } = useInView({ threshold: 0.1 });
  const { ref: gridRef, inView: gridInView } = useInView({ threshold: 0.08 });
  const descRef = useScrollReveal<HTMLParagraphElement>();

  return (
    <section className="relative bg-orange-50 w-full border-b border-black/30 pt-[70px] pb-[100px] px-5 md:px-[30px] overflow-hidden">
      {/* Header */}
      <div
        ref={headingRef as React.RefObject<HTMLDivElement>}
        className="flex flex-col gap-4 mb-12 md:mb-16 max-w-[1680px]"
      >
        <div className="overflow-hidden">
          <SplitText
            text="What We Do"
            as="h2"
            className="font-dm_sans font-light text-black text-[2.6rem] md:text-[5rem] leading-[1.1]"
            baseDelay={0.05}
            stagger={0.06}
          />
        </div>
        <p
          ref={descRef}
          className="reveal reveal-delay-1 text-sm md:text-base font-light font-dm_sans text-black/70 leading-relaxed max-w-[600px]"
        >
          From initial concept to final touches, sanzur offers a range of services designed to meet the unique needs of each client. We specialize in residential interiors, commercial spaces, and custom furniture design, always with a focus on creating cohesive, livable spaces.
        </p>
      </div>

      {/* Body: list + images */}
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-10 md:gap-8 max-w-[1680px]">

        {/* Services list */}
        <div ref={listRef as React.RefObject<HTMLDivElement>} className="md:w-[36%] flex flex-col gap-0">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.num}
              className="flex items-baseline gap-3 py-4 md:py-5 border-b border-black/10 group cursor-default"
              initial={{ opacity: 0, x: -20 }}
              animate={listInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: i * 0.08 }}
              whileHover={{ x: 6 }}
            >
              <span className="text-xs italic font-light font-newsreader text-black/40 min-w-[28px] transition-opacity group-hover:text-black/70">
                {svc.num}
              </span>
              <h4 className="text-[22px] md:text-[26px] font-light font-dm_sans text-black leading-tight group-hover:opacity-70 transition-opacity duration-200">
                {svc.label}
              </h4>
              <motion.span
                className="ml-auto text-black/0 text-sm font-dm_sans font-light group-hover:text-black/40 transition-colors duration-200"
              >
                →
              </motion.span>
            </motion.div>
          ))}
        </div>

        {/* Images grid */}
        <div
          ref={gridRef as React.RefObject<HTMLDivElement>}
          className="md:w-[55%] grid grid-cols-2 gap-3"
        >
          {SERVICE_IMAGES.map((img, i) => (
            <motion.div
              key={i}
              className={`overflow-hidden rounded-lg bg-stone-200 ${img.aspect} group`}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: i * 0.1 }}
            >
              <img
                src={img.src}
                alt=""
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
