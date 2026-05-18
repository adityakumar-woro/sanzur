import { motion } from "framer-motion";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";
import { CustomCursor } from "@/components/CustomCursor";

const sections = [
  {
    title: "Information We Collect",
    text: "We may collect your name, email address, phone number, project type, and message when you contact Sanzur through the website.",
  },
  {
    title: "How We Use Information",
    text: "Information is used to respond to enquiries, discuss potential projects, prepare follow-up communication, and improve our studio communication process.",
  },
  {
    title: "Media and Portfolio Content",
    text: "Project imagery and portfolio material shown on the website is used to communicate design capability and studio work. Rights remain with Sanzur or the relevant rights holders.",
  },
  {
    title: "Data Sharing",
    text: "We do not sell personal information. Information may be shared only when required to respond to your enquiry, support project communication, or comply with legal obligations.",
  },
  {
    title: "Contact",
    text: "For privacy-related requests, corrections, or removal questions, contact studio@sanzur.com.",
  },
];

export const PrivacyPage = () => {
  return (
    <div className="bg-[#12110f] text-white font-dm_sans cursor-none-desktop">
      <CustomCursor />
      <Navbar />
      <main>
        <header className="px-5 md:px-8 pt-24 pb-16 md:pb-24">
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="text-white/45 text-[11px] uppercase tracking-[0.22em] mb-5">
            Legal
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="font-newsreader font-light leading-[0.95]"
            style={{ fontSize: "clamp(4rem, 11vw, 11rem)" }}
          >
            Privacy Policy
          </motion.h1>
        </header>
        <section className="bg-[#ebe5d8] text-[#12110f] px-5 md:px-8 py-16 md:py-24">
          <div className="max-w-5xl divide-y divide-black/15 border-y border-black/15">
            {sections.map((section, index) => (
              <motion.article
                key={section.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
                className="grid grid-cols-1 md:grid-cols-[220px_1fr] gap-6 py-8"
              >
                <h2 className="font-newsreader text-3xl font-light">{section.title}</h2>
                <p className="text-black/65 text-lg leading-relaxed">{section.text}</p>
              </motion.article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

