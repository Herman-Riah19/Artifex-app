'use server';

import { 
  FileText, 
  Wallet, 
  Building2, 
  FileText as FileIcon,
  TrendingUp,
} from 'lucide-react';
import { ContractServices } from '@/services/contractServices';
import { useAuthStore } from '@/store/auth-store';
import { CardStatistic } from '@/components/card/card-statistic';
import { CardActionRapides } from '@/components/card/card-action-rapides';
import { CardActiviteRecent, CardStatisticRecent } from '@/components/card/card-activite-recent';

export default async function DashboardPage() {
  const token = useAuthStore.getState().token;
  const contracts = await ContractServices.getAllContracts(token || '');

  const stats = [
    { name: 'Contrats actifs', value: contracts.length, icon: FileText, color: 'bg-blue-500' },
    { name: 'Wallets', value: '8', icon: Wallet, color: 'bg-green-500' },
    { name: 'Organisations', value: '3', icon: Building2, color: 'bg-purple-500' },
    { name: 'Transactions', value: '156', icon: TrendingUp, color: 'bg-orange-500' },
  ];

  const quickActions = [
    { name: 'Créer un contrat', href: '/dashboard/contracts', icon: FileText },
    { name: 'Ajouter un wallet', href: '/dashboard/wallets', icon: Wallet },
    { name: 'Nouvelle organisation', href: '/dashboard/organizations', icon: Building2 },
    { name: 'Uploader un fichier', href: '/dashboard/files', icon: FileIcon },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-600">Bienvenue sur votre plateforme de gestion blockchain</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => {
          return (
            <CardStatistic key={stat.name} stat={stat} />
          );
        })}
      </div>

      <CardActionRapides quickActions={quickActions} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CardActiviteRecent />
        <CardStatisticRecent />
      </div>
    </div>
  );
}