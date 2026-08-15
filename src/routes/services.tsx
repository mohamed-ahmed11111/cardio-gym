import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui-custom/Reveal";
import { ServiceCard } from "@/components/ui-custom/ServiceCard";
import { services } from "@/data/services";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      { title: `الخدمات وبرامج التدريب | ${siteConfig.name}` },
      { name: "description", content: "كمال أجسام، بناء عضلات، خسارة وزن، كارديو، تدريب شخصي وحصص جماعية — كل التفاصيل والمستويات." },
      { property: "og:title", content: `الخدمات وبرامج التدريب | ${siteConfig.name}` },
      { property: "og:description", content: "استعرض كل برامج التدريب المتاحة في تايتن جيم وتفاصيل كل برنامج." },
      { property: "og:url", content: "/services" },
    ],
    links: [{ rel: "canonical", href: "/services" }],
  }),
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="الخدمات"
        title="برامج تدريب مصممة لهدفك"
        description="كل برنامج له مدرب متخصص، خطة أسبوعية واضحة، ومتابعة قياسات دورية."
      />
      <section className="container-page grid gap-5 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s, i) => (
          <Reveal key={s.id} delay={i * 0.05}>
            <ServiceCard service={s} />
          </Reveal>
        ))}
      </section>
      <CTASection />
    </>
  );
}
