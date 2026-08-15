import type { Testimonial } from "@/types";
import t1 from "@/assets/after-1.jpg";
import t2 from "@/assets/after-2.jpg";
import t3 from "@/assets/trainer-3.jpg";
import t4 from "@/assets/trainer-4.jpg";
import t5 from "@/assets/trainer-2.jpg";

export const testimonials: Testimonial[] = [
  {
    id: "r1",
    name: "محمد أحمد",
    program: "برنامج التنشيف",
    rating: 5,
    image: t1,
    review: "أفضل جيم دخلته في بني سويف. المدربين بيتابعوا كل تمرين وكل وجبة، والنتيجة بانت من أول شهر.",
    featured: true,
  },
  {
    id: "r2",
    name: "يوسف طارق",
    program: "برنامج التضخيم",
    rating: 5,
    image: t2,
    review: "الأجهزة نضيفة وجديدة والمكان منظم جدًا. زودت 15 كيلو عضل في 6 شهور بمتابعة كابتن أحمد.",
    featured: true,
  },
  {
    id: "r3",
    name: "نورهان سعيد",
    program: "لياقة السيدات",
    rating: 5,
    image: t3,
    review: "قاعة السيدات مريحة وخاصة تمامًا، وكابتن سارة محترمة ومحترفة. حسّيت بفرق كبير في لياقتي.",
    featured: true,
  },
  {
    id: "r4",
    name: "كريم مصطفى",
    program: "HIIT 30",
    rating: 4,
    image: t4,
    review: "حصص HIIT قوية جدًا ومنظمة بالثانية. الزحمة بتزيد بعد الساعة 8 لكن الحصص محدودة العدد وده مريح.",
  },
  {
    id: "r5",
    name: "أحمد سمير",
    program: "الباقة النخبة",
    rating: 5,
    image: t5,
    review: "المتابعة على الواتساب طول الأسبوع فرقت معايا جدًا. نزلت 20 كيلو والتحاليل رجعت طبيعية.",
  },
];

export const featuredTestimonials = testimonials.filter((t) => t.featured);