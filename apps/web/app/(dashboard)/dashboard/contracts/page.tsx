"use client";

import { useEffect, useState } from "react";
import { ContractServices } from "@/services/contractServices";
import { PageHeader } from "@/components/page-header";
import { EntityList } from "@/components/entity/entity-list";
import { EntityCard } from "@/components/card/entity-card";
import { Eye, Edit, Trash2, Play } from "lucide-react";
import { useAuthStore } from "@/store/auth-store";
import { ContractFormData } from "@/validators/contract-validator";
import { ContractForm } from "./components/ContractForm";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@repo/ui/components/ui/tabs";
import { DialogViewContract } from "./components/dialogViewContract";

export default function ContractsPage() {
  const [contracts, setContracts] = useState<any[]>([]);
  const [selectedContract, setSelectedContract] = useState<any>(null);
  const [isEditedContract, setIsEditedContract] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("all");
  const token = useAuthStore.getState().token;

  useEffect(() => {
    const getContracts = async () => {
      const data = await ContractServices.getAllContracts(token as string);
      setContracts(data);
    };
    getContracts();
  }, []);

  const handleCreateContract = async (data: ContractFormData) => {
    setLoading(true);
    try {
      if (isEditedContract) {
        const result = await ContractServices.updateContract(
          selectedContract.id,
          data,
          token as string,
        );
        if (result) {
          setContracts(
            contracts.map((contract) =>
              contract.id === selectedContract.id
                ? { ...contract, ...data }
                : contract,
            ),
          );
          setIsEditedContract(false);
        }
      } else {
        const result = await ContractServices.createContract(
          data,
          token as string,
        );

        if (result) {
          setContracts([...contracts, result.data]);
        }
      }
    } catch (error) {
      console.error("Error creating contract:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleDeployContract = async (id: string) => {
    try {
      const result = await ContractServices.deployContract(id, token as string);

      if (result.success) {
        setContracts(
          contracts.map((contract) =>
            contract.id === id ? { ...contract, status: "deployed" } : contract,
          ),
        );
      }
    } catch (error) {
      console.error("Error deploying contract:", error);
    }
  };

  const handleViewContract = (contract: any) => {
    setSelectedContract(contract);
    setIsDialogOpen(true);
  };

  const handleEditContract = (contract: any) => {
    setSelectedContract(contract);
    setActiveTab("created");
    setIsEditedContract(true);
  };

  const handleDeleteContract = (contract: any) => {
    // TODO: Implement delete functionality
    console.log("Delete contract:", contract);
  };

  const getStatusVariant = (
    status: string,
  ): "default" | "secondary" | "destructive" | "outline" => {
    const variants: Record<
      string,
      "default" | "secondary" | "destructive" | "outline"
    > = {
      deployed: "default",
      draft: "secondary",
      error: "destructive",
    };
    return variants[status.toLowerCase()] || "outline";
  };

  const renderContractCard = (contract: any, index: number) => (
    <EntityCard
      key={contract.id || index}
      title={contract.title || contract.name || "Untitled Contract"}
      description={contract.description}
      status={{
        label: contract.status || "Unknown",
        variant: getStatusVariant(contract.status),
      }}
      metadata={[
        { label: "Version", value: contract.version?.toString() || "N/A" },
        { label: "Chain ID", value: contract.chainId?.toString() || "N/A" },
        ...(contract.smartContractAddress
          ? [
              {
                label: "Address",
                value: `${contract.smartContractAddress.slice(0, 10)}...`,
              },
            ]
          : []),
      ]}
      actions={[
        {
          icon: <Eye className="h-4 w-4" />,
          label: "View",
          onClick: () => handleViewContract(contract),
        },
        {
          icon: <Edit className="h-4 w-4" />,
          label: "Edit",
          onClick: () => handleEditContract(contract),
        },
        ...(contract.status === "draft"
          ? [
              {
                icon: <Play className="h-4 w-4" />,
                label: "Deploy",
                onClick: () => handleDeployContract(contract.id),
              },
            ]
          : []),
        {
          icon: <Trash2 className="h-4 w-4" />,
          label: "Delete",
          onClick: () => handleDeleteContract(contract),
          variant: "destructive" as const,
        },
      ]}
    />
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Contrats Intelligents"
        description="Gérez vos contrats intelligents"
        action={{
          label: "Nouveau contrat",
          onClick: () => setActiveTab("created"),
        }}
      />

      <Tabs defaultValue="all" value={activeTab} onValueChange={setActiveTab}>
        <TabsList>
          <TabsTrigger value="all">Tous les contrats</TabsTrigger>
          <TabsTrigger value="created">Créés nouvelle contrat</TabsTrigger>
        </TabsList>
        <TabsContent value="all">
          <EntityList
            title="Liste des contrats"
            description={`${contracts.length} contrat(s) trouvé(s)`}
            items={contracts}
            renderItem={renderContractCard}
            emptyMessage="Aucun contrat trouvé"
            emptyAction={{
              label: "Créer votre premier contrat",
              onClick: () => setActiveTab("created"),
            }}
          />
          {selectedContract && (
            <DialogViewContract
              contractId={selectedContract?.id as string}
              isOpen={isDialogOpen}
              onClose={() => setIsDialogOpen(false)}
            />
          )}
        </TabsContent>
        <TabsContent value="created">
          {selectedContract && (
            <ContractForm
              onSubmit={handleCreateContract}
              loading={loading}
              initialData={selectedContract}
            />
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
