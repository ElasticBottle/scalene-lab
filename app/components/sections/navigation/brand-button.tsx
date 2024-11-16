import { Link } from "@tanstack/react-router";
import { Icons } from "~/components/icon";
import { siteConfig } from "~/lib/site-config";

export function BrandButton() {
  return (
    <Link to="/" title="scalene-lab" className="flex items-center space-x-2">
      <Icons.logo className="size-[30px]" />
      <span className="font-bold text-xl">{siteConfig.name}</span>
    </Link>
  );
}
