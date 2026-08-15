import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export function Rating({ value, className }: { value: number; className?: string }) {
  return (
    <div
      className={cn("flex items-center gap-0.5", className)}
      role="img"
      aria-label={`التقييم ${value} من 5`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          aria-hidden="true"
          className={cn(
            "size-4",
            i < value ? "fill-accent text-accent" : "text-muted-foreground/40",
          )}
        />
      ))}
    </div>
  );
}