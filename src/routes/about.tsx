import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { Reveal } from "@/components/ui-custom/Reveal";
import { StatCounter } from "@/components/ui-custom/StatCounter";
import { gymStats } from "@/data/achievements";
import { featuredGallery } from "@/data/gallery";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: `من نحن | ${siteConfig.name}` },
      { name: "description", content: `قصة ${siteConfig.nameAr}، رؤيتنا ورسالتنا وتجهيزات الصالة في ${siteConfig.city}.` },
      { property: "og:title", content: `من نحن | ${siteConfig.name}` },
      { property: "og:description", content: `تعرف على قصة ${siteConfig.nameAr} وتجهيزاتنا وفريق المدربين.` },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
});

const values = [
  { title: "الاحترافية", text: "كل مدرب معتمد ويتابع خطة مكتوبة لكل عضو، بدون تجارب عشوائية." },
  { title: "النظافة", text: "تطهير يومي للأجهزة ودورات مياه ولوكرات نظيفة على مدار اليوم." },
  { title: "الاحترام", text: "بيئة محترمة للجميع مع قاعة سيدات مغلقة بمواعيد مخصصة." },
  { title: "الاستمرارية", text: "نبني عادات تدريب تستمر بعد انتهاء البرنامج، لا نتائج مؤقتة." },
];

const facilities = [
  "صالة أوزان حرة 400 متر بدمبلات حتى 60 كجم",
  "منطقة كارديو بأجهزة مشي وتجديف ودراجات حديثة",
  "استوديو مخصص للحصص الجماعية وHIIT",
  "قاعة سيدات مغلقة بمدربة متخصصة",
  "غرف تغيير ولوكرات شخصية ودشات",
  "بار مكملات وعصائر طبيعية",
];

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="من نحن"
        title={`قصة ${siteConfig.nameAr}`}
        description={`بدأنا في 2018 بصالة صغيرة و4 مدربين، والنهاردة بقينا أكبر جيم في ${siteConfig.city} بأكثر من 2500 عضو و15 مدربًا محترفًا.`}
      />

      <section className="container-page grid gap-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
        {gymStats.map((s) => (
          <StatCounter key={s.id} value={s.value} suffix={s.suffix} label={s.label} />
        ))}
      </section>

      <section className="container-page grid gap-6 pb-12 lg:grid-cols-2">
        <Reveal className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-xl">رؤيتنا</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            أن يكون تايتن جيم المكان الأول الذي يفكر فيه أي شخص في صعيد مصر عندما يقرر تغيير صحته وجسمه،
            بمعايير تدريب وتغذية تنافس أكبر الصالات في القاهرة.
          </p>
        </Reveal>
        <Reveal delay={0.06} className="rounded-2xl border border-border bg-surface p-6">
          <h2 className="text-xl">رسالتنا</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            نقدّم تدريبًا آمنًا ومبنيًا على العلم، بخطط واقعية تناسب أكل وميزانية الأسرة المصرية،
            مع متابعة شخصية حتى الوصول للهدف.
          </p>
        </Reveal>
      </section>

      <section className="container-page pb-12">
        <h2 className="mb-6 text-2xl">قيمنا</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.05} className="rounded-2xl border border-border bg-surface p-5">
              <h3 className="text-lg text-accent">{v.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-page grid gap-8 pb-12 lg:grid-cols-2">
        <div>
          <h2 className="text-2xl">التجهيزات والأجهزة</h2>
          <ul className="mt-5 space-y-2.5 text-sm text-muted-foreground">
            {facilities.map((f) => (
              <li key={f} className="flex gap-2">
                <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" />
                <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {featuredGallery.slice(0, 4).map((g) => (
            <img
              key={g.id}
              src={g.src}
              alt={g.alt}
              loading="lazy"
              width={1200}
              height={900}
              className="h-40 w-full rounded-2xl border border-border object-cover sm:h-48"
            />
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
