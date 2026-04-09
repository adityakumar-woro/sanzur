import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { useIsMobile } from "@/hooks/useIsMobile";
import { SplitText } from "@/components/SplitText";

/* ── Mobile CTA ── */
const MobileContact = () => {
  const { ref, inView } = useInView({ threshold: 0.15 });
  return (
    <section className="relative bg-orange-50 w-full border-b border-black/30 px-5 py-20 overflow-hidden">
      {/* Decorative circle */}
      <div className="absolute -right-24 -top-24 w-64 h-64 rounded-full border border-black/5 pointer-events-none" />
      <div className="absolute -right-16 -top-16 w-48 h-48 rounded-full border border-black/5 pointer-events-none" />

      <motion.div
        ref={ref as React.RefObject<HTMLDivElement>}
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.33, 1, 0.68, 1] }}
        className="flex flex-col gap-8 relative z-10"
      >
        <p className="text-xs font-light font-dm_sans uppercase tracking-widest text-black/50">
          Ready to transform your space?
        </p>
        <h2
          className="font-dm_sans font-light text-black leading-[1.05]"
          style={{ fontSize: "clamp(2.5rem, 14vw, 5rem)" }}
        >
          Into{" "}
          <em className="font-newsreader italic not-italic">Reality</em>
        </h2>
        <p className="text-sm font-light font-dm_sans text-black/60 leading-relaxed max-w-sm">
          Reach out to start a conversation. We transform thoughtful ideas into spaces that inspire.
        </p>
        <motion.a
          href="/contact"
          className="inline-flex items-center gap-3 border border-black text-black text-base font-light font-dm_sans px-7 py-4 hover:bg-black hover:text-white transition-colors duration-300 w-fit"
          whileHover={{ x: 4 }}
          whileTap={{ scale: 0.97 }}
        >
          <img src="https://c.animaapp.com/mnitwnjzSfY2Kl/assets/icon-6.svg" alt="" className="w-5 h-5" />
          Get In Touch
        </motion.a>
      </motion.div>
    </section>
  );
};

/* ── Desktop scroll-driven sticky CTA ── */
const DesktopContact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const headingY    = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const labelY      = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const ctaY        = useTransform(scrollYProgress, [0, 1], [40, -40]);
  const opacity     = useTransform(scrollYProgress, [0, 0.15, 0.85, 1], [0, 1, 1, 0]);
  const bgScale     = useTransform(scrollYProgress, [0, 1], [1.08, 1.0]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#f5f0e8] border-b border-black/30 w-full overflow-hidden"
      style={{ height: "160vh" }}
    >
      {/* Subtle texture pattern */}
      <motion.div
        className="absolute inset-0 z-0 opacity-[0.04]"
        style={{ scale: bgScale }}
        aria-hidden
      >
        <div className="w-full h-full"
          style={{
            backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 60px, #000 60px, #000 61px), repeating-linear-gradient(90deg, transparent, transparent 60px, #000 60px, #000 61px)",
          }}
        />
      </motion.div>

      <div className="sticky top-0 h-screen flex flex-col justify-center px-[30px] md:px-[60px] z-10">
        <motion.p
          style={{ y: labelY, opacity }}
          className="text-sm font-light font-dm_sans uppercase tracking-[0.2em] text-black/40 mb-6"
        >
          Ready to transform your space?
        </motion.p>

        <div className="overflow-hidden">
          <motion.div style={{ y: headingY, opacity }}>
            <SplitText
              text="Into Reality"
              as="h2"
              className="font-dm_sans font-light text-black leading-[1.02] mb-10"
              style={{ fontSize: "clamp(4rem, 10vw, 10rem)" }}
              baseDelay={0}
              stagger={0.06}
            />
          </motion.div>
        </div>

        <motion.div
          style={{ y: ctaY, opacity }}
          className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10 mt-10"
        >
          <motion.a
            href="/contact"
            className="inline-flex items-center gap-3 border border-black text-black text-lg md:text-[21px] font-light font-dm_sans px-8 py-5 hover:bg-black hover:text-white transition-colors duration-300 group"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <img
              src="https://c.animaapp.com/mnitwnjzSfY2Kl/assets/icon-6.svg"
              alt=""
              className="w-5 h-5 group-hover:invert transition-[filter] duration-300"
            />
            Get In Touch
          </motion.a>
          <p className="text-sm font-light font-dm_sans text-black/50 max-w-xs leading-relaxed">
            Reach out to start a conversation. We transform thoughtful ideas into spaces that inspire.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export const ContactSection = () => {
  const isMobile = useIsMobile();
  return isMobile ? <MobileContact /> : <DesktopContact />;
};
