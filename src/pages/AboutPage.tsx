import { Navbar } from "@/sections/Navbar";
import { Footer } from "@/sections/Footer";

/* ─── DATA ─────────────────────────────────────────────── */
const TEAM = [
  {
    name: "Anthoni Gantzmann",
    title: "Principal Architect",
    image: "https://framerusercontent.com/images/fkFNB8nJowsVydFUBtqhaNsqA.jpeg?scale-down-to=1024",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Anita Schroder",
    title: "Senior Architect",
    image: "https://framerusercontent.com/images/ZicVxApzxl4sxJuTicRbA1nt1Q.jpeg",
    linkedin: "https://www.linkedin.com/",
  },
  {
    name: "Lewis Danton",
    title: "Junior Architect",
    image: "https://framerusercontent.com/images/vOcjqLoMUhi5GxDCun5WAsOSY.jpeg",
    linkedin: "https://www.linkedin.com/",
  },
];

const AWARDS = [
  { org: "AMP", title: "Architectural Design of The Year", year: "2024" },
  { org: "AIA Awards", title: "Interior Design of The Year", year: "2023" },
  { org: "The Arch", title: "The Communion: Story Behind", year: "2022" },
  { org: "ArchDaily", title: "Top 50 Architect Firm in Europe", year: "2021" },
];

const SERVICES_IMAGES = [
  "https://framerusercontent.com/images/vhTOTtueDBCx9yxBY9UPdO5eF9c.jpeg",
  "https://framerusercontent.com/images/cQ96QBtlZ09DlcjnzP1nobpNH4.jpeg",
  "https://framerusercontent.com/images/C5wWU0Nj6lv1KokCS11q95R2U.jpeg",
  "https://framerusercontent.com/images/Azi0qnhCSNl9F2DbbhcDdJ5PSU.jpeg",
];

const SERVICES_LIST = [
  "01 Interior Design",
  "02 Architecture",
  "03 Project Management",
  "04 Furniture Design",
];

/* ─── INLINE SVG LINKEDIN ICON ─────────────────────────── */
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

