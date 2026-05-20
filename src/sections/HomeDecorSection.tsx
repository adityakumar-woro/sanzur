import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import hd1 from "@/assets/hd1.jpeg";
import hd2 from "@/assets/hd2.jpeg";
import hd3 from "@/assets/hd3.jpeg";

const EASE = [0.33, 1, 0.68, 1] as const;

const ITEMS = [
  { image: hd1, label: "Living Spaces" },
  { image: hd2, label: "Interior Details" },
  { image: hd3, label: "Ambient Styling" },
];

export const HomeDecorSection = () => {
  const { ref: headingRef, inView: headingInView } = useInView({ threshold: 0.1 });
  const { ref: gridRef, inView: gridInView } = useInView({ threshold: 0.04 });

  return (
    <section className="relative bg-[#1c1a18] w-full px-5 md:px-[30px] py-20 md:py-[100px] border-b border-white/10">

      {/* Header */}
      <div
        ref={headingRef as React.RefObject<HTMLDivElement>}
        className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16"
      >
        <div>
          <motion.p
            className="text-white/40 text-xs font-light font-dm_sans uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 12 }}
            animate={headingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE }}
          >
            Collection
          </motion.p>
          <div className="overflow-hidden">
            <motion.h2
              className="text-white font-dm_sans font-light leading-[1.08]"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
              initial={{ y: "100%", opacity: 0 }}
              animate={headingInView ? { y: "0%", opacity: 1 } : {}}
              transition={{ duration: 0.9, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
            >
              Home Decor
            </motion.h2>
          </div>
        </div>

        <motion.p
          className="text-white/50 text-sm md:text-base font-light font-dm_sans leading-relaxed max-w-sm"
          initial={{ opacity: 0, y: 20 }}
          animate={headingInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE }}
        >
          Curated pieces and spaces that transform the everyday into an expression of personal style.
        </motion.p>
      </div>

      {/* Asymmetric grid: tall left + 2 stacked right */}
      <div
        ref={gridRef as React.RefObject<HTMLDivElement>}
        className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-5"
      >
        {/* Left: tall feature image */}
        <motion.div
          className="md:col-span-6 relative overflow-hidden"
          style={{ aspectRatio: "3 / 4" }}
          initial={{ opacity: 0, x: -24 }}
          animate={gridInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, ease: EASE }}
        >
          <img
            src={ITEMS[0].image}
            alt={ITEMS[0].label}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10" />
          {/* Bottom label */}
          <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 bg-gradient-to-t from-black/60 to-transparent">
            <p className="text-white text-xs font-light font-dm_sans uppercase tracking-widest">
              {ITEMS[0].label}
            </p>
          </div>
          {/* Corner accent */}
          <div className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/50 flex items-center justify-center">
            <span className="text-white/80 text-xs">+</span>
          </div>
        </motion.div>

        {/* Right: 2 stacked images */}
        <div className="md:col-span-6 grid grid-rows-2 gap-4 md:gap-5" style={{ aspectRatio: "3 / 4" }}>
          {ITEMS.slice(1).map((item, i) => (
            <motion.div
              key={i}
              className="relative overflow-hidden"
              initial={{ opacity: 0, x: 24 }}
              animate={gridInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.85, delay: 0.12 + i * 0.12, ease: EASE }}
            >
              <img
                src={item.image}
                alt={item.label}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white text-xs font-light font-dm_sans uppercase tracking-widest">
                  {item.label}
                </p>
              </div>
              <div className="absolute top-3 right-3 w-7 h-7 rounded-full border border-white/50 flex items-center justify-center">
                <span className="text-white/80 text-xs">+</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom row: index labels */}
      <motion.div
        className="flex items-center justify-between mt-8 md:mt-10 pt-6 border-t border-white/10"
        initial={{ opacity: 0 }}
        animate={gridInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, delay: 0.5, ease: EASE }}
      >
        <div className="flex gap-6 md:gap-10">
          {ITEMS.map((item, i) => (
            <span key={i} className="text-white/30 text-xs font-light font-dm_sans uppercase tracking-widest">
              {String(i + 1).padStart(2, "0")} — {item.label}
            </span>
          ))}
        </div>
        <a
          href="/about"
          className="text-white/40 text-xs font-light font-dm_sans uppercase tracking-widest no-underline hidden md:block"
        >
          Explore More →
        </a>
      </motion.div>
    </section>
  );
};
