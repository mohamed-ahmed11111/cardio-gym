import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, telLink, whatsappLink } from "@/config/site";
import { useLocale } from "@/lib/i18n";
import { navItems } from "@/lib/nav";
import { LanguageSwitcher } from "./LanguageSwitcher";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const { t } = useLocale();

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-90 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <button
            type="button"
            className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            aria-label="إغلاق القائمة"
            onClick={onClose}
          />
          <motion.nav
            className="absolute inset-y-0 end-0 flex w-[86%] max-w-sm flex-col border-s border-border bg-surface p-5"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            aria-label="قائمة التنقل"
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-extrabold">{siteConfig.name}</span>
              <button
                type="button"
                onClick={onClose}
                className="inline-flex size-10 items-center justify-center rounded-xl border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                aria-label="إغلاق القائمة"
              >
                <X aria-hidden="true" className="size-5" />
              </button>
            </div>

            <ul className="mt-6 flex-1 space-y-1 overflow-y-auto">
              {navItems.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={onClose}
                    activeOptions={{ exact: item.to === "/" }}
                    className="block rounded-xl px-4 py-3 text-base font-semibold text-foreground/90 transition-colors hover:bg-surface-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring [&.active]:bg-accent-soft [&.active]:text-accent"
                  >
                    {t(item.key)}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-4 space-y-3 border-t border-border pt-4">
              <LanguageSwitcher className="w-full justify-center" />
              <Button asChild variant="hero" size="xl" className="w-full">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  {t("joinNow")}
                </a>
              </Button>
              <Button asChild variant="surface" size="xl" className="w-full">
                <a href={telLink}>
                  <Phone aria-hidden="true" />
                  {t("callUs")}
                </a>
              </Button>
            </div>
          </motion.nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
