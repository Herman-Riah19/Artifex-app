"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@repo/ui/components/ui/avatar";
import { Badge } from "@repo/ui/components/ui/badge";
import { Button } from "@repo/ui/components/ui/button";
import { Typography } from "@repo/ui/components/ui/typography";
import { Github, Star } from "lucide-react";
import DarkTheme from "@/components/dark-theme";
import { NavbarSheet } from "@/components/navbar/navbar-sheet";

export function Navbar() {
  useEffect(() => {
    const links = document.querySelectorAll(".nav-link");

    links.forEach((link) => {
      link.addEventListener("click", (event) => {
        event.preventDefault();

        const targetId = link.getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId ?? "");

        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      });
    });
  }, []);

  const pages = [
    {
      name: "Acceuil",
      link: `#home`,
    },
    {
      name: "A propos",
      link: `#about`,
    },
    {
      name: "Features",
      link: `#features`,
    },
    {
      name: "Services",
      link: `#services`,
    },
    {
      name: "Team",
      link: `#team`,
    },
    {
      name: "Contact",
      link: `#newsletter`,
    },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      {/* Background gradient and pattern */}
      <div className="absolute inset-0 bg-linear-to-r from-background via-background to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--border)_1px,transparent_1px),linear-gradient(to_bottom,var(--border)_1px,transparent_1px)] bg-size-[24px_24px] opacity-5" />

      <div className="relative z-10 flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative">
            <Avatar className="h-30 w-30 transition-transform group-hover:scale-105">
              <AvatarImage className="h-full w-full bg-transparent" src="/assets/logos/logo-simple.png" />
              {/* <AvatarFallback className="bg-linear-to-r from-primary to-secondary text-primary-foreground">
                Artefix
              </AvatarFallback> */}
            </Avatar>
          </div>
          <div className="hidden sm:block">
            <Typography
              variant="h3"
              color="foreground"
              className="font-bold text-lg"
            >
              Artefix
            </Typography>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {pages.map((page) => (
            <a
              key={page.name}
              href={page.link}
              className="nav-link group relative"
            >
              <Typography
                variant="span"
                color="muted-foreground"
                className="text-sm font-medium transition-colors group-hover:text-foreground relative"
              >
                {page.name}
                {/* Underline animation */}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-linear-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
              </Typography>
            </a>
          ))}
        </nav>

        {/* Right side actions */}
        <div className="flex items-center gap-3">
          {/* GitHub Stars Badge */}
          <Button
            variant="ghost"
            size="sm"
            className="hidden sm:flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors rounded-full"
            asChild
          >
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-4 h-4" />
              <Typography
                variant="span"
                color="muted-foreground"
                className="text-sm"
              >
                12.5k
              </Typography>
            </a>
          </Button>

          <DarkTheme />

          {/* CTA Button */}
          <Link
            href="/register"
            className="p-2 px-4 text-background hidden sm:flex rounded-full bg-linear-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary transition-all duration-200 hover:scale-105"
          >
            Get Started
          </Link>

          <NavbarSheet pages={pages} />

          {/* Theme Toggle */}
        </div>
      </div>
    </header>
  );
}
