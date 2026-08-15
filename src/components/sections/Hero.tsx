import { Link } from "@tanstack/react-router";
import { motion, useReducedMotion } from "motion/react";
import { ChevronDown, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig, whatsappLink } from "@/config/site";
import heroImage from "@/assets/hero-gym.jpg";

export function Hero() {
  const reduced = useReducedMotion();
  const fade = (delay: number) =>
    reduced
      ? {}
      : {
          initial: { opacity: 0, y: 26 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] as const },
        };

  return (
    <section className="relative flex min-h-[92svh] items-center overflow-hidden">
      <img
        src={heroImage}
        alt="صالة تدريب تايتن جيم بإضاءة حمراء"
        width={1920}
        height={1080}
        className="absolute inset-0 size-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/55" />

      <div className="container-page relative py-20">
        <motion.span
          {...fade(0)}
          className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent-soft px-3 py-1.5 text-xs font-bold text-accent"
        >
          <Sparkles aria-hidden="true" className="size-3.5" />
          أقوى جيم في {siteConfig.city}
        </motion.span>

        <motion.h1
          {...fade(0.08)}
          className="mt-5 max-w-3xl text-4xl leading-[1.15] sm:text-5xl md:text-6xl"
        >
          غيّر جسمك... <span className="text-gradient-accent">غيّر حياتك</span>
        </motion.h1>

        <motion.p {...fade(0.16)} className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
          ابدأ رحلتك نحو جسم أقوى وحياة أفضل مع فريق من أفضل المدربين.
        </motion.p>

        <motion.div {...fade(0.24)} className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild variant="hero" size="xl">
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              ابدأ الآن
            </a>
          </Button>
          <Button asChild variant="heroOutline" size="xl">
            <Link to="/contact">احجز تجربتك المجانية</Link>
          </Button>
        </motion.div>

        <motion.p {...fade(0.32)} className="mt-10 flex items-center gap-2 text-xs text-muted-foreground">
          <ChevronDown aria-hidden="true" className="size-4 animate-bounce text-accent" />
          اكتشف الخدمات والباقات والمدربين
        </motion.p>
      </div>
    </section>
  );
}
