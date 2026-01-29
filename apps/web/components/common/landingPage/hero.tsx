"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Play, Github, Star } from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { Badge } from "@repo/ui/components/ui/badge";
import { Typography } from "@repo/ui/components/ui/typography";

export function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-background text-foreground overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted to-background" />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Animated gradient orb */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Announcement badge */}
        <div className="flex justify-center mb-8">
          <Badge className="bg-primary/10 text-primary border-primary/20 px-4 py-2 text-sm backdrop-blur-sm">
            <Star className="w-4 h-4 mr-2 fill-current" />
            Trusted by 10,000+ developers worldwide
          </Badge>
        </div>

        {/* Main heading */}
        <Typography
          variant="h1"
          color="primary"
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight"
        >
          Smart Contract
          <br />
          <span className="bg-linear-to-r from-primary to-primary/60 bg-clip-text text-transparent">Management</span>
        </Typography>

        {/* Subheading */}
        <Typography
          variant="h3"
          color="muted-foreground"
          className="text-xl sm:text-2xl md:text-3xl mb-12 max-w-4xl mx-auto leading-relaxed"
        >
          Deploy, audit, and govern your blockchain infrastructure with
          enterprise-grade security and scalability.
        </Typography>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button
            size="lg"
            className="px-8 py-4 text-lg font-medium rounded-full transition-all duration-200 hover:scale-105"
          >
            Start Deploying
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg font-medium rounded-full backdrop-blur-sm transition-all duration-200"
          >
            <Play className="mr-2 w-5 h-5" />
            Watch Demo
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <Typography
              variant="h3"
              color="primary"
              className="text-3xl md:text-4xl font-bold mb-2"
            >
              99.9%
            </Typography>
            <Typography
              variant="p"
              color="muted-foreground"
              className="text-sm"
            >
              Uptime
            </Typography>
          </div>
          <div className="text-center">
            <Typography
              variant="h3"
              color="primary"
              className="text-3xl md:text-4xl font-bold mb-2"
            >
              &lt;50ms
            </Typography>
            <Typography
              variant="p"
              color="muted-foreground"
              className="text-sm"
            >
              Latency
            </Typography>
          </div>
          <div className="text-center">
            <Typography
              variant="h3"
              color="primary"
              className="text-3xl md:text-4xl font-bold mb-2"
            >
              10M+
            </Typography>
            <Typography
              variant="p"
              color="muted-foreground"
              className="text-sm"
            >
              Transactions
            </Typography>
          </div>
          <div className="text-center">
            <Typography
              variant="h3"
              color="primary"
              className="text-3xl md:text-4xl font-bold mb-2"
            >
              150+
            </Typography>
            <Typography
              variant="p"
              color="muted-foreground"
              className="text-sm"
            >
              Networks
            </Typography>
          </div>
        </div>

        {/* GitHub stars */}
        <div className="flex justify-center">
          <Button
            variant="ghost"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5 mr-2" />
            12.5k stars on GitHub
          </Button>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
