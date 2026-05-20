import { Footer } from "@/sections/Footer";
import { Navbar } from "@/sections/Navbar";
import { MediaArchive } from "@/components/MediaArchive";

export const ArchivePage = () => {
  return (
    <div className="bg-[#12110f] text-white font-dm_sans">
      <Navbar />
      <main>
        <header className="relative flex min-h-[42vh] flex-col justify-end overflow-hidden px-5 pb-10 pt-16 md:px-8">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_24%,rgba(201,173,115,0.2),transparent_32%),linear-gradient(135deg,#12110f,#191510_48%,#0c0b09)]" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-[#c9ad73]/70 to-transparent" />
          <div className="relative z-10">
            <h1 className="font-newsreader font-light leading-[0.9]" style={{ fontSize: "clamp(4.2rem, 13vw, 13rem)" }}>
              Archive
            </h1>
          </div>
        </header>
        <MediaArchive pageSize={10} showHeader={false} />
      </main>
      <Footer />
    </div>
  );
};
