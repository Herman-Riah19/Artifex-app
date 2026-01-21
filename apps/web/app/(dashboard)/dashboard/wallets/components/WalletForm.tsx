"use client";

import { GenericForm } from "@/components/generic-form";
import { OrganizationServices } from "@/services/organizationServices";
import { useAuthStore } from "@/store/auth-store";
import { WalletFormData, WalletSchema } from "@/validators/wallet-validator";
import { useEffect, useState } from "react";

interface WalletFormProps {
  onSubmit: (data: WalletFormData) => void;
  loading?: boolean;
}

export function WalletForm({ onSubmit, loading }: WalletFormProps) {
  const token = useAuthStore.getState().token;
  const [organizations, setOrganizations] = useState<Array<any>>([]);

  useEffect(() => {
    const fetchOrganizations = async () => {
      try {
        const orgs = await OrganizationServices.getAllOrganizations(
          token as string,
        );
        setOrganizations(orgs);
      } catch (error) {
        console.error("Error fetching organizations:", error);
      }
    };

    fetchOrganizations();
  }, [token]);

  const formFields = [
    {
      name: "organizationId",
      label: "Organization ID",
      placeholder: "Selectioner votre organization",
      description: "Votre organization identifier",
      type: "select" as const,
      options: organizations.map((org: any) => ({
        value: org.id,
        label: org.name,
      })),
    },
    {
      name: "address",
      label: "Adresse du wallet",
      placeholder: "0x...",
      description: "Adresse Ethereum valide (0x + 40 caractères hexadécimaux)",
    },
    {
      name: "chainId",
      label: "Chain ID",
      type: "number" as const,
      placeholder: "1",
      description: "Identifiant de la chaîne blockchain",
    },
    {
      name: "label",
      label: "Étiquette",
      type: "textarea" as const,
      placeholder: "Label du wallet...",
      description: "Description optionnelle (max 100 caractères)",
    },
  ];

  return (
    <GenericForm
      schema={WalletSchema}
      fields={formFields}
      onSubmit={onSubmit}
      submitLabel={loading ? "Création..." : "Créer le wallet"}
      loading={loading}
      defaultValues={{
        type: "personal",
        network: "ethereum",
      }}
    />
  );
}
