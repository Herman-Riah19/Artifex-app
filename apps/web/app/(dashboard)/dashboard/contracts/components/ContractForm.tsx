"use client";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ContractFormData,
  SmartContractSchema,
} from "@/validators/contract-validator";
import { OrganizationServices } from "@/services/organizationServices";
import { useAuthStore } from "@/store/auth-store";
import { Textarea } from "@repo/ui/components/ui/textarea";
import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/ui/card";
import { Badge } from "@repo/ui/components/ui/badge";
import { Separator } from "@repo/ui/components/ui/separator";
import { Code, Copy, Download, Play, Save, Settings } from "lucide-react";
import {
  FormTextfield,
  FormTextSelect,
} from "@repo/ui/components/composable/FormTextfield";
import { Form } from "@repo/ui/components/ui/form";

interface ContractFormProps {
  onSubmit: (data: ContractFormData) => void;
  loading?: boolean;
  initialData?: Partial<ContractFormData>;
}

export function ContractForm({
  onSubmit,
  loading,
  initialData,
}: ContractFormProps) {
  const [organisations, setOrganisations] = useState<any[]>([]);
  const [code, setCode] = useState(
    initialData?.smartContractCode ||
      `// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SmartContract {
    // Contract state variables
    address public owner;
    uint256 public value;

    // Events
    event ValueChanged(uint256 newValue);

    // Modifiers
    modifier onlyOwner() {
        require(msg.sender == owner, "Not the owner");
        _;
    }

    // Constructor
    constructor() {
        owner = msg.sender;
    }

    // Functions
    function setValue(uint256 _value) public onlyOwner {
        value = _value;
        emit ValueChanged(_value);
    }

    function getValue() public view returns (uint256) {
        return value;
    }
}`,
  );

  const [lineNumbers, setLineNumbers] = useState<string[]>([]);

  useEffect(() => {
    const lines = code.split("\n").length || 1;
    const numbers = Array.from({ length: lines }, (_, i) => (i + 1).toString());
    setLineNumbers(numbers);
  }, [code]);

  useEffect(() => {
    const getOrganisations = async () => {
      try {
        const data = await OrganizationServices.getAllOrganizations(
          useAuthStore.getState().token as string,
        );
        console.log("Fetched organisations: ", data);
        setOrganisations(data);
      } catch (error) {
        console.error("Error fetching organizations:", error);
      }
    };
    getOrganisations();
  }, []);

  const form = useForm<ContractFormData>({
    resolver: zodResolver(SmartContractSchema),
    defaultValues: {
      title: initialData?.title || "",
      description: initialData?.description || "",
      status: initialData?.status || "DRAFT",
      organizationId: initialData?.organizationId || "",
      version: initialData?.version || 0,
      chainId: initialData?.chainId || 1,
      content: initialData?.content || "",
      smartContractCode: code,
      smartContractAddress: initialData?.smartContractAddress || "",
      deploymentTxHash: initialData?.deploymentTxHash || "",
      gasEstimate: initialData?.gasEstimate || 0,
      gasCost: initialData?.gasCost || "",
      requiredSigners: initialData?.requiredSigners || 0,
    },
  });

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
  };

  const handleDownload = () => {
    const blob = new Blob([code], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "contract.sol";
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleSubmit = (data: ContractFormData) => {
    onSubmit({ ...data, smartContractCode: code });
  };

  return (
    <div className="flex h-full gap-6">
      {/* Sidebar - Left Panel */}
      <div className="w-80 space-y-4 overflow-y-auto">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="h-4 w-4" />
              Configuration
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Form {...form}>
              <FormTextfield
                form={form}
                name="title"
                label="Titre"
                placeholder="Mon contrat intelligent"
                type="text"
                description="Nom du contrat intelligent"
                className=""
              />

              <FormTextfield
                form={form}
                name="description"
                label="Description"
                placeholder="Description du contrat"
                type="textarea"
                description="Description du contrat intelligent"
                className=""
              />

              <Separator />

              <FormTextSelect
                form={form}
                name="organizationId"
                label="Organisation"
                placeholder="Le nom de l'organisation"
                options={
                  organisations.length > 0
                    ? organisations.map((org) => ({
                        value: String(org.id),
                        label: org.name,
                      }))
                    : []
                }
                description="Sélectionnez l'organisation associée au contrat"
              />

              <FormTextSelect
                form={form}
                name="status"
                label="Statut"
                options={[
                  { value: "DRAFT", label: "Brouillon" },
                  { value: "PENDING_REVIEW", label: "En attente de review" },
                  {
                    value: "PENDING_SIGNATURE",
                    label: "En attente de signature",
                  },
                  { value: "SIGNED", label: "Signé" },
                  { value: "EXECUTED", label: "Exécuté" },
                  { value: "ARCHIVED", label: "Archivé" },
                  { value: "REJECTED", label: "Rejeté" },
                  { value: "CANCELLED", label: "Annulé" },
                ]}
                description="Statut actuel du contrat"
              />

              <Separator />

              <FormTextfield
                form={form}
                name="version"
                label="Version"
                placeholder="0"
                type="number"
                className=""
              />

              <FormTextfield
                form={form}
                name="chainId"
                label="Chain ID"
                placeholder="1"
                type="number"
                description="ID de la blockchain (1: Ethereum, 137: Polygon, etc.)"
                className=""
              />

              <FormTextfield
                form={form}
                name="requiredSigners"
                label="Signataires requis"
                placeholder="0"
                type="number"
                className=""
              />

              <Separator />

              <FormTextfield
                form={form}
                name="gasCost"
                label="Coût du gas"
                placeholder="45000000000"
                type="number"
                description="Coût en wei (optionnel)"
                className=""
              />
              <FormTextfield
                form={form}
                name="gasEstimate"
                label="Estimation du gas"
                placeholder="21000"
                type="number"
                description="Estimation du gas nécessaire (optionnel)"
                className=""
              />

              <Separator />

              <FormTextfield
                form={form}
                name="smartContractAddress"
                label="Adresse du contrat"
                placeholder="0x..."
                type="text"
                description="Optionnel – après déploiement"
                className=""
              />

              <FormTextfield
                form={form}
                name="deploymentTxHash"
                label="Transaction de déploiement"
                placeholder="0x..."
                type="text"
                description="Optionnel – requis si déployé"
                className=""
              />

              <Separator />

              <FormTextfield
                form={form}
                name="content"
                label="Description fonctionnelle"
                placeholder="Description fonctionnelle du contrat"
                type="textarea"
                description="Décrivez le but et les fonctionnalités du contrat"
                className="h-40"
              />
            </Form>
          </CardContent>
        </Card>
      </div>

      {/* Main Content - Right Panel */}
      <div className="flex-1 space-y-4">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Code className="h-4 w-4" />
              Éditeur de Code Source
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="relative">
              {/* Editor Header */}
              <div className="flex items-center justify-between p-2 bg-gray-100 dark:bg-gray-800 border-b rounded-t-lg">
                <div className="flex items-center gap-2">
                  <Badge variant="secondary" className="text-xs">
                    Solidity
                  </Badge>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {lineNumbers.length} lines
                  </span>
                </div>
                <div className="flex items-center gap-1">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopy}
                    className="h-7 w-7 p-0"
                  >
                    <Copy className="h-3 w-3" />
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleDownload}
                    className="h-7 w-7 p-0"
                  >
                    <Download className="h-3 w-3" />
                  </Button>
                </div>
              </div>

              {/* Editor Content */}
              <div className="flex bg-gray-50 dark:bg-gray-900 border rounded-b-lg overflow-hidden">
                {/* Line Numbers */}
                <div className="w-12 bg-gray-100 dark:bg-gray-800 text-gray-500 dark:text-gray-400 text-right pr-2 py-4 text-sm font-mono select-none border-r">
                  {lineNumbers.map((num, i) => (
                    <div key={i} className="leading-6">
                      {num}
                    </div>
                  ))}
                </div>

                {/* Code Area */}
                <div className="flex-1 relative">
                  <Textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="// pragma solidity ^0.8.0;\n\ncontract MyContract {\n    // Your code here\n}"
                    className="w-full h-auto p-4 font-mono text-sm leading-6 bg-transparent border-none resize-none focus:ring-0 focus:outline-none text-gray-900 dark:text-gray-100"
                    style={{
                      tabSize: 4,
                      fontFamily:
                        'ui-monospace, SFMono-Regular, "SF Mono", Consolas, "Liberation Mono", Menlo, monospace',
                    }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => window.history.back()}
            disabled={loading}
          >
            Annuler
          </Button>
          <Button type="button" variant="secondary" disabled={loading}>
            <Save className="h-4 w-4 mr-2" />
            Sauvegarder
          </Button>
          <Button
            onClick={form.handleSubmit(handleSubmit)}
            disabled={loading}
            className="min-w-[140px]"
          >
            {loading ? (
              "Création..."
            ) : (
              <>
                <Play className="h-4 w-4 mr-2" />
                Créer le contrat
              </>
            )}
          </Button>
        </div>
      </div>
    </div>
  );
}
