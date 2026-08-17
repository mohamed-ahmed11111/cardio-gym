/**
 * Centralised, PUBLIC site configuration.
 * Never place secrets here — this file ships to the browser.
 * Values can be overridden per-environment with VITE_* variables.
 */
import { buildWhatsappLink, gymConfig, gymTelLink } from "./gym";

export const siteConfig = {
  name: "TITAN GYM",
  nameAr: "تايتن جيم",
  tagline: "غيّر جسمك... غيّر حياتك",
  city: "بني سويف",
  description:
    "جيم تايتن في بني سويف — تدريب احترافي، أحدث الأجهزة، مدربون معتمدون، وبرامج تغذية مخصصة لكل هدف.",
  phone: gymConfig.phone,
  whatsapp: gymConfig.phone,
  email: gymConfig.email,
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

/** Digits-only number for wa.me links (centralised in src/config/gym.ts). */
export const whatsappDigits = gymConfig.whatsappNumber;

export function whatsappLink(message?: string): string {
  return buildWhatsappLink(message);
}

export const telLink = gymTelLink;