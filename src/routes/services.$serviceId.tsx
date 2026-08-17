import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/ui-custom/BackButton";
import { Breadcrumbs } from "@/components/ui-custom/Breadcrumbs";
import { CTASection } from "@/components/sections/CTASection";
import { getServiceById } from "@/data/services";
import { whatsappLink, siteConfig } from "@/config/site";

export const Route = createFileRoute("/services/$serviceId")({
  loader: ({ params }) => {
    const service = getServiceById(params.serviceId);
    if (!service) throw notFound();
    return { service };
  },
  component: ServiceDetailsPage,
  head: ({ loaderData, params }) => ({
    meta: [
      { title: loaderData ? `${loaderData.service.title} | ${siteConfig.name}` : siteConfig.name },
      { name: "description", content: loaderData?.service.short ?? siteConfig.description },
      { property: "og:title", content: loaderData ? `${loaderData.service.title} | ${siteConfig.name}` : siteConfig.name },
      { property: "og:description", content: loaderData?.service.short ?? siteConfig.description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: `/services/${params.serviceId}` },
    ],
    links: [{ rel: "canonical", href: `/services/${params.serviceId}` }],
  }),
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-2xl">عذرًا، هذه الخدمة غير موجودة.</h1>
      <p className="mt-2 text-sm text-muted-foreground">ربما تم تغيير اسم البرنامج أو الرابط غير صحيح.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <Button asChild variant="hero" size="lg">
          <Link to="/services">← العودة إلى الخدمات</Link>
        </Button>
        <Button asChild variant="surface" size="lg">
          <Link to="/">الرئيسية</Link>
        </Button>
      </div>
    </div>
  ),
});

function ServiceDetailsPage() {
  const { service } = Route.useLoaderData();

  return (
    <>
      <div className="container-page flex flex-wrap items-center gap-3 pt-6">
        <BackButton />
        <Breadcrumbs items={[{ label: "الخدمات", to: "/services" }, { label: service.title }]} />
      </div>
      <section className="relative h-64 overflow-hidden sm:h-80">
        <img src={service.image} alt={service.title} width={1200} height={900} className="size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-background/30" />
        <div className="container-page absolute inset-x-0 bottom-6">
          <span className="rounded-full border border-accent/40 bg-accent-soft px-3 py-1 text-xs font-bold text-accent">
            {service.level}
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl">{service.title}</h1>
        </div>
      </section>

      <section className="container-page grid gap-8 py-12 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <p className="text-sm leading-relaxed text-muted-foreground sm:text-base">{service.description}</p>
          <h2 className="mt-8 text-xl">ماذا يشمل البرنامج؟</h2>
          <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
            {service.highlights.map((h) => (
              <li key={h} className="flex items-start gap-2 rounded-xl border border-border bg-surface p-3 text-sm">
                <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                {h}
              </li>
            ))}
          </ul>
        </div>
        <aside className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-lg">ابدأ في هذا البرنامج</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            تواصل معنا لتحديد موعد التقييم المبدئي واختيار الباقة المناسبة.
          </p>
          <div className="mt-5 flex flex-col gap-2">
            <Button asChild variant="hero" size="lg">
              <a href={whatsappLink(`السلام عليكم، أرغب في الاشتراك في برنامج ${service.title}.`)} target="_blank" rel="noopener noreferrer">
                احجز مكانك
              </a>
            </Button>
            <Button asChild variant="surface" size="lg">
              <Link to="/memberships">شاهد الباقات</Link>
            </Button>
            <Button asChild variant="ghost" size="lg" className="border border-border">
              <Link to="/trainers">تعرف على المدربين</Link>
            </Button>
          </div>
        </aside>
      </section>

      <CTASection />
    </>
  );
}
