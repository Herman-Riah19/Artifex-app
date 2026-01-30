import { Button } from "@repo/ui/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@repo/ui/components/ui/card";
import { Link } from "lucide-react";
import React from "react";

interface QuickAction {
    name: string;
    href: string;
    icon: React.ForwardRefExoticComponent<
      Omit<React.ComponentProps<"svg">, "ref"> & React.RefAttributes<SVGSVGElement>
    >;
}

interface CardActionRapidesProps {
    quickActions: QuickAction[];
}

export function CardActionRapides( { quickActions }: CardActionRapidesProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Actions rapides</CardTitle>
        <CardDescription>
          Accédez rapidement aux fonctionnalités principales
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {quickActions.map((action) => {
            return (
              <Link key={action.name} href={action.href}>
                <Button
                  variant="outline"
                  className="w-full h-20 flex flex-col items-center justify-center space-y-2"
                >
                  <action.icon className="h-6 w-6" />
                  <span className="text-sm">{action.name}</span>
                </Button>
              </Link>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
