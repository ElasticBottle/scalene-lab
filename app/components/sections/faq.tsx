import { siteConfig } from "~/lib/site-config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { PageSection } from "../ui/page-section";

export function FaqSection() {
  return (
    <PageSection title="FAQ" subtitle="Frequently asked questions">
      <div className="mx-auto my-12 md:max-w-3xl">
        <Accordion
          type="single"
          collapsible
          className="flex w-full flex-col items-center justify-center space-y-2"
        >
          {siteConfig.faqs.map((faq) => (
            <AccordionItem
              key={faq.id}
              value={faq.id}
              className="w-full overflow-hidden rounded-lg border"
            >
              <AccordionTrigger className="px-4">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="px-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      <p className="pb-12 text-center font-medium text-muted-foreground text-sm tracking-tight">
        Still have questions? Email us at{" "}
        <a href={`mailto:${siteConfig.links.email}`} className="underline">
          {siteConfig.links.email}
        </a>
      </p>
    </PageSection>
  );
}
