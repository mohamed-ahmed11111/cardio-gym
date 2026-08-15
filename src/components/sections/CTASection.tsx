import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { telLink, whatsappLink } from "@/config/site";
import { ContactForm } from "@/components/ui-custom/ContactForm";
import { Reveal } from "@/components/ui-custom/Reveal";

export function CTASection() {
  return (
    <section id="free-trial" className="container-page py-16">
      <Reveal>
        <div className="overflow-hidden rounded-3xl border border-accent/30 bg-surface/70 shadow-glow backdrop-blur">
          <div className="grid gap-8 p-6 sm:p-10 lg:grid-cols-2">
            <div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl">جاهز تبدأ رحلة التغيير؟</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground sm:text-base">
                احجز تجربتك المجانية اليوم وابدأ أول خطوة نحو هدفك.
              </p>
              <ul className="mt-6 space-y-2 text-sm text-muted-foreground">
                <li>• جلسة تدريب تجريبية مجانية بالكامل.</li>
                <li>• تقييم مستوى ولياقة مع مدرب معتمد.</li>
                <li>• توصية بالباقة المناسبة لهدفك وميزانيتك.</li>
              </ul>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl">
                  <a href={whatsappLink("السلام عليكم، أرغب في حجز التجربة المجانية.")} target="_blank" rel="noopener noreferrer">
                    احجز تجربتك المجانية
                  </a>
                </Button>
                <Button asChild variant="heroOutline" size="xl">
                  <a href={telLink}>
                    <Phone aria-hidden="true" />
                    اتصل بنا
                  </a>
                </Button>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-background/50 p-5 sm:p-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
