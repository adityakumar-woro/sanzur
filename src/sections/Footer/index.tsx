import { FooterNav } from "@/sections/Footer/components/FooterNav";
import { FooterBottom } from "@/sections/Footer/components/FooterBottom";

export const Footer = () => {
  return (
    <footer className="relative bg-stone-500 w-full z-[4] md:translate-y-[-600px] md:mb-[-600px]">
      <div className="flex flex-col justify-between h-full min-h-[400px] md:min-h-[700px] p-[30px]">
        <FooterNav />
        <FooterBottom />
      </div>
    </footer>
  );
};
