import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { PlansSection } from "@/components/sections/PlansSection";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/memberships")({
  component: MembershipsPage,
  head: () => ({
    meta: [
      { title: `أسعار الاشتراكات والباقات | ${siteConfig.name}` },
      { name: "description", content: "باقات شهرية وربع سنوية ونصف سنوية وسنوية بأسعار واضحة ومزايا مفصلة لكل باقة." },
      { property: "og:title", content: `أسعار الاشتراكات | ${siteConfig.name}` },
      { property: "og:description", content: "اختر الباقة المناسبة لك وقارن المزايا والأسعار." },
      { property: "og:url", content: "/memberships" },
    ],
    links: [{ rel: "canonical", href: "/memberships" }],
  }),
});

const faqs = [
  { q: "هل يوجد رسوم اشتراك أولى؟", a: "لا، السعر المعروض شامل ولا توجد رسوم مخفية." },
  { q: "هل يمكن تجميد الاشتراك؟", a: "نعم، يمكن تجميد الاشتراك حتى 14 يومًا في الباقات الربع سنوية فأعلى." },
  { q: "هل التدريب الشخصي مشمول؟", a: "مشمول في باقة النخبة، ويمكن إضافته لأي باقة أخرى بسعر خاص." },
];

function MembershipsPage() {
  return (
    <>
      <PageHeader eyebrow="الاشتراكات" title="باقات واضحة بدون رسوم مخفية" description="كل ما عليك اختيار المدة والباقة، والباقي علينا." />
      <section className="container-page py-12">
        <PlansSection />
      </section>
      <section className="container-page pb-12">
        <h2 className="mb-5 text-2xl">أسئلة شائعة</h2>
        <div className="grid gap-3 lg:grid-cols-3">
          {faqs.map((f) => (
            <div key={f.q} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="text-base">{f.q}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{f.a}</p>
            </div>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
