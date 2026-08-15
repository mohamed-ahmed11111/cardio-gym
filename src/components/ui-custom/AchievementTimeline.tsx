import { Trophy } from "lucide-react";
import type { Achievement } from "@/types";
import { Reveal } from "./Reveal";

export function AchievementTimeline({ items }: { items: Achievement[] }) {
  return (
    <ol className="relative space-y-6 border-s border-border ps-6">
      {items.map((item, index) => (
        <Reveal key={item.id} delay={index * 0.06}>
          <li className="relative">
            <span className="absolute -start-[2.15rem] top-1 inline-flex size-7 items-center justify-center rounded-full border border-accent/50 bg-background text-accent">
              <Trophy aria-hidden="true" className="size-3.5" />
            </span>
            <div className="rounded-2xl border border-border bg-surface p-5">
              <div className="flex items-center gap-3">
                <span className="font-display text-xl font-extrabold text-accent">{item.year}</span>
                <span className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
                  {item.kind}
                </span>
              </div>
              <h3 className="mt-2 text-lg">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}