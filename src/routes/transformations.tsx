import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui-custom/Reveal";
import { TransformationCard } from "@/components/ui-custom/TransformationCard";
import { transformations } from "@/data/transformations";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/transformations")({
  component: TransformationsPage,
  head: () => ({
    meta: [
      { title: `قصص التحول قبل وبعد | ${siteConfig.name}` },
      { name: "description", content: "نتائج حقيقية لأعضاء تايتن جيم: خسارة وزن، بناء عضلات وتغير كامل في اللياقة." },
      { property: "og:title", content: `قصص التحول | ${siteConfig.name}` },
      { property: "og:description", content: "شاهد صور قبل وبعد لأعضاء حققوا أهدافهم معنا." },
      { property: "og:url", content: "/transformations" },
    ],
    links: [{ rel: "canonical", href: "/transformations" }],
  }),
});

function TransformationsPage() {
  return (
    <>
      <PageHeader eyebrow="التحولات" title="نتائج حقيقية بالصور" description="اسحب المؤشر لمقارنة صورة قبل وبعد لكل عضو." />
      <section className="container-page grid gap-5 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {transformations.map((t, i) => (
          <Reveal key={t.id} delay={i * 0.05}>
            <TransformationCard item={t} />
          </Reveal>
        ))}
      </section>
      <CTASection />
    </>
  );
}
