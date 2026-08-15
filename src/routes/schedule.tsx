import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui-custom/Reveal";
import { ScheduleCard } from "@/components/ui-custom/ScheduleCard";
import { EmptyState } from "@/components/ui-custom/EmptyState";
import { weekDays, sessionsForDay, todayName } from "@/data/schedule";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/schedule")({
  component: SchedulePage,
  head: () => ({
    meta: [
      { title: `جدول الحصص والمواعيد | ${siteConfig.name}` },
      { name: "description", content: "جدول الحصص الأسبوعي لكل يوم مع اسم الحصة والمدرب والمدة وعدد الأماكن." },
      { property: "og:title", content: `جدول الحصص الأسبوعي | ${siteConfig.name}` },
      { property: "og:description", content: "اعرف مواعيد الحصص الجماعية والتدريب واحجز مكانك مبكرًا." },
      { property: "og:url", content: "/schedule" },
    ],
    links: [{ rel: "canonical", href: "/schedule" }],
  }),
});

function SchedulePage() {
  const [day, setDay] = useState<string>(todayName());
  const sessions = sessionsForDay(day);

  return (
    <>
      <PageHeader eyebrow="المواعيد" title="جدول الحصص الأسبوعي" description="اختر اليوم لعرض الحصص المتاحة والمدرب المسؤول." />
      <section className="container-page py-12">
        <div className="mb-8 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="أيام الأسبوع">
          {weekDays.map((d) => (
            <button
              key={d}
              type="button"
              role="tab"
              aria-selected={day === d}
              onClick={() => setDay(d)}
              className={cn(
                "shrink-0 rounded-xl border px-4 py-2.5 text-sm font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                day === d ? "border-accent bg-accent text-accent-foreground" : "border-border bg-surface text-muted-foreground hover:text-foreground",
              )}
            >
              {d}
            </button>
          ))}
        </div>
        {sessions.length ? (
          <div className="grid gap-3 lg:grid-cols-2">
            {sessions.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.04}>
                <ScheduleCard session={s} />
              </Reveal>
            ))}
          </div>
        ) : (
          <EmptyState title="لا توجد حصص في هذا اليوم" description="الصالة مفتوحة للتدريب الحر بمواعيدها المعتادة." />
        )}
      </section>
      <CTASection />
    </>
  );
}
