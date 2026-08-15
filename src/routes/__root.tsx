import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { LocaleProvider } from "@/lib/i18n";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingActions } from "@/components/layout/FloatingActions";
import { Toaster } from "@/components/ui/sonner";
import { siteConfig } from "@/config/site";

function NotFoundComponent() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-extrabold text-accent">404</h1>
        <h2 className="mt-4 text-xl">عذرًا، الصفحة التي تبحث عنها غير موجودة.</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          ربما تم نقل الصفحة أو أن الرابط غير صحيح.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground"
          >
            العودة للرئيسية
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl">حدث خطأ غير متوقع</h1>
        <p className="mt-2 text-sm text-muted-foreground">
          من فضلك أعد المحاولة، وإذا استمرت المشكلة تواصل معنا على واتساب.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-xl bg-accent px-5 py-2.5 text-sm font-bold text-accent-foreground"
          >
            حاول مرة أخرى
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-xl border border-border px-5 py-2.5 text-sm font-bold"
          >
            العودة للرئيسية
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: `أفضل جيم في ${siteConfig.city} | ${siteConfig.name}` },
      { name: "description", content: siteConfig.description },
      { property: "og:site_name", content: siteConfig.name },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cairo:wght@400;600;700;800&family=Tajawal:wght@700;800;900&display=swap",
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "HealthClub",
          name: siteConfig.name,
          description: siteConfig.description,
          telephone: siteConfig.phone,
          email: siteConfig.email,
          address: { "@type": "PostalAddress", streetAddress: siteConfig.address, addressCountry: "EG" },
        }),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <LocaleProvider>
        <div className="flex min-h-screen flex-col overflow-x-hidden">
          <Navbar />
          <main className="flex-1">
            <Outlet />
          </main>
          <Footer />
          <FloatingActions />
          <Toaster position="top-center" />
        </div>
      </LocaleProvider>
    </QueryClientProvider>
  );
}
