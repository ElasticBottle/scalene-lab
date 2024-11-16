import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";

const faqs = [
  {
    id: "safety",
    question: "Is DEXA scanning safe?",
    answer:
      "Yes, DEXA scanning is very safe. The radiation exposure is minimal - less than a day of natural background radiation in Singapore.",
  },
  {
    id: "location",
    question: "Where in Singapore do you operate?",
    answer:
      "Our mobile van can travel to any location in Singapore. We commonly serve clients in CBD, Orchard, East Coast, and other areas.",
  },
  {
    id: "who",
    question: "Who should get a DEXA scan?",
    answer:
      "DEXA scans are valuable for anyone interested in their health, including fitness enthusiasts, athletes, and those on a weight management journey.",
  },
  {
    id: "duration",
    question: "How long does a scan take?",
    answer:
      "The actual scan takes only 15 minutes. The entire process, including preparation and consultation, typically takes 30 minutes.",
  },
];

export function FaqSection() {
  return (
    <section className="bg-gradient-to-b from-muted to-background py-16">
      <div className="container mx-auto px-4">
        <h2
          className="mb-12 scroll-mt-20 text-center font-bold text-3xl"
          id="faq"
        >
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
