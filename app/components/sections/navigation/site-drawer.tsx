import { Link } from "@tanstack/react-router";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import {
  Drawer,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTrigger,
} from "~/components/ui/drawer";
import { ThemeToggle } from "~/components/ui/theme-toggle";
import { siteConfig } from "~/lib/site-config";
import { BrandButton } from "./brand-button";
import { CtaButton } from "./cta-button";

export function SiteDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = (hash: string | undefined) => {
    // Close drawer first
    setIsOpen(false);

    // If there's a hash, scroll to the element after drawer closes
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 300); // Adjust timeout based on your drawer's close animation duration
    }
  };

  return (
    <Drawer open={isOpen} onOpenChange={setIsOpen}>
      <DrawerTrigger>
        <MenuIcon className="text-2xl" />
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="px-6">
          <div className="flex items-center justify-between">
            <BrandButton />
            <ThemeToggle />
          </div>
          <nav>
            <ul className="pt-7 text-left">
              {siteConfig.header.map((item) => (
                <li key={item.label} className="py-1.5">
                  <Link
                    href={item.href}
                    hash={item.hash}
                    className="font-semibold"
                    onClick={() => handleNavClick(item.hash)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </DrawerHeader>
        <DrawerFooter>
          <CtaButton withLogo />
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
