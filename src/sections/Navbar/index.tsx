import { useState } from "react";
import { NavbarLogo } from "@/sections/Navbar/components/NavbarLogo";
import { NavbarLinks } from "@/sections/Navbar/components/NavbarLinks";
import { NavbarFooter } from "@/sections/Navbar/components/NavbarFooter";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Fixed top bar */}
      <div className="fixed box-border caret-transparent shrink-0 z-[50] top-0 inset-x-0">
        <nav className="relative flex items-center justify-between w-full px-[30px] py-[20px] md:py-[30px]">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-[10px] no-underline z-[2]"
          >
            <span className="text-white text-[18px] md:text-[21px] font-light font-dm_sans leading-[25.2px] whitespace-nowrap">
              SANZUR
            </span>
            <div className="relative h-[17px] w-[17px] overflow-hidden shrink-0">
              <div className="absolute bg-white left-[calc(52.9412%_-_0.5px)] inset-y-0 w-px overflow-hidden" />
              <div className="absolute bg-white rotate-90 left-[calc(52.9412%_-_0.5px)] inset-y-0 w-px overflow-hidden" />
            </div>
          </a>

          {/* Right side: Menu button */}
          <div className="flex items-center gap-5 z-[2]">
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="flex items-center gap-[10px] cursor-pointer bg-transparent border-0 p-0"
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
              <div className="relative h-[17px] w-[17px] overflow-hidden shrink-0">
                <div className="absolute bg-white left-[calc(52.9412%_-_0.5px)] inset-y-0 w-px overflow-hidden" />
                <div
                  className="absolute bg-white left-[calc(52.9412%_-_0.5px)] inset-y-0 w-px overflow-hidden transition-transform duration-300"
                  style={{ transform: isOpen ? "rotate(0deg)" : "rotate(90deg)" }}
                />
              </div>
            </button>
          </div>
        </nav>
      </div>

      {/* Full-screen dropdown overlay */}
      <div
        className="fixed inset-0 z-[40] bg-[#6b6560] flex flex-col justify-between transition-all duration-500 overflow-hidden"
        style={{
          clipPath: isOpen ? "inset(0% 0% 0% 0%)" : "inset(0% 0% 100% 0%)",
          pointerEvents: isOpen ? "auto" : "none",
        }}
      >
        {/* nav links */}
        <div className="flex flex-col justify-start pt-[180px] px-[30px] gap-0">
          {[
            { label: "About", href: "/about" },
            { label: "Projects", href: "/projects" },
            { label: "News", href: "/news" },
            { label: "Contact", href: "/contact" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-[10px] no-underline h-[78px] group"
            >
              <span className="text-white/50 text-[48px] md:text-[64px] font-light font-dm_sans leading-[1.2] whitespace-nowrap group-hover:text-white transition-colors duration-200">
                {link.label}
              </span>
            </a>
          ))}
        </div>

        {/* footer row */}
        <div className="px-[30px] pb-[30px] flex flex-col md:flex-row items-start md:items-end justify-between gap-8">
          {/* locations */}
          <div className="flex gap-10 md:gap-16">
            <div className="flex flex-col gap-3">
              <p className="text-white font-light font-dm_sans text-base leading-[19.2px]">Germany</p>
              <div>
                <p className="text-white text-[13px] font-light font-dm_sans leading-[15.6px]">Leipziger Pl. 12, 10117</p>
                <p className="text-white text-[13px] font-light font-dm_sans leading-[15.6px]">Berlin, Germany</p>
                <p className="text-white text-[13px] font-light font-dm_sans leading-[15.6px]">1 (416) 903.8897</p>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <p className="text-white font-light font-dm_sans text-base leading-[19.2px]">Sweden</p>
              <div>
                <p className="text-white text-[13px] font-light font-dm_sans leading-[15.6px]">Leipziger Pl. 12, 10117</p>
                <p className="text-white text-[13px] font-light font-dm_sans leading-[15.6px]">Berlin, Germany</p>
                <p className="text-white text-[13px] font-light font-dm_sans leading-[15.6px]">1 (416) 903.8897</p>
              </div>
            </div>
          </div>
                    {/* newsletter */}
          <div className="flex flex-col gap-3 md:items-end">
            <p className="text-white font-light font-dm_sans text-base">Subscribe to Our Newsletter</p>
            <div className="flex items-center gap-4 border-b border-white pb-2 w-64">
              <input
                type="email"
                placeholder="email"
                className="bg-transparent text-white text-lg font-light font-dm_sans leading-[21.6px] flex-1 outline-none placeholder:text-white/50"
              />
              <button className="flex items-center gap-2 text-white text-[21px] font-light font-dm_sans whitespace-nowrap hover:opacity-70 transition-opacity">
                <img
                  src="https://c.animaapp.com/mnitwnjzSfY2Kl/assets/icon-1.svg"
                  alt="submit"
                  className="w-5 h-[18px]"
                />
                Submit
              </button>
            </div>
          </div>
          {/* copyright */}
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between w-full md:w-auto gap-2">
            <p className="text-white font-light font-dm_sans text-[13px] leading-[15.6px] md:hidden">
              All Rights Reserved ©2026 Sanzur
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
