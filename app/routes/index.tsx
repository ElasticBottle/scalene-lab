import { createFileRoute } from "@tanstack/react-router";
import { CtaSection } from "~/components/sections/call-to-action";
import { FaqSection } from "~/components/sections/faq";
import { HowItWorksSection } from "~/components/sections/how-it-works";
import { Header } from "~/components/sections/navigation/header";
import { PricingSection } from "~/components/sections/pricing";
import { ProblemSection } from "~/components/sections/problem";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  return (
    <main>
      <Header />
      <section className="bg-gradient-to-b from-background to-muted py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center md:flex-row">
            <div className="mb-10 md:mb-0 md:w-1/2">
              <h1 className="mb-6 font-bold text-4xl md:text-5xl">
                Singapore's First Mobile DEXA Scan Service
              </h1>
              <p className="mb-8 text-muted-foreground text-xl">
                Professional body composition analysis that comes to you. Get
                accurate measurements of body fat, muscle mass, and bone density
                in just 15 minutes.
              </p>

              <a
                href="https://cal.com/winston-yeo/10min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-lg bg-primary px-8 py-4 font-semibold text-lg text-primary-foreground transition-colors hover:bg-primary/90"
              >
                I want to understand my body composition
              </a>
              <p className="mt-3 text-muted-foreground text-sm">
                Free 10-minute consultation to discuss your health goals
              </p>
            </div>
            <div className="md:w-1/2" />
          </div>
        </div>
      </section>
      <ProblemSection />
      <HowItWorksSection />
      <PricingSection />
      <FaqSection />
      <CtaSection />
    </main>
  );
}
