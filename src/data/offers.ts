import type { Offer } from "@/types";

/** Offer expiry dates are relative so the countdown always stays alive in the demo. */
function inDays(days: number): string {
  const d = new Date();
  d.setDate(d.getDate() + days);
  d.setHours(23, 59, 0, 0);
  return d.toISOString();
}

export const offers: Offer[] = [
  {
    id: "summer",
    title: "عرض الصيف",
    discount: "خصم 40%",
    description:
      "اشترك في الباقة الاحترافية لمدة 3 شهور واحصل على خصم 40% مع جلسة تحليل تركيب الجسم مجانًا.",
    oldPrice: 1950,
    newPrice: 1170,
    expiresAt: inDays(12),
    featured: true,
    badge: "الأكثر طلبًا",
  },
  {
    id: "students",
    title: "عرض الطلاب",
    discount: "خصم 30%",
    description: "خصم خاص لطلاب الجامعات عند إثبات الكارنيه — صالح على الباقة الأساسية والاحترافية.",
    oldPrice: 650,
    newPrice: 455,
    expiresAt: inDays(25),
  },
  {
    id: "duo",
    title: "عرض الصاحب",
    discount: "اشترك واحصل على 50% لصاحبك",
    description: "سجّل مع صديقك في نفس اليوم واحصل على نصف قيمة اشتراكه الأول.",
    oldPrice: 1300,
    newPrice: 975,
    expiresAt: inDays(18),
  },
  {
    id: "ladies",
    title: "عرض قاعة السيدات",
    discount: "شهر إضافي مجانًا",
    description: "عند الاشتراك 3 شهور في قاعة السيدات تحصلين على شهر رابع مجانًا مع حصص جماعية.",
    oldPrice: 1755,
    newPrice: 1755,
    expiresAt: inDays(30),
  },
  {
    id: "personal",
    title: "باكدج المدرب الشخصي",
    discount: "خصم 20%",
    description: "12 جلسة تدريب شخصي مع خطة تغذية مخصصة بخصم 20% عند الدفع مقدمًا.",
    oldPrice: 3000,
    newPrice: 2400,
    expiresAt: inDays(9),
  },
];

export const featuredOffers = offers.slice(0, 3);
export const mainOffer = offers[0]!;