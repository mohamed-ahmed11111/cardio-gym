import { Reveal } from "@/components/ui-custom/Reveal";

export function PageHeader({ eyebrow, title, description }: { eyebrow?: string; title: string; description?: string }) {
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="container-page py-12 sm:py-16">
        <Reveal>
          {eyebrow && (
            <span className="mb-3 inline-flex rounded-full border border-accent/40 bg-accent-soft px-3 py-1 text-xs font-bold text-accent">
              {eyebrow}
            </span>
          )}
          <h1 className="text-3xl sm:text-4xl md:text-5xl">{title}</h1>
          {description && (
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
