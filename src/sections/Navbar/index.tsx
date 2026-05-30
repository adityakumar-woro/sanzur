import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Services", href: "/services" },
  { label: "About Us", href: "/about" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const EASE = [0.76, 0, 0.24, 1] as const;

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      {/* Top bar */}
      <motion.div
        className="fixed z-[50] top-0 inset-x-0 transition-colors duration-400"
        animate={{ backgroundColor: scrolled && !isOpen ? "rgba(18,17,15,0.72)" : "transparent" }}
        style={{ backdropFilter: scrolled && !isOpen ? "blur(16px)" : "none" }}
      >
        <nav className="relative flex items-center justify-between w-full px-5 md:px-8 py-5">
          <motion.a
            href="/"
            className="flex items-center gap-[10px] no-underline z-[2]"
          >
            <span className="text-white text-[15px] md:text-[18px] font-light font-dm_sans uppercase tracking-[0.18em] leading-none whitespace-nowrap">
              SANZUR
            </span>
            <div className="h-px w-10 bg-white/55" />
          </motion.a>

          <div className="hidden lg:flex items-center gap-8 z-[2]">
            {NAV_LINKS.slice(1).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-white/72 text-[12px] font-dm_sans uppercase tracking-[0.16em] no-underline"
              >
                {link.label}
              </a>
            ))}
          </div>



          <button
            onClick={() => setIsOpen((v) => !v)}
            className="lg:hidden flex items-center gap-[10px] cursor-pointer bg-transparent border-0 p-2 -mr-2 touch-manipulation z-[2]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <div className="h-[18px] overflow-hidden flex flex-col">
              <span
                className="text-white text-[13px] font-light font-dm_sans uppercase tracking-[0.18em] leading-[18px] whitespace-nowrap transition-transform duration-300"
                style={{ transform: isOpen ? "translateY(-100%)" : "translateY(0)" }}
              >
                Menu
              </span>
              <span
                className="text-white text-[13px] font-light font-dm_sans uppercase tracking-[0.18em] leading-[18px] whitespace-nowrap transition-transform duration-300"
                style={{ transform: isOpen ? "translateY(-100%)" : "translateY(0)" }}
              >
                Close
              </span>
            </div>
            <div className="relative h-[17px] w-[17px] overflow-hidden shrink-0">
              <div className="absolute bg-white left-[calc(52.9412%_-_0.5px)] inset-y-0 w-px" />
              <div
                className="absolute bg-white left-[calc(52.9412%_-_0.5px)] inset-y-0 w-px transition-transform duration-300"
                style={{ transform: isOpen ? "rotate(0deg)" : "rotate(90deg)" }}
              />
            </div>
          </button>
        </nav>
      </motion.div>

      {/* Full-screen overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="menu"
            className="fixed inset-0 z-[40] bg-[#12110f] flex flex-col justify-between overflow-hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.65, ease: EASE }}
          >
            <div className="flex flex-col justify-start pt-[110px] md:pt-[150px] px-5 md:px-8 gap-0">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-[10px] no-underline h-[56px] md:h-[76px] touch-manipulation overflow-hidden"
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.55, ease: EASE, delay: 0.15 + i * 0.07 }}
                >
                  <span className="text-white/70 text-[38px] md:text-[64px] font-light font-dm_sans leading-[1.2] whitespace-nowrap">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>

            <motion.div
              className="px-5 md:px-8 pb-6 md:pb-8 flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8 border-t border-white/10 pt-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="max-w-sm">
                <p className="text-white/90 font-light font-dm_sans text-sm md:text-base">Luxury interiors, architecture, and turnkey execution for homes, retail, and hospitality.</p>
              </div>
              <div className="flex flex-col gap-2 md:items-end">
                <a href="mailto:studio@sanzur.com" className="text-white/70 font-dm_sans text-sm no-underline">studio@sanzur.com</a>
                <p className="text-white/40 font-dm_sans text-[12px]">All Rights Reserved ©2026 Sanzur</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
