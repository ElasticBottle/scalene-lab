import { Link } from "@tanstack/react-router";
import { Check, StarIcon } from "lucide-react";
import { motion } from "motion/react";
import { useState } from "react";
import useMediaQuery from "~/lib/hook/use-media-query";
import { siteConfig } from "~/lib/site-config";
import { cn } from "~/lib/ui";
import { buttonVariants } from "../ui/button";
import { PageSection } from "../ui/page-section";
import { Switch } from "../ui/switch";

export function PricingSection() {
  const [isMonthly, setIsMonthly] = useState(true);
  const { isDesktop } = useMediaQuery();

  const handleToggle = () => {
    setIsMonthly(!isMonthly);
  };

  return (
    <PageSection
      title="Pricing"
      subtitle="Choose the plan that's right for you"
    >
      <div className="mb-10 flex items-center justify-center">
        <span className="mr-2 font-semibold">Monthly</span>
        <Switch checked={!isMonthly} onCheckedChange={handleToggle} />
        <span className="ml-2 font-semibold">Yearly</span>
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {siteConfig.pricing.map((plan, index) => (
          <motion.div
            key={plan.name}
            initial={{ y: 50 }}
            whileInView={
              isDesktop
                ? {
                    y: 0,
                    // Move the plan on the left (index 0) to the right, and the plan on the right (index 2) to the left
                    x: index === 0 ? 30 : index === 2 ? -30 : 0,
                    // Scale all plans down to 0.94 except for the middle plan (index 1) which is kept at 1
                    scale: index === 1 ? 1 : 0.94,
                  }
                : {}
            }
            viewport={{ once: true }}
            transition={{
              duration: 1.6,
              type: "spring",
              stiffness: 100,
              damping: 30,
              delay: 0.4,
              opacity: { duration: 0.5 },
            }}
            className={cn(
              "relative rounded-2xl border bg-background p-6 text-center",
              plan.isPopular ? "border-2 border-primary" : "border-border",
              index === 1 && "z-10",
              index === 0 && "origin-right",
              index === siteConfig.pricing.length - 1 && "origin-left",
            )}
          >
            {plan.isPopular && (
              <div className="absolute top-0 right-0 flex items-center rounded-tr-xl rounded-bl-xl bg-primary px-2 py-1">
                <StarIcon className="text-primary-foreground" />
                <span className="ml-1 font-sans font-semibold text-primary-foreground">
                  Popular
                </span>
              </div>
            )}
            <div>
              <p className="font-semibold text-muted-foreground">{plan.name}</p>
              <p className="flex items-center justify-center gap-x-2 pt-6">
                <span className="font-bold text-5xl text-foreground tracking-tight">
                  {isMonthly ? plan.price : plan.yearlyPrice}
                </span>
                <span className="font-semibold text-muted-foreground text-sm leading-6 tracking-wide">
                  / {plan.period}
                </span>
              </p>

              <p className="text-muted-foreground text-xs leading-5">
                {isMonthly ? plan.billingPeriod : plan.yearlyBillingPeriod}
              </p>

              <ul className="mt-5 flex flex-col gap-2">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <Check className="size-4 text-primary" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <hr className="my-4 w-full" />

              <Link
                href={plan.href}
                className={cn(
                  buttonVariants({
                    variant: "outline",
                  }),
                  "w-full font-semibold text-lg tracking-tighter",
                  "transform-gpu ring-offset-current transition-all duration-300 ease-out hover:bg-primary hover:text-primary-foreground hover:ring-2 hover:ring-primary hover:ring-offset-1",
                  plan.isPopular
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-foreground",
                )}
              >
                {plan.buttonText}
              </Link>
              <p className="pt-6 text-muted-foreground text-xs leading-5">
                {plan.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </PageSection>
  );
}
