import { Link } from "@tanstack/react-router";
import { Clock, Facebook, Instagram, Mail, MapPin, MessageCircle, Music2, Phone } from "lucide-react";
import { siteConfig, telLink, whatsappLink } from "@/config/site";
import { services } from "@/data/services";
import { Logo } from "./Logo";

const quickLinks = [
  { to: "/about", label: "من نحن" },
  { to: "/memberships", label: "الاشتراكات" },
  { to: "/offers", label: "العروض" },
  { to: "/schedule", label: "المواعيد" },
  { to: "/transformations", label: "التحولات" },
  { to: "/gallery", label: "معرض الصور" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border bg-surface/60">
      <div className="container-page grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {siteConfig.description}
          </p>
          <div className="mt-4 flex items-center gap-2">
            <a
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="إنستجرام"
              className="inline-flex size-10 items-center justify-center rounded-xl border border-border transition-colors hover:border-accent hover:text-accent"
            >
              <Instagram aria-hidden="true" className="size-4" />
            </a>
            <a
              href={siteConfig.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="فيسبوك"
              className="inline-flex size-10 items-center justify-center rounded-xl border border-border transition-colors hover:border-accent hover:text-accent"
            >
              <Facebook aria-hidden="true" className="size-4" />
            </a>
            <a
              href={siteConfig.social.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="تيك توك"
              className="inline-flex size-10 items-center justify-center rounded-xl border border-border transition-colors hover:border-accent hover:text-accent"
            >
              <Music2 aria-hidden="true" className="size-4" />
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="واتساب"
              className="inline-flex size-10 items-center justify-center rounded-xl border border-border transition-colors hover:border-accent hover:text-accent"
            >
              <MessageCircle aria-hidden="true" className="size-4" />
            </a>
          </div>
        </div>

        <nav aria-label="روابط سريعة">
          <h2 className="text-base">روابط سريعة</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link to={l.to} className="text-muted-foreground transition-colors hover:text-accent">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="الخدمات">
          <h2 className="text-base">الخدمات</h2>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.id}>
                <Link
                  to="/services/$serviceId"
                  params={{ serviceId: s.id }}
                  className="text-muted-foreground transition-colors hover:text-accent"
                >
                  {s.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="text-base">تواصل معنا</h2>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-accent" />
              <span>{siteConfig.address}</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone aria-hidden="true" className="size-4 shrink-0 text-accent" />
              <a href={telLink} dir="ltr" className="hover:text-accent">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Mail aria-hidden="true" className="size-4 shrink-0 text-accent" />
              <a href={`mailto:${siteConfig.email}`} dir="ltr" className="hover:text-accent">
                {siteConfig.email}
              </a>
            </li>
            {siteConfig.hours.map((h) => (
              <li key={h.days} className="flex items-center gap-2">
                <Clock aria-hidden="true" className="size-4 shrink-0 text-accent" />
                <span>
                  {h.days}: {h.time}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-border py-5">
        <p className="container-page text-center text-xs text-muted-foreground">
          © 2026 {siteConfig.name}. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
