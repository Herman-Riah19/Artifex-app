"use client";

import { About } from "@/components/common/landingPage/about";
import { FAQ } from "@/components/common/landingPage/faq";
import { CTA } from "@/components/common/landingPage/cta";
import { Feature } from "@/components/common/landingPage/feature";
import { Parteners } from "@/components/common/landingPage/parteners";
import { Navbar } from "@/components/navbar/navbar";
import { Testimonials } from "@/components/common/landingPage/testimonials";
import { Footer } from "@/components/common/landingPage/footer";
import { Hero } from "@/components/common/landingPage/hero";
import * as React from "react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Feature />
      <Parteners />
      <Testimonials />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}
