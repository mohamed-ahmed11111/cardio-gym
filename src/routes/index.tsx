import { createFileRoute, Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Hero } from "@/components/sections/Hero";
import { QuickNav } from "@/components/sections/QuickNav";
import { CTASection } from "@/components/sections/CTASection";
import { PlansSection } from "@/components/sections/PlansSection";
import { SectionHeading } from "@/components/ui-custom/SectionHeading";
import { StatCounter } from "@/components/ui-custom/StatCounter";
import { ServiceCard } from "@/components/ui-custom/ServiceCard";
import { TrainerCard } from "@/components/ui-custom/TrainerCard";
import { OfferCard } from "@/components/ui-custom/OfferCard";
import { ScheduleCard } from "@/components/ui-custom/ScheduleCard";
import { TransformationCard } from "@/components/ui-custom/TransformationCard";
import { TestimonialCard } from "@/components/ui-custom/TestimonialCard";
import { GalleryGrid } from "@/components/ui-custom/GalleryGrid";
import { AchievementTimeline } from "@/components/ui-custom/AchievementTimeline";
import { Reveal } from "@/components/ui-custom/Reveal";
import { EmptyState } from "@/components/ui-custom/EmptyState";
import { achievements, gymStats } from "@/data/achievements";
import { featuredServices } from "@/data/services";
import { featuredTrainers } from "@/data/trainers";
import { featuredOffers, mainOffer } from "@/data/offers";
import { sessionsForDay, todayName } from "@/data/schedule";
import { featuredTransformations } from "@/data/transformations";
import { featuredTestimonials } from "@/data/testimonials";
import { featuredGallery } from "@/data/gallery";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: `أفضل جيم في ${siteConfig.city} | ${siteConfig.name}` },
      { name: "description", content: siteConfig.description },
      { property: "og:title", content: `${siteConfig.name} — غيّر جسمك... غيّر حياتك` },
      { property: "og:description", content: siteConfig.description },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function HomePage() {
  const today = todayName();
  const todaySessions = sessionsForDay(today).slice(0, 3);

  return (
    <>
      <Hero />

      <section className="container-page -mt-10 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {gymStats.map((s) => (
          <StatCounter key={s.id} value={s.value} suffix={s.suffix} label={s.label} />
        ))}
      </section>

      <QuickNav />

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="خدماتنا"
          title="برامج تدريب لكل هدف"
          description="من كمال الأجسام إلى خسارة الوزن والحصص الجماعية — كل قسم بمدرب متخصص وخطة واضحة."
          ctaLabel="اكتشف جميع الخدمات"
          ctaTo="/services"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredServices.slice(0, 6).map((s, i) => (
            <Reveal key={s.id} delay={i * 0.05}>
              <ServiceCard service={s} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="المدربين"
          title="فريق مدربين معتمد"
          description="مدربون بخبرة تتجاوز 5 سنوات وشهادات دولية، يتابعون تمرينك ووجباتك أسبوعيًا."
          ctaLabel="شاهد جميع المدربين"
          ctaTo="/trainers"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTrainers.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.05}>
              <TrainerCard trainer={t} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="الاشتراكات"
          title="باقات مرنة تناسب هدفك"
          description="اختر المدة المناسبة وشاهد السعر يتحدث فورًا — بدون رسوم مخفية."
          ctaLabel="شاهد جميع الباقات"
          ctaTo="/memberships"
        />
        <PlansSection />
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="العروض"
          title="عروض سارية الآن"
          description="عروض محدودة المدة على الباقات والتدريب الشخصي."
          ctaLabel="عرض كل العروض"
          ctaTo="/offers"
        />
        <div className="grid gap-5 lg:grid-cols-3">
          {featuredOffers.map((o, i) => (
            <Reveal key={o.id} delay={i * 0.05}>
              <OfferCard offer={o} withCountdown={o.id === mainOffer.id} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="المواعيد"
          title={`حصص اليوم — ${today}`}
          description="حصص محدودة العدد لضمان متابعة كل متدرب."
          ctaLabel="عرض الجدول كامل"
          ctaTo="/schedule"
        />
        {todaySessions.length ? (
          <div className="grid gap-3 lg:grid-cols-3">
            {todaySessions.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.05}>
                <ScheduleCard session={s} />
              </Reveal>
            ))}
          </div>
        ) : (
          <EmptyState title="لا توجد حصص جماعية اليوم" description="الصالة مفتوحة بمواعيدها المعتادة للتدريب الحر." />
        )}
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="التحولات"
          title="نتائج حقيقية لأعضاء حقيقيين"
          description="اسحب الصورة لمقارنة قبل وبعد."
          ctaLabel="شاهد قصص النجاح"
          ctaTo="/transformations"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTransformations.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.05}>
              <TransformationCard item={t} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="الإنجازات"
          title="مسيرة 8 سنوات من البطولات"
          ctaLabel="اكتشف إنجازاتنا"
          ctaTo="/achievements"
        />
        <AchievementTimeline items={achievements.slice(-3)} />
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="آراء الأعضاء"
          title="ماذا يقول أعضاؤنا؟"
          ctaLabel="شاهد جميع الآراء"
          ctaTo="/testimonials"
        />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {featuredTestimonials.map((t, i) => (
            <Reveal key={t.id} delay={i * 0.05}>
              <TestimonialCard item={t} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page py-16">
        <SectionHeading
          eyebrow="معرض الصور"
          title="من داخل تايتن جيم"
          ctaLabel="شاهد المعرض كامل"
          ctaTo="/gallery"
        />
        <GalleryGrid items={featuredGallery} />
      </section>

      <CTASection />

      <section className="container-page pb-16">
        <Reveal className="flex flex-col items-center gap-4 rounded-3xl border border-border bg-surface/60 p-8 text-center">
          <h2 className="text-2xl">عندك سؤال قبل الاشتراك؟</h2>
          <p className="max-w-xl text-sm text-muted-foreground">
            اعرف أكثر عن قصتنا وتجهيزات الجيم، أو تواصل مع الفريق مباشرة.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/about">من نحن</Link>
            </Button>
            <Button asChild variant="surface" size="lg">
              <Link to="/contact">تواصل معنا</Link>
            </Button>
          </div>
        </Reveal>
      </section>
    </>
  );
}
