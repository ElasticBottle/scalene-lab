import { CalendarCheck, Clock, ScrollText } from "lucide-react";
import PageSection from "../ui/page-section";

const steps = [
  {
    icon: <CalendarCheck className="h-8 w-8 text-primary" />,
    title: "Book Your Slot",
    description: "Choose a convenient time and location in Singapore.",
  },
  {
    icon: <Clock className="h-8 w-8 text-primary" />,
    title: "15-Min Scan",
    description:
      "Quick, non-invasive scan with our state-of-the-art mobile DEXA scanner.",
  },
  {
    icon: <ScrollText className="h-8 w-8 text-primary" />,
    title: "Get Results",
    description:
      "Receive detailed insights about your body composition and personalized recommendations.",
  },
];

export function HowItWorksSection() {
  return (
    <PageSection
      title="How It Works"
      subtitle="Get your body composition analysis in just 15 minutes"
    >
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center font-bold text-3xl">How it works</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-lg bg-card p-6 shadow-sm">
              <div className="mb-4 flex w-full items-center justify-center md:justify-start">
                <span className="mr-2 font-semibold text-4xl text-primary">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step.icon}
              </div>
              <h3 className="mb-3 text-center font-bold text-xl md:text-left">
                {step.title}
              </h3>
              <p className="text-center text-muted-foreground md:text-left">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageSection>
  );
}
