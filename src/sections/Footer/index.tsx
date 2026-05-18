import { motion } from "framer-motion";

const FOOTER_LINKS = [
  { label: "Projects", href: "/projects" },
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

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0f0e0c] text-white px-5 md:px-8 pt-16 md:pt-24 pb-7 border-t border-white/10">
      <motion.div
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#c9ad73]/70 to-transparent"
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.33, 1, 0.68, 1] }}
      />
      <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 md:gap-16">
        <motion.div initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }}>
          <p className="text-[#c9ad73] text-[11px] uppercase tracking-[0.24em] mb-5">Sanzur Studio</p>
          <h2 className="font-newsreader font-light leading-[0.94] max-w-5xl" style={{ fontSize: "clamp(3.8rem, 12vw, 11rem)" }}>
            Let the next space feel inevitable.
          </h2>
          <a
            href="/contact"
            className="mt-9 inline-flex rounded-full bg-[#ebe5d8] px-7 py-4 text-[#12110f] text-sm uppercase tracking-[0.16em] no-underline hover:bg-white transition-colors"
          >
            Start a project
          </a>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 lg:pt-4">
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.05 }}>
            <p className="text-white/40 text-[11px] uppercase tracking-[0.22em] mb-5">Explore</p>
            <div className="flex flex-col gap-3">
              {FOOTER_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-white/70 hover:text-[#c9ad73] no-underline text-sm transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.12 }}>
            <p className="text-white/40 text-[11px] uppercase tracking-[0.22em] mb-5">Contact</p>
            <div className="flex flex-col gap-3 text-sm text-white/70">
              <a href="mailto:studio@sanzur.com" className="hover:text-[#c9ad73] no-underline transition-colors">studio@sanzur.com</a>
              <a href="tel:+919876543210" className="hover:text-[#c9ad73] no-underline transition-colors">+91 98765 43210</a>
              <span>Private commissions across India</span>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.18 }}>
            <p className="text-white/40 text-[11px] uppercase tracking-[0.22em] mb-5">Legal</p>
            <div className="flex flex-col gap-3">
              {LEGAL_LINKS.map((link) => (
                <a key={link.href} href={link.href} className="text-white/70 hover:text-[#c9ad73] no-underline text-sm transition-colors">
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="mt-14 md:mt-20 pt-6 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4 text-[12px] text-white/40">
        <p>© 2026 Sanzur. All rights reserved.</p>
        <p>Interior Architecture · Luxury Residences · Retail · Hospitality</p>
      </div>
    </footer>
  );
};
