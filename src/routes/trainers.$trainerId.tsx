import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CTASection } from "@/components/sections/CTASection";
import { getTrainerById } from "@/data/trainers";
import { whatsappLink, siteConfig } from "@/config/site";

export const Route = createFileRoute("/trainers/$trainerId")({
  loader: ({ params }) => {
    const trainer = getTrainerById(params.trainerId);
    if (!trainer) throw notFound();
    return { trainer };
  },
  component: TrainerDetailsPage,
  head: ({ loaderData, params }) => ({
    meta: [
      { title: loaderData ? `${loaderData.trainer.name} — مدرب | ${siteConfig.name}` : siteConfig.name },
      { name: "description", content: loaderData?.trainer.bio.slice(0, 155) ?? siteConfig.description },
      { property: "og:title", content: loaderData ? `${loaderData.trainer.name} | ${siteConfig.name}` : siteConfig.name },
      { property: "og:description", content: loaderData?.trainer.bio.slice(0, 155) ?? siteConfig.description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: `/trainers/${params.trainerId}` },
    ],
    links: [{ rel: "canonical", href: `/trainers/${params.trainerId}` }],
  }),
  notFoundComponent: () => (
    <div className="container-page py-24 text-center">
      <h1 className="text-2xl">هذا المدرب غير موجود.</h1>
      <Button asChild variant="hero" size="lg" className="mt-6">
        <Link to="/trainers">كل المدربين</Link>
      </Button>
    </div>
  ),
});

function TrainerDetailsPage() {
  const { trainer } = Route.useLoaderData();

  return (
    <>
      <section className="container-page grid gap-8 py-12 lg:grid-cols-[380px_1fr]">
        <img
          src={trainer.image}
          alt={trainer.name}
          width={900}
          height={1200}
          className="h-[420px] w-full rounded-3xl border border-border object-cover object-top"
        />
        <div>
          <span className="rounded-full border border-accent/40 bg-accent-soft px-3 py-1 text-xs font-bold text-accent">
            {trainer.title}
          </span>
          <h1 className="mt-3 text-3xl sm:text-4xl">{trainer.name}</h1>
          <p className="mt-1 text-sm text-muted-foreground">{trainer.experienceYears}+ سنوات خبرة</p>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{trainer.bio}</p>

          <h2 className="mt-8 text-lg">التخصصات</h2>
          <div className="mt-3 flex flex-wrap gap-2">
            {trainer.specialties.map((s) => (
              <span key={s} className="rounded-full border border-border bg-surface px-3 py-1 text-xs font-semibold">
                {s}
              </span>
            ))}
          </div>

          <h2 className="mt-8 text-lg">الشهادات</h2>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {trainer.certifications.map((c) => (
              <li key={c} className="flex items-start gap-2 rounded-xl border border-border bg-surface p-3 text-sm">
                <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                {c}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <a href={whatsappLink(`السلام عليكم، أرغب في حجز جلسة تدريب مع الكابتن ${trainer.name}.`)} target="_blank" rel="noopener noreferrer">
                احجز مع {trainer.name.split(" ")[0]}
              </a>
            </Button>
            <Button asChild variant="surface" size="lg">
              <Link to="/schedule">شاهد جدول الحصص</Link>
            </Button>
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
