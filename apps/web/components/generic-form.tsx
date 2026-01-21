"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@repo/ui/components/ui/button";
import { Form } from "@repo/ui/components/ui/form";
import { FormTextfield, FormTextSelect } from "@repo/ui/components/composable/FormTextfield";

export type FormFieldConfig = {
  name: string;
  label: string;
  type?: "text" | "email" | "password" | "number" | "textarea" | "select";
  placeholder?: string;
  description?: string;
  required?: boolean;
  options?: Array<{ value: string; label: string }>;
  className?: string;
};

interface GenericFormProps {
  schema: z.ZodSchema;
  fields: FormFieldConfig[];
  onSubmit: (data: any) => void;
  defaultValues?: Record<string, any>;
  submitLabel?: string;
  loading?: boolean;
  className?: string;
}

export function GenericForm({
  schema,
  fields,
  onSubmit,
  defaultValues,
  submitLabel = "Submit",
  loading = false,
  className,
}: GenericFormProps) {
  const form = useForm({
    resolver: zodResolver(schema as any),
    defaultValues: defaultValues as any,
  });

  const renderField = (field: FormFieldConfig) => {
    const fieldType = field.type || "text";

    switch (fieldType) {
      case "textarea":
        return (
          <FormTextfield
            key={field.name}
            form={form}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            type={fieldType}
            description={field.description}
            className={field.className}
          />
        );

      case "select":
        return (
          <FormTextSelect
            key={field.name}
            form={form}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            options={field.options || []}
          />
        );

      default:
        return (
          <FormTextfield
            key={field.name}
            form={form}
            name={field.name}
            label={field.label}
            placeholder={field.placeholder}
            type={fieldType}
            description={field.description}
            className={field.className}
          />
        );
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`space-y-6 ${className || ""}`}
      >
        {fields.map(renderField)}

        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? "Loading..." : submitLabel}
        </Button>
      </form>
    </Form>
  );
}
