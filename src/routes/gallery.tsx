import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/layout/PageHeader";
import { CTASection } from "@/components/sections/CTASection";
import { GalleryGrid } from "@/components/ui-custom/GalleryGrid";
import { gallery } from "@/data/gallery";
import { siteConfig } from "@/config/site";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      { title: `معرض الصور | ${siteConfig.name}` },
      { name: "description", content: "صور من داخل تايتن جيم: الصالة، الأجهزة، الحصص الجماعية والفعاليات." },
      { property: "og:title", content: `معرض الصور | ${siteConfig.name}` },
      { property: "og:description", content: "شاهد الصالة والأجهزة والفعاليات بالصور." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
});

function GalleryPage() {
  return (
    <>
      <PageHeader eyebrow="المعرض" title="شوف الجيم بعينك" description="اضغط على أي صورة لعرضها بالحجم الكامل." />
      <section className="container-page py-12">
        <GalleryGrid items={gallery} />
      </section>
      <CTASection />
    </>
  );
}
