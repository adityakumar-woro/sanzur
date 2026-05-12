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
    <div className="text-black bg-orange-50 font-sans_serif cursor-none-desktop">
      <CustomCursor />
      <PageWrapper>
        <div className="flex flex-col min-h-screen bg-orange-50">
          <Navbar />

          {/* ==================== SECTION 1: HERO + GET IN TOUCH ==================== */}
          <header className="relative flex items-end h-[55vh] md:h-[65vh] lg:h-[70vh] w-full overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src="https://framerusercontent.com/images/C5wWU0Nj6lv1KokCS11q95R2U.jpeg"
                alt=""
                className="w-full h-full object-cover scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-black/50 z-[1]" />

            <div className="relative z-[2] max-w-[1680px] mx-auto w-full px-5 md:px-[30px] pb-12 md:pb-20">
              <motion.p
                className="text-white/70 text-sm font-light tracking-widest uppercase mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: EASE }}
              >
                Ready to transform your space?
              </motion.p>

              <motion.h1
                className="text-white font-light leading-[1.05] mb-6"
                style={{ fontSize: "clamp(3.2rem, 8vw, 6.8rem)" }}
                initial={{ y: "100%", opacity: 0 }}
                animate={{ y: "0%", opacity: 1 }}
                transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              >
                IntoReality
              </motion.h1>

              <div className="max-w-md">
                <h2 className="text-white text-2xl md:text-3xl font-light mb-4">Get In Touch</h2>
                <p className="text-white/80 text-[15px] md:text-base leading-relaxed">
                  Reach out to start a conversation. We transform thoughtful ideas into spaces that inspire.
                </p>
              </div>
            </div>
          </header>

          {/* Form Section (still part of first major block) */}
          <section
            ref={formRef as React.RefObject<HTMLElement>}
            className="w-full bg-orange-50 px-5 md:px-[30px] py-20 md:py-28 pb-32 md:pb-40"
          >
            <div className="max-w-[1680px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
              {/* Left - Contact Details */}
              <motion.div
                className="flex flex-col gap-14"
                initial={{ opacity: 0, y: 30 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <div className="space-y-10">
                  <div>
                    <p className="text-black/40 text-xs uppercase tracking-widest mb-2">Email</p>
                    <a href="mailto:studio@sanzur.com" className="text-black text-xl font-light hover:opacity-70">
                      studio@sanzur.com
                    </a>
                  </div>

                  <div>
                    <p className="text-black/40 text-xs uppercase tracking-widest mb-2">Phone</p>
                    <a href="tel:+4987862018694" className="text-black text-xl font-light hover:opacity-70">
                      +49 8786 2018 694
                    </a>
                  </div>

                  <div>
                    <p className="text-black/40 text-xs uppercase tracking-widest mb-3">Socials</p>
                    <div className="flex flex-col gap-2.5">
                      {[
                        { name: "LinkedIn", href: "https://linkedin.com" },
                        { name: "Instagram", href: "https://instagram.com/visuvium" },
                        { name: "X", href: "https://x.com/visuvium" },
                      ].map((social) => (
                        <motion.a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          className="text-black text-lg font-light w-fit hover:opacity-70"
                          whileHover={{ x: 4 }}
                        >
                          {social.name}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right - Form */}
              <motion.form
                onSubmit={handleSubmit}
                className="flex flex-col gap-10"
                initial={{ opacity: 0, y: 30 }}
                animate={formInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
              >
                {/* Form fields remain same */}
                {[
                  { label: "Name", type: "text", key: "name", placeholder: "Your full name" },
                  { label: "Email", type: "email", key: "email", placeholder: "your@email.com" },
                  { label: "Subject", type: "text", key: "subject", placeholder: "What is this about?" },
                ].map((field) => (
                  <div key={field.key} className="border-b border-black/20 pb-6">
                    <label className="text-black/40 text-xs font-light uppercase tracking-widest block mb-2">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => setFormData({ ...formData, [field.key]: e.target.value })}
                      className="bg-transparent w-full text-black text-[17px] md:text-lg font-light outline-none placeholder:text-black/40"
                    />
                  </div>
                ))}

                <div className="border-b border-black/20 pb-6">
                  <label className="text-black/40 text-xs font-light uppercase tracking-widest block mb-2">
                    Message
                  </label>
                  <textarea
                    rows={6}
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-transparent w-full text-black text-[17px] md:text-lg font-light outline-none placeholder:text-black/40 resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="group self-start flex items-center gap-3 text-lg font-light font-dm_sans border border-black px-10 py-4 hover:bg-black hover:text-white transition-all mt-6"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </motion.form>
            </div>
          </section>

          {/* ==================== SECTION 2: LOCATIONS ==================== */}
          <section className="w-full bg-[#6b6560] px-5 md:px-[30px] py-20 md:py-24">
            <div className="max-w-[1680px] mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
                {LOCATIONS.map((loc, i) => (
                  <motion.div
                    key={loc.region}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: i * 0.1 }}
                  >
                    <p className="text-white font-light text-2xl mb-6">{loc.region}</p>
                    <div className="text-white/70 text-[15px] leading-relaxed space-y-1">
                      <p>{loc.address1}</p>
                      <p>{loc.address2}</p>
                      <p className="pt-4">{loc.phone}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </PageWrapper>
    </div>
  );
};