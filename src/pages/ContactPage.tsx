import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { CustomCursor } from "@/components/CustomCursor";
import { PageWrapper } from "@/components/PageWrapper";
import { useInView } from "@/hooks/useInView";

const EASE = [0.33, 1, 0.68, 1] as const;

const LOCATIONS = [
  { region: "Germany", address1: "Leipziger Pl. 12, 10117", address2: "Berlin, Germany", phone: "1 (416) 903.8897" },
  { region: "Sweden", address1: "Östermalm 14, 114 39", address2: "Stockholm, Sweden", phone: "1 (416) 903.8897" },
];

export const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const { ref: formRef, inView: formInView } = useInView({ threshold: 0.05 });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="text-black text-xs font-normal bg-orange-50 font-sans_serif cursor-none-desktop">
      <CustomCursor />
      <PageWrapper>
        <div className="flex flex-col min-h-screen bg-orange-50">
          <Navbar />

          {/* ── HERO ── */}
          <header className="relative flex flex-col justify-end h-[50vh] md:h-[65vh] w-full overflow-hidden p-[30px]">
            <div className="absolute inset-0 z-0">
              <img
                src="https://framerusercontent.com/images/C5wWU0Nj6lv1KokCS11q95R2U.jpeg"
                alt=""
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/45 z-[1]" />
            <div className="relative z-[2] flex flex-col gap-y-3">
              <motion.p
                className="text-white/60 text-sm font-light tracking-widest uppercase"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              >
                Ready To Transform Your Spaces?
              </motion.p>
              <div className="overflow-hidden">
                <motion.h1
                  className="text-white font-light leading-[1.05]"
                  style={{ fontSize: "clamp(3rem, 8vw, 6rem)" }}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  Contact
                </motion.h1>
              </div>
            </div>
          </header>

          {/* ── GET IN TOUCH + FORM ── */}
          <section
            ref={formRef as React.RefObject<HTMLElement>}
            className="w-full bg-orange-50 px-5 md:px-[30px] py-[80px] md:py-[100px]"
          >
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              {/* LEFT: contact info */}
              <motion.div
                className="flex flex-col gap-12"
                initial={{ opacity: 0, y: 30 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <div>
                  <h2
                    className="font-light font-dm_sans leading-[1.1] mb-8"
                    style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)" }}
                  >
                    Get In Touch
                  </h2>
                  <p className="text-black/60 text-base font-light font-dm_sans leading-relaxed max-w-sm">
                    We'd love to hear from you. Whether you have a project in mind, a question about our work, or just want to say hello — reach out.
                  </p>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-black/40 text-xs font-light font-dm_sans uppercase tracking-widest">Email</p>
                  <a href="mailto:studio@sanzur.com" className="text-black text-lg font-light font-dm_sans no-underline hover:opacity-60 transition-opacity">
                    studio@sanzur.com
                  </a>
                </div>

                <div className="flex flex-col gap-2">
                  <p className="text-black/40 text-xs font-light font-dm_sans uppercase tracking-widest">Phone</p>
                  <a href="tel:+4987862018694" className="text-black text-lg font-light font-dm_sans no-underline hover:opacity-60 transition-opacity">
                    +49 8786 2018 694
                  </a>
                </div>

                <div className="flex flex-col gap-3">
                  <p className="text-black/40 text-xs font-light font-dm_sans uppercase tracking-widest">Socials</p>
                  <div className="flex flex-col gap-2">
                    {[
                      { name: "LinkedIn", href: "https://linkedin.com" },
                      { name: "Instagram", href: "https://instagram.com/visuvium" },
                      { name: "X", href: "https://x.com/visuvium" },
                    ].map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black text-base font-light font-dm_sans no-underline hover:opacity-60 transition-opacity w-fit"
                        whileHover={{ x: 4 }}
                      >
                        {social.name}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* RIGHT: form */}
              <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col gap-8"
                initial={{ opacity: 0, y: 30 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
              >
                {[
                  { label: "Name", type: "text", key: "name", placeholder: "Your full name" },
                  { label: "Email", type: "email", key: "email", placeholder: "your@email.com" },
                  { label: "Subject", type: "text", key: "subject", placeholder: "What is this about?" },
                ].map((field) => (
                  <div key={field.key} className="flex flex-col gap-2 border-b border-black/20 pb-4">
                    <label className="text-black/40 text-xs font-light font-dm_sans uppercase tracking-widest">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      className="bg-transparent text-black text-lg font-light font-dm_sans outline-none placeholder:text-black/30"
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-2 border-b border-black/20 pb-4">
                  <label className="text-black/40 text-xs font-light font-dm_sans uppercase tracking-widest">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-transparent text-black text-lg font-light font-dm_sans outline-none placeholder:text-black/30 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="group self-start flex items-center gap-3 text-black text-lg font-light font-dm_sans border border-black px-8 py-4 hover:bg-black hover:text-white transition-colors duration-300"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <img
                    src="https://c.animaapp.com/mnitwnjzSfY2Kl/assets/icon-1.svg"
                    alt=""
                    className="w-5 h-[18px] group-hover:invert transition-[filter] duration-300"
                  />
                  Submit
                </motion.button>
              </motion.form>
            </div>
          </section>

          {/* ── LOCATIONS ── */}
          <section className="w-full bg-[#6b6560] px-5 md:px-[30px] py-[60px]">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              {LOCATIONS.map((loc, i) => (
                <motion.div
                  key={loc.region}
                  className="flex flex-col gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.1, ease: EASE }}
                >
                  <p className="text-white font-light font-dm_sans text-base">{loc.region}</p>
                  <div>
                    <p className="text-white/70 text-[13px] font-light font-dm_sans leading-[1.7]">{loc.address1}</p>
                    <p className="text-white/70 text-[13px] font-light font-dm_sans leading-[1.7]">{loc.address2}</p>
                    <p className="text-white/70 text-[13px] font-light font-dm_sans leading-[1.7]">{loc.phone}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </PageWrapper>
    </div>
  );
};
