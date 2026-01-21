"use client";
import { TextColorizedSyntax } from "@/components/text/text-colorized-syntax";
import { ContractServices } from "@/services/contractServices";
import { useAuthStore } from "@/store/auth-store";
import { Badge } from "@repo/ui/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "@repo/ui/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@repo/ui/components/ui/dialog";
import { Code } from "lucide-react";
import React, { useEffect, useState } from "react";
import c from "refractor/c";

interface DialogViewContractProps {
  contractId: string;
  isOpen: boolean;
  onClose: () => void;
}

export function DialogViewContract({
  contractId,
  isOpen,
  onClose,
}: DialogViewContractProps) {
  const token = useAuthStore.getState().token;
  const [contract, setContract] = useState<any>(null);

  useEffect(() => {
    const fetchContract = async () => {
      const contract = await ContractServices.getContractById(
        token as string,
        contractId,
      );
      setContract(contract);
    };
    if (isOpen) {
      fetchContract();
    }
  }, [contractId, isOpen]);

  if (!contract) {
    return null;
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[60vw]">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <Code className="h-4 w-4" />
            Éditeur de Code Source
          </DialogTitle>
        </DialogHeader>
        <Card>
          <CardHeader>
            <CardTitle className="text-3xl flex justify-between">
              <span>{contract.title}</span>
              <Badge>{contract.status}</Badge>
            </CardTitle>
            <CardDescription>{contract.description}</CardDescription>
          </CardHeader>
          <CardContent className="max-h-[65vh] overflow-y-scroll">
            <TextColorizedSyntax code={contract.smartContractCode} />
          </CardContent>
        </Card>
      </DialogContent>
    </Dialog>
  );
}
