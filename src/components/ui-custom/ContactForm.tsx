import { useState } from "react";
import { Loader2, MessageCircle, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { memberships } from "@/data/memberships";
import { whatsappLink } from "@/config/site";

const goals = ["بناء العضلات", "خسارة الوزن", "اللياقة البدنية", "تدريب شخصي", "أخرى"] as const;
const NO_PLAN = "";

interface FormState {
  name: string;
  phone: string;
  goal: string;
  plan: string;
  message: string;
}

const initialState: FormState = {
  name: "",
  phone: "",
  goal: "",
  plan: NO_PLAN,
  message: "",
};

function buildMessage(form: FormState): string {
  const lines = [
    "السلام عليكم، أرغب في الاشتراك في الجيم.",
    `الاسم: ${form.name.trim()}`,
    `رقم الهاتف: ${form.phone.trim()}`,
    `الهدف من التدريب: ${form.goal}`,
  ];
  if (form.plan) lines.push(`الباقة المفضلة: ${form.plan}`);
  if (form.message.trim()) lines.push(`الرسالة: ${form.message.trim()}`);
  return lines.join("\n");
}

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitting, setSubmitting] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((prev) => ({ ...prev, [key]: value }));

  const validate = (): boolean => {
    if (form.name.trim().length < 3) {
      toast.error("من فضلك أدخل اسمك.");
      return false;
    }
    if (!/^[0-9+\s-]{9,15}$/.test(form.phone.trim())) {
      toast.error("من فضلك أدخل رقم هاتف صحيح.");
      return false;
    }
    if (!form.goal) {
      toast.error("من فضلك اختر هدفك من التدريب.");
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    // موقع أمامي فقط (بدون قاعدة بيانات): الطلب يُرسل مباشرة عبر واتساب.
    const url = whatsappLink(buildMessage(form));
    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitting(false);
    toast.success("تم تجهيز رسالتك وفتح واتساب — اضغط إرسال ليصلنا طلبك.");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" noValidate>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-1.5">
          <Label htmlFor="name">الاسم</Label>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            value={form.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="مثال: محمد أحمد"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="phone">رقم الهاتف</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            inputMode="tel"
            dir="ltr"
            autoComplete="tel"
            required
            value={form.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="01012345678"
          />
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="goal">الهدف من التدريب</Label>
          <select
            id="goal"
            name="goal"
            value={form.goal}
            onChange={(e) => update("goal", e.target.value)}
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            {goals.map((g) => (
              <option key={g} value={g}>
                {g}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="plan">الباقة المفضلة</Label>
          <select
            id="plan"
            name="plan"
            value={form.plan}
            onChange={(e) => update("plan", e.target.value)}
            className="h-9 w-full rounded-md border border-input bg-background px-3 text-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            {memberships.map((m) => (
              <option key={m.id} value={m.name}>
                {m.nameAr} ({m.name})
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="message">الرسالة</Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          value={form.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="اكتب أي تفاصيل تساعدنا في خدمتك بشكل أفضل."
        />
      </div>

      <p className="text-xs text-muted-foreground">
        الموقع حاليًا بدون قاعدة بيانات، لذلك يتم إرسال الطلب مباشرة لفريق الجيم عبر واتساب.
      </p>

      <div className="flex flex-col gap-3 sm:flex-row">
        <Button type="submit" variant="hero" size="xl" className="flex-1" disabled={submitting}>
          {submitting ? <Loader2 aria-hidden="true" className="animate-spin" /> : <Send aria-hidden="true" />}
          إرسال الطلب
        </Button>
        <Button asChild variant="heroOutline" size="xl" className="flex-1">
          <a href={whatsappLink(buildMessage(form))} target="_blank" rel="noopener noreferrer">
            <MessageCircle aria-hidden="true" />
            تواصل عبر WhatsApp
          </a>
        </Button>
      </div>
    </form>
  );
}
