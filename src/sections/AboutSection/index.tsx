import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";
import { SplitText } from "@/components/SplitText";

const EASE = [0.33, 1, 0.68, 1] as const;

export const AboutSection = () => {
  const { ref: sectionRef, inView } = useInView({ threshold: 0.1 });
  const { ref: imageRef, inView: imageInView } = useInView({ threshold: 0.15 });

  return (
    <section
      id="about"
      className="relative bg-[#f5f0e8] z-20 px-5 md:px-[30px] py-20 md:py-28 border-b border-black/10 overflow-hidden"
    >
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className="relative z-10 w-full"
      >
        {/* ── Header: label + "View About" link ── */}
        <motion.div
          className="flex items-center justify-between mb-6 md:mb-8"
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: EASE }}
        >
          <p className="font-newsreader italic text-xl md:text-2xl text-black/70">About Us</p>
          <motion.a
            href="/about"
            className="hidden md:inline-flex items-center gap-2 text-sm font-light font-dm_sans text-black/50 hover:text-black no-underline transition-colors duration-200"
            whileHover={{ x: 4 }}
          >
            <span>→</span>
            <span className="border-b border-black/20 hover:border-black transition-colors duration-200">
              Learn More
            </span>
          </motion.a>
        </motion.div>

        {/* ── Big heading — left-aligned, spans ~65% on desktop ── */}
        <div className="mb-14 md:mb-20 max-w-full md:max-w-[65%]">
          <SplitText
            text="Where Spaces Breathe, and Design Resonates"
            as="h2"
            className="font-dm_sans font-light text-black leading-[1.1]"
            style={{ fontSize: "clamp(2.2rem, 4.5vw, 4rem)" }}
            baseDelay={0.1}
            stagger={0.04}
          />
        </div>

        {/* ── Content row: image left + text/stats/CTA right ── */}
        <div className="flex flex-col md:flex-row md:items-end gap-10 md:gap-16">

          {/* Image with clip-path reveal */}
          <div
            ref={imageRef as React.RefObject<HTMLDivElement>}
            className="w-full md:w-[48%] overflow-hidden"
            style={{
              clipPath: imageInView ? "inset(0 0 0% 0)" : "inset(0 0 100% 0)",
              transition: "clip-path 1s cubic-bezier(0.76,0,0.24,1) 0.1s",
            }}
          >
            <motion.div
              className="w-full overflow-hidden"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.img
                src="https://c.animaapp.com/mnosma4ux0dL0l/assets/ReJwRbXJwTFxetSzciMpxrBfK8A.jpeg"
                alt="Interior space"
                className="w-full h-[360px] md:h-[480px] object-cover"
                initial={{ scale: 1.15 }}
                animate={imageInView ? { scale: 1 } : {}}
                transition={{ duration: 1.4, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
              />
            </motion.div>
          </div>

          {/* Text + Stats + CTA */}
          <motion.div
            className="w-full md:w-[45%] flex flex-col justify-between gap-10"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.25 }}
          >
            {/* Description */}
            <div className="flex flex-col gap-5">
              <p className="font-dm_sans font-light text-sm md:text-base leading-relaxed text-black/70">
                We are a passionate interior design practice dedicated to crafting timeless, client-centric spaces that blend functionality with refined aesthetics. With over a decade of experience across residential and commercial projects,
              </p>
              <p className="font-dm_sans font-light text-sm md:text-base leading-relaxed text-black/70">
                we transform ideas into immersive environments where thoughtful planning, innovation, and detail come together to elevate everyday living.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex gap-8 md:gap-12">
              {[
                { num: "10+", label: "Years Experience" },
                { num: "80+", label: "Projects Delivered" },
                { num: "3", label: "Award Recognitions" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex flex-col gap-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.4 + i * 0.1 }}
                >
                  <span className="font-dm_sans font-light text-2xl md:text-3xl text-black">
                    {stat.num}
                  </span>
                  <span className="font-dm_sans font-light text-xs text-black/50 uppercase tracking-widest">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <AnimatedLink label="Meet Our Team" href="/about" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const AnimatedLink = ({ label, href }: { label: string; href: string }) => (
  <motion.a
    href={href}
    className="inline-flex items-center gap-2 group cursor-pointer w-fit no-underline"
    whileHover={{ x: 5 }}
    transition={{ duration: 0.2 }}
  >
    <motion.span
      className="font-dm_sans font-light text-sm md:text-base text-black"
      animate={{ x: [0, 4, 0] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut", delay: 3 }}
    >
      →
    </motion.span>
    <span className="font-dm_sans font-light text-sm md:text-base text-black border-b border-black/30 group-hover:border-black transition-colors duration-200">
      {label}
    </span>
  </motion.a>
);
