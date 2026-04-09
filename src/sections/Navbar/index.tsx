import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Blogs", href: "/blogs" },
  { label: "Contact", href: "/contact" },
];

const LOCATIONS = [
  { region: "Germany", address1: "Leipziger Pl. 12, 10117", address2: "Berlin, Germany", phone: "1 (416) 903.8897" },
  { region: "Sweden",  address1: "Östermalm 14, 114 39",    address2: "Stockholm, Sweden", phone: "1 (416) 903.8897" },
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
        animate={{ backgroundColor: scrolled && !isOpen ? "rgba(0,0,0,0.25)" : "transparent" }}
        style={{ backdropFilter: scrolled && !isOpen ? "blur(12px)" : "none" }}
      >
        <nav className="relative flex items-center justify-between w-full px-5 md:px-[30px] py-5 md:py-[30px]">
          {/* Logo */}
          <motion.a
            href="/"
            className="flex items-center gap-[10px] no-underline z-[2]"
            whileHover={{ opacity: 0.7 }}
            transition={{ duration: 0.2 }}
          >
            <span className="text-white text-[18px] md:text-[21px] font-light font-dm_sans leading-[25.2px] whitespace-nowrap">
              SANZUR
            </span>
            <div className="relative h-[17px] w-[17px] overflow-hidden shrink-0">
              <div className="absolute bg-white left-[calc(52.9412%_-_0.5px)] inset-y-0 w-px" />
              <div className="absolute bg-white rotate-90 left-[calc(52.9412%_-_0.5px)] inset-y-0 w-px" />
            </div>
          </motion.a>

          {/* Menu button */}
          <button
            onClick={() => setIsOpen((v) => !v)}
            className="flex items-center gap-[10px] cursor-pointer bg-transparent border-0 p-2 -mr-2 touch-manipulation z-[2]"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <div className="h-[23px] overflow-hidden flex flex-col">
              <span
                className="text-white text-[18px] md:text-[21px] font-light font-dm_sans leading-[25.2px] whitespace-nowrap transition-transform duration-300"
                style={{ transform: isOpen ? "translateY(-100%)" : "translateY(0)" }}
              >
                MENU
              </span>
              <span
                className="text-white text-[18px] md:text-[21px] font-light font-dm_sans leading-[25.2px] whitespace-nowrap transition-transform duration-300"
                style={{ transform: isOpen ? "translateY(-100%)" : "translateY(0)" }}
              >
                CLOSE
              </span>
            </div>
            {/* Plus/cross icon */}
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
            className="fixed inset-0 z-[40] bg-[#6b6560] flex flex-col justify-between overflow-hidden"
            initial={{ clipPath: "inset(0% 0% 100% 0%)" }}
            animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
            exit={{ clipPath: "inset(0% 0% 100% 0%)" }}
            transition={{ duration: 0.65, ease: EASE }}
          >
            {/* Nav links */}
            <div className="flex flex-col justify-start pt-[120px] md:pt-[180px] px-5 md:px-[30px] gap-0">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex items-center gap-[10px] no-underline h-[60px] md:h-[78px] group touch-manipulation overflow-hidden"
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.55, ease: EASE, delay: 0.15 + i * 0.07 }}
                  whileHover={{ x: 10 }}
                >
                  <span className="text-white/50 text-[38px] md:text-[64px] font-light font-dm_sans leading-[1.2] whitespace-nowrap group-hover:text-white transition-colors duration-200">
                    {link.label}
                  </span>
                </motion.a>
              ))}
            </div>

            {/* Footer row */}
            <motion.div
              className="px-5 md:px-[30px] pb-6 md:pb-[30px] flex flex-col md:flex-row items-start md:items-end justify-between gap-6 md:gap-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {/* Locations */}
              <div className="flex gap-8 md:gap-16">
                {LOCATIONS.map((loc) => (
                  <div key={loc.region} className="flex flex-col gap-2">
                    <p className="text-white font-light font-dm_sans text-sm md:text-base">{loc.region}</p>
                    <div>
                      <p className="text-white/60 text-[12px] md:text-[13px] font-light font-dm_sans leading-[1.6]">{loc.address1}</p>
                      <p className="text-white/60 text-[12px] md:text-[13px] font-light font-dm_sans leading-[1.6]">{loc.address2}</p>
                      <p className="text-white/60 text-[12px] md:text-[13px] font-light font-dm_sans leading-[1.6]">{loc.phone}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter */}
              <div className="flex flex-col gap-3 w-full md:w-auto md:items-end">
                <p className="text-white font-light font-dm_sans text-sm md:text-base">Subscribe to Our Newsletter</p>
                <div className="flex items-center gap-4 border-b border-white/40 pb-2 w-full md:w-64">
                  <input
                    type="email"
                    placeholder="email"
                    className="bg-transparent text-white text-base font-light font-dm_sans flex-1 outline-none placeholder:text-white/30"
                  />
                  <button className="flex items-center gap-2 text-white text-base font-light font-dm_sans whitespace-nowrap hover:opacity-70 transition-opacity touch-manipulation">
                    <img src="https://c.animaapp.com/mnitwnjzSfY2Kl/assets/icon-1.svg" alt="submit" className="w-4 h-4" />
                    Submit
                  </button>
                </div>
              </div>

              {/* Copyright — mobile only */}
              <p className="text-white/40 font-light font-dm_sans text-[12px] leading-[15.6px] md:hidden">
                All Rights Reserved ©2026 Sanzur
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
