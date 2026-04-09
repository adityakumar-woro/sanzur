const SERVICES = [
  { num: "01", label: "Interior Design", active: true },
  { num: "02", label: "Architecture", active: false },
  { num: "03", label: "Project Management", active: false },
  { num: "04", label: "Furniture Design", active: false },
];

export const ServicesList = () => {
  return (
    <div className="flex flex-col gap-4 md:gap-5">
      {SERVICES.map((svc) => (
        <div
          key={svc.num}
          className={`flex items-center gap-3 transition-opacity duration-200 ${svc.active ? "opacity-100" : "opacity-50"}`}
        >
          <span className="text-sm italic font-light font-newsreader text-black min-w-[28px]">
            {svc.num}
          </span>
          <h4 className="text-[22px] md:text-[28px] font-light font-dm_sans text-black leading-tight">
            {svc.label}
          </h4>
        </div>
      ))}
    </div>
  );
};
