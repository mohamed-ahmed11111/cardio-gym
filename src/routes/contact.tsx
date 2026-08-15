import { createFileRoute } from "@tanstack/react-router";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactForm } from "@/components/ui-custom/ContactForm";
import { siteConfig, telLink, whatsappLink } from "@/config/site";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: `تواصل معنا واحجز جلسة تجريبية | ${siteConfig.name}` },
      { name: "description", content: `العنوان ومواعيد العمل وأرقام التواصل مع ${siteConfig.nameAr}، أو أرسل رسالتك مباشرة على واتساب.` },
      { property: "og:title", content: `تواصل معنا | ${siteConfig.name}` },
      { property: "og:description", content: "احجز جلستك التجريبية المجانية أو اسأل عن الباقات." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactPage() {
  const items = [
    { icon: MapPin, label: "العنوان", value: siteConfig.address },
    { icon: Phone, label: "الهاتف", value: siteConfig.phoneDisplay },
    { icon: Mail, label: "البريد الإلكتروني", value: siteConfig.email },
    { icon: Clock, label: "مواعيد العمل", value: siteConfig.hours },
  ];

  return (
    <>
      <PageHeader eyebrow="تواصل معنا" title="زورنا أو كلمنا في أي وقت" description="فريقنا جاهز للرد على أسئلتك وحجز جلستك التجريبية المجانية." />
      <section className="container-page grid gap-8 py-12 lg:grid-cols-[1fr_420px]">
        <div className="space-y-4">
          {items.map((it) => (
            <div key={it.label} className="flex items-start gap-3 rounded-2xl border border-border bg-surface p-5">
              <span className="rounded-xl bg-accent-soft p-2.5 text-accent">
                <it.icon aria-hidden="true" className="size-5" />
              </span>
              <div>
                <p className="text-sm font-bold">{it.label}</p>
                <p className="mt-1 text-sm text-muted-foreground">{it.value}</p>
              </div>
            </div>
          ))}
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <a href={whatsappLink("السلام عليكم، أرغب في الاستفسار عن الاشتراك.")} target="_blank" rel="noopener noreferrer">
                راسلنا على واتساب
              </a>
            </Button>
            <Button asChild variant="surface" size="lg">
              <a href={telLink()}>اتصل بنا</a>
            </Button>
          </div>
        </div>
        <ContactForm />
      </section>
    </>
  );
}
