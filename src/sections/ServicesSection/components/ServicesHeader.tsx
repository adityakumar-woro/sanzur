import { useScrollReveal } from "@/hooks/useScrollReveal";

type ServicesHeaderProps = {
  variant: "heading" | "description";
};

export const ServicesHeader = ({ variant }: ServicesHeaderProps) => {
  const ref = useScrollReveal<HTMLHeadingElement | HTMLParagraphElement>();

  if (variant === "heading") {
    return (
      <h2
        ref={ref as React.RefObject<HTMLHeadingElement>}
        className="reveal text-[42px] md:text-[80px] font-light font-dm_sans leading-[1.1] text-black"
      >
        What We Do
      </h2>
    );
  }

  return (
    <p
      ref={ref as React.RefObject<HTMLParagraphElement>}
      className="reveal reveal-delay-1 text-sm md:text-base font-light font-dm_sans text-black/70 leading-relaxed max-w-[600px]"
    >
      From initial concept to final touches, sanzur offers a range of
      services designed to meet the unique needs of each client. We specialize in
      residential interiors, commercial spaces, and custom furniture design,
      always with a focus on creating cohesive, livable spaces.
    </p>
  );
};