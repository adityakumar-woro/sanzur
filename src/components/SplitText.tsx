import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "@/hooks/useInView";

interface SplitTextProps {
  text: string;
  className?: string;
  style?: React.CSSProperties;
  /** Delay before the first word, in seconds */
  baseDelay?: number;
  /** Extra stagger per word, in seconds */
  stagger?: number;
  once?: boolean;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export const SplitText = ({
  text,
  className = "",
  style,
  baseDelay = 0,
  stagger = 0.055,
  as: Tag = "span",
}: SplitTextProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { ref: inViewRef, inView } = useInView({ threshold: 0.1 });

  // Merge refs
  const setRef = (el: HTMLDivElement | null) => {
    (containerRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
    (inViewRef as React.MutableRefObject<HTMLDivElement | null>).current = el;
  };

  const words = text.split(" ");

  return (
    <Tag className={`inline ${className}`} aria-label={text} style={style}>
      <span ref={setRef} className="inline">
        {words.map((word, i) => (
          <span
            key={i}
            className="inline-block overflow-hidden"
            style={{ marginRight: "0.28em" }}
          >
            <motion.span
              className="inline-block"
              initial={{ y: "105%", opacity: 0 }}
              animate={inView ? { y: "0%", opacity: 1 } : {}}
              transition={{
                duration: 0.7,
                delay: baseDelay + i * stagger,
                ease: [0.33, 1, 0.68, 1],
              }}
            >
              {word}
            </motion.span>
          </span>
        ))}
      </span>
    </Tag>
  );
};
