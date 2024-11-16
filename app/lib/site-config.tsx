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
      name: "BASIC",
      href: "#",
      price: "$19",
      period: "month",
      yearlyPrice: "$16",
      features: [
        "1 User",
        "5GB Storage",
        "Basic Support",
        "Limited API Access",
        "Standard Analytics",
      ],
      description: "Perfect for individuals and small projects",
      buttonText: "Subscribe",
      isPopular: false,
    },
    {
      name: "PRO",
      href: "#",
      price: "$49",
      period: "month",
      yearlyPrice: "$40",
      features: [
        "5 Users",
        "50GB Storage",
        "Priority Support",
        "Full API Access",
        "Advanced Analytics",
      ],
      description: "Ideal for growing businesses and teams",
      buttonText: "Subscribe",
      isPopular: true,
    },
    {
      name: "ENTERPRISE",
      href: "#",
      price: "$99",
      period: "month",
      yearlyPrice: "$82",
      features: [
        "Unlimited Users",
        "500GB Storage",
        "24/7 Premium Support",
        "Custom Integrations",
        "AI-Powered Insights",
      ],
      description: "For large-scale operations and high-volume users",
      buttonText: "Subscribe",
      isPopular: false,
    },
  ],
  faqs: [
    {
      question: "What is nexus.ai?",
      answer: (
        <span>
          nexus.ai is an advanced AI-powered penetration testing platform
          designed to automate and enhance cybersecurity assessments. It uses
          machine learning algorithms to identify vulnerabilities, simulate
          attacks, and provide actionable insights to improve your security
          posture.
        </span>
      ),
    },
  ],
  footer: [],
};

export type SiteConfig = typeof siteConfig;
