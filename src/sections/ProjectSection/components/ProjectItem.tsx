export type ProjectItemProps = {
  number: string;
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  titleVariantClass: string;
};

export const ProjectItem = (props: ProjectItemProps) => {
  return (
    <section className="sticky content-start items-start bg-orange-50 box-border caret-transparent gap-x-0 flex flex-col shrink-0 h-min justify-center min-h-[auto] min-w-[auto] gap-y-0 w-full z-[2] top-0">
      <a
        href={props.href}
        className="relative text-blue-700 content-center items-center bg-orange-50 box-border caret-transparent gap-x-[250px] flex flex-col shrink-0 h-[1000px] justify-start min-h-[auto] min-w-[auto] gap-y-[250px] w-full z-[1] overflow-hidden px-[30px] py-[100px]"
      >
        <div className="relative content-center items-center box-border caret-transparent gap-x-2.5 flex shrink-0 h-min justify-start min-h-[auto] min-w-[auto] gap-y-2.5 w-full overflow-hidden">
          <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start min-h-[auto] min-w-[auto] text-nowrap z-[2]">
            <h1 className="text-white text-[49px] font-light box-border caret-transparent leading-[58.8px] min-h-[auto] min-w-[auto] text-nowrap font-dm_sans md:text-8xl md:leading-[115.2px]">
              {props.number}
            </h1>
          </div>
        </div>
        <div className="relative content-start items-start box-border caret-transparent gap-x-[25px] flex flex-col shrink-0 h-min justify-start min-h-[auto] min-w-[auto] gap-y-[25px] w-full overflow-hidden md:content-center md:items-center md:gap-x-[normal] md:flex-row md:justify-between md:gap-y-[normal]">
          <div
            className={`relative box-border caret-transparent flex flex-col shrink-0 justify-start min-h-[auto] min-w-[auto] break-words z-[2] ${props.titleVariantClass}`}
          >
            <h1 className="text-white text-[49px] font-light box-border caret-transparent leading-[58.8px] min-h-[auto] min-w-[auto] break-words font-dm_sans md:text-8xl md:leading-[115.2px]">
              {props.title}
            </h1>
          </div>
          <div className="relative content-start items-start box-border caret-transparent gap-x-[50px] flex basis-auto flex-col grow-0 shrink-0 h-min justify-start max-w-[367px] min-h-[auto] min-w-[auto] gap-y-[50px] w-full overflow-hidden md:basis-0 md:grow md:w-px">
            <div className="relative box-border caret-transparent flex flex-col shrink-0 justify-start min-h-[auto] min-w-[auto] break-words w-full z-[2]">
              <h5 className="text-white text-base font-light box-border caret-transparent leading-[19.2px] min-h-[auto] min-w-[auto] break-words font-inter md:text-[21px] md:leading-[25.2px]">
                {props.description}
              </h5>
            </div>
          </div>
        </div>
        <div className="absolute bg-black box-border caret-transparent shrink-0 h-full opacity-40 w-full z-[1] overflow-hidden left-0 top-0"></div>
        <div className="absolute box-border caret-transparent shrink-0 h-[122%] left-[-11.0833%] top-[-11.0625%] w-[122%] z-0">
          <div className="absolute box-border caret-transparent inset-0">
            <img
              sizes="calc(100vw * 1.2217)"
              src={props.imageSrc}
              alt=""
              className="aspect-[auto_2400_/_1345] box-border caret-transparent h-full object-cover align-baseline w-full"
            />
          </div>
        </div>
      </a>
    </section>
  );
};
