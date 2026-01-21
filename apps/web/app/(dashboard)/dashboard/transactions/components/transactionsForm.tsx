import { GenericForm } from "@/components/generic-form";
import { TransactionFormData, TransactionSchema } from "@/validators/transaction-validator";

interface TransactionFormProps {
  onSubmit: (data: TransactionFormData) => void;
  loading?: boolean;
  gasPrice?: string;
}

export function TransactionForm({
  onSubmit,
  loading,
  gasPrice,
}: TransactionFormProps) {
  const formFields = [
    {
      name: "from",
      label: "Adresse de locataire",
      placeholder: "0x...",
      description: "Adresse Ethereum ou compatible EVM",
    },
    {
      name: "to",
      label: "Adresse de destination",
      placeholder: "0x...",
      description: "Adresse Ethereum ou compatible EVM",
    },
    {
      name: "value",
      label: "Valeur",
      placeholder: "1",
      type: "number" as const,
    },
    {
      name: "gasUsed",
      label: "Gas Used",
      placeholder: "21000",
      type: "number" as const,
    },
    {
      name: "gasCost",
      label: "Gas Cost",
      placeholder: "0.000000000000000001",
      type: "number" as const,
    },
  ];

  return (
    <GenericForm
      schema={TransactionSchema}
      fields={formFields}
      onSubmit={onSubmit}
      submitLabel={loading ? "Envoi..." : "Envoyer la transaction"}
      loading={loading}
      defaultValues={{
        from: "",
        to: "",
        value: 1,
        gasUsed: 21000,
        gasCost: gasPrice || "",
      }}
    />
  );
}