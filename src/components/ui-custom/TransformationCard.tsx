import { ArrowLeft, CalendarDays } from "lucide-react";
import type { Transformation } from "@/types";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export function TransformationCard({ item }: { item: Transformation }) {
  const gained = item.currentWeight > item.startWeight;

  return (
    <article className="rounded-2xl border border-border bg-surface p-4 shadow-card">
      <BeforeAfterSlider beforeImage={item.beforeImage} afterImage={item.afterImage} name={item.name} />
      <div className="mt-4">
        <h3 className="text-lg">{item.name}</h3>
        <p className="mt-2 flex items-center gap-2 font-display text-xl font-extrabold">
          <span className="text-muted-foreground">{item.startWeight} كجم</span>
          <ArrowLeft aria-hidden="true" className="size-4 text-accent" />
          <span className="text-accent">{item.currentWeight} كجم</span>
        </p>
        <p className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1">
            <CalendarDays aria-hidden="true" className="size-3.5" />
            {item.duration}
          </span>
          <span className="rounded-full border border-border px-2 py-0.5">{item.program}</span>
          <span className="font-bold text-accent">
            {gained ? `+${item.currentWeight - item.startWeight} كجم عضل` : `-${item.startWeight - item.currentWeight} كجم`}
          </span>
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.story}</p>
      </div>
    </article>
  );
}