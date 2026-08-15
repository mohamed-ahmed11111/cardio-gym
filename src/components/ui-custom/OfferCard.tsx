import { Clock, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/site";
import { formatEGP } from "@/lib/nav";
import type { Offer } from "@/types";
import { CountdownTimer } from "./CountdownTimer";

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("ar-EG", { day: "numeric", month: "long", year: "numeric" });
}

export function OfferCard({ offer, withCountdown = false }: { offer: Offer; withCountdown?: boolean }) {
  return (
    <article className="flex flex-col rounded-2xl border border-border bg-surface p-6 shadow-card transition-all duration-300 hover:-translate-y-1 hover:border-accent/50">
      <div className="flex items-start justify-between gap-3">
        <div>
          <h3 className="text-xl">{offer.title}</h3>
          <p className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-accent-soft px-2.5 py-1 text-xs font-bold text-accent">
            <Tag aria-hidden="true" className="size-3.5" />
            {offer.discount}
          </p>
        </div>
        {offer.badge && (
          <span className="rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-accent-foreground">
            {offer.badge}
          </span>
        )}
      </div>

      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{offer.description}</p>

      <div className="mt-4 flex items-end gap-3">
        <span className="font-display text-3xl font-extrabold text-accent">{formatEGP(offer.newPrice)}</span>
        {offer.newPrice < offer.oldPrice && (
          <span className="pb-1 text-sm text-muted-foreground line-through">{formatEGP(offer.oldPrice)}</span>
        )}
      </div>

      <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground">
        <Clock aria-hidden="true" className="size-3.5" />
        ينتهي في {formatDate(offer.expiresAt)}
      </p>

      {withCountdown && (
        <div className="mt-4">
          <CountdownTimer expiresAt={offer.expiresAt} />
        </div>
      )}

      <Button asChild variant="hero" size="lg" className="mt-5">
        <a
          href={whatsappLink(`السلام عليكم، أرغب في الاستفادة من "${offer.title}" (${offer.discount}).`)}
          target="_blank"
          rel="noopener noreferrer"
        >
          استفد من العرض
        </a>
      </Button>
    </article>
  );
}