import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Animate progress from 0 → 100 over 1.6s
    const start = performance.now();
    const duration = 1600;

    const tick = (now: number) => {
      const t = Math.min((now - start) / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - t, 3);
      setProgress(Math.round(eased * 100));

      if (t < 1) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setExiting(true);
          setTimeout(onComplete, 700);
        }, 120);
      }
    };

    requestAnimationFrame(tick);
  }, [onComplete]);

  const letters = "SANZUR".split("");

  return (
    <AnimatePresence>
      {!exiting ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[99999] bg-black flex flex-col items-center justify-center overflow-hidden"
          exit={{ clipPath: "inset(100% 0 0 0)" }}
          transition={{ duration: 0.75, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Logo letters */}
          <div className="flex gap-0 mb-8" aria-label="SANZUR">
            {letters.map((char, i) => (
              <motion.span
                key={i}
                className="font-dm_sans font-light text-white leading-none"
                style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.6,
                  delay: 0.08 + i * 0.06,
                  ease: [0.33, 1, 0.68, 1],
                }}
              >
                {char}
              </motion.span>
            ))}
          </div>

          {/* Plus icon */}
          <motion.div
            className="relative w-5 h-5 mb-16"
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <div className="absolute bg-white/40 left-[calc(50%_-_0.5px)] inset-y-0 w-px" />
            <div className="absolute bg-white/40 rotate-90 left-[calc(50%_-_0.5px)] inset-y-0 w-px" />
          </motion.div>

          {/* Progress bar */}
          <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/10">
            <motion.div
              className="h-full bg-white origin-left"
              style={{ scaleX: progress / 100 }}
              initial={{ scaleX: 0 }}
            />
          </div>

          {/* Counter */}
          <motion.span
            className="absolute bottom-6 right-6 font-dm_sans font-light text-white/40 text-xs tabular-nums"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            {String(progress).padStart(3, "0")}
          </motion.span>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};
