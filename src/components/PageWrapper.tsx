import { useEffect, useRef } from "react";

interface PageWrapperProps {
  children: React.ReactNode;
  className?: string;
}

export const PageWrapper = ({ children, className = "" }: PageWrapperProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Start hidden
    el.style.opacity = "0";
    el.style.transform = "translateY(10px)";

    // Trigger on next frame so transition applies
    const id = requestAnimationFrame(() => {
      el.style.transition = "opacity 0.55s cubic-bezier(0.33,1,0.68,1), transform 0.55s cubic-bezier(0.33,1,0.68,1)";
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    });

    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
