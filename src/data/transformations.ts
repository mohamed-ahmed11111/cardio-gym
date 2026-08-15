import type { Transformation } from "@/types";
import before1 from "@/assets/before-1.jpg";
import after1 from "@/assets/after-1.jpg";
import before2 from "@/assets/before-2.jpg";
import after2 from "@/assets/after-2.jpg";

export const transformations: Transformation[] = [
  {
    id: "mohamed-ahmed",
    name: "محمد أحمد",
    beforeImage: before1,
    afterImage: after1,
    startWeight: 95,
    currentWeight: 78,
    duration: "16 أسبوع",
    program: "برنامج التنشيف",
    story:
      "بدأت وأنا مش قادر أكمل 10 دقايق كارديو. كابتن مصطفى عمل لي خطة أكل من بيتي وبنفس ميزانيتي، وبعد 16 أسبوع نزلت 17 كيلو وبقيت أقوى من أي وقت.",
    featured: true,
  },
  {
    id: "youssef-tarek",
    name: "يوسف طارق",
    beforeImage: before2,
    afterImage: after2,
    startWeight: 61,
    currentWeight: 76,
    duration: "24 أسبوع",
    program: "برنامج التضخيم",
    story:
      "كنت نحيف جدًا وجربت كل حاجة. البرنامج ركّز على زيادة الأوزان تدريجيًا وأكل منظم، والنتيجة 15 كيلو عضل نظيف في 6 شهور.",
    featured: true,
  },
  {
    id: "ahmed-samir",
    name: "أحمد سمير",
    beforeImage: before1,
    afterImage: after2,
    startWeight: 104,
    currentWeight: 84,
    duration: "22 أسبوع",
    program: "خسارة وزن + مدرب شخصي",
    story:
      "الدكتور حذّرني من السكر والضغط. بدأت بالباقة النخبة ومع المتابعة اليومية نزلت 20 كيلو وتحليلاتي رجعت طبيعية.",
    featured: true,
  },
  {
    id: "mahmoud-ali",
    name: "محمود علي",
    beforeImage: before2,
    afterImage: after1,
    startWeight: 70,
    currentWeight: 79,
    duration: "20 أسبوع",
    program: "برنامج القوة",
    story:
      "هدفي كان أرفع أوزان أعلى. بدأت السكوات 60 كجم ووصلت 130 كجم بأمان وبتكنيك صح تحت إشراف كابتن أحمد.",
  },
];

export const featuredTransformations = transformations.filter((t) => t.featured).slice(0, 3);