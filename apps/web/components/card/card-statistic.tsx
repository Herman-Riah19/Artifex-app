import { Card, CardContent } from "@repo/ui/components/ui/card";
import { stat } from "fs";
import { Icon, LucideProps } from "lucide-react";
import React from "react";

interface CardStatisticProps {
  stat: {
    name: string;
    value: string;
    icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
    color: string;
  };
}
export function CardStatistic({ stat }: CardStatisticProps) {
  return (
    <Card key={stat.name}>
      <CardContent className="p-6">
        <div className="flex items-center">
          <div className={`p-3 rounded-full ${stat.color}`}>
            <stat.icon className="h-6 w-6 text-white" />
          </div>
          <div className="ml-4">
            <p className="text-sm font-medium text-gray-600">{stat.name}</p>
            <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
