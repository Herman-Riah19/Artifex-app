import { TextColorizedSyntax } from "@/components/text/text-colorized-syntax";
import { Button } from "@repo/ui/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from "@repo/ui/components/ui/card";
import { Textarea } from "@repo/ui/components/ui/textarea";
import { Code, Badge, Copy, Download } from "lucide-react";
import React, { useEffect, useState } from "react";

interface EditorSolidityProps {
  code: string;
  setCode: (code: string) => void;
}

export function EditorSolidity({ code, setCode }: EditorSolidityProps) {
  const [lineNumbers, setLineNumbers] = useState<string[]>([]);

  useEffect(() => {
    const lines = code.split("\n").length || 1;
    const numbers = Array.from({ length: lines }, (_, i) => (i + 1).toString());
    setLineNumbers(numbers);
  }, [code]);
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

  const onKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Tab") {
      e.preventDefault();
      setCode(code + "    ");
    }
  };

  return (
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
              <Badge className="text-xs">Solidity</Badge>
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
            <div className="flex-1 relative overflow-hidden">
              {/* Highlighted code (background) */}
              <TextColorizedSyntax code={code} />

              <Textarea
                value={code}
                onChange={(e) => setCode(e.target.value)}
                spellCheck={false}
                className="absolute inset-0 w-full h-full p-4 font-mono text-sm leading-6 bg-transparent border-none resize-none focus:ring-0 focus:outline-none text-transparent caret-white "
                style={{
                  tabSize: 4,
                }}
              />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
