import { motion } from "framer-motion";
import { images, studio } from "@/data/studio";

const EASE = [0.33, 1, 0.68, 1] as const;

const FOOTER_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Archive", href: "/archive" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blogs", href: "/blogs" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

const LEGAL_LINKS = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
];

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/" },
  { label: "Pinterest", href: "https://pinterest.com/" },
  { label: "LinkedIn", href: "https://linkedin.com/" },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0b0a08] px-5 pb-7 pt-20 text-white md:px-8 md:pt-28">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <img src={images.editorialFive} alt="" className="absolute inset-0 h-full w-full object-cover opacity-[0.12] saturate-[0.65]" loading="lazy" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,#0b0a08_0%,rgba(11,10,8,0.88)_45%,rgba(11,10,8,0.62)),radial-gradient(circle_at_78%_28%,rgba(201,173,115,0.24),transparent_34%)]" />
        <motion.div
          className="absolute left-[-18%] top-[-24%] h-[40rem] w-[40rem] rounded-full bg-[#c9ad73]/16 blur-3xl"
          animate={{ x: [0, 48, 0], y: [0, 28, 0], scale: [1, 1.12, 1] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[-28%] right-[-14%] h-[34rem] w-[34rem] rounded-full bg-[#425043]/18 blur-3xl"
          animate={{ x: [0, -36, 0], y: [0, -28, 0], scale: [1, 1.08, 1] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="absolute inset-0 opacity-[0.055]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.55) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.55) 1px, transparent 1px)",
            backgroundSize: "92px 92px",
          }}
        />
      </div>

      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9ad73]/80 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.15, ease: EASE }}
      />

      <div className="relative z-10 grid grid-cols-1 gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 34 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.78, ease: EASE }}
        >
          <p className="mb-5 text-[10px] uppercase tracking-[0.28em] text-[#c9ad73]">Sanzur Studio</p>
          <h2
            className="max-w-5xl font-newsreader font-light leading-[0.88] tracking-normal"
            style={{ fontSize: "clamp(3.6rem, 10vw, 9.5rem)" }}
          >
            Let the next space feel inevitable.
          </h2>

          <div className="mt-10 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-[0.75fr_1fr]">
            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.35, ease: EASE }} className="border border-white/12 bg-white/[0.055] p-5 backdrop-blur-xl">
              <p className="mb-8 text-[10px] uppercase tracking-[0.22em] text-white/42">Brand Story</p>
              <p className="text-sm leading-relaxed text-white/66">
                We create interiors that carry restraint, warmth, and memory. Every project is shaped through atmosphere, planning, material intelligence, and final styling.
              </p>
            </motion.div>
            <motion.div whileHover={{ y: -6 }} transition={{ duration: 0.35, ease: EASE }} className="relative overflow-hidden border border-[#c9ad73]/22 bg-[#c9ad73]/10 p-5 backdrop-blur-xl">
              <motion.div className="absolute -right-8 -top-8 h-28 w-28 rounded-full border border-[#c9ad73]/30" animate={{ rotate: 360 }} transition={{ duration: 18, repeat: Infinity, ease: "linear" }} />
              <p className="mb-8 text-[10px] uppercase tracking-[0.22em] text-[#c9ad73]">Start Here</p>
              <p className="mb-6 text-base leading-relaxed text-white/78">
                Share a site, a brief, or a half-formed idea. The studio will translate it into a complete spatial direction.
              </p>
              <a
                href="/contact"
                className="inline-flex bg-[#e9e1d1] px-6 py-4 text-[11px] uppercase tracking-[0.18em] text-[#12110f] no-underline transition hover:bg-[#c9ad73]"
              >
                Start a project
              </a>
            </motion.div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:pt-3">
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.68, ease: EASE, delay: 0.04 }}
          >
            <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-white/38">Explore</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {FOOTER_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="group relative w-fit text-sm text-white/70 no-underline transition hover:text-[#c9ad73]">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#c9ad73] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.68, ease: EASE, delay: 0.1 }}
          >
            <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-white/38">Contact</p>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a href={`mailto:${studio.email}`} className="no-underline">
                {studio.email}
              </a>
              <a href={`tel:${studio.phone.replace(/\s/g, "")}`} className="no-underline">
                {studio.phone}
              </a>
              <span>{studio.address}</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.68, ease: EASE, delay: 0.16 }}
          >
            <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-white/38">Social</p>
            <div className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((link) => (
                <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="group relative w-fit text-sm text-white/70 no-underline transition hover:text-[#c9ad73]">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#c9ad73] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.68, ease: EASE, delay: 0.22 }}
          >
            <p className="mb-5 text-[10px] uppercase tracking-[0.22em] text-white/38">Legal</p>
            <div className="flex flex-col gap-3">
              {LEGAL_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="group relative w-fit text-sm text-white/70 no-underline transition hover:text-[#c9ad73]">
                  {link.label}
                  <span className="absolute -bottom-1 left-0 h-px w-0 bg-[#c9ad73] transition-all duration-300 group-hover:w-full" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative z-10 mt-16 border-t border-white/10 pt-6 md:mt-24">
        <div className="flex flex-col justify-between gap-4 text-[12px] text-white/38 md:flex-row">
          <p>© 2026 Sanzur. All rights reserved.</p>
          <p>Interior Architecture - Luxury Residences - Retail - Hospitality</p>
        </div>
      </div>
    </footer>
  );
};
