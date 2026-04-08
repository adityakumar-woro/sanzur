import { NavbarLinks } from "@/sections/Navbar/components/NavbarLinks";
import { NavbarFooter } from "@/sections/Navbar/components/NavbarFooter";

export const NavbarDropdown = () => {
  return (
    <div className="static [align-items:normal] bg-transparent box-content caret-black block flex-row shrink justify-normal z-auto p-0 inset-auto md:absolute md:content-start md:items-start md:aspect-auto md:bg-stone-500 md:box-border md:caret-transparent md:flex md:flex-col md:shrink-0 md:justify-between md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:top-[-237px] md:z-[1] md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:pt-[180px] md:pb-[30px] md:px-[30px] md:scroll-m-0 md:scroll-p-[auto] md:bottom-28 md:inset-x-0">
      <NavbarLinks />
      <NavbarFooter />
    </div>
  );
};
