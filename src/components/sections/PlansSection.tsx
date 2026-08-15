import { useState } from "react";
import { MembershipCard } from "@/components/ui-custom/MembershipCard";
import { billingCycles, memberships } from "@/data/memberships";
import { cn } from "@/lib/utils";
import type { BillingCycle } from "@/types";

export function PlansSection() {
  const [cycle, setCycle] = useState<BillingCycle>("monthly");
  const current = billingCycles.find((c) => c.id === cycle)!;

  return (
    <div>
      <div className="mb-8 flex flex-wrap justify-center gap-2 rounded-2xl border border-border bg-surface p-2" role="group" aria-label="مدة الاشتراك">
        {billingCycles.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCycle(c.id)}
            aria-pressed={cycle === c.id}
            className={cn(
              "flex-1 rounded-xl px-4 py-2.5 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              cycle === c.id ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground",
            )}
          >
            {c.label}
            {c.note && <span className="ms-1 text-[11px] font-normal opacity-80">({c.note})</span>}
          </button>
        ))}
      </div>
      <div className="grid gap-5 md:grid-cols-3">
        {memberships.map((plan) => (
          <MembershipCard key={plan.id} plan={plan} cycle={cycle} cycleLabel={current.label} />
        ))}
      </div>
    </div>
  );
}
