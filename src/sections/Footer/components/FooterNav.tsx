import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const LOCATIONS = [
  {
    region: "Germany",
    address1: "Leipziger Pl. 12, 10117",
    address2: "Berlin, Germany",
    phone: "1 (416) 903.8897",
  },
  {
    region: "Sweden",
    address1: "Östermalm 14, 114 39",
    address2: "Stockholm, Sweden",
    phone: "1 (416) 903.8897",
  },
];

const EASE = [0.33, 1, 0.68, 1] as const;

export const FooterNav = () => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-6"
    >
      {/* Nav links — stagger reveal */}
      <div className="flex flex-col gap-1">
        {NAV_LINKS.map((link, i) => (
          <motion.a
            key={link.label}
            href={link.href}
            className="text-white/40 hover:text-white font-light font-dm_sans leading-[1.2] no-underline w-fit transition-colors duration-200 group relative overflow-hidden"
            style={{ fontSize: "clamp(1.8rem, 5vw, 4rem)" }}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE, delay: 0.05 + i * 0.08 }}
            whileHover={{ x: 8 }}
          >
            {link.label}
          </motion.a>
        ))}
      </div>

      {/* Locations */}
      <motion.div
        className="flex flex-row md:flex-col gap-8 md:gap-10 md:items-end md:justify-end"
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65, ease: EASE, delay: 0.3 }}
      >
        {LOCATIONS.map((loc) => (
          <div key={loc.region} className="flex flex-col gap-2">
            <p className="text-white font-light font-dm_sans text-sm md:text-base">{loc.region}</p>
            <div>
              <p className="text-white/60 text-[13px] font-light font-dm_sans leading-[1.6]">{loc.address1}</p>
              <p className="text-white/60 text-[13px] font-light font-dm_sans leading-[1.6]">{loc.address2}</p>
              <p className="text-white/60 text-[13px] font-light font-dm_sans leading-[1.6]">{loc.phone}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
