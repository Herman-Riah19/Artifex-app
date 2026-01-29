"use client";

import { useState } from "react";
import {
  ArrowRight,
  Rocket,
  Shield,
  Users,
  CheckCircle2,
  Zap,
  Globe,
  Lock,
  Code,
  BarChart3,
} from "lucide-react";
import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@repo/ui/components/ui/card";
import { Badge } from "@repo/ui/components/ui/badge";
import { Typography } from "@repo/ui/components/ui/typography";

const FeaturesData = [
  {
    icon: <Rocket className="w-8 h-8" />,
    title: "Déploiement Simplifié",
    description: "Déployez vos smart contracts en quelques clics",
    details: "Interface intuitive pour un déploiement rapide",
    stats: "50x plus rapide",
    color: "from-blue-500 to-cyan-500",
    size: "large",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Audit Intégré",
    description: "Audits automatisés et manuels",
    details: "Sécurité renforcée avec analyses complètes",
    stats: "99.9% sécurisé",
    color: "from-green-500 to-emerald-500",
    size: "medium",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Gouvernance Décentralisée",
    description: "Gestion collaborative des contrats",
    details: "Mécanismes de vote multi-parties",
    stats: "Multi-stakeholder",
    color: "from-orange-500 to-red-500",
    size: "medium",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Optimisation Performance",
    description: "Accélération des transactions",
    details: "Algorithmes d'optimisation avancés",
    stats: "10x plus rapide",
    color: "from-yellow-500 to-orange-500",
    size: "small",
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: "Multi-Réseaux",
    description: "Déploiement sur 150+ blockchains",
    details: "Support des principaux réseaux",
    stats: "150+ réseaux",
    color: "from-indigo-500 to-purple-500",
    size: "small",
  },
  {
    icon: <Lock className="w-6 h-6" />,
    title: "Sécurité Entreprise",
    description: "Protection niveau bancaire",
    details: "Chiffrement et conformité réglementaire",
    stats: "SOC 2 certifié",
    color: "from-red-500 to-pink-500",
    size: "small",
  },
  {
    icon: <Code className="w-6 h-6" />,
    title: "Outils Développeurs",
    description: "SDK et API complètes",
    details: "Documentation et exemples intégrés",
    stats: "100+ APIs",
    color: "from-cyan-500 to-blue-500",
    size: "small",
  },
  {
    icon: <BarChart3 className="w-6 h-6" />,
    title: "Analytics Avancés",
    description: "Tableaux de bord personnalisables",
    details: "Métriques détaillées et rapports",
    stats: "Real-time data",
    color: "from-emerald-500 to-green-500",
    size: "small",
  },
];

function BentoCard({
  feature,
  index,
  onClick,
}: {
  feature: (typeof FeaturesData)[0];
  index: number;
  onClick: () => void;
}) {
  const sizeClasses = {
    small: "md:col-span-1 row-span-1",
    medium: "md:col-span-2 row-span-1",
    large: "md:col-span-2 row-span-2",
  };

  return (
    <Card
      onClick={onClick}
      className={`group cursor-pointer transition-all duration-300 shadow-none border-0 overflow-hidden ${
        sizeClasses[feature.size as keyof typeof sizeClasses]
      }`}
    >
      {/* Background gradient */}
      <div
        className={`absolute inset-0 bg-linear-to-br ${feature.color} opacity-10`}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-size-[24px_24px]" />

      <CardHeader className="relative z-10 pb-3">
        <div className="flex items-start justify-between gap-3">
          <div
            className={`p-3 rounded-xl bg-linear-to-r ${feature.color} text-foreground shadow-lg`}
          >
            {feature.icon}
          </div>
          <Badge
            variant="secondary"
            className="bg-white/20 text-foreground border-white/30 backdrop-blur-sm text-xs"
          >
            {feature.stats}
          </Badge>
        </div>
      </CardHeader>

      <CardContent className="relative z-10 pt-0">
        <CardTitle className="text-xl text-foreground mb-2 group-hover:scale-105 transition-transform">
          {feature.title}
        </CardTitle>
        <CardDescription className="text-foreground/80 text-sm leading-relaxed">
          {feature.description}
        </CardDescription>
        <Typography
          variant="span"
          color="muted-foreground"
          className="text-foreground/60 text-xs mt-2 block"
        >
          {feature.details}
        </Typography>
      </CardContent>
    </Card>
  );
}

export function Feature() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-muted/30">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,var(--muted-foreground)_1px,transparent_1px),linear-gradient(to_bottom,var(--muted-foreground)_1px,transparent_1px)] bg-size-[24px_24px] opacity-5" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-6 backdrop-blur-sm">
            Fonctionnalités Principales
          </Badge>

          <Typography
            variant="h1"
            color="primary"
            className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
          >
            Gestion de
            <br />
            <span className="bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Smart Contracts
            </span>
          </Typography>

          <Typography
            variant="h6"
            color="muted-foreground"
            className="max-w-3xl mx-auto text-lg leading-relaxed"
          >
            Toutes les outils dont vous avez besoin pour déployer, auditer et
            gouverner vos smart contracts en toute sécurité.
          </Typography>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16 ">
          {FeaturesData.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative"
            >
              <BentoCard
                feature={feature}
                index={index}
                onClick={() => console.log(`Clicked feature ${index}`)}
              />

              {/* Hover effect overlay */}
              {hoveredIndex === index && (
                <div className="absolute inset-0 bg-linear-to-r from-primary/20 to-secondary/20 rounded-2xl pointer-events-none transition-opacity duration-300" />
              )}
            </div>
          ))}
        </div>

        {/* Feature Details Modal/Panel */}
        {hoveredIndex !== null && FeaturesData[hoveredIndex] && (
          <div className="mb-16">
            <Card className="bg-linear-to-r from-primary/5 to-secondary/5 border-primary/20">
              <CardContent className="p-8">
                <div className="flex items-center gap-6 mb-6">
                  <div
                    className={`p-4 rounded-xl bg-linear-to-r ${FeaturesData[hoveredIndex].color} text-white shadow-lg`}
                  >
                    {FeaturesData[hoveredIndex].icon}
                  </div>
                  <div className="flex-1">
                    <Typography
                      variant="h2"
                      color="foreground"
                      className="text-2xl font-bold mb-2"
                    >
                      {FeaturesData[hoveredIndex].title}
                    </Typography>
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {FeaturesData[hoveredIndex].stats}
                    </Badge>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <Typography
                      variant="h4"
                      color="foreground"
                      className="mb-4"
                    >
                      Description détaillée
                    </Typography>
                    <Typography
                      variant="p"
                      color="muted-foreground"
                      className="leading-relaxed"
                    >
                      {FeaturesData[hoveredIndex].details}
                    </Typography>
                  </div>

                  <div>
                    <Typography
                      variant="h4"
                      color="foreground"
                      className="mb-4"
                    >
                      Avantages clés
                    </Typography>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <Typography
                          variant="span"
                          color="foreground"
                          className="text-sm"
                        >
                          Interface utilisateur intuitive
                        </Typography>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <Typography
                          variant="span"
                          color="foreground"
                          className="text-sm"
                        >
                          Documentation complète
                        </Typography>
                      </div>
                      <div className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                        <Typography
                          variant="span"
                          color="foreground"
                          className="text-sm"
                        >
                          Support 24/7
                        </Typography>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t">
                  <Button className="rounded-full" size="lg">
                    Explorer cette fonctionnalité
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center">
          <Typography variant="h3" color="primary" className="mb-4">
            Prêt à commencer ?
          </Typography>
          <Typography
            variant="p"
            color="muted-foreground"
            className="mb-8 max-w-2xl mx-auto"
          >
            Découvrez toutes nos fonctionnalités et transformez votre gestion de
            smart contracts dès aujourd'hui.
          </Typography>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="rounded-full">
              Commencer gratuitement
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full">
              Voir la documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
