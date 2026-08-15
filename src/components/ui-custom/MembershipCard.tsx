import { Link } from "@tanstack/react-router";
import { Check, Crown, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/site";
import { formatEGP } from "@/lib/nav";
import { cn } from "@/lib/utils";
import type { BillingCycle, Membership } from "@/types";

interface MembershipCardProps {
  plan: Membership;
  cycle: BillingCycle;
  cycleLabel: string;
}

export function MembershipCard({ plan, cycle, cycleLabel }: MembershipCardProps) {
  const price = plan.prices[cycle];

  return (
    <article
      className={cn(
        "relative flex flex-col rounded-2xl border bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-1",
        plan.recommended ? "border-accent/70 shadow-glow" : "border-border hover:border-accent/40",
      )}
    >
      {plan.recommended && (
        <span className="absolute -top-3 start-6 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[11px] font-bold text-accent-foreground">
          <Crown aria-hidden="true" className="size-3.5" />
          الأكثر اختيارًا
        </span>
      )}
      <h3 className="text-xl">{plan.nameAr}</h3>
      <p className="mt-1 text-xs font-bold uppercase tracking-widest text-accent">{plan.name}</p>
      <p className="mt-3 text-sm text-muted-foreground">{plan.tagline}</p>

      <div className="mt-5 flex items-end gap-2">
        <span className="font-display text-4xl font-extrabold">{formatEGP(price)}</span>
        <span className="pb-1 text-sm text-muted-foreground">/ {cycleLabel}</span>
      </div>

      <ul className="mt-5 space-y-2.5 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-2">
            <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
            <span>{f}</span>
          </li>
        ))}
        {plan.notIncluded?.map((f) => (
          <li key={f} className="flex items-start gap-2 text-muted-foreground">
            <X aria-hidden="true" className="mt-0.5 size-4 shrink-0" />
            <span className="line-through">{f}</span>
          </li>
        ))}
      </ul>

      <div className="mt-6 flex flex-col gap-2 sm:flex-row">
        <Button asChild variant={plan.recommended ? "hero" : "surface"} size="lg" className="flex-1">
          <a
            href={whatsappLink(
              `السلام عليكم، أرغب في الاشتراك في باقة ${plan.nameAr} (${plan.name}) لمدة ${cycleLabel}. وأرغب في معرفة التفاصيل.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
          >
            اشترك الآن
          </a>
        </Button>
        <Button asChild variant="ghost" size="lg" className="flex-1 border border-border">
          <Link to="/memberships">اعرف التفاصيل</Link>
        </Button>
      </div>
    </article>
  );
}