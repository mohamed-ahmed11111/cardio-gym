import { Link } from "@tanstack/react-router";
import { Award } from "lucide-react";
import type { Trainer } from "@/types";
import { Rating } from "./Rating";

export function TrainerCard({ trainer }: { trainer: Trainer }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
      <div className="relative aspect-4/5 overflow-hidden">
        <img
          src={trainer.image}
          alt={`صورة ${trainer.name}`}
          loading="lazy"
          width={800}
          height={1000}
          className="size-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/20 to-transparent" />
        <span className="absolute top-3 start-3 inline-flex items-center gap-1 rounded-full bg-background/80 px-2.5 py-1 text-[11px] font-bold backdrop-blur">
          <Award aria-hidden="true" className="size-3.5 text-accent" />
          {trainer.experienceYears} سنوات خبرة
        </span>
      </div>
      <div className="p-5">
        <h3 className="text-lg">{trainer.name}</h3>
        <p className="mt-1 text-sm font-semibold text-accent">{trainer.title}</p>
        <Rating value={trainer.rating} className="mt-2" />
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {trainer.shortBio}
        </p>
        <Link
          to="/trainers/$trainerId"
          params={{ trainerId: trainer.id }}
          className="mt-4 inline-flex w-full items-center justify-center rounded-xl border border-border bg-surface-2 px-4 py-2.5 text-sm font-bold transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          عرض الملف
        </Link>
      </div>
    </article>
  );
}