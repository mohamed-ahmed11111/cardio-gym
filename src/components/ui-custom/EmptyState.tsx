import { SearchX } from "lucide-react";

export function EmptyState({
  title = "لا توجد نتائج مطابقة",
  description = "جرّب تعديل البحث أو إزالة بعض عوامل التصفية.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-surface/50 px-6 py-16 text-center">
      <SearchX aria-hidden="true" className="mb-4 size-10 text-muted-foreground" />
      <h3 className="text-lg">{title}</h3>
      <p className="mt-2 max-w-sm text-sm text-muted-foreground">{description}</p>
    </div>
  );
}