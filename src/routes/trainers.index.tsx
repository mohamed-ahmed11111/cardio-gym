import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui-custom/Reveal";
import { TrainerCard } from "@/components/ui-custom/TrainerCard";
import { trainers } from "@/data/trainers";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/trainers/")({
  component: TrainersPage,
  head: () => ({
    meta: [
      { title: `المدربون المعتمدون | ${siteConfig.name}` },
      { name: "description", content: "تعرف على فريق مدربي تايتن جيم، تخصصاتهم وشهاداتهم وسنوات خبرتهم." },
      { property: "og:title", content: `المدربون المعتمدون | ${siteConfig.name}` },
      { property: "og:description", content: "فريق مدربين محترف لكل تخصص: كمال أجسام، لياقة، تغذية وحصص السيدات." },
      { property: "og:url", content: "/trainers" },
    ],
    links: [{ rel: "canonical", href: "/trainers" }],
  }),
});

function TrainersPage() {
  return (
    <>
      <PageHeader eyebrow="المدربون" title="فريق يعرف طريق النتائج" description="اختر المدرب المناسب لهدفك واحجز جلسة تعارف مجانية." />
      <section className="container-page grid gap-5 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {trainers.map((t, i) => (
          <Reveal key={t.id} delay={i * 0.05}>
            <TrainerCard trainer={t} />
          </Reveal>
        ))}
      </section>
      <CTASection />
    </>
  );
}
