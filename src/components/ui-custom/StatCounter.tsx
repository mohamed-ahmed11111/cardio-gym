import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

interface StatCounterProps {
  value: number;
  suffix?: string;
  label: string;
  durationMs?: number;
}

export function StatCounter({ value, suffix = "", label, durationMs = 1400 }: StatCounterProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const reduced = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduced) {
      setDisplay(value);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, durationMs, reduced]);

  return (
    <div ref={ref} className="rounded-2xl border border-border bg-surface/70 p-5 text-center backdrop-blur-sm">
      <div className="font-display text-3xl font-extrabold text-accent sm:text-4xl">
        {suffix}
        {display.toLocaleString("ar-EG")}
      </div>
      <div className="mt-1 text-sm text-muted-foreground">{label}</div>
    </div>
  );
}