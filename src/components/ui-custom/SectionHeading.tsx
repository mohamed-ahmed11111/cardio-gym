import { Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Reveal } from "./Reveal";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  ctaLabel?: string;
  ctaTo?: string;
  align?: "start" | "center";
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  ctaLabel,
  ctaTo,
  align = "start",
}: SectionHeadingProps) {
  return (
    <Reveal className="mb-8 md:mb-12">
      <div
        className={
          align === "center"
            ? "flex flex-col items-center text-center gap-3"
            : "flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        }
      >
        <div className={align === "center" ? "max-w-2xl" : "max-w-2xl"}>
          {eyebrow && (
            <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-3 py-1 text-xs font-bold text-accent">
              {eyebrow}
            </span>
          )}
          <h2 className="text-2xl leading-tight sm:text-3xl md:text-4xl">{title}</h2>
          {description && (
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
              {description}
            </p>
          )}
        </div>
        {ctaLabel && ctaTo && (
          <Link
            to={ctaTo}
            className="group inline-flex shrink-0 items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-sm font-bold transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {ctaLabel}
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-1 rtl:rotate-0 ltr:rotate-180" />
          </Link>
        )}
      </div>
    </Reveal>
  );
}