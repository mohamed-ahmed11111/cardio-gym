import { Link } from "@tanstack/react-router";
import {
  CalendarDays,
  Dumbbell,
  GalleryHorizontalEnd,
  MessageCircle,
  MessageSquareQuote,
  Phone,
  Sparkles,
  Tag,
  Trophy,
  UserRound,
  Wallet,
} from "lucide-react";
import { Reveal } from "@/components/ui-custom/Reveal";

const links = [
  { to: "/offers", label: "العروض", icon: Tag },
  { to: "/trainers", label: "الكباتن", icon: UserRound },
  { to: "/services", label: "الخدمات", icon: Dumbbell },
  { to: "/memberships", label: "الباقات", icon: Wallet },
  { to: "/schedule", label: "المواعيد", icon: CalendarDays },
  { to: "/transformations", label: "قصص النجاح", icon: Sparkles },
  { to: "/achievements", label: "الإنجازات", icon: Trophy },
  { to: "/testimonials", label: "آراء العملاء", icon: MessageSquareQuote },
  { to: "/gallery", label: "المعرض", icon: GalleryHorizontalEnd },
  { to: "/contact", label: "تواصل معنا", icon: Phone },
] as const;

/** Mobile-first shortcut grid so visitors reach every page without the navbar. */
export function QuickNav() {
  return (
    <section className="container-page py-14" aria-labelledby="quick-nav-title">
      <h2 id="quick-nav-title" className="text-center text-2xl sm:text-3xl">
        تنقّل سريع بين أقسام الجيم
      </h2>
      <p className="mx-auto mt-3 max-w-xl text-center text-sm text-muted-foreground">
        اضغط على القسم الذي يهمك للوصول إليه مباشرة.
      </p>
      <Reveal className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
        {links.map(({ to, label, icon: Icon }) => (
          <Link
            key={to}
            to={to}
            className="flex min-h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-border bg-surface p-4 text-center text-sm font-bold transition-all duration-200 hover:-translate-y-1 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            <Icon aria-hidden="true" className="size-5 text-accent" />
            {label}
          </Link>
        ))}
      </Reveal>
      <div className="mt-5 flex justify-center">
        <a
          href="https://wa.me/201271357602"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-xl bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground transition-transform hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="تواصل معنا على واتساب"
        >
          <MessageCircle aria-hidden="true" className="size-4" />
          تواصل عبر WhatsApp
        </a>
      </div>
    </section>
  );
}