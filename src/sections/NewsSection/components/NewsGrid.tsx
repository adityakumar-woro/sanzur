import { NewsCard } from "@/sections/NewsSection/components/NewsCard";

export const NewsGrid = () => {
  return (
    <div className="relative content-start items-start box-border caret-transparent gap-x-[70px] flex flex-col shrink-0 h-min justify-center max-w-[1680px] min-h-[auto] min-w-[auto] gap-y-[70px] w-full md:gap-x-5 md:flex-row md:gap-y-5">
      <NewsCard
        items={[
          {
            href: "./news/meet-anthoni-the-visionary-behind-found-formed",
            imageSrc:
              "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/76IaKs5JWcJKb3g9FTLbXakrkQ.jpeg",
            imageAlt: "Meet Anthoni: The Visionary Behind sanzur",
            category: "Studio",
            date: "Apr 2, 2024",
            title: "Meet Anthoni: The Visionary Behind sanzur",
          },
          {
            href: "./news/top-3-architecture-bureau-in-germany",
            imageSrc:
              "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/c7qpAUGpAVeH4OcIVA0bCOiQIV4.jpg",
            imageAlt:
              "sanzur Nominated as Top 3 Architecture Bureau in Germany",
            category: "Award",
            date: "Jan 5, 2024",
            title:
              "sanzur Nominated as Top 3 Architecture Bureau in Germany",
          },
          {
            href: "./news/latest-commercial-design-by-found-formed",
            imageSrc:
              "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/IjUpvkvBshn9VuR2lXanbUgCQK4.jpeg",
            imageAlt: "Latest Commercial Design by sanzur",
            category: "News",
            date: "Dec 23, 2023",
            title: "Latest Commercial Design by sanzur",
          },
          {
            href: "./news/how-we-developed-our-work-culture",
            imageSrc:
              "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/3T8vswzOiWNPxJn88d0s762Hzj8.jpg",
            imageAlt: "How We Developed Our Work Culture",
            category: "Studio",
            date: "Nov 10, 2023",
            title: "How We Developed Our Work Culture",
          },
        ]}
      />
    </div>
  );
};
