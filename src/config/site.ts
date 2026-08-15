/**
 * Centralised, PUBLIC site configuration.
 * Never place secrets here — this file ships to the browser.
 * Values can be overridden per-environment with VITE_* variables.
 */
const env = import.meta.env as Record<string, string | undefined>;

export const siteConfig = {
  name: "TITAN GYM",
  nameAr: "تايتن جيم",
  tagline: "غيّر جسمك... غيّر حياتك",
  city: "بني سويف",
  description:
    "جيم تايتن في بني سويف — تدريب احترافي، أحدث الأجهزة، مدربون معتمدون، وبرامج تغذية مخصصة لكل هدف.",
  phone: env["VITE_GYM_PHONE"] ?? "+201012345678",
  whatsapp: env["VITE_GYM_WHATSAPP"] ?? "+201012345678",
  email: env["VITE_GYM_EMAIL"] ?? "info@titangym.eg",
  address: "شارع الجمهورية، أمام حديقة الشهيد، بني سويف، مصر",
  mapsUrl: "https://www.google.com/maps?q=Beni+Suef+Egypt",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Beni%20Suef%20Egypt&output=embed",
  social: {
    instagram: "https://instagram.com/",
    facebook: "https://facebook.com/",
    tiktok: "https://tiktok.com/",
  },
  hours: [
    { days: "السبت - الخميس", time: "6:00 ص - 12:00 م" },
    { days: "الجمعة", time: "2:00 م - 11:00 م" },
    { days: "قاعة السيدات", time: "10:00 ص - 6:00 م" },
  ],
} as const;

/** Digits-only number for wa.me links. */
export const whatsappDigits = siteConfig.whatsapp.replace(/\D/g, "");

export function whatsappLink(message?: string): string {
  const text = message ?? `السلام عليكم، أرغب في معرفة تفاصيل الاشتراك في ${siteConfig.nameAr}.`;
  return `https://wa.me/${whatsappDigits}?text=${encodeURIComponent(text)}`;
}

export const telLink = `tel:${siteConfig.phone}`;