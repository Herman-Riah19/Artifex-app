import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@repo/ui/components/ui/accordion";
import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import { Typography } from "@repo/ui/components/ui/typography";
import { ArrowRight, HelpCircle } from "lucide-react";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
  category?: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How does your app work?",
    answer:
      "Our application connects to blockchain networks and provides a comprehensive suite of tools for smart contract deployment, management, and governance. You provide parameters such as the contract code, deployment settings, and governance rules, then our application handles the complex infrastructure management, security audits, and ongoing monitoring.",
    value: "item-1",
    category: "Getting Started",
  },
  {
    question: "Can I use the generated contracts for commercial purposes?",
    answer:
      "Yes, you can deploy and use the smart contracts managed through our platform for personal and commercial purposes. All contracts deployed through our system come with proper licensing and audit trails. Please see our Terms of Service for more details on usage rights and commercial applications.",
    value: "item-2",
    category: "Legal & Compliance",
  },
  {
    question: "What is the quality of security audits provided?",
    answer:
      "Our security audits are enterprise-grade, combining automated analysis tools with manual review by expert blockchain security engineers. We identify vulnerabilities, gas optimization opportunities, and compliance issues. All audits include detailed reports, remediation recommendations, and re-verification after fixes.",
    value: "item-3",
    category: "Security",
  },
  {
    question:
      "Are there any limitations on the number of contracts I can deploy?",
    answer:
      "We offer different subscription options with varying limits. The Starter plan includes up to 5 contracts, Professional includes unlimited deployments, and Enterprise offers custom solutions. All plans include full monitoring and management capabilities for deployed contracts.",
    value: "item-4",
    category: "Pricing & Limits",
  },
  {
    question: "Which blockchain networks do you support?",
    answer:
      "We support over 150 blockchain networks including Ethereum, Polygon, Binance Smart Chain, Arbitrum, Optimism, Avalanche, and many more. Our platform allows for multi-chain deployment and management from a single interface, with network-specific optimizations.",
    value: "item-5",
    category: "Technical",
  },
  {
    question: "How do you ensure compliance and governance?",
    answer:
      "Our platform includes built-in compliance features such as KYC verification, AML screening, transaction monitoring, and audit trails. Governance mechanisms include multi-signature wallets, voting systems, and role-based access control to ensure regulatory compliance.",
    value: "item-6",
    category: "Compliance",
  },
  {
    question: "What kind of support do you provide?",
    answer:
      "We offer tiered support based on your plan: Community support for Starter users, priority email and chat support for Professional, and dedicated account managers with 24/7 phone support for Enterprise customers. All plans include access to our comprehensive documentation and knowledge base.",
    value: "item-7",
    category: "Support",
  },
  {
    question: "Can I integrate with existing development tools?",
    answer:
      "Yes, we provide extensive integration capabilities including REST APIs, GraphQL endpoints, CLI tools, and plugins for popular IDEs like VS Code and IntelliJ. We also support CI/CD pipeline integration through GitHub Actions, GitLab CI, and Jenkins.",
    value: "item-8",
    category: "Integration",
  },
];

const categories = Array.from(
  new Set(FAQList.map((item) => item.category).filter(Boolean)),
);

export const FAQ = () => {
  return (
    <section id="faq" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
            Frequently Asked Questions
          </Badge>

          <Typography
            variant="h1"
            color="primary"
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            Got
            <br />
            <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">Questions?</span>
          </Typography>

          <Typography
            variant="h6"
            color="muted-foreground"
            className="max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Find answers to common questions about our smart contract management
            platform. Can't find what you're looking for? Our support team is
            here to help.
          </Typography>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          <Button variant="outline" size="sm" className="rounded-full">
            All Questions
          </Button>
          {categories.map((category) => (
            <Button
              key={category}
              variant="ghost"
              size="sm"
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full space-y-4">
          {FAQList.map(({ question, answer, value, category }: FAQProps) => (
            <AccordionItem
              key={value}
              value={value}
              className="border border-border rounded-xl p-6 bg-card hover:bg-accent/50 transition-colors"
            >
              <AccordionTrigger className="text-left font-semibold text-lg hover:no-underline group">
                <div className="flex items-start gap-4 w-full">
                  <HelpCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    {category && (
                      <Badge variant="secondary" className="mb-2 text-xs">
                        {category}
                      </Badge>
                    )}
                    <Typography
                      variant="h4"
                      color="foreground"
                      className="group-hover:text-primary transition-colors"
                    >
                      {question}
                    </Typography>
                  </div>
                </div>
              </AccordionTrigger>

              <AccordionContent className="mt-4">
                <div className="pl-9">
                  <Typography
                    variant="p"
                    color="muted-foreground"
                    className="leading-relaxed"
                  >
                    {answer}
                  </Typography>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-muted/30 border rounded-3xl p-12">
            <HelpCircle className="w-16 h-16 text-primary mx-auto mb-6" />

            <Typography variant="h3" color="foreground" className="mb-4">
              Still have questions?
            </Typography>

            <Typography
              variant="p"
              color="muted-foreground"
              className="mb-8 max-w-2xl mx-auto"
            >
              Can't find the answer you're looking for? Our support team is
              dedicated to helping you succeed. Reach out through any of the
              channels below and we'll get back to you promptly.
            </Typography>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="rounded-full">
                Contact Support
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>

              <Button variant="outline" size="lg" className="rounded-full">
                Visit Help Center
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="text-center">
                <Typography
                  variant="h4"
                  color="primary"
                  className="text-2xl font-bold mb-2"
                >
                  &lt;2h
                </Typography>
                <Typography
                  variant="p"
                  color="muted-foreground"
                  className="text-sm"
                >
                  Average Response Time
                </Typography>
              </div>
              <div className="text-center">
                <Typography
                  variant="h4"
                  color="primary"
                  className="text-2xl font-bold mb-2"
                >
                  24/7
                </Typography>
                <Typography
                  variant="p"
                  color="muted-foreground"
                  className="text-sm"
                >
                  Support Availability
                </Typography>
              </div>
              <div className="text-center">
                <Typography
                  variant="h4"
                  color="primary"
                  className="text-2xl font-bold mb-2"
                >
                  98%
                </Typography>
                <Typography
                  variant="p"
                  color="muted-foreground"
                  className="text-sm"
                >
                  Customer Satisfaction
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
