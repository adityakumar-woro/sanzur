import { useState } from "react";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";

export const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Add your form submission logic here later
    console.log("Form submitted:", formData);
  };

  return (
    <div className="text-black text-xs not-italic normal-nums font-normal accent-auto bg-orange-50 box-border caret-transparent block tracking-[normal] leading-[normal] list-outside list-disc pointer-events-auto text-start indent-[0px] normal-case visible border-separate font-sans_serif">
      <div className="box-border caret-transparent">
        <div className="relative content-center items-center bg-orange-50 box-border caret-transparent gap-x-0 flex flex-col h-min justify-center gap-y-0">
          <Navbar />

          {/* ── PAGE HERO ── (Fixed - No longer sticky) */}
          <header className="relative flex flex-col justify-end h-[50vh] md:h-[60vh] w-full overflow-hidden p-[30px]">
            <div className="absolute inset-0 z-0">
              <img
                src="https://framerusercontent.com/images/C5wWU0Nj6lv1KokCS11q95R2U.jpeg"
                alt=""
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 bg-black/40 z-[1]" />
            <div className="relative z-[2] flex flex-col gap-y-3">
              <p className="text-white/60 text-sm font-light font-dm_sans tracking-widest uppercase">
                Ready To Transform Your Spaces?
              </p>
              <h1 className="text-white text-[56px] md:text-[96px] font-light font-dm_sans leading-[1.05]">
                Contact
              </h1>
            </div>
          </header>

          {/* ── GET IN TOUCH + FORM ── */}
          <section className="w-full bg-orange-50 px-[30px] py-[80px] md:py-[100px]">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              {/* LEFT: contact info */}
              <div className="flex flex-col gap-12">
                <div>
                  <h2 className="text-black text-[40px] md:text-[56px] font-light font-dm_sans leading-[1.1] mb-8">
                    Get In Touch
                  </h2>
                  <p className="text-black/60 text-base font-light font-dm_sans leading-relaxed max-w-sm">
                    We'd love to hear from you. Whether you have a project in mind, a question about our work, or just want to say hello — reach out.
                  </p>
                </div>

                {/* email */}
                <div className="flex flex-col gap-2">
                  <p className="text-black/40 text-xs font-light font-dm_sans uppercase tracking-widest">Email</p>
                  <a
                    href="mailto:studio@sanzur.com"
                    className="text-black text-lg font-light font-dm_sans no-underline hover:opacity-60 transition-opacity"
                  >
                    studio@sanzur.com
                  </a>
                </div>

                {/* phone */}
                <div className="flex flex-col gap-2">
                  <p className="text-black/40 text-xs font-light font-dm_sans uppercase tracking-widest">Phone</p>
                  <a
                    href="tel:+4987862018694"
                    className="text-black text-lg font-light font-dm_sans no-underline hover:opacity-60 transition-opacity"
                  >
                    +49 8786 2018 694
                  </a>
                </div>

                {/* socials */}
                <div className="flex flex-col gap-3">
                  <p className="text-black/40 text-xs font-light font-dm_sans uppercase tracking-widest">Socials</p>
                  <div className="flex flex-col gap-2">
                    {[
                      { name: "LinkedIn", href: "https://linkedin.com" },
                      { name: "Instagram", href: "https://instagram.com/visuvium" },
                      { name: "X", href: "https://x.com/visuvium" },
                    ].map((social) => (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-black text-base font-light font-dm_sans no-underline hover:opacity-60 transition-opacity"
                      >
                        {social.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* RIGHT: form */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-8">
                <div className="flex flex-col gap-2 border-b border-black/20 pb-4">
                  <label className="text-black/40 text-xs font-light font-dm_sans uppercase tracking-widest">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-transparent text-black text-lg font-light font-dm_sans outline-none placeholder:text-black/30"
                  />
                </div>

                <div className="flex flex-col gap-2 border-b border-black/20 pb-4">
                  <label className="text-black/40 text-xs font-light font-dm_sans uppercase tracking-widest">
                    Email
                  </label>
                  <input
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-transparent text-black text-lg font-light font-dm_sans outline-none placeholder:text-black/30"
                  />
                </div>

                <div className="flex flex-col gap-2 border-b border-black/20 pb-4">
                  <label className="text-black/40 text-xs font-light font-dm_sans uppercase tracking-widest">
                    Subject
                  </label>
                  <input
                    type="text"
                    placeholder="What is this about?"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="bg-transparent text-black text-lg font-light font-dm_sans outline-none placeholder:text-black/30"
                  />
                </div>

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

                <button
                  type="submit"
                  className="group self-start flex items-center gap-3 text-black text-[21px] font-light font-dm_sans border border-black px-8 py-4 hover:bg-black hover:text-white transition-colors duration-300"
                >
                  <img
                    src="https://c.animaapp.com/mnitwnjzSfY2Kl/assets/icon-1.svg"
                    alt=""
                    className="w-5 h-[18px] invert-0 group-hover:invert"
                  />
                  Submit
                </button>
              </form>
            </div>
          </section>

          {/* ── LOCATIONS BAND ── */}
          <section className="w-full bg-[#6b6560] px-[30px] py-[60px]">
            <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              {[
                { region: "Germany", address1: "Leipziger Pl. 12, 10117", address2: "Berlin, Germany", phone: "1 (416) 903.8897" },
                { region: "Sweden", address1: "Leipziger Pl. 12, 10117", address2: "Berlin, Germany", phone: "1 (416) 903.8897" },
              ].map((loc) => (
                <div key={loc.region} className="flex flex-col gap-4">
                  <p className="text-white font-light font-dm_sans text-base">{loc.region}</p>
                  <div>
                    <p className="text-white text-[13px] font-light font-dm_sans leading-[15.6px]">{loc.address1}</p>
                    <p className="text-white text-[13px] font-light font-dm_sans leading-[15.6px]">{loc.address2}</p>
                    <p className="text-white text-[13px] font-light font-dm_sans leading-[15.6px]">{loc.phone}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <Footer />
        </div>
      </div>
    </div>
  );
};