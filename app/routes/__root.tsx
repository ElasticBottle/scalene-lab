import type { QueryClient } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  Outlet,
  ScrollRestoration,
  createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Meta, Scripts } from "@tanstack/start";
import type { ReactNode } from "react";
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
            children: `const classList = document.documentElement.classList;
        classList.remove("light", "dark");
        classList.add(localStorage.getItem("scalele-lab-theme") ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));`,
          },
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
            type: "module",
            children: `const classList = document.documentElement.classList;
        classList.remove("light", "dark");
        classList.add(localStorage.getItem("scalele-lab-theme") ?? (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"));`,
          },
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
        <ThemeProvider>{children}</ThemeProvider>
        <ScrollRestoration />
        <TanStackRouterDevtools position="bottom-right" />
        <ReactQueryDevtools buttonPosition="bottom-left" />
        <Scripts />
      </body>
    </html>
  );
}
