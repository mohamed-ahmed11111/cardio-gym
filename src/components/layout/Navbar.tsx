import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { whatsappLink } from "@/config/site";
import { useLocale } from "@/lib/i18n";
import { navItems } from "@/lib/nav";
import { cn } from "@/lib/utils";
import { LanguageSwitcher } from "./LanguageSwitcher";
import { Logo } from "./Logo";
import { MobileMenu } from "./MobileMenu";

export function Navbar() {
  const { t } = useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-80 w-full border-b transition-colors duration-300",
        scrolled ? "border-border bg-background/85 backdrop-blur-xl" : "border-transparent bg-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="القائمة الرئيسية" className="hidden lg:block">
          <ul className="flex items-center gap-0.5">
            {navItems.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  activeOptions={{ exact: item.to === "/" }}
                  className="rounded-lg px-2.5 py-2 text-[13px] font-semibold text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&.active]:text-accent"
                >
                  {t(item.key)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher className="hidden sm:inline-flex" />
          <Button asChild variant="hero" className="hidden sm:inline-flex">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              {t("joinNow")}
            </a>
          </Button>
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            className="inline-flex size-11 items-center justify-center rounded-xl border border-border bg-surface lg:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            aria-label="فتح القائمة"
            aria-expanded={menuOpen}
          >
            <Menu aria-hidden="true" className="size-5" />
          </button>
        </div>
      </div>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
    </header>
  );
}
