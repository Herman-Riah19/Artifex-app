"use client";

import { useEffect, useState } from "react";
import { OrganizationServices } from "@/services/organizationServices";
import {
  OrganizationFormData,
  MemberFormData,
} from "@/validators/organization-validator";
import { PageHeader } from "@/components/page-header";
import { FormDialog } from "@/components/dialog/form-dialog";
import { EntityList } from "@/components/entity/entity-list";
import { EntityCard } from "@/components/card/entity-card";
import { Eye, Edit, Trash2, UserPlus } from "lucide-react";
import { useAuthStore } from "@/store/auth-store";
import { OrganizationForm } from "./components/OrganizationForm";
import { MemberForm } from "./components/MemberForm";

export default function OrganizationsPage() {
  const [organizations, setOrganizations] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [memberLoading, setMemberLoading] = useState(false);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [memberDialogOpen, setMemberDialogOpen] = useState(false);
  const [selectedOrg, setSelectedOrg] = useState<any>(null);
  const token = useAuthStore.getState().token;

  useEffect(() => {
    const getOrganizations = async () => {
      const data = await OrganizationServices.getAllOrganizations(
        token as string,
      );
      setOrganizations(data);
    };
    getOrganizations();
  }, []);

  const handleCreateOrganization = async (data: OrganizationFormData) => {
    setLoading(true);
    try {
      const result = await OrganizationServices.createOrganization(
        data,
        token as string,
      );

      if (result) {
        setOrganizations([...organizations, result.data]);
        setDialogOpen(false);
      }
    } catch (error) {
      console.error("Error creating organization:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddMember = async (data: MemberFormData) => {
    setMemberLoading(true);
    try {
      const result = await OrganizationServices.addMember(
        selectedOrg.id,
        data,
        token as string,
      );

      if (result.success) {
        setMemberDialogOpen(false);
        setSelectedOrg(null);
      }
    } catch (error) {
      console.error("Error adding member:", error);
    } finally {
      setMemberLoading(false);
    }
  };

  const handleViewOrganization = (org: any) => {
    // TODO: Implement view functionality
    console.log("View organization:", org);
  };

  const handleEditOrganization = (org: any) => {
    // TODO: Implement edit functionality
    console.log("Edit organization:", org);
  };

  const handleDeleteOrganization = (org: any) => {
    // TODO: Implement delete functionality
    console.log("Delete organization:", org);
  };

  const handleAddMemberClick = (org: any) => {
    setSelectedOrg(org);
    setMemberDialogOpen(true);
  };

  const getTypeVariant = (
    type: string,
  ): "default" | "secondary" | "destructive" | "outline" => {
    const variants: Record<
      string,
      "default" | "secondary" | "destructive" | "outline"
    > = {
      startup: "default",
      enterprise: "secondary",
      nonprofit: "outline",
      government: "destructive",
    };
    return variants[type] || "outline";
  };

  const renderOrganizationCard = (org: any, index: number) => {
    const metadata = [];
    if (org.website) metadata.push({ label: "Site", value: org.website });
    if (org.email) metadata.push({ label: "Email", value: org.email });
    metadata.push({
      label: "Membres",
      value: (org.members.length || 0).toString(),
    });

    return (
      <EntityCard
        key={org.id || index}
        title={org.name}
        description={org.description}
        status={{
          label: org.type,
          variant: getTypeVariant(org.type),
        }}
        metadata={metadata}
        actions={[
          {
            icon: <Eye className="h-4 w-4" />,
            label: "View",
            onClick: () => handleViewOrganization(org),
          },
          {
            icon: <Edit className="h-4 w-4" />,
            label: "Edit",
            onClick: () => handleEditOrganization(org),
          },
          {
            icon: <UserPlus className="h-4 w-4" />,
            label: "Add Member",
            onClick: () => handleAddMemberClick(org),
          },
          {
            icon: <Trash2 className="h-4 w-4" />,
            label: "Delete",
            onClick: () => handleDeleteOrganization(org),
            variant: "destructive" as const,
          },
        ]}
      >
        {/* Members preview */}
        {org.members && org.members.length > 0 && (
          <div className="mt-3 flex items-center gap-2">
            {org.members && (
              <span className="text-xs text-gray-500">
                +{org.members.length} autres
              </span>
            )}
          </div>
        )}
      </EntityCard>
    );
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Organisations"
        description="Gérez vos organisations et leurs membres"
        action={{
          label: "Nouvelle organisation",
          onClick: () => setDialogOpen(true),
        }}
      />

      <EntityList
        title="Liste des organisations"
        description={`${organizations.length} organisation(s) trouvée(s)`}
        items={organizations}
        renderItem={renderOrganizationCard}
        emptyMessage="Aucune organisation trouvée"
        emptyAction={{
          label: "Créer votre première organisation",
          onClick: () => setDialogOpen(true),
        }}
      />

      <FormDialog
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        title="Créer une nouvelle organisation"
        description="Définissez les informations de votre organisation"
        maxWidth="max-w-2xl overflow-y-auto"
      >
        <OrganizationForm
          onSubmit={handleCreateOrganization}
          loading={loading}
        />
      </FormDialog>

      <FormDialog
        open={memberDialogOpen}
        onOpenChange={setMemberDialogOpen}
        title="Ajouter un membre"
        description={`Ajouter un nouveau membre à ${selectedOrg?.name}`}
        maxWidth="max-w-md overflow-y-auto"
      >
        <MemberForm onSubmit={handleAddMember} loading={memberLoading} />
      </FormDialog>
    </div>
  );
}
