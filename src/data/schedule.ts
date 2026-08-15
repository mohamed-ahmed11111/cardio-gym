import type { ClassSession } from "@/types";

export const days = ["السبت", "الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"] as const;

export const classTypes = ["بناء عضلات", "HIIT", "كارديو", "كروس فيت", "زومبا", "ستريتشينج"] as const;

export const schedule: ClassSession[] = [
  { id: "s1", day: "السبت", time: "6:00 م", title: "بناء العضلات", type: "بناء عضلات", trainerId: "ahmed-hassan", trainerName: "كابتن أحمد حسن", durationMin: 60, spots: 14 },
  { id: "s2", day: "السبت", time: "7:00 م", title: "HIIT حرق سريع", type: "HIIT", trainerId: "kareem-fathy", trainerName: "كابتن كريم فتحي", durationMin: 30, spots: 18 },
  { id: "s3", day: "السبت", time: "8:00 م", title: "كارديو وتحمّل", type: "كارديو", trainerId: "sara-mahmoud", trainerName: "كابتن سارة محمود", durationMin: 45, spots: 20 },
  { id: "s4", day: "الأحد", time: "11:00 ص", title: "زومبا (قاعة السيدات)", type: "زومبا", trainerId: "sara-mahmoud", trainerName: "كابتن سارة محمود", durationMin: 50, spots: 16 },
  { id: "s5", day: "الأحد", time: "6:30 م", title: "كروس فيت", type: "كروس فيت", trainerId: "kareem-fathy", trainerName: "كابتن كريم فتحي", durationMin: 60, spots: 12 },
  { id: "s6", day: "الأحد", time: "8:30 م", title: "تنشيف وحرق", type: "كارديو", trainerId: "mostafa-adel", trainerName: "كابتن مصطفى عادل", durationMin: 45, spots: 20 },
  { id: "s7", day: "الاثنين", time: "5:00 م", title: "بناء العضلات", type: "بناء عضلات", trainerId: "ahmed-hassan", trainerName: "كابتن أحمد حسن", durationMin: 60, spots: 14 },
  { id: "s8", day: "الاثنين", time: "7:30 م", title: "ستريتشينج ومرونة", type: "ستريتشينج", trainerId: "sara-mahmoud", trainerName: "كابتن سارة محمود", durationMin: 40, spots: 22 },
  { id: "s9", day: "الثلاثاء", time: "10:00 ص", title: "لياقة السيدات", type: "HIIT", trainerId: "sara-mahmoud", trainerName: "كابتن سارة محمود", durationMin: 45, spots: 15 },
  { id: "s10", day: "الثلاثاء", time: "7:00 م", title: "HIIT 30", type: "HIIT", trainerId: "kareem-fathy", trainerName: "كابتن كريم فتحي", durationMin: 30, spots: 18 },
  { id: "s11", day: "الأربعاء", time: "5:00 م", title: "قوة وأوزان حرة", type: "بناء عضلات", trainerId: "ahmed-hassan", trainerName: "كابتن أحمد حسن", durationMin: 60, spots: 14 },
  { id: "s12", day: "الأربعاء", time: "8:00 م", title: "كارديو مسائي", type: "كارديو", trainerId: "mostafa-adel", trainerName: "كابتن مصطفى عادل", durationMin: 45, spots: 20 },
  { id: "s13", day: "الخميس", time: "6:00 م", title: "كروس فيت", type: "كروس فيت", trainerId: "kareem-fathy", trainerName: "كابتن كريم فتحي", durationMin: 60, spots: 12 },
  { id: "s14", day: "الخميس", time: "8:00 م", title: "تدريب دوائر", type: "HIIT", trainerId: "mostafa-adel", trainerName: "كابتن مصطفى عادل", durationMin: 40, spots: 16 },
  { id: "s15", day: "الجمعة", time: "4:00 م", title: "ستريتشينج ومرونة", type: "ستريتشينج", trainerId: "sara-mahmoud", trainerName: "كابتن سارة محمود", durationMin: 40, spots: 20 },
  { id: "s16", day: "الجمعة", time: "6:00 م", title: "بناء العضلات", type: "بناء عضلات", trainerId: "ahmed-hassan", trainerName: "كابتن أحمد حسن", durationMin: 60, spots: 14 },
];

/** Arabic weekday name for a given date, matching the `days` list. */
export function todayName(date = new Date()): string {
  const map = ["الأحد", "الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
  return map[date.getDay()] ?? "السبت";
}

export function sessionsForDay(day: string): ClassSession[] {
  return schedule.filter((s) => s.day === day);
}