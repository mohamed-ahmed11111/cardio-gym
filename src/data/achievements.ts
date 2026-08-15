import type { Achievement } from "@/types";

export const achievements: Achievement[] = [
  { id: "a1", year: "2018", title: "تأسيس تايتن جيم", description: "افتتاح أول صالة بمساحة 200 متر في قلب بني سويف بـ 4 مدربين فقط.", kind: "تأسيس" },
  { id: "a2", year: "2020", title: "أول بطولة", description: "لاعبونا يحصدون المركز الثاني في بطولة الصعيد لكمال الأجسام.", kind: "بطولة" },
  { id: "a3", year: "2021", title: "المركز الأول للصعيد", description: "كابتن أحمد حسن يحصد المركز الأول ويجهّز 5 لاعبين للبطولة الجمهورية.", kind: "بطولة" },
  { id: "a4", year: "2023", title: "توسعة صالة التدريب", description: "إضافة 400 متر تشمل قاعة سيدات مغلقة ومنطقة كارديو جديدة بالكامل.", kind: "توسعة" },
  { id: "a5", year: "2024", title: "30 بطولة وإنجاز", description: "وصول رصيد الجيم إلى 30 ميدالية وبطولة على مستوى المحافظة والجمهورية.", kind: "إنجاز" },
  { id: "a6", year: "2026", title: "أكثر من 2500 عضو", description: "تايتن جيم يصبح الأكبر في بني سويف بأكثر من 2500 عضو و15 مدربًا محترفًا.", kind: "إنجاز" },
];

export const gymStats = [
  { id: "members", value: 2500, suffix: "+", label: "عضو" },
  { id: "trainers", value: 15, suffix: "+", label: "مدرب محترف" },
  { id: "years", value: 8, suffix: "+", label: "سنوات خبرة" },
  { id: "titles", value: 30, suffix: "+", label: "بطولة وإنجاز" },
];