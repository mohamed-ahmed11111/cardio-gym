import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Award, CalendarDays, Check, Dumbbell, MessageCircle, Star, Trophy, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { BackButton } from "@/components/ui-custom/BackButton";
import { Breadcrumbs } from "@/components/ui-custom/Breadcrumbs";
import { Rating } from "@/components/ui-custom/Rating";
import { Reveal } from "@/components/ui-custom/Reveal";
import { TestimonialCard } from "@/components/ui-custom/TestimonialCard";
import { TransformationCard } from "@/components/ui-custom/TransformationCard";
import { getTrainerById } from "@/data/trainers";
import { schedule } from "@/data/schedule";
import { testimonials } from "@/data/testimonials";
import { transformations } from "@/data/transformations";
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
      <span className="inline-flex rounded-full border border-accent/40 bg-accent-soft px-3 py-1 text-xs font-bold text-accent">
        404
      </span>
      <h1 className="mt-4 text-2xl sm:text-3xl">عذرًا، هذا المدرب غير موجود.</h1>
      <p className="mx-auto mt-3 max-w-md text-sm text-muted-foreground">
        ربما تم تغيير الرابط أو أن المدرب لم يعد جزءًا من الفريق. تفضل بمشاهدة باقي الكباتن.
      </p>
      <div className="mt-7 flex flex-wrap justify-center gap-3">
        <Button asChild variant="hero" size="lg">
          <Link to="/trainers">← العودة إلى المدربين</Link>
        </Button>
        <Button asChild variant="surface" size="lg">
          <Link to="/">الرئيسية</Link>
        </Button>
      </div>
    </div>
  ),
});

function TrainerDetailsPage() {
  const { trainer } = Route.useLoaderData();
  const programNames = trainer.programs.map((p) => p.name);
  const trainerSessions = schedule.filter((s) => s.trainerId === trainer.id);
  const trainerReviews = testimonials.filter((t) => programNames.includes(t.program));
  const trainerTransformations = transformations.filter((t) => programNames.includes(t.program));
  const firstName = trainer.name.replace("كابتن ", "").split(" ")[0];
  const stats = [
    { icon: Trophy, label: "بطولات ومراكز متقدمة", value: `${trainer.achievements.length} إنجاز` },
    { icon: Award, label: "شهادات احترافية", value: `${trainer.certifications.length} شهادة` },
    { icon: Users, label: "متدرب تحت إشرافه", value: `+${trainer.experienceYears * 60} متدرب` },
    { icon: Star, label: "تقييم الأعضاء", value: `${trainer.rating.toFixed(1)}/5` },
  ];

  return (
    <>
      <div className="container-page flex flex-wrap items-center gap-3 pt-6">
        <BackButton />
        <Breadcrumbs items={[{ label: "المدربين", to: "/trainers" }, { label: trainer.name }]} />
      </div>

      <section className="container-page grid gap-8 py-10 lg:grid-cols-[380px_1fr]">
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
          <div className="mt-2 flex flex-wrap items-center gap-3">
            <p className="text-sm text-muted-foreground">{trainer.experienceYears}+ سنوات خبرة</p>
            <Rating value={trainer.rating} />
            <span className="text-sm font-bold text-accent">{trainer.rating.toFixed(1)}/5</span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-muted-foreground sm:text-base">{trainer.shortBio}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {trainer.specialties.map((s) => (
              <span
                key={s}
                className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent-soft px-3 py-1.5 text-xs font-bold text-accent"
              >
                <Dumbbell aria-hidden="true" className="size-3.5" />
                {s}
              </span>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <a
                href={whatsappLink(`السلام عليكم، أرغب في حجز جلسة تدريب مع ${trainer.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                احجز جلسة
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a
                href={whatsappLink(`السلام عليكم، أريد الاستفسار عن التدريب مع ${trainer.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden="true" />
                تواصل عبر WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </section>

      <section className="container-page grid grid-cols-2 gap-3 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="rounded-2xl border border-border bg-surface p-4 text-center">
            <s.icon aria-hidden="true" className="mx-auto size-5 text-accent" />
            <p className="mt-2 font-display text-lg font-extrabold">{s.value}</p>
            <p className="mt-0.5 text-[11px] text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </section>

      <section className="container-page py-14">
        <Reveal className="rounded-3xl border border-border bg-surface/60 p-6 sm:p-8">
          <h2 className="text-xl sm:text-2xl">نبذة عن {firstName}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">{trainer.bio}</p>
          <h3 className="mt-6 text-base">فلسفة التدريب</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            يعتمد {trainer.name} على مبدأ التدرّج المحسوب في الأحمال، مع تصحيح الأداء الحركي أولًا قبل زيادة الأوزان،
            ومتابعة أسبوعية للتغذية والقياسات حتى يصل كل متدرب لهدفه بأمان وبدون إصابات.
          </p>
        </Reveal>
      </section>

      <section className="container-page grid gap-6 pb-14 lg:grid-cols-2">
        <div>
          <h2 className="text-xl">الإنجازات</h2>
          <ul className="mt-4 space-y-2.5">
            {trainer.achievements.map((a) => (
              <li key={a} className="flex items-start gap-2.5 rounded-xl border border-border bg-surface p-4 text-sm">
                <Trophy aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                {a}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl">الشهادات والمؤهلات</h2>
          <ul className="mt-4 space-y-2.5">
            {trainer.certifications.map((c) => (
              <li
                key={c}
                className="flex items-start gap-2.5 rounded-xl border border-border bg-gradient-to-l from-surface to-surface-2 p-4 text-sm"
              >
                <Check aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-page pb-14">
        <h2 className="text-xl">برامج التدريب مع {firstName}</h2>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trainer.programs.map((p) => (
            <article key={p.name} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="text-base">{p.name}</h3>
              <p className="mt-1 text-xs font-bold text-accent">{p.duration}</p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>
              <Button asChild variant="surface" size="sm" className="mt-4 w-full">
                <a
                  href={whatsappLink(`السلام عليكم، أريد الاستفسار عن "${p.name}" مع ${trainer.name}.`)}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  اسأل عن البرنامج
                </a>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="container-page pb-14">
        <h2 className="text-xl">مواعيد التدريب المتاحة</h2>
        <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {trainer.availability.map((a) => (
            <div
              key={a.day}
              className="flex items-center justify-between gap-3 rounded-2xl border border-border bg-surface p-4"
            >
              <span className="inline-flex items-center gap-2 text-sm font-bold">
                <CalendarDays aria-hidden="true" className="size-4 text-accent" />
                {a.day}
              </span>
              <span className="text-sm text-muted-foreground">{a.slots}</span>
            </div>
          ))}
        </div>

        {trainerSessions.length > 0 && (
          <>
            <h3 className="mt-8 text-base">حصص جماعية يقودها {firstName}</h3>
            <ul className="mt-3 divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
              {trainerSessions.map((s) => (
                <li key={s.id} className="flex flex-wrap items-center justify-between gap-2 p-4 text-sm">
                  <span className="font-bold">{s.title}</span>
                  <span className="text-muted-foreground">
                    {s.day} — {s.time} · {s.durationMin} دقيقة
                  </span>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      {trainerReviews.length > 0 && (
        <section className="container-page pb-14">
          <h2 className="text-xl">آراء المتدربين</h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trainerReviews.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.05}>
                <TestimonialCard item={t} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {trainerTransformations.length > 0 && (
        <section className="container-page pb-14">
          <h2 className="text-xl">تحولات تحت إشراف {firstName}</h2>
          <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {trainerTransformations.map((t, i) => (
              <Reveal key={t.id} delay={i * 0.05}>
                <TransformationCard item={t} />
              </Reveal>
            ))}
          </div>
        </section>
      )}

      <section className="container-page pb-16">
        <Reveal className="flex flex-col items-center gap-4 rounded-3xl border border-accent/30 bg-accent-soft/40 p-8 text-center">
          <h2 className="text-2xl">جاهز تبدأ رحلتك مع {trainer.name}؟</h2>
          <p className="max-w-xl text-sm text-muted-foreground">
            احجز جلسة تجريبية وتعرّف على الخطة المناسبة لهدفك قبل الاشتراك.
          </p>
          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <a
                href={whatsappLink(`السلام عليكم، أريد حجز جلسة تجريبية مع ${trainer.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                احجز جلسة تجريبية
              </a>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <a
                href={whatsappLink(`السلام عليكم، أريد الاستفسار عن التدريب مع ${trainer.name}.`)}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle aria-hidden="true" />
                تواصل عبر WhatsApp
              </a>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
