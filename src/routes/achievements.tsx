import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { StatCounter } from "@/components/ui-custom/StatCounter";
import { AchievementTimeline } from "@/components/ui-custom/AchievementTimeline";
import { achievements, gymStats } from "@/data/achievements";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/achievements")({
  component: AchievementsPage,
  head: () => ({
    meta: [
      { title: `إنجازات وبطولات الجيم | ${siteConfig.name}` },
      { name: "description", content: "بطولات وميداليات وشهادات اعتماد حققها فريق ولاعبو تايتن جيم عبر السنوات." },
      { property: "og:title", content: `إنجازاتنا | ${siteConfig.name}` },
      { property: "og:description", content: "مسيرة من البطولات المحلية والدولية وشهادات الاعتماد." },
      { property: "og:url", content: "/achievements" },
    ],
    links: [{ rel: "canonical", href: "/achievements" }],
  }),
});

function AchievementsPage() {
  return (
    <>
      <PageHeader eyebrow="الإنجازات" title="مسيرة من البطولات" description="كل عام نضيف إنجازًا جديدًا بفضل لاعبينا ومدربينا." />
      <section className="container-page grid gap-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {gymStats.map((s) => (
          <StatCounter key={s.id} value={s.value} suffix={s.suffix} label={s.label} />
        ))}
      </section>
      <section className="container-page pb-12">
        <AchievementTimeline items={achievements} />
      </section>
      <CTASection />
    </>
  );
}
