"use client";

import { Link } from "@tanstack/react-router";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "~/components/ui/navigation-menu";
import { ThemeToggle } from "~/components/ui/theme-toggle";
import { siteConfig } from "~/lib/site-config";
import { CtaButton } from "./cta-button";

export function SiteMenu() {
  return (
    <div className="flex items-center space-x-10">
      <NavigationMenu>
        <NavigationMenuList>
          {siteConfig.header.map((item) => (
            <NavigationMenuItem key={item.label} asChild>
              <Link
                hash={item.hash}
                href={item.href}
                className={navigationMenuTriggerStyle()}
              >
                {item.label}
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <CtaButton withLogo />
      <ThemeToggle />
    </div>
  );
}
