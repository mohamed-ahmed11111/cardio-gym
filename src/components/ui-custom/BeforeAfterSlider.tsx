import { useCallback, useRef, useState } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  name: string;
}

export function BeforeAfterSlider({ beforeImage, afterImage, name }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, ratio)));
  }, []);

  return (
    <div className="space-y-3">
      <div
        ref={containerRef}
        className="relative aspect-4/5 w-full overflow-hidden rounded-2xl border border-border bg-surface select-none"
        onPointerMove={(e) => {
          if (e.pressure > 0 || e.buttons === 1) updateFromClientX(e.clientX);
        }}
        onPointerDown={(e) => updateFromClientX(e.clientX)}
      >
        <img
          src={afterImage}
          alt={`${name} بعد التحول`}
          loading="lazy"
          width={800}
          height={1000}
          className="absolute inset-0 size-full object-cover"
          draggable={false}
        />
        <div
          className="absolute inset-y-0 start-0 overflow-hidden"
          style={{ width: `${position}%` }}
        >
          <img
            src={beforeImage}
            alt={`${name} قبل التحول`}
            loading="lazy"
            width={800}
            height={1000}
            className="absolute inset-0 h-full w-[100vw] max-w-none object-cover"
            style={{ width: containerRef.current?.offsetWidth ?? undefined }}
            draggable={false}
          />
        </div>

        <div
          className="pointer-events-none absolute inset-y-0 w-0.5 bg-accent shadow-glow"
          style={{ insetInlineStart: `${position}%` }}
        />

        <span className="pointer-events-none absolute top-3 start-3 rounded-full bg-background/80 px-2.5 py-1 text-[11px] font-bold backdrop-blur">
          قبل
        </span>
        <span className="pointer-events-none absolute top-3 end-3 rounded-full bg-accent px-2.5 py-1 text-[11px] font-bold text-accent-foreground">
          بعد
        </span>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-xs text-muted-foreground">
          اسحب لمقارنة صورة {name} قبل وبعد
        </span>
        <input
          type="range"
          min={0}
          max={100}
          value={position}
          onChange={(e) => setPosition(Number(e.target.value))}
          aria-label={`مقارنة صور ${name} قبل وبعد`}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-surface-2 accent-accent"
        />
      </label>
    </div>
  );
}