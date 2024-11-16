import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  Outlet,
  ScrollRestoration,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import type { ReactNode } from "react";
import * as React from "react";
import { ThemeProvider } from "~/components/theme-provider";
import { siteConfig } from "~/lib/site-config";
import baseCss from "~/styles/global.css?url";

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  meta: () => [
    {
      charSet: "utf-8",
    },
    {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
    },
    {
      title: `${siteConfig.name} | ${siteConfig.slogan}`,
    },
    {
      name: "description",
      content: siteConfig.description,
    },
    {
      name: "keywords",
      content: siteConfig.keywords.join(", "),
    },
  ],
  scripts: () => {
    return import.meta.env.DEV
      ? [
          {
            type: "module",
            children: `import RefreshRuntime from "/_build/@react-refresh";
RefreshRuntime.injectIntoGlobalHook(window)
window.$RefreshReg$ = () => {}
window.$RefreshSig$ = () => (type) => type`,
          },
        ]
      : [
          {
            type: "application/ld+json",
            children: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MedicalService",
              name: `${siteConfig.name} | ${siteConfig.slogan}`,
              description: siteConfig.description,
              areaServed: "Singapore",
              priceRange: "$79 - $99",
              medicalSpecialty: "Body Composition Analysis",
            }),
          },
        ];
  },
  links: () => [{ rel: "stylesheet", href: baseCss }],
  component: RootComponent,
  notFoundComponent: () => <div>Page Not Found.</div>,
});

function RootComponent() {
  return (
    <RootDocument>
      <Outlet />
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <Meta />
      </head>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <ScrollRestoration />
        <React.Suspense>
          <TanStackRouterDevtools position="bottom-right" />
        </React.Suspense>
        <ReactQueryDevtools buttonPosition="bottom-left" />
        <Scripts />
      </body>
    </html>
  );
}

const TanStackRouterDevtools =
  process.env.NODE_ENV === "production"
    ? () => null // Render nothing in production
    : React.lazy(() =>
        // Lazy load in development
        import("@tanstack/router-devtools").then((res) => ({
          default: res.TanStackRouterDevtools,
          // For Embedded Mode
          // default: res.TanStackRouterDevtoolsPanel
        })),
      );
