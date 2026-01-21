import { FormFieldConfig, GenericForm } from "@/components/generic-form";
import { SystemConfigFormData, SystemConfigSchema } from "@/validators/system-config-validator";

interface ConfigFormProps {
  onSubmit: (data: SystemConfigFormData) => void;
  loading?: boolean;
}

export function ConfigForm({ onSubmit, loading }: ConfigFormProps) {
  const formFields = [
    {
      name: "key",
      label: "Clé de configuration",
      type: "text",
      placeholder: "APP_NAME",
      description: "Nom unique pour cette configuration",
    },
    {
      name: "value",
      label: "Valeur",
      type: "text",
      placeholder: "Valeur de la configuration",
    },
  ] as FormFieldConfig[];

  return (
    <GenericForm
      schema={SystemConfigSchema}
      fields={formFields}
      onSubmit={onSubmit}
      submitLabel={loading ? "Création..." : "Créer la configuration"}
      loading={loading}
      defaultValues={{
        key: "APP_NAME",
        value: "APP_NAME",
        isSecret: false,
        description: "Description de la configuration...",
      }}
    />
  );
}