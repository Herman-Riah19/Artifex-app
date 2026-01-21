"use client";

import { useEffect, useState } from "react";
import { WalletServices } from "@/services/walletServices";
import { PageHeader } from "@/components/page-header";
import { FormDialog } from "@/components/dialog/form-dialog";
import { EntityList } from "@/components/entity/entity-list";
import { EntityCard } from "@/components/card/entity-card";
import { Eye, Edit, Trash2, Send, RefreshCw } from "lucide-react";
import { WalletFormData } from "@/validators/wallet-validator";
import { useAuthStore } from "@/store/auth-store";
import { WalletForm } from "./components/WalletForm";
import { ClientView } from "@/components/client-view";

export default function WalletsPage() {
  const [wallets, setWallets] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<any>(null);
  const token = useAuthStore((state) => state.token);

  useEffect(() => {
    if (!token) return;

    const getWallets = async () => {
      try {
        const data = await WalletServices.getAllWallets(token);
        setWallets(data);
      } catch (e) {
        console.error(e);
      }
    };

    getWallets();
  }, [token]);

  const handleCreateWallet = async (data: WalletFormData) => {
    setLoading(true);
    try {
      const result = await WalletServices.createWallet(data, token as string);
      console.log("Created wallet:", result);
      if (result) {
        setWallets([...wallets, result.data]);
        setDialogOpen(false);
      }
    } catch (error) {
      console.error("Error creating wallet:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefreshBalance = async (walletId: string) => {
    try {
      const result = await WalletServices.getWalletBalance(
        walletId,
        token as string,
      );

      if (result.success) {
        setWallets(
          wallets.map((wallet) =>
            wallet.id === walletId
              ? { ...wallet, balance: result.balance }
              : wallet,
          ),
        );
      }
    } catch (error) {
      console.error("Error refreshing balance:", error);
    }
  };

  const handleViewWallet = (wallet: any) => {
    // TODO: Implement view functionality
    console.log("View wallet:", wallet);
  };

  const handleEditWallet = (wallet: any) => {
    // TODO: Implement edit functionality
    console.log("Edit wallet:", wallet);
  };

  const handleDeleteWallet = (wallet: any) => {
    // TODO: Implement delete functionality
    console.log("Delete wallet:", wallet);
  };

  const handleTransferClick = (wallet: any) => {
    setSelectedWallet(wallet);
  };

  const getTypeVariant = (
    type: string,
  ): "default" | "secondary" | "destructive" | "outline" => {
    const variants: Record<
      string,
      "default" | "secondary" | "destructive" | "outline"
    > = {
      startup: "default",
      entreprise: "secondary",
      government: "outline",
    };
    return variants[type] || "outline";
  };

  const renderWalletCard = (wallet: any, index: number) => (
    <EntityCard
      key={wallet.id || index}
      title={wallet.name}
      description={wallet.description}
      status={{
        label: "Organization type: " + wallet.organization.type,
        variant: getTypeVariant(wallet.organization.type),
      }}
      metadata={[
        { label: "Organization", value: wallet.organization.name },
        {
          label: "Address",
          value: `${wallet.address.slice(0, 10)}...${wallet.address.slice(-8)}`,
        },
        { label: "Chain ID", value: `${wallet.chainId}` },
        { label: "Label", value: `${wallet.label}` },
      ]}
      actions={[
        {
          icon: <RefreshCw className="h-4 w-4" />,
          label: "Refresh Balance",
          onClick: () => handleRefreshBalance(wallet.id),
        },
        {
          icon: <Eye className="h-4 w-4" />,
          label: "View",
          onClick: () => handleViewWallet(wallet),
        },
        {
          icon: <Edit className="h-4 w-4" />,
          label: "Edit",
          onClick: () => handleEditWallet(wallet),
        },
        {
          icon: <Send className="h-4 w-4" />,
          label: "Transfer",
          onClick: () => handleTransferClick(wallet),
        },
        {
          icon: <Trash2 className="h-4 w-4" />,
          label: "Delete",
          onClick: () => handleDeleteWallet(wallet),
          variant: "destructive" as const,
        },
      ]}
    />
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Wallets"
        description="Gérez vos portefeuilles crypto"
        action={{
          label: "Nouveau wallet",
          onClick: () => setDialogOpen(true),
        }}
      />
      <ClientView>
        <EntityList
          title="Liste des wallets"
          description={`${wallets.length} wallet(s) trouvé(s)`}
          items={wallets}
          renderItem={renderWalletCard}
          emptyMessage="Aucun wallet trouvé"
          emptyAction={{
            label: "Ajouter votre premier wallet",
            onClick: () => setDialogOpen(true),
          }}
        />

        <FormDialog
          open={dialogOpen}
          onOpenChange={setDialogOpen}
          title="Créer un nouveau wallet"
          description="Ajoutez un nouveau portefeuille à votre compte"
          maxWidth="max-w-2xl overflow-y-auto"
        >
          <WalletForm onSubmit={handleCreateWallet} loading={loading} />
        </FormDialog>
      </ClientView>
    </div>
  );
}
