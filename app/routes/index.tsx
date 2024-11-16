import { createFileRoute } from "@tanstack/react-router";
import { FaqSection } from "~/components/sections/faq-section";
import { HowItWorksSection } from "~/components/sections/how-it-works";
import { Header } from "~/components/sections/navigation/header";
import { Pricing } from "~/components/sections/pricing";

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
                Chat with Our Founder
              </a>
              <p className="mt-3 text-muted-foreground text-sm">
                Free 10-minute consultation to discuss your health goals
              </p>
            </div>
            <div className="md:w-1/2" />
          </div>
        </div>
      </section>

      <HowItWorksSection />
      <Pricing />
      <FaqSection />

      {/* CTA Section */}
      <section className="bg-primary py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="mb-6 font-bold text-3xl text-primary-foreground">
            Ready to understand your body composition?
          </h2>
          <a
            href="https://cal.com/winston-yeo/10min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-background px-8 py-4 font-semibold text-foreground text-lg transition-colors hover:bg-muted"
          >
            Book Your Consultation Now
          </a>
        </div>
      </section>
    </main>
  );
}
