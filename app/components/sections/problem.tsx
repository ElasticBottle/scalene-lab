import { BadgeDollarSign, Clock, Ruler } from "lucide-react";
import { Card, CardContent } from "~/components/ui/card";
import BlurFade from "../animation/blur-fade";
import PageSection from "../ui/page-section";

const problems = [
  {
    title: "Inaccurate Measurements",
    description:
      "Traditional body composition methods like calipers and bioelectrical impedance often provide inconsistent and unreliable results, making it hard to track progress accurately.",
    icon: Ruler,
  },
  {
    title: "Inconvenient Access",
    description:
      "Most DEXA scanners are located in hospitals or specialized clinics, requiring significant travel time and advance scheduling for busy Singaporeans.",
    icon: Clock,
  },
  {
    title: "High Costs",
    description:
      "Hospital-based DEXA scans in Singapore can be expensive, making regular body composition tracking financially challenging for many people.",
    icon: BadgeDollarSign,
  },
];

export function ProblemSection() {
  return (
    <PageSection
      title="The Issue with "
      subtitle="Getting accurate body composition data in Singapore shouldn't be a hassle."
    >
      <div className="grid grid-cols-1 gap-8 pt-12 md:grid-cols-3">
        {problems.map((problem, index) => (
          <BlurFade key={problem.title} delay={0.2 + index * 0.2} inView>
            <Card className="border-none bg-background shadow-none">
              <CardContent className="space-y-4 p-6">
                <div className="flex size-12 items-center justify-center rounded-full bg-primary/10">
                  <problem.icon className="size-6 text-primary" />
                </div>
                <h3 className="font-semibold text-xl">{problem.title}</h3>
                <p className="text-muted-foreground">{problem.description}</p>
              </CardContent>
            </Card>
          </BlurFade>
        ))}
      </div>
    </PageSection>
  );
}
