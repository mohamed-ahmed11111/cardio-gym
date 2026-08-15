import { useState } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import type { GalleryItem } from "@/types";

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [active, setActive] = useState<GalleryItem | null>(null);

  return (
    <>
      <ul className="columns-2 gap-3 sm:columns-2 lg:columns-3 [&>li]:mb-3">
        {items.map((item) => (
          <li key={item.id} className="break-inside-avoid">
            <button
              type="button"
              onClick={() => setActive(item)}
              className="group relative block w-full overflow-hidden rounded-2xl border border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label={`تكبير الصورة: ${item.alt}`}
            >
              <img
                src={item.src}
                alt={item.alt}
                loading="lazy"
                width={1200}
                height={900}
                className="w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="absolute bottom-3 start-3 text-start text-xs font-bold opacity-0 transition-opacity group-hover:opacity-100">
                {item.category}
              </span>
            </button>
          </li>
        ))}
      </ul>

      <AnimatePresence>
        {active && (
          <motion.div
            className="fixed inset-0 z-100 flex items-center justify-center bg-background/90 p-4 backdrop-blur"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActive(null)}
            role="dialog"
            aria-modal="true"
            aria-label={active.alt}
          >
            <motion.img
              src={active.src}
              alt={active.alt}
              width={1200}
              height={900}
              className="max-h-[85vh] w-auto max-w-full rounded-2xl border border-border object-contain"
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.96, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            />
            <button
              type="button"
              onClick={() => setActive(null)}
              className="absolute top-4 end-4 inline-flex size-11 items-center justify-center rounded-full border border-border bg-surface focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              aria-label="إغلاق الصورة"
            >
              <X aria-hidden="true" className="size-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
