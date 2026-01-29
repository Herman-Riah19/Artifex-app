"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Shield,
  Zap,
  Globe,
  Lock,
  CheckCircle,
} from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";
import { Typography } from "@repo/ui/components/ui/typography";

export function About() {
  const [activeTab, setActiveTab] = useState(0);

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description:
        "Deploy contracts in seconds with our optimized infrastructure",
      stats: "50x faster",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Enterprise Security",
      description: "Bank-grade security with multi-layer protection",
      stats: "99.9% secure",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Scale",
      description: "Deploy to 150+ blockchain networks worldwide",
      stats: "150+ networks",
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: "Compliance Ready",
      description: "Built-in regulatory compliance and audit trails",
      stats: "SOC 2 certified",
    },
  ];

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6 backdrop-blur-sm">
            Trusted by industry leaders
          </Badge>

          <Typography
            variant="h1"
            color="primary"
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            Enterprise-Grade
            <br />
            <span className="text-secondary">Contract Management</span>
          </Typography>

          <Typography
            variant="h6"
            color="muted-foreground"
            className="max-w-4xl mx-auto text-lg leading-relaxed"
          >
            Midas Contract Manager empowers enterprises to deploy, manage, and
            govern blockchain infrastructure with enterprise-grade security,
            scalability, and compliance.
          </Typography>
        </div>

        {/* Feature tabs */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-4">
            {features.map((feature, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 ${
                  activeTab === index
                    ? "bg-primary/5 border-primary/20 shadow-lg"
                    : "bg-card border-border hover:bg-accent/50"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`p-3 rounded-xl ${
                      activeTab === index
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <Typography
                      variant="h3"
                      color="foreground"
                      className="text-lg font-semibold mb-2"
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      variant="p"
                      color="muted-foreground"
                      className="text-sm"
                    >
                      {feature.description}
                    </Typography>
                  </div>
                  <Typography
                    variant="h4"
                    color="primary"
                    className="text-2xl font-bold"
                  >
                    {feature.stats}
                  </Typography>
                </div>
              </button>
            ))}
          </div>

          <div className="relative">
            <div className="bg-gradient-to-r from-primary/10 to-secondary/10 p-1 rounded-3xl">
              <div className="bg-background rounded-3xl p-8 border">
                <div className="aspect-square bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-primary to-secondary rounded-2xl flex items-center justify-center text-primary-foreground">
                      {features[activeTab]?.icon}
                    </div>
                    <Typography
                      variant="h3"
                      color="foreground"
                      className="text-2xl font-bold mb-4"
                    >
                      {features[activeTab]?.title}
                    </Typography>
                    <Typography
                      variant="p"
                      color="muted-foreground"
                      className="mb-6 leading-relaxed"
                    >
                      {features[activeTab]?.description}
                    </Typography>
                    <div className="flex items-center justify-center gap-2 text-primary">
                      <CheckCircle className="w-5 h-5" />
                      <Typography
                        variant="span"
                        color="primary"
                        className="font-semibold"
                      >
                        {features[activeTab]?.stats}
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Key capabilities */}
        <div className="grid md:grid-cols-4 gap-8 mb-20">
          {[
            "Version Control",
            "Automated Audits",
            "Event Logging",
            "Multi-Network Deploy",
          ].map((capability, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-primary to-secondary rounded-xl flex items-center justify-center text-primary-foreground">
                <CheckCircle className="w-6 h-6" />
              </div>
              <Typography
                variant="h4"
                color="foreground"
                className="font-medium mb-2"
              >
                {capability}
              </Typography>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="rounded-full">
              Get Started Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button variant="outline" size="lg" className="rounded-full">
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
