import type { TranslationKey } from "./i18n";

export interface NavItem {
  to: string;
  key: TranslationKey;
}

export const navItems: NavItem[] = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/services", key: "services" },
  { to: "/trainers", key: "trainers" },
  { to: "/memberships", key: "memberships" },
  { to: "/offers", key: "offers" },
  { to: "/schedule", key: "schedule" },
  { to: "/transformations", key: "transformations" },
  { to: "/achievements", key: "achievements" },
  { to: "/gallery", key: "gallery" },
  { to: "/contact", key: "contact" },
];

export function formatEGP(value: number): string {
  return `${value.toLocaleString("ar-EG")} ج.م`;
}