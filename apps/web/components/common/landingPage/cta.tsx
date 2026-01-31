"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Shield,
  Globe,
  Users,
} from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { Card, CardContent } from "@repo/ui/components/ui/card";
import { Badge } from "@repo/ui/components/ui/badge";
import { Typography } from "@repo/ui/components/ui/typography";

const plans = [
  {
    name: "Starter",
    price: "$0",
    period: "Forever",
    description: "Perfect for individual developers and small projects",
    features: [
      "Up to 5 smart contracts",
      "Basic audit tools",
      "Community support",
      "1 blockchain network",
      "Basic monitoring",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    price: "$99",
    period: "per month",
    description: "Ideal for growing teams and production applications",
    features: [
      "Unlimited smart contracts",
      "Advanced audit tools",
      "Priority support",
      "10+ blockchain networks",
      "Real-time monitoring",
      "Custom integrations",
      "Advanced analytics",
    ],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "pricing",
    description: "Tailored solutions for large organizations",
    features: [
      "Everything in Professional",
      "Dedicated account manager",
      "SLA guarantees",
      "Unlimited networks",
      "Custom features",
      "On-premise deployment",
      "Compliance certifications",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

function PricingCard({
  plan,
  index,
}: {
  plan: (typeof plans)[0];
  index: number;
}) {
  return (
    <Card
      className={`relative h-full transition-all duration-300 hover:scale-105 ${
        plan.popular
          ? "border-primary shadow-xl bg-primary/5"
          : "border-border bg-card hover:border-primary/50"
      }`}
    >
      {plan.popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground">
          Most Popular
        </Badge>
      )}

      <CardContent className="p-8">
        <div className="text-center mb-8">
          <Typography
            variant="h3"
            color="primary"
            className="text-xl font-bold mb-2"
          >
            {plan.name}
          </Typography>
          <div className="mb-4">
            <span className="text-4xl font-bold text-primary">
              {plan.price}
            </span>
            {plan.period && (
              <span className="text-muted-foreground ml-2">/{plan.period}</span>
            )}
          </div>
          <Typography variant="p" color="muted-foreground" className="text-sm">
            {plan.description}
          </Typography>
        </div>

        <div className="space-y-4 mb-8">
          {plan.features.map((feature, featureIndex) => (
            <div key={featureIndex} className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
              <Typography variant="p" color="foreground" className="text-sm">
                {feature}
              </Typography>
            </div>
          ))}
        </div>

        <Button
          className={`w-full rounded-full ${
            plan.popular ? "" : 'variant="outline"'
          }`}
          size="lg"
        >
          {plan.cta}
          <ArrowRight className="ml-2 w-4 h-4" />
        </Button>
      </CardContent>
    </Card>
  );
}

export function CTA() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">(
    "monthly",
  );

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
            Simple, transparent pricing
          </Badge>

          <Typography
            variant="h1"
            color="primary"
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            Choose Your
            <br />
            <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">Perfect Plan</span>
          </Typography>

          <Typography
            variant="h6"
            color="muted-foreground"
            className="max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Start free and scale as you grow. No hidden fees, no surprises.
          </Typography>
        </div>

        {/* Billing Toggle */}
        <div className="flex justify-center mb-12">
          <div className="bg-background border rounded-full p-1 inline-flex">
            <button
              onClick={() => setBillingCycle("monthly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "monthly"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle("yearly")}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                billingCycle === "yearly"
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Yearly
              <Badge variant="secondary" className="ml-2 text-xs">
                Save 20%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
              <Zap className="w-6 h-6 text-primary" />
            </div>
            <Typography
              variant="h4"
              color="foreground"
              className="font-semibold mb-2"
            >
              Fast Setup
            </Typography>
            <Typography
              variant="p"
              color="muted-foreground"
              className="text-sm"
            >
              Get started in minutes, not days
            </Typography>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
              <Shield className="w-6 h-6 text-primary" />
            </div>
            <Typography
              variant="h4"
              color="foreground"
              className="font-semibold mb-2"
            >
              Secure & Reliable
            </Typography>
            <Typography
              variant="p"
              color="muted-foreground"
              className="text-sm"
            >
              Enterprise-grade security included
            </Typography>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
              <Globe className="w-6 h-6 text-primary" />
            </div>
            <Typography
              variant="h4"
              color="foreground"
              className="font-semibold mb-2"
            >
              Global Scale
            </Typography>
            <Typography
              variant="p"
              color="muted-foreground"
              className="text-sm"
            >
              Deploy to networks worldwide
            </Typography>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
              <Users className="w-6 h-6 text-primary" />
            </div>
            <Typography
              variant="h4"
              color="foreground"
              className="font-semibold mb-2"
            >
              24/7 Support
            </Typography>
            <Typography
              variant="p"
              color="muted-foreground"
              className="text-sm"
            >
              Expert help when you need it
            </Typography>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center bg-background border rounded-3xl p-12">
          <Typography variant="h3" color="foreground" className="mb-4">
            Questions about pricing?
          </Typography>
          <Typography
            variant="p"
            color="muted-foreground"
            className="mb-8 max-w-2xl mx-auto"
          >
            Our team is here to help you find the perfect plan for your needs.
            Schedule a call to discuss your requirements.
          </Typography>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full">
              Schedule a Demo
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>

            <Button variant="outline" size="lg" className="rounded-full">
              View Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
