import { Link } from "@tanstack/react-router";
import { ArrowLeft, Dumbbell, Flame, HeartPulse, TrendingDown, UserRound, Users } from "lucide-react";
import type { Service } from "@/types";

const icons = { Dumbbell, Flame, HeartPulse, TrendingDown, UserRound, Users };

export function ServiceCard({ service }: { service: Service }) {
  const Icon = icons[service.icon as keyof typeof icons] ?? Dumbbell;

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-border bg-surface shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
      <div className="relative h-40 overflow-hidden sm:h-44">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          width={1200}
          height={900}
          className="size-full object-cover opacity-70 transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
        <span className="absolute bottom-3 start-4 inline-flex size-11 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-glow">
          <Icon aria-hidden="true" className="size-5" />
        </span>
      </div>
      <div className="p-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg">{service.title}</h3>
          <span className="rounded-full border border-border px-2 py-0.5 text-[11px] text-muted-foreground">
            {service.level}
          </span>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.short}</p>
        <Link
          to="/services/$serviceId"
          params={{ serviceId: service.id }}
          className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          اعرف المزيد
          <ArrowLeft aria-hidden="true" className="size-4 transition-transform group-hover:-translate-x-1" />
        </Link>
      </div>
    </article>
  );
}