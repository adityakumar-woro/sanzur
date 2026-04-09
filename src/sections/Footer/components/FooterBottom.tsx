export const FooterBottom = () => {
  return (
    <div className="flex flex-col gap-4 pt-8 border-t border-white/20">
      {/* Logo icon */}
      <img
        src="https://c.animaapp.com/mnitwnjzSfY2Kl/assets/icon-7.svg"
        alt="Sanzur"
        className="w-8 h-8 object-contain"
      />
      {/* Bottom row */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
        <p className="text-white text-[13px] font-light font-dm_sans leading-[15.6px]">
          All Rights Reserved ©2026 Sanzur
        </p>
        <p className="text-white text-[13px] font-light font-dm_sans leading-[15.6px]">
          Designed by WORO
        </p>
      </div>
    </div>
  );
};
