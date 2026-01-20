"use client";

import { GenericForm } from "@/components/generic-form";
import { UserServices } from "@/services/userServices";
import { useAuthStore } from "@/store/auth-store";
import {
  MemberFormData,
  MemberSchema,
} from "@/validators/organization-validator";
import { useEffect, useState } from "react";

interface MemberFormProps {
  onSubmit: (data: MemberFormData) => void;
  loading?: boolean;
}

export function MemberForm({ onSubmit, loading }: MemberFormProps) {
  const token = useAuthStore.getState().token;
  const [users, setUsers] = useState<Array<any>>([]);

  useEffect(() => {
    const getAllUsers = async () => {
      const users = await UserServices.getAllUsers(token as string);
      setUsers(users);
      console.log("Fetched users:", users)
    };

    getAllUsers();
  }, [token]);

  const formFields = [
    {
      name: "userId",
      label: "ID de l'utilisateur",
      placeholder: "user_123",
      description: "Entrez l'ID de l'utilisateur à ajouter",
      type: "select" as const,
      options: users.map((user: any) => ({
        value: user.id,
        label: `${user.name} (${user.email})`,
      })),
    },
    {
      name: "role",
      label: "Rôle",
      type: "select" as const,
      options: [
        { value: "SIGNER", label: "Propriétaire" },
        { value: "ADMIN", label: "Administrateur" },
        { value: "CLIENT", label: "Client" },
        { value: "VIEWER", label: "Lecteur" },
        { value: "EDITOR", label: "Éditeur" },
      ],
    },
  ];

  return (
    <GenericForm
      schema={MemberSchema}
      fields={formFields}
      onSubmit={onSubmit}
      submitLabel={loading ? "Ajout..." : "Ajouter le membre"}
      loading={loading}
      defaultValues={{
        role: "member",
      }}
    />
  );
}
