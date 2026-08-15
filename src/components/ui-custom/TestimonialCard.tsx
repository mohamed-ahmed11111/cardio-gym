import { Quote } from "lucide-react";
import type { Testimonial } from "@/types";
import { Rating } from "./Rating";

export function TestimonialCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 shadow-card">
      <Quote aria-hidden="true" className="size-7 text-accent/70" />
      <p className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">{item.review}</p>
      <Rating value={item.rating} className="mt-4" />
      <div className="mt-4 flex items-center gap-3 border-t border-border pt-4">
        <img
          src={item.image}
          alt={`صورة ${item.name}`}
          loading="lazy"
          width={80}
          height={80}
          className="size-11 rounded-full object-cover"
        />
        <div>
          <p className="text-sm font-bold">{item.name}</p>
          <p className="text-xs text-muted-foreground">{item.program}</p>
        </div>
      </div>
    </article>
  );
}