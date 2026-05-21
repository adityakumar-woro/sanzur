import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { SplitText } from "@/components/SplitText";

const SERVICES = [
  { num: "01", label: "Interior Design" },
  { num: "02", label: "Architecture" },
  { num: "03", label: "Project Management" },
  { num: "04", label: "Furniture Design" },
];

const SERVICE_IMAGES = [
  "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/ReJwRbXJwTFxetSzciMpxrBfK8A.jpeg",
  "/projects/padel/padel-collage.png",
  "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/5o0R1uytbLqum3oZFhynbfelw5w.jpeg",
  "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/AtdiKWyuN2qHdjex8ctxe8TjV8.jpeg",
];

export const ServicesSection = () => {
  const { ref: headingRef } = useInView({ threshold: 0.1 });
  const { ref: listRef, inView: listInView } = useInView({ threshold: 0.1 });
  const descRef = useScrollReveal<HTMLParagraphElement>();

  return (
    <section className="relative bg-orange-50 w-full border-b border-black/30 pt-16 pb-20 md:pt-20 md:pb-24 px-5 md:px-[30px] overflow-hidden">
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

      <div className="flex flex-col lg:flex-row gap-10 md:gap-16 max-w-[1680px]">
        {/* Services List */}
        <div ref={listRef} className="lg:w-5/12 flex flex-col">
          {SERVICES.map((svc, i) => (
            <motion.div
              key={svc.num}
              className="flex items-baseline gap-4 py-5 md:py-6 border-b border-black/10 relative"
              initial={{ opacity: 0, x: -20 }}
              animate={listInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1], delay: i * 0.08 }}
            >
              <span className="text-xs italic font-light font-newsreader text-black/40 min-w-[32px]">
                {svc.num}
              </span>

              <h4 className="text-[22px] md:text-[26px] font-light font-dm_sans text-black leading-tight">
                {svc.label}
              </h4>

              <span className="ml-auto text-2xl text-black/30">
                →
              </span>
            </motion.div>
          ))}
        </div>

        {/* Image Preview Area - FIXED */}
        <div className="lg:w-7/12 relative min-h-[460px] md:min-h-[520px] lg:min-h-[560px] rounded-3xl overflow-hidden bg-stone-100 shadow-xl">
          <div className="absolute inset-0 grid grid-cols-2 gap-3 p-4">
            {SERVICE_IMAGES.map((src, i) => (
              <motion.div
                key={i}
                className="overflow-hidden rounded-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <img
                  src={src}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
