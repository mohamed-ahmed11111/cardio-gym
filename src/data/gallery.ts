import type { GalleryCategory, GalleryItem } from "@/types";
import hall from "@/assets/gallery-hall.jpg";
import equipment from "@/assets/gallery-equipment.jpg";
import classImg from "@/assets/gallery-class.jpg";
import cardio from "@/assets/gallery-cardio.jpg";
import championship from "@/assets/gallery-championship.jpg";
import event from "@/assets/gallery-event.jpg";
import trainer1 from "@/assets/trainer-1.jpg";
import trainer3 from "@/assets/trainer-3.jpg";
import trainer4 from "@/assets/trainer-4.jpg";

export const galleryCategories: GalleryCategory[] = [
  "صالة التدريب",
  "الأجهزة",
  "المدربين",
  "التمارين",
  "البطولات",
  "الفعاليات",
];

export const gallery: GalleryItem[] = [
  { id: "g1", src: hall, alt: "صالة التدريب الرئيسية في تايتن جيم بإضاءة حمراء", category: "صالة التدريب", featured: true },
  { id: "g2", src: equipment, alt: "رفوف الدمبل والأجهزة الحديثة داخل الجيم", category: "الأجهزة", featured: true },
  { id: "g3", src: classImg, alt: "حصة تمارين جماعية HIIT داخل استوديو التدريب", category: "التمارين", featured: true },
  { id: "g4", src: cardio, alt: "منطقة الكارديو وأجهزة المشي", category: "الأجهزة", featured: true },
  { id: "g5", src: championship, alt: "لاعبو الجيم على منصة بطولة كمال الأجسام", category: "البطولات", featured: true },
  { id: "g6", src: event, alt: "فعالية جماعية لأعضاء الجيم", category: "الفعاليات", featured: true },
  { id: "g7", src: trainer1, alt: "كابتن أحمد حسن مدرب كمال الأجسام", category: "المدربين" },
  { id: "g8", src: trainer3, alt: "كابتن سارة محمود مدربة اللياقة", category: "المدربين" },
  { id: "g9", src: trainer4, alt: "كابتن كريم فتحي مدرب HIIT", category: "المدربين" },
  { id: "g10", src: hall, alt: "منطقة الأوزان الحرة", category: "صالة التدريب" },
  { id: "g11", src: classImg, alt: "تمرين دوائر جماعي", category: "التمارين" },
  { id: "g12", src: championship, alt: "ميداليات وكؤوس الجيم", category: "البطولات" },
];

export const featuredGallery = gallery.filter((g) => g.featured).slice(0, 6);