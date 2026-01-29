"use client";

import { useState } from "react";
import {
  Github,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
  Shield,
  Users,
  Zap,
} from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import { Input } from "@repo/ui/components/ui/input";
import { Typography } from "@repo/ui/components/ui/typography";
import { Badge } from "@repo/ui/components/ui/badge";

const footerLinks = {
  product: [
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "Security", href: "#security" },
    { label: "Roadmap", href: "#roadmap" },
    { label: "Changelog", href: "#changelog" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#careers" },
    { label: "Press", href: "#press" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Documentation", href: "#docs" },
    { label: "API Reference", href: "#api" },
    { label: "Tutorials", href: "#tutorials" },
    { label: "Community", href: "#community" },
    { label: "Support", href: "#support" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Cookie Policy", href: "#cookies" },
    { label: "Compliance", href: "#compliance" },
    { label: "SLA", href: "#sla" },
  ],
};

const socialLinks = [
  {
    icon: <Github className="w-5 h-5" />,
    href: "https://github.com",
    label: "GitHub",
  },
  {
    icon: <Twitter className="w-5 h-5" />,
    href: "https://twitter.com",
    label: "Twitter",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    href: "https://linkedin.com",
    label: "LinkedIn",
  },
  {
    icon: <Mail className="w-5 h-5" />,
    href: "mailto:hello@midas.com",
    label: "Email",
  },
];

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing:", email);
    setEmail("");
  };

  return (
    <footer className="bg-muted/50 border-t">
      {/* Newsletter Section */}
      <div className="border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
                Stay Updated
              </Badge>

              <Typography
                variant="h3"
                color="foreground"
                className="text-3xl font-bold mb-4"
              >
                Get the latest updates
                <br />
                <span className="text-primary">delivered to your inbox</span>
              </Typography>

              <Typography
                variant="p"
                color="muted-foreground"
                className="mb-6 max-w-lg"
              >
                Join thousands of developers and enterprises who trust Midas for
                their smart contract management needs. Get exclusive content,
                updates, and offers.
              </Typography>

              <form
                onSubmit={handleSubscribe}
                className="flex flex-col sm:flex-row gap-3 max-w-md"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  required
                />
                <Button type="submit" className="rounded-full">
                  Subscribe
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </form>
            </div>

            <div className="grid grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <Typography
                  variant="h4"
                  color="primary"
                  className="text-2xl font-bold mb-2"
                >
                  10K+
                </Typography>
                <Typography
                  variant="p"
                  color="muted-foreground"
                  className="text-sm"
                >
                  Active Users
                </Typography>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <Typography
                  variant="h4"
                  color="primary"
                  className="text-2xl font-bold mb-2"
                >
                  99.9%
                </Typography>
                <Typography
                  variant="p"
                  color="muted-foreground"
                  className="text-sm"
                >
                  Uptime SLA
                </Typography>
              </div>

              <div className="text-center">
                <div className="w-12 h-12 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Zap className="w-6 h-6 text-primary" />
                </div>
                <Typography
                  variant="h4"
                  color="primary"
                  className="text-2xl font-bold mb-2"
                >
                  50x
                </Typography>
                <Typography
                  variant="p"
                  color="muted-foreground"
                  className="text-sm"
                >
                  Faster Deployment
                </Typography>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {/* Company Info */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <div className="mb-6">
              <Typography
                variant="h2"
                color="primary"
                className="text-2xl font-bold mb-2"
              >
                Artifex
              </Typography>
              <Typography
                variant="p"
                color="muted-foreground"
                className="text-sm leading-relaxed"
              >
                Enterprise-grade smart contract management platform for secure,
                scalable, and compliant blockchain deployments.
              </Typography>
            </div>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>hello@midas.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
            </div>

            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                  asChild
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {/* Product Links */}
          <div>
            <Typography
              variant="h4"
              color="foreground"
              className="font-semibold mb-4"
            >
              Product
            </Typography>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <Typography
              variant="h4"
              color="foreground"
              className="font-semibold mb-4"
            >
              Company
            </Typography>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <Typography
              variant="h4"
              color="foreground"
              className="font-semibold mb-4"
            >
              Resources
            </Typography>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <Typography
              variant="h4"
              color="foreground"
              className="font-semibold mb-4"
            >
              Legal
            </Typography>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <Typography
              variant="p"
              color="muted-foreground"
              className="text-sm"
            >
              © {new Date().getFullYear()} Midas Contract Manager. All rights
              reserved.
            </Typography>

            <div className="flex items-center gap-6">
              <Badge variant="secondary" className="text-xs">
                SOC 2 Type II Certified
              </Badge>
              <Badge variant="secondary" className="text-xs">
                GDPR Compliant
              </Badge>
              <Badge variant="secondary" className="text-xs">
                ISO 27001
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
