import { Badge } from "@repo/ui/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@repo/ui/components/ui/card";
import { Activity, TrendingUp } from "lucide-react";
import React from "react";

export function CardActiviteRecent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <Activity className="mr-2 h-5 w-5" />
          Activité récente
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Nouveau contrat déployé</p>
              <p className="text-sm text-gray-500">Il y a 2 heures</p>
            </div>
            <Badge variant="secondary">Contrat</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Transaction confirmée</p>
              <p className="text-sm text-gray-500">Il y a 4 heures</p>
            </div>
            <Badge variant="secondary">Transaction</Badge>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="font-medium">Nouveau membre ajouté</p>
              <p className="text-sm text-gray-500">Il y a 6 heures</p>
            </div>
            <Badge variant="secondary">Organisation</Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function CardStatisticRecent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center">
          <TrendingUp className="mr-2 h-5 w-5" />
          Statistiques
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Transactions ce mois</span>
            <span className="font-medium">+23%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Nouveaux contrats</span>
            <span className="font-medium">+15%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Utilisateurs actifs</span>
            <span className="font-medium">+8%</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Stockage utilisé</span>
            <span className="font-medium">2.3 GB</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
