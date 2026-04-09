import { useEffect, useRef } from "react";
import { useIsMobile } from "@/hooks/useIsMobile";

export const CustomCursor = () => {
  const isMobile = useIsMobile();
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const plusRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (isMobile) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    const plus = plusRef.current;
    if (!dot || !ring || !plus) return;

    let mx = -200, my = -200;
    let rx = -200, ry = -200;
    let rafId: number;

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      rx = lerp(rx, mx, 0.1);
      ry = lerp(ry, my, 0.1);

      dot.style.left = `${mx}px`;
      dot.style.top = `${my}px`;
      ring.style.left = `${rx}px`;
      ring.style.top = `${ry}px`;

      rafId = requestAnimationFrame(animate);
    };

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const setHover = (on: boolean) => {
      ring.classList.toggle("is-hovered", on);
      plus.style.opacity = on ? "1" : "0";
      plus.style.transform = on ? "scale(1)" : "scale(0.5)";
    };

    const onHoverIn = () => setHover(true);
    const onHoverOut = () => setHover(false);

    const interactive = document.querySelectorAll(
      "a, button, [role='button'], input, textarea, select, label, [data-cursor-hover]"
    );
    interactive.forEach((el) => {
      el.addEventListener("mouseenter", onHoverIn);
      el.addEventListener("mouseleave", onHoverOut);
    });

    document.addEventListener("mousemove", onMove);
    rafId = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
      interactive.forEach((el) => {
        el.removeEventListener("mouseenter", onHoverIn);
        el.removeEventListener("mouseleave", onHoverOut);
      });
    };
  }, [isMobile]);

  if (isMobile) return null;

  return (
    <>
      {/* Small dot — snaps to cursor instantly */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{ willChange: "left, top" }}
      />

      {/* Trailing ring — lerps behind */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{ willChange: "left, top" }}
      >
        <span
          ref={plusRef}
          className="cursor-ring-plus"
          style={{ opacity: 0, transform: "scale(0.5)" }}
        >
          +
        </span>
      </div>
    </>
  );
};
