import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Crumb {
  label: string;
  /** Omit on the current (last) crumb. */
  to?: string;
  params?: Record<string, string>;
}

export function Breadcrumbs({ items, className }: { items: Crumb[]; className?: string }) {
  return (
    <nav aria-label="مسار التنقل" className={cn("text-xs text-muted-foreground", className)}>
      <ol className="flex flex-wrap items-center gap-1.5">
        <li className="flex items-center gap-1.5">
          <Link to="/" className="transition-colors hover:text-accent">
            الرئيسية
          </Link>
        </li>
        {items.map((c, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={`${c.label}-${i}`} className="flex items-center gap-1.5">
              <ChevronLeft aria-hidden="true" className="size-3 opacity-50" />
              {isLast || !c.to ? (
                <span aria-current="page" className="font-semibold text-foreground/80">
                  {c.label}
                </span>
              ) : (
                <Link to={c.to} params={c.params} className="transition-colors hover:text-accent">
                  {c.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}