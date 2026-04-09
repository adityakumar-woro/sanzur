import { NewsCard } from "@/sections/NewsSection/components/NewsCard";

const NEWS_ITEMS = [
  {
    href: "./blogs/meet-anthoni-the-visionary-behind-sanzur",
    image: "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/76IaKs5JWcJKb3g9FTLbXakrkQ.jpeg",
    category: "Studio",
    date: "Apr 2, 2024",
    title: "Meet Anthoni: The Visionary Behind found-formed",
  },
  {
    href: "./blogs/top-3-architecture-bureau-in-germany",
    image: "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/c7qpAUGpAVeH4OcIVA0bCOiQIV4.jpg",
    category: "Award",
    date: "Jan 5, 2024",
    title: "found-formed Nominated as Top 3 Architecture Bureau in Germany",
  },
  {
    href: "./blogs/latest-commercial-design-by-sanzur",
    image: "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/IjUpvkvBshn9VuR2lXanbUgCQK4.jpeg",
    category: "Blog",
    date: "Dec 23, 2023",
    title: "Latest Commercial Design by found-formed",
  },
  {
    href: "./blogs/how-we-developed-our-work-culture",
    image: "https://c.animaapp.com/mnitwnjzSfY2Kl/assets/3T8vswzOiWNPxJn88d0s762Hzj8.jpg",
    category: "Studio",
    date: "Nov 10, 2023",
    title: "How We Developed Our Work Culture",
  },
];

const DELAY_CLASSES = ["", "reveal-delay-1", "reveal-delay-2", "reveal-delay-3"];

export const NewsGrid = () => {
  return (
    <div className="relative content-start items-start box-border caret-transparent gap-x-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 shrink-0 h-min max-w-[1680px] min-h-[auto] min-w-[auto] gap-y-10 sm:gap-y-5 w-full">
      {NEWS_ITEMS.map((item, i) => (
        <NewsCard
          key={item.href}
          href={item.href}
          image={item.image}
          category={item.category}
          date={item.date}
          title={item.title}
          delayClass={DELAY_CLASSES[i] ?? ""}
        />
      ))}
    </div>
  );
};
