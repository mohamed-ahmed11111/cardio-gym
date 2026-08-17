import { useEffect, useState } from "react";
import { Link, useRouter } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const baseClass =
  "inline-flex min-h-11 items-center gap-2 rounded-xl border border-border bg-surface/80 px-4 py-2.5 text-sm font-bold backdrop-blur transition-all duration-200 hover:-translate-x-0.5 hover:border-accent hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:scale-[0.98]";

/**
 * "← عودة" button for internal pages.
 * Goes back in history when there is a previous in-app entry, otherwise to Home.
 */
export function BackButton({ className, label = "عودة" }: { className?: string; label?: string }) {
  const router = useRouter();
  const [canGoBack, setCanGoBack] = useState(false);

  useEffect(() => {
    setCanGoBack(router.history.canGoBack());
  }, [router.history]);

  if (!canGoBack) {
    return (
      <Link to="/" className={cn(baseClass, className)} aria-label="العودة إلى الصفحة الرئيسية">
        <ArrowRight aria-hidden="true" className="size-4" />
        {label}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={() => router.history.back()}
      className={cn(baseClass, className)}
      aria-label="العودة إلى الصفحة السابقة"
    >
      <ArrowRight aria-hidden="true" className="size-4" />
      {label}
    </button>
  );
}