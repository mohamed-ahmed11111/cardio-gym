import { Link } from "@tanstack/react-router";
import { Dumbbell } from "lucide-react";
import { siteConfig } from "@/config/site";

export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <Link
      to="/"
      className="group inline-flex items-center gap-2.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
      aria-label={`${siteConfig.name} — الصفحة الرئيسية`}
    >
      <span className="inline-flex size-9 items-center justify-center rounded-xl bg-accent text-accent-foreground shadow-glow transition-transform group-hover:scale-105">
        <Dumbbell aria-hidden="true" className="size-5" />
      </span>
      <span className="leading-none">
        <span className="block font-display text-lg font-extrabold tracking-tight">
          {siteConfig.name}
        </span>
        {!compact && (
          <span className="block text-[11px] text-muted-foreground">{siteConfig.city}</span>
        )}
      </span>
    </Link>
  );
}
