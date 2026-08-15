import { useLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale } = useLocale();

  return (
    <div
      className={cn("inline-flex rounded-full border border-border bg-surface p-0.5", className)}
      role="group"
      aria-label="تبديل اللغة"
    >
      {(["ar", "en"] as const).map((code) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={cn(
            "rounded-full px-3 py-1 text-xs font-bold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
            locale === code ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground",
          )}
        >
          {code === "ar" ? "العربية" : "English"}
        </button>
      ))}
    </div>
  );
}
