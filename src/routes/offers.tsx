import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui-custom/Reveal";
import { OfferCard } from "@/components/ui-custom/OfferCard";
import { EmptyState } from "@/components/ui-custom/EmptyState";
import { offers, mainOffer } from "@/data/offers";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/offers")({
  component: OffersPage,
  head: () => ({
    meta: [
      { title: `العروض والخصومات | ${siteConfig.name}` },
      { name: "description", content: "عروض محدودة المدة على اشتراكات تايتن جيم والتدريب الشخصي وباقات الأصدقاء." },
      { property: "og:title", content: `العروض والخصومات | ${siteConfig.name}` },
      { property: "og:description", content: "استفد من العروض السارية قبل انتهاء المدة." },
      { property: "og:url", content: "/offers" },
    ],
    links: [{ rel: "canonical", href: "/offers" }],
  }),
});

function OffersPage() {
  return (
    <>
      <PageHeader eyebrow="العروض" title="عروض لفترة محدودة" description="خصومات حقيقية على الباقات والتدريب الشخصي — العد التنازلي يوضح الوقت المتبقي." />
      <section className="container-page py-12">
        {offers.length ? (
          <div className="grid gap-5 lg:grid-cols-3">
            {offers.map((o, i) => (
              <Reveal key={o.id} delay={i * 0.05}>
                <OfferCard offer={o} withCountdown={o.id === mainOffer.id} />
              </Reveal>
            ))}
          </div>
        ) : (
          <EmptyState title="لا توجد عروض حالية" description="تابعنا على إنستجرام لتصلك العروض القادمة أولًا." />
        )}
      </section>
      <CTASection />
    </>
  );
}
