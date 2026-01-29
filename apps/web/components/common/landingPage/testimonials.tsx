"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import { Typography } from "@repo/ui/components/ui/typography";
import { Testimonial } from "@/types/testimonialsType";
import { TestimonialCard } from "@/components/card/card-testimonial";

const testimonials: Testimonial[] = [
  {
    name: "Sarah Chen",
    role: "CTO at DeFi Labs",
    company: "DeFi Labs",
    avatar: "/assets/testimonials/sarah.png",
    content:
      "Midas Contract Manager has transformed how we deploy and manage our smart contracts. The audit features alone have saved us countless hours and prevented potential vulnerabilities.",
    rating: 5,
  },
  {
    name: "David Chen",
    role: "Lead Blockchain Developer",
    company: "TechCorp Solutions",
    avatar: "/assets/testimonials/chen.png",
    content:
      "The real-time monitoring and governance features are exactly what enterprises need. We've reduced deployment time by 80% while improving security across all our contracts.",
    rating: 5,
  },
  {
    name: "Omar Hassan",
    role: "Head of Engineering",
    company: "FinTech Innovations",
    avatar: "/assets/testimonials/omar.png",
    content:
      "Outstanding platform! The multi-network deployment and compliance features have made it easy for us to scale our blockchain operations globally.",
    rating: 5,
  },
  {
    name: "Robert Wilson",
    role: "Smart Contract Architect",
    company: "Enterprise Blockchain",
    avatar: "/assets/testimonials/robert.png",
    content:
      "The enterprise-grade security and audit trails give us confidence to deploy mission-critical smart contracts. Support team is also fantastic.",
    rating: 5,
  },
];

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TestimonialsHeader />

        {/* Testimonials Carousel */}
        <div className="relative mb-16">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 25}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-1/3 p-4 flex-shrink-0">
                  <div className="px-4">
                    <TestimonialCard
                      testimonial={testimonial}
                      isActive={index === currentIndex}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="rounded-full"
              disabled={currentIndex === 0}
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-primary"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="rounded-full"
              disabled={currentIndex === testimonials.length - 1}
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        <StatsComponent />
        <CTASection />
      </div>
    </section>
  );
}

function TestimonialsHeader() {
  return (
    <div className="text-center mb-16">
      <Badge className="bg-primary/10 text-primary border-primary/20 mb-6">
        Customer Success
      </Badge>

      <Typography
        variant="h1"
        color="primary"
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
      >
        Trusted by
        <br />
        <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">Industry Leaders</span>
      </Typography>

      <Typography
        variant="h6"
        color="muted-foreground"
        className="max-w-3xl mx-auto text-lg leading-relaxed"
      >
        See what our customers have to say about their experience with Midas
        Contract Manager.
      </Typography>
    </div>
  );
}

export function CTASection() {
  return (
    <div className="text-center">
      <Typography variant="h3" color="foreground" className="mb-4">
        Ready to join them?
      </Typography>
      <Typography
        variant="p"
        color="muted-foreground"
        className="mb-8 max-w-2xl mx-auto"
      >
        Start your journey with Midas Contract Manager and see why thousands of
        developers trust us with their smart contract deployment and management.
      </Typography>

      <Button size="lg" className="rounded-full">
        Get Started Free
      </Button>
    </div>
  );
}

export function StatsComponent() {
  const stats = [
    { value: "98%", label: "Customer Satisfaction" },
    { value: "4.9", label: "Average Rating" },
    { value: "500+", label: "Enterprise Clients" },
    { value: "24/7", label: "Customer Support" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
      {stats.map((stat, index) => (
        <div key={index} className="text-center">
          <Typography
            variant="h2"
            color="primary"
            className="text-3xl md:text-4xl font-bold mb-2"
          >
            {stat.value}
          </Typography>
          <Typography variant="p" color="muted-foreground" className="text-sm">
            {stat.label}
          </Typography>
        </div>
      ))}
    </div>
  );
}