/* ─── PAGE ──────────────────────────────────────────────── */
export const AboutPage = () => {
  return (
    <div className="bg-orange-50 font-sans_serif text-black text-xs flex flex-col min-h-screen">
      <Navbar />

      {/* ── HERO ── (Sticky removed) */}
      <header className="relative bg-black flex flex-col justify-end min-h-[85vh] md:min-h-screen w-full overflow-hidden p-[30px]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://framerusercontent.com/images/DFpdCiQV48a6W3GFDaN4xOTZp0.jpeg"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-black/40 z-[1]" />
        <div className="relative z-[2] flex flex-col gap-y-4 pb-8">
          <p className="text-white/60 text-sm font-light font-dm_sans tracking-widest uppercase">
            Tell A Story
          </p>
          <h1 className="text-white text-[64px] md:text-[96px] font-light font-dm_sans leading-[1.05]">
            Every Space<br />Should
          </h1>
        </div>
      </header>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* ── ABOUT US / INTRO ── */}
        <section className="w-full bg-orange-50 border-b border-black/20 px-[30px] py-[100px]">
          <div className="max-w-[1100px] mx-auto">
            <div className="max-w-3xl">
              <p className="text-xs font-light font-dm_sans uppercase tracking-widest text-black/50 mb-6">
                ABOUT US
              </p>
              <h2 className="text-[42px] md:text-[56px] font-light font-dm_sans leading-[1.1] mb-10">
                We are a passionate interior design practice dedicated to crafting timeless, client-centric spaces.
              </h2>
              <p className="text-base md:text-lg font-light font-dm_sans text-black/70 leading-relaxed">
                We are a passionate interior design practice dedicated to crafting timeless, client-centric spaces that blend functionality with refined aesthetics. With over a decade of experience across residential and commercial projects, we transform ideas into immersive environments where thoughtful planning, innovation, and detail come together to elevate everyday living.
              </p>
            </div>
          </div>
        </section>

        {/* ── WHAT WE DO ── */}
        <section className="relative w-full bg-orange-50 border-b border-black/20 px-[30px] py-[80px] overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-start gap-0 max-w-[1680px] mx-auto">
            {/* Left: heading + description + list */}
            <div className="md:w-[51%] flex flex-col justify-between pr-0 md:pr-16 pb-10 md:pb-0">
              <div className="mb-8">
                <h2 className="text-[42px] md:text-[80px] font-light font-dm_sans leading-[1.1] mb-6">
                  What We Do
                </h2>
                <p className="text-sm md:text-base font-light font-dm_sans text-black/70 leading-relaxed max-w-[480px]">
                  From initial concept to final touches, sanzur offers a range of services designed to meet the unique needs of each client. We specialize in residential interiors, commercial spaces, and custom furniture design, always with a focus on creating cohesive, livable spaces.
                </p>
              </div>

              <div className="flex flex-col gap-y-3 mt-4">
                {SERVICES_LIST.map((svc, i) => (
                  <div
                    key={i}
                    className={`flex items-center gap-x-3 ${i === 0 ? "opacity-100" : "opacity-50"}`}
                  >
                    <span className="text-sm italic font-light font-newsreader text-black min-w-[28px]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[26px] md:text-[28px] font-light font-dm_sans text-black">
                      {svc.replace(/^\d+\s+/, "")}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: stacked images */}
            <div className="md:w-[49%] grid grid-cols-2 gap-3">
              {SERVICES_IMAGES.map((src, i) => (
                <div key={i} className="overflow-hidden aspect-square bg-stone-200">
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── OUR TEAM ── */}
        <section className="w-full bg-orange-50 border-b border-black/20 px-[30px] py-[80px]">
          <p className="text-xs font-light font-dm_sans uppercase tracking-widest text-black/50 mb-4">
            Our Team
          </p>
          <h2 className="text-[36px] md:text-[64px] font-light font-dm_sans leading-[1.1] mb-16">
            The People Behind<br />sanzur
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6">
            {TEAM.map((member) => (
              <div key={member.name} className="flex flex-col gap-4">
                {/* Photo */}
                <div className="overflow-hidden bg-stone-200 aspect-[3/4]">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Info row */}
                <div className="flex items-start justify-between pt-1">
                  <div className="flex flex-col gap-0.5">
                    <p className="text-xs font-light font-dm_sans uppercase tracking-widest text-black/50">
                      {member.title}
                    </p>
                    <h3 className="text-lg md:text-xl font-light font-dm_sans text-black">
                      {member.name}
                    </h3>
                  </div>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-black/50 hover:text-black transition-colors duration-200 mt-1"
                    aria-label={`LinkedIn – ${member.name}`}
                  >
                    <LinkedInIcon />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── RECOGNITION ── */}
        <section className="w-full bg-orange-50 px-[30px] py-[80px]">
          <div className="flex flex-col md:flex-row md:items-start gap-10 md:gap-20 mb-16">
            <div className="md:w-1/2">
              <h2 className="text-[36px] md:text-[64px] font-light font-dm_sans leading-[1.1]">
                Recognition
              </h2>
            </div>
            <div className="md:w-1/2 flex items-end">
              <p className="text-sm md:text-base font-light font-dm_sans text-black/70 leading-relaxed">
                Our work has been recognized for its quality and design excellence, earning accolades from industry peers and media alike.
              </p>
            </div>
          </div>

          <div className="flex flex-col divide-y divide-black/20">
            {AWARDS.map((award, i) => (
              <div
                key={i}
                className="flex flex-col md:flex-row md:items-center justify-between gap-2 py-6"
              >
                <span className="text-xs font-light font-dm_sans uppercase tracking-widest text-black/50 md:w-[200px] shrink-0">
                  {award.org}
                </span>
                <span className="text-lg md:text-2xl font-light font-dm_sans text-black flex-1">
                  {award.title}
                </span>
                <span className="text-sm font-light font-dm_sans text-black/50 md:w-16 text-right shrink-0">
                  {award.year}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};