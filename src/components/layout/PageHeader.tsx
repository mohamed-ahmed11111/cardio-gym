import { Reveal } from "@/components/ui-custom/Reveal";
import { BackButton } from "@/components/ui-custom/BackButton";
import { Breadcrumbs, type Crumb } from "@/components/ui-custom/Breadcrumbs";

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumbs,
  showBack = true,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
  showBack?: boolean;
}) {
  const crumbs: Crumb[] = breadcrumbs ?? [{ label: eyebrow ?? title }];
  return (
    <section className="border-b border-border bg-surface/40">
      <div className="container-page py-12 sm:py-16">
        {showBack && (
          <div className="mb-5 flex flex-wrap items-center gap-3">
            <BackButton />
            <Breadcrumbs items={crumbs} />
          </div>
        )}
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
