import { CardPartners } from "@/components/card/card-partners";
import { AnimateFeature } from "@repo/ui/components/animation/AnimateFeature";
import { ScrollArea } from "@repo/ui/components/ui/scroll-area";
import { Typography } from "@repo/ui/components/ui/typography";
import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

export function Parteners() {
  const partners = [
    {
      logo: "/assets/partners/next.svg",
      enterprise: "Next.js",
      link: "https://www.nextjs.org/",
      description: "The React Framework for Production",
    },
    {
      logo: "/assets/partners/vercel.svg",
      enterprise: "Vercel",
      link: "https://www.vercel.com",
      description: "Platform for frontend frameworks",
    },
    {
      logo: "/assets/partners/ethereum.svg",
      enterprise: "Ethereum",
      link: "https://ethereum.org",
      description: "Blockchain platform for smart contracts",
    },
    {
      logo: "/assets/partners/polygon.svg",
      enterprise: "Polygon",
      link: "https://polygon.technology",
      description: "Scalable blockchain solutions",
    },
    {
      logo: "/assets/partners/hardhat.svg",
      enterprise: "Hardhat",
      link: "https://hardhat.org",
      description: "Development environment for Ethereum software",
    },
    {
      logo: "/assets/partners/openzeppelin.svg",
      enterprise: "OpenZeppelin",
      link: "https://openzeppelin.com",
      description: "Secure smart contract library",
    },
  ];

  return (
    <section className="py-24 bg-muted/30" id="partners">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
            Our Partners
          </Badge>

          <Typography
            variant="h1"
            color="primary"
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            Trusted by
            <br />
            <span className="text-secondary">Industry Leaders</span>
          </Typography>

          <Typography
            variant="h6"
            color="muted-foreground"
            className="max-w-3xl mx-auto text-lg leading-relaxed"
          >
            We take pride in collaborating with our partners who help us provide
            the best services to our clients. Together we're building the future
            of blockchain infrastructure.
          </Typography>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-16">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="group relative bg-background border rounded-2xl p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/20 hover:scale-105"
            >
              <a
                href={partner.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-square flex items-center justify-center mb-4">
                  <img
                    src={partner.logo}
                    alt={partner.enterprise}
                    className="w-16 h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                <Typography
                  variant="h4"
                  color="foreground"
                  className="text-sm font-semibold text-center mb-2"
                >
                  {partner.enterprise}
                </Typography>
              </a>
            </div>
          ))}
        </div>

        {/* Scrollable logos row */}
        <div className="mb-16">
          <Typography
            variant="h3"
            color="foreground"
            className="text-center mb-8"
          >
            Powered by leading technologies
          </Typography>

          <ScrollArea className="w-full">
            <AnimateFeature>
              <div className="flex gap-6 pb-4">
                {[...partners, ...partners].map((partner, index) => (
                  <div
                    key={`scroll-${index}`}
                    className="shrink-0 bg-background border rounded-xl p-6 min-w-50"
                  >
                    <div className="flex items-center gap-4">
                      <img
                        src={partner.logo}
                        alt={partner.enterprise}
                        className="w-12 h-12 object-contain"
                      />
                      <div>
                        <Typography
                          variant="p"
                          color="foreground"
                          className="font-medium text-sm"
                        >
                          {partner.enterprise}
                        </Typography>
                        <Typography
                          variant="span"
                          color="muted-foreground"
                          className="text-xs"
                        >
                          {partner.description}
                        </Typography>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </AnimateFeature>
          </ScrollArea>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Typography variant="h3" color="foreground" className="mb-4">
            Want to become a partner?
          </Typography>
          <Typography
            variant="p"
            color="muted-foreground"
            className="mb-8 max-w-2xl mx-auto"
          >
            Join our growing ecosystem of technology partners and help shape the
            future of blockchain development and deployment.
          </Typography>

          <Button size="lg" className="rounded-full">
            Become a Partner
            <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}
