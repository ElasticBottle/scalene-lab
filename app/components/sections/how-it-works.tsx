import { CalendarCheck, Clock, ScrollText } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import { BlurFade } from "../animation/blur-fade";
import { PageSection } from "../ui/page-section";

const steps = [
  {
    icon: CalendarCheck,
    title: "Book Your Slot",
    description: "Choose a convenient time and location in Singapore.",
  },
  {
    icon: Clock,
    title: "15-Min Scan",
    description:
      "Quick, non-invasive scan with our state-of-the-art mobile DEXA scanner.",
  },
  {
    icon: ScrollText,
    title: "Get Results",
    description:
      "Receive detailed insights about your body composition and personalized recommendations.",
  },
];

export function HowItWorksSection() {
  return (
    <PageSection
      title="How It Works"
      subtitle="Full body composition in 3 simple steps"
    >
      <div className="grid grid-cols-1 gap-8 pt-12 md:grid-cols-3">
        {steps.map((step, index) => (
          <BlurFade key={step.title} delay={0.2 + index * 0.2} inView>
            <Card className="border-none bg-background shadow-none">
              <CardContent className="space-y-4 p-6">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="size-6 text-primary" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-primary text-xl">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-semibold text-xl">{step.title}</h3>
                </div>
                <p className="text-muted-foreground">{step.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </PageSection>
  );
}
