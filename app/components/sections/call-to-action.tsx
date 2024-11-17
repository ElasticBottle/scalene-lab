import PageSection from "../ui/page-section";
import { CtaButton } from "./navigation/cta-button";

export function CtaSection() {
  return (
    <PageSection
      id="cta"
      title="Ready to understand your body composition?"
      subtitle="Book your consultation now."
      className="rounded-xl bg-primary/10 py-16"
    >
      <div className="flex items-center justify-center pt-4">
        <CtaButton withLogo />
      </div>
    </PageSection>
  );
}
