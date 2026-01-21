import { GenericForm } from "@/components/generic-form";
import { TemplateVersionFormData, TemplateVersionSchema } from "@/validators/template-version-validator";

interface TemplateVersionFormProps {
  onSubmit: (data: TemplateVersionFormData) => void;
  loading?: boolean;
}

// Update the form to reflect the TemplateVersionDto fields
export function TemplateVersionForm({ onSubmit, loading }: TemplateVersionFormProps) {
  const formFields = [
    {
      name: "version",
      label: "Version",
      type: "number" as const,
      placeholder: "1",
      description: "Enter the version number of the template (integer)",
      required: true,
    },
    {
      name: "content",
      label: "Version Content",
      type: "textarea" as const,
      placeholder:
        "// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract MyContract {\n    // Your code here\n}",
      className: "min-h-[300px] font-mono text-sm",
      required: true,
      description: "Paste the full code/content for this template version.",
    },
    {
      name: "templateId",
      label: "Template ID",
      placeholder: "e.g., 9e492127-c5e8-443f-bf5d-0bb740f1a548",
      required: true,
      description: "ID of the template this version belongs to.",
    },
    {
      name: "changelog",
      label: "Changelog",
      type: "textarea" as const,
      placeholder: "Describe what changed in this version (optional)",
      description: "Optional changelog to describe version updates",
      required: false,
    },
  ];

  return (
    <GenericForm
      schema={TemplateVersionSchema}
      fields={formFields}
      onSubmit={onSubmit}
      submitLabel={loading ? "Creating..." : "Create Version"}
      loading={loading}
      defaultValues={{
        version: 1,
        content: "",
        templateId: "",
        changelog: "",
      }}
    />
  );
}
