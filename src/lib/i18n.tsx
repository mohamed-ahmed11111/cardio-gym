import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type Locale = "ar" | "en";

const dictionary = {
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    trainers: "المدربين",
    memberships: "الاشتراكات",
    offers: "العروض",
    schedule: "المواعيد",
    transformations: "التحولات",
    achievements: "الإنجازات",
    gallery: "معرض الصور",
    contact: "تواصل معنا",
    testimonials: "آراء الأعضاء",
    joinNow: "اشترك الآن",
    callUs: "اتصل بنا",
    whatsapp: "تواصل عبر WhatsApp",
  },
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    trainers: "Trainers",
    memberships: "Memberships",
    offers: "Offers",
    schedule: "Schedule",
    transformations: "Transformations",
    achievements: "Achievements",
    gallery: "Gallery",
    contact: "Contact",
    testimonials: "Testimonials",
    joinNow: "Join now",
    callUs: "Call us",
    whatsapp: "Chat on WhatsApp",
  },
} satisfies Record<Locale, Record<string, string>>;

export type TranslationKey = keyof (typeof dictionary)["ar"];

interface LocaleContextValue {
  locale: Locale;
  dir: "rtl" | "ltr";
  setLocale: (locale: Locale) => void;
  t: (key: TranslationKey) => string;
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

const STORAGE_KEY = "titan-locale";

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("ar");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === "en" || stored === "ar") setLocaleState(stored);
  }, []);

  useEffect(() => {
    const dir = locale === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", locale);
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      dir: locale === "ar" ? "rtl" : "ltr",
      setLocale,
      t: (key) => dictionary[locale][key],
    }),
    [locale, setLocale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used inside <LocaleProvider>");
  return ctx;
}