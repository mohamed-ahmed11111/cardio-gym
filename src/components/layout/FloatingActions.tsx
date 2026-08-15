import { useEffect, useState } from "react";
import { ArrowUp, MessageCircle, Phone } from "lucide-react";
import { telLink, whatsappLink } from "@/config/site";

export function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-4 end-4 z-70 flex flex-col items-center gap-2.5">
      {showTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="الرجوع لأعلى الصفحة"
          className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface/90 backdrop-blur transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <ArrowUp aria-hidden="true" className="size-5" />
        </button>
      )}
      <a
        href={telLink}
        aria-label="اتصل بنا هاتفيًا"
        className="inline-flex size-12 items-center justify-center rounded-full border border-border bg-surface/90 backdrop-blur transition-colors hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring md:hidden"
      >
        <Phone aria-hidden="true" className="size-5" />
      </a>
      <a
        href={whatsappLink()}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا على واتساب"
        className="inline-flex size-14 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-glow transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        <MessageCircle aria-hidden="true" className="size-6" />
      </a>
    </div>
  );
}
