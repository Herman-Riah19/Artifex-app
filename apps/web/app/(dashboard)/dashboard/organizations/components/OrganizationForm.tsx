import { GenericForm } from "@/components/generic-form";
import { OrganizationFormData, OrganizationSchema } from "@/validators/organization-validator";

interface OrganizationFormProps {
  onSubmit: (data: OrganizationFormData) => void;
  loading?: boolean;
}

export function OrganizationForm({ onSubmit, loading }: OrganizationFormProps) {
  const formFields = [
    {
      name: "name",
      label: "Nom de l'organisation",
      placeholder: "Ma Startup",
    },
    {
      name: "slug",
      label: "Slug",
      placeholder: "slug-de-l-organisation",
    },
    {
      name: "type",
      label: "Type d'organisation",
      type: "select" as const,
      placeholder: "Sélectionnez le type d'organisation",
      options: [
        { value: "startup", label: "Startup" },
        { value: "enterprise", label: "Entreprise" },
        { value: "nonprofit", label: "Organisme à but non lucratif" },
        { value: "government", label: "Gouvernement" },
      ],
    },
    {
      name: "logo",
      label: "Logo",
      placeholder: "URL du logo de l'organisation...",
    },
    {
      name: "description",
      label: "Description",
      type: "textarea" as const,
      placeholder: "Description de l'organisation...",
    },
  ];

  return (
    <GenericForm
      schema={OrganizationSchema}
      fields={formFields}
      onSubmit={onSubmit}
      submitLabel={loading ? "Création..." : "Créer l'organisation"}
      loading={loading}
      defaultValues={{
        type: "startup",
      }}
    />
  );
}