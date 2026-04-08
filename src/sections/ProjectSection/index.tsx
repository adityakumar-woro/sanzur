import { ProjectItem } from "@/sections/ProjectSection/components/ProjectItem";

export type ProjectSectionProps = {
  number: string;
  title: string;
  description: string;
  href: string;
  imageSrc: string;
  titleVariantClass: string;
};

export const ProjectSection = (props: ProjectSectionProps) => {
  return (
    <ProjectItem
      number={props.number}
      title={props.title}
      description={props.description}
      href={props.href}
      imageSrc={props.imageSrc}
      titleVariantClass={props.titleVariantClass}
    />
  );
};
