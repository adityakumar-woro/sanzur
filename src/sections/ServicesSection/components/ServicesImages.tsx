export type ServicesImagesProps = {
  containerClass: string;
  firstImageWrapperClass: string;
  secondImageWrapperClass: string;
  thirdImageWrapperClass: string;
  fourthImageWrapperClass: string;
  firstImageSrc: string;
  secondImageSrc: string;
  thirdImageSrc: string;
  fourthImageSrc: string;
  firstImageClass: string;
  secondImageClass: string;
  thirdImageClass: string;
  fourthImageClass: string;
  imageSizes: string;
};

export const ServicesImages = (props: ServicesImagesProps) => {
  return (
    <div
      className={`static box-content caret-black shrink h-auto min-h-0 min-w-0 w-auto md:relative md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:min-h-[auto] md:min-w-[auto] md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] ${props.containerClass}`}
    >
      <div
        className={`static box-content caret-black shrink w-auto left-auto inset-y-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-y-0 ${props.firstImageWrapperClass}`}
      >
        <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
          <img
            sizes={props.imageSizes}
            src={props.firstImageSrc}
            alt=""
            className={`box-content caret-black h-auto object-fill align-middle w-auto md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] ${props.firstImageClass}`}
          />
        </div>
      </div>
      <div
        className={`static box-content caret-black shrink h-auto w-auto left-auto bottom-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] ${props.secondImageWrapperClass}`}
      >
        <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
          <img
            sizes={props.imageSizes}
            src={props.secondImageSrc}
            alt=""
            className={`box-content caret-black h-auto object-fill align-middle w-auto md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] ${props.secondImageClass}`}
          />
        </div>
      </div>
      <div
        className={`static box-content caret-black shrink h-auto w-auto left-auto bottom-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] ${props.thirdImageWrapperClass}`}
      >
        <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
          <img
            sizes={props.imageSizes}
            src={props.thirdImageSrc}
            alt=""
            className={`box-content caret-black h-auto object-fill align-middle w-auto md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] ${props.thirdImageClass}`}
          />
        </div>
      </div>
      <div
        className={`static box-content caret-black shrink h-auto w-auto left-auto bottom-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:shrink-0 md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:w-full md:overflow-hidden md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] ${props.fourthImageWrapperClass}`}
      >
        <div className="static box-content caret-black inset-auto md:absolute md:aspect-auto md:box-border md:caret-transparent md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] md:inset-0">
          <img
            sizes={props.imageSizes}
            src={props.fourthImageSrc}
            alt=""
            className={`box-content caret-black h-auto object-fill align-middle w-auto md:box-border md:caret-transparent md:h-full md:object-cover md:overscroll-x-auto md:overscroll-y-auto md:snap-align-none md:snap-normal md:snap-none md:decoration-auto md:underline-offset-auto md:align-baseline md:w-full md:[mask-position:0%] md:bg-left-top md:scroll-m-0 md:scroll-p-[auto] ${props.fourthImageClass}`}
          />
        </div>
      </div>
    </div>
  );
};
