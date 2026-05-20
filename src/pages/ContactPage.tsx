import { useState } from "react";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { images, studio } from "@/data/studio";

export const ContactPage = () => {
  const [formData, setFormData] = useState({ name: "", email: "", project: "", message: "" });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Project enquiry:", formData);
  };

  return (
    <div className="bg-[#12110f] text-white font-dm_sans">
      <Navbar />
      <main>
        <header className="relative min-h-[70vh] px-5 md:px-8 pt-24 pb-10 flex items-end overflow-hidden">
          <img src={images.editorialFour} alt="" className="absolute inset-0 h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#12110f] via-black/45 to-black/30" />
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-10 items-end w-full">
            <div>
              <p className="text-white/55 text-[11px] uppercase tracking-[0.22em] mb-5">Contact</p>
              <h1 className="font-newsreader font-light leading-[0.92]" style={{ fontSize: "clamp(4.5rem, 14vw, 14rem)" }}>Begin</h1>
            </div>
            <p className="text-white/75 text-lg leading-relaxed lg:pb-5">
              Tell us about the place you are imagining. We will respond with next steps, availability, and the right way to begin.
            </p>
          </div>
        </header>

        <section className="bg-[#ebe5d8] text-[#12110f] px-5 md:px-8 py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-[0.75fr_1.25fr] gap-14 lg:gap-24">
            <aside className="space-y-10">
              <div>
                <p className="text-black/45 text-[11px] uppercase tracking-[0.22em] mb-3">Email</p>
                <a href={`mailto:${studio.email}`} className="text-2xl md:text-3xl font-newsreader no-underline text-[#12110f]">{studio.email}</a>
              </div>
              <div>
                <p className="text-black/45 text-[11px] uppercase tracking-[0.22em] mb-3">Phone</p>
                <a href="tel:+919876543210" className="text-2xl md:text-3xl font-newsreader no-underline text-[#12110f]">{studio.phone}</a>
              </div>
              <div>
                <p className="text-black/45 text-[11px] uppercase tracking-[0.22em] mb-3">Studio</p>
                <p className="text-black/62 leading-relaxed">{studio.address}</p>
              </div>
            </aside>

            <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-8">
              {[
                ["name", "Name", "Your full name"],
                ["email", "Email", "you@example.com"],
                ["project", "Project Type", "Residence, retail, hospitality..."],
              ].map(([key, label, placeholder]) => (
                <label key={key} className="block border-b border-black/20 pb-5">
                  <span className="block text-black/45 text-[11px] uppercase tracking-[0.22em] mb-3">{label}</span>
                  <input
                    value={formData[key as keyof typeof formData]}
                    onChange={(event) => setFormData({ ...formData, [key]: event.target.value })}
                    placeholder={placeholder}
                    className="w-full bg-transparent outline-none text-xl md:text-2xl font-newsreader placeholder:text-black/30"
                  />
                </label>
              ))}
              <label className="block border-b border-black/20 pb-5">
                <span className="block text-black/45 text-[11px] uppercase tracking-[0.22em] mb-3">Message</span>
                <textarea
                  rows={6}
                  value={formData.message}
                  onChange={(event) => setFormData({ ...formData, message: event.target.value })}
                  placeholder="Share the location, timeline, scope, and the feeling you want the space to hold."
                  className="w-full bg-transparent outline-none text-xl md:text-2xl font-newsreader placeholder:text-black/30 resize-none"
                />
              </label>
              <button type="submit" className="justify-self-start bg-[#12110f] text-white px-8 py-4 text-sm uppercase tracking-[0.16em]">
                Send enquiry
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
