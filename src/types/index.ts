export interface Trainer {
  id: string;
  name: string;
  title: string;
  specialties: string[];
  experienceYears: number;
  rating: number;
  image: string;
  shortBio: string;
  bio: string;
  certifications: string[];
  achievements: string[];
  programs: { name: string; duration: string; description: string }[];
  availability: { day: string; slots: string }[];
}

export interface Service {
  id: string;
  title: string;
  icon: string;
  short: string;
  description: string;
  image: string;
  highlights: string[];
  level: "مبتدئ" | "متوسط" | "متقدم";
}

export type BillingCycle = "monthly" | "quarterly" | "half" | "yearly";

export interface Membership {
  id: string;
  name: string;
  nameAr: string;
  tagline: string;
  recommended?: boolean;
  prices: Record<BillingCycle, number>;
  features: string[];
  notIncluded?: string[];
}

export interface Offer {
  id: string;
  title: string;
  discount: string;
  description: string;
  oldPrice: number;
  newPrice: number;
  expiresAt: string;
  featured?: boolean;
  badge?: string;
}

export interface ClassSession {
  id: string;
  day: string;
  time: string;
  title: string;
  type: string;
  trainerId: string;
  trainerName: string;
  durationMin: number;
  spots: number;
}

export interface Transformation {
  id: string;
  name: string;
  beforeImage: string;
  afterImage: string;
  startWeight: number;
  currentWeight: number;
  duration: string;
  program: string;
  story: string;
  featured?: boolean;
}

export interface Achievement {
  id: string;
  year: string;
  title: string;
  description: string;
  kind: "بطولة" | "توسعة" | "إنجاز" | "تأسيس";
}

export interface Testimonial {
  id: string;
  name: string;
  program: string;
  rating: number;
  image: string;
  review: string;
  featured?: boolean;
}

export type GalleryCategory =
  | "صالة التدريب"
  | "الأجهزة"
  | "المدربين"
  | "التمارين"
  | "البطولات"
  | "الفعاليات";

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: GalleryCategory;
  featured?: boolean;
}