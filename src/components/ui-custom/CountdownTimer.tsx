import { useEffect, useState } from "react";

interface Parts {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  done: boolean;
}

function diff(target: string): Parts {
  const ms = new Date(target).getTime() - Date.now();
  if (ms <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true };
  return {
    days: Math.floor(ms / 86_400_000),
    hours: Math.floor((ms / 3_600_000) % 24),
    minutes: Math.floor((ms / 60_000) % 60),
    seconds: Math.floor((ms / 1000) % 60),
    done: false,
  };
}

const labels: { key: keyof Omit<Parts, "done">; label: string }[] = [
  { key: "days", label: "الأيام" },
  { key: "hours", label: "الساعات" },
  { key: "minutes", label: "الدقائق" },
  { key: "seconds", label: "الثواني" },
];

export function CountdownTimer({ expiresAt }: { expiresAt: string }) {
  const [parts, setParts] = useState<Parts | null>(null);

  useEffect(() => {
    setParts(diff(expiresAt));
    const id = window.setInterval(() => setParts(diff(expiresAt)), 1000);
    return () => window.clearInterval(id);
  }, [expiresAt]);

  if (parts?.done) {
    return <p className="text-sm font-bold text-muted-foreground">انتهى هذا العرض — تابعنا لعروض جديدة.</p>;
  }

  return (
    <div className="grid grid-cols-4 gap-2 sm:gap-3" aria-live="off">
      {labels.map(({ key, label }) => (
        <div
          key={key}
          className="rounded-xl border border-border bg-background/60 px-2 py-3 text-center backdrop-blur"
        >
          <div className="font-display text-2xl font-extrabold tabular-nums text-accent sm:text-3xl">
            {parts ? String(parts[key]).padStart(2, "0") : "--"}
          </div>
          <div className="mt-0.5 text-[11px] text-muted-foreground">{label}</div>
        </div>
      ))}
    </div>
  );
}