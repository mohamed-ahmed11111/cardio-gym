import type { BillingCycle, Membership } from "@/types";

export const billingCycles: { id: BillingCycle; label: string; months: number; note?: string }[] = [
  { id: "monthly", label: "شهري", months: 1 },
  { id: "quarterly", label: "3 شهور", months: 3, note: "وفّر 10%" },
  { id: "half", label: "6 شهور", months: 6, note: "وفّر 18%" },
  { id: "yearly", label: "سنوي", months: 12, note: "وفّر 25%" },
];

export const memberships: Membership[] = [
  {
    id: "basic",
    name: "Basic",
    nameAr: "الباقة الأساسية",
    tagline: "بداية مثالية لأول خطوة في رحلتك.",
    prices: { monthly: 400, quarterly: 1080, half: 1980, yearly: 3600 },
    features: ["دخول كامل لصالة الأوزان", "لوكر شخصي", "منطقة الكارديو", "جلسة تقييم مبدئية"],
    notIncluded: ["الحصص الجماعية", "مدرب شخصي"],
  },
  {
    id: "pro",
    name: "Pro",
    nameAr: "الباقة الاحترافية",
    tagline: "الأكثر اختيارًا بين أعضاء تايتن جيم.",
    recommended: true,
    prices: { monthly: 650, quarterly: 1755, half: 3200, yearly: 5850 },
    features: [
      "دخول كامل لجميع الأقسام",
      "الحصص الجماعية بدون حدود",
      "إرشاد تغذية شهري",
      "لوكر شخصي",
      "متابعة قياسات كل شهر",
    ],
    notIncluded: ["مدرب شخصي يومي"],
  },
  {
    id: "elite",
    name: "Elite",
    nameAr: "الباقة النخبة",
    tagline: "متابعة كاملة من مدرب خاص حتى تحقيق الهدف.",
    prices: { monthly: 1200, quarterly: 3240, half: 5900, yearly: 10800 },
    features: [
      "كل مزايا الباقة الاحترافية",
      "مدرب شخصي مخصص",
      "خطة تغذية مخصصة بالكامل",
      "تحليل تركيب الجسم (InBody)",
      "أولوية حجز الحصص",
      "متابعة واتساب مباشرة",
    ],
  },
];

export function cycleLabel(cycle: BillingCycle): string {
  return billingCycles.find((c) => c.id === cycle)?.label ?? "شهري";
}