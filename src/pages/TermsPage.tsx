import { motion } from "framer-motion";
import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";

const sections = [
  {
    title: "Use of the Website",
    text: "This website presents Sanzur's studio profile, services, portfolios, project imagery, and design-related content. By using the website, you agree to access it for lawful personal or business enquiry purposes only.",
  },
  {
    title: "Project Enquiries",
    text: "Information submitted through the contact form is used to understand your project requirements and respond to your enquiry. Submitting a request does not create a client relationship until a written agreement is confirmed.",
  },
  {
    title: "Intellectual Property",
    text: "All layouts, text, project imagery, portfolio material, and visual design presented on this website remain the property of Sanzur or the respective rights holders. Content may not be copied, reproduced, or reused without permission.",
  },
  {
    title: "Portfolio Accuracy",
    text: "Project descriptions, visuals, and service details are presented for informational and editorial purposes. Final scope, deliverables, timelines, and fees are confirmed individually for each project.",
  },
  {
    title: "Limitation of Liability",
    text: "Sanzur aims to keep website content accurate and available, but does not guarantee uninterrupted access or freedom from technical errors. Use of the website is at your own discretion.",
  },
];

export const TermsPage = () => {
  return (
    <div className="bg-[#12110f] text-white font-dm_sans">
      <Navbar />
      <main>
        <header className="px-5 md:px-8 pt-16 pb-16 md:pb-24">
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
            Terms & Conditions
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

