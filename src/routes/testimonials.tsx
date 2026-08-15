import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui-custom/Reveal";
import { TestimonialCard } from "@/components/ui-custom/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/testimonials")({
  component: TestimonialsPage,
  head: () => ({
    meta: [
      { title: `آراء وتقييمات الأعضاء | ${siteConfig.name}` },
      { name: "description", content: "تقييمات حقيقية من أعضاء تايتن جيم عن المدربين والأجهزة والنتائج." },
      { property: "og:title", content: `آراء الأعضاء | ${siteConfig.name}` },
      { property: "og:description", content: "اقرأ تجارب الأعضاء قبل ما تشترك." },
      { property: "og:url", content: "/testimonials" },
    ],
    links: [{ rel: "canonical", href: "/testimonials" }],
  }),
});

function TestimonialsPage() {
  return (
    <>
      <PageHeader eyebrow="آراء الأعضاء" title="تجارب من داخل الجيم" description="تقييمات موثقة من أعضاء حاليين بمختلف الأهداف." />
      <section className="container-page grid gap-5 py-12 sm:grid-cols-2 lg:grid-cols-3">
        {testimonials.map((t, i) => (
          <Reveal key={t.id} delay={i * 0.05}>
            <TestimonialCard item={t} />
          </Reveal>
        ))}
      </section>
      <CTASection />
    </>
  );
}
