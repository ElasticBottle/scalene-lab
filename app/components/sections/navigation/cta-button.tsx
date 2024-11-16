import { Icons } from "~/components/icon";
import { buttonVariants } from "~/components/ui/button";
import { siteConfig } from "~/lib/site-config";

export function CtaButton({ withLogo = false }: { withLogo?: boolean }) {
  return (
    <a
      href={siteConfig.links.booking}
      target="_blank"
      rel="noopener noreferrer"
      className={buttonVariants({ variant: "default" })}
    >
      {withLogo && <Icons.logo className="size-6" />}
      Chat with Our Founder
    </a>
  );
}
