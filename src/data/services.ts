import type { Service } from "@/types";
import hall from "@/assets/gallery-hall.jpg";
import equipment from "@/assets/gallery-equipment.jpg";
import classImg from "@/assets/gallery-class.jpg";
import cardio from "@/assets/gallery-cardio.jpg";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer2 from "@/assets/trainer-2.jpg";

export const services: Service[] = [
  {
    id: "bodybuilding",
    title: "كمال الأجسام",
    icon: "Dumbbell",
    short: "برامج تضخيم وتنشيف احترافية لتجهيز الجسم للمنصة أو للشكل الرياضي.",
    description:
      "قسم كمال الأجسام في تايتن جيم مجهّز بأوزان حرة تصل إلى 60 كجم للدمبل، وأجهزة مخصصة لكل مجموعة عضلية. البرنامج يشمل تقسيمًا أسبوعيًا واضحًا، متابعة أرقام، وتصوير تطور شهري.",
    image: hall,
    highlights: ["تقسيم تدريبي أسبوعي", "متابعة أوزان وأرقام", "خطة تغذية مرافقة", "تجهيز للبطولات"],
    level: "متقدم",
  },
  {
    id: "muscle-building",
    title: "بناء العضلات",
    icon: "Flame",
    short: "زيادة الكتلة العضلية النظيفة بأسلوب تدريجي وآمن.",
    description:
      "برنامج مخصص لمن يريد زيادة وزنه بعضل نظيف. نبدأ بتقييم القوة الأساسية ثم نضع خطة تدريبية من 4 أيام أسبوعيًا مع فائض حراري محسوب وقياسات كل أسبوعين.",
    image: equipment,
    highlights: ["تقييم قوة مبدئي", "4 أيام تدريب أسبوعيًا", "فائض حراري محسوب", "قياسات كل أسبوعين"],
    level: "متوسط",
  },
  {
    id: "weight-loss",
    title: "خسارة الوزن",
    icon: "TrendingDown",
    short: "خطط تنشيف واقعية بدون حرمان وبأطعمة متاحة.",
    description:
      "نصمم عجزًا حراريًا مناسبًا لنمط حياتك مع تدريب مقاومة يحافظ على العضلات وكارديو محسوب. البرنامج يشمل بدائل أكل مصرية بسيطة ومتابعة أسبوعية للوزن والمقاسات.",
    image: cardio,
    highlights: ["عجز حراري متدرج", "بدائل أكل محلية", "متابعة أسبوعية", "تدريب يحافظ على العضل"],
    level: "مبتدئ",
  },
  {
    id: "cardio",
    title: "الكارديو",
    icon: "HeartPulse",
    short: "منطقة كارديو حديثة لتحسين لياقة القلب والتحمل.",
    description:
      "منطقة كارديو تضم أجهزة مشي وأوربيتراك ودراجات ثابتة وأجهزة تجديف، مع برامج مناطق نبض (Heart Rate Zones) لتحقيق أقصى حرق دون إجهاد المفاصل.",
    image: cardio,
    highlights: ["أجهزة حديثة", "برامج مناطق نبض", "خطط تحمّل", "مناسب لكل الأعمار"],
    level: "مبتدئ",
  },
  {
    id: "personal-training",
    title: "التدريب الشخصي",
    icon: "UserRound",
    short: "مدرب معك خطوة بخطوة في كل تمرين وكل وجبة.",
    description:
      "جلسات فردية مع مدرب معتمد تركز على الأداء الصحيح للحركة وتصحيح الأخطاء وتحديد الأهداف. تشمل تحليل تركيب الجسم شهريًا وتواصل مباشر مع المدرب طوال الأسبوع.",
    image: trainer1,
    highlights: ["جلسات فردية", "تصحيح الحركة", "تحليل تركيب الجسم", "متابعة يومية"],
    level: "متوسط",
  },
  {
    id: "group-classes",
    title: "التمارين الجماعية",
    icon: "Users",
    short: "حصص HIIT وكارديو وزومبا بطاقة جماعية تحفّزك.",
    description:
      "حصص جماعية يومية بقيادة مدربين متخصصين: HIIT، كروس فيت، زومبا، وستريتشينج. الحصص محدودة العدد لضمان متابعة كل متدرب، ومتاحة لقاعة الرجال وقاعة السيدات.",
    image: classImg,
    highlights: ["حصص يومية", "عدد محدود", "قاعة سيدات مخصصة", "أجواء تحفيزية"],
    level: "مبتدئ",
  },
];

export const featuredServices = services;

export function getServiceById(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}

export const trainerFallbackImage = trainer2;