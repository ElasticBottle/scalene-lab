export const siteConfig = {
  name: "Scalene Lab",
  slogan: "Affordable, Full Body DEXA Scan in Singapore",
  description:
    "Singapore's most convenient mobile DEXA scanning from $79/month. Quick 15-minute scans at your location. Book a consultation with our founder today.",
  keywords: [
    "mobile DEXA scan Singapore",
    "full body DEXA scan",
    "full body composition scan",
    "body composition scan",
    "Singapore body fat scan",
    "affordable DEXA scan",
  ],
  links: {
    email: "contact@scalenelab.com",
    booking: "https://cal.com/winston-yeo/10min",
  },
  header: [
    {
      hash: "how-it-works",
      href: undefined,
      label: "How It Works",
    },
    {
      hash: "pricing",
      href: undefined,
      label: "Pricing",
    },
    {
      hash: "faq",
      href: undefined,
      label: "FAQ",
    },
  ],
  howItWorks: [
    {
      title: "Book Your Slot",
      description:
        "Choose a convenient time and location in Singapore. We'll bring our mobile scanner to you.",
    },
    {
      title: "Scan Your Body",
      description:
        "Our trained technician will perform a full body scan using our portable DEXA scanner.",
    },
    {
      title: "Get Your Results",
      description:
        "Receive your detailed body composition analysis and personalized insights.",
    },
  ],
  pricing: [
    {
      name: "Single Scan",
      href: "#",
      price: "$99",
      period: "scan",
      billingPeriod: "billed per scan",
      yearlyPrice: "$94",
      yearlyBillingPeriod: "billed annually",
      features: [
        "Full body composition analysis",
        "Detailed report",
        "15-minute consultation",
      ],
      isPopular: false,
      buttonText: "Subscribe",
      description: "Perfect for individuals just getting started",
    },
    {
      name: "Quarterly Plan",
      href: "#",
      price: "$89",
      period: "quarter",
      billingPeriod: "billed quarterly",
      yearlyPrice: "$84",
      yearlyBillingPeriod: "billed annually",
      features: [
        "Everything in Single Scan",
        "Progress tracking",
        "Quarterly comparison reports",
      ],
      isPopular: true,
      buttonText: "Subscribe",
      description: "Ideal for the busy professional",
    },
    {
      name: "Monthly Plan",
      href: "#",
      price: "$79",
      period: "month",
      billingPeriod: "billed monthly",
      yearlyPrice: "$74",
      yearlyBillingPeriod: "billed annually",
      features: [
        "Everything in Quarterly Plan",
        "Monthly progress tracking",
        "Priority booking",
      ],
      isPopular: false,
      buttonText: "Subscribe",
      description: "Tailored for the health enthusiasts",
    },
  ],
  faqs: [
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
  ],
  footer: [],
};

export type SiteConfig = typeof siteConfig;
