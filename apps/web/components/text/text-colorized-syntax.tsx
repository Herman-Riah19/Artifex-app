import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import solidity from "react-syntax-highlighter/dist/cjs/languages/prism/solidity";
import { oneDark } from "react-syntax-highlighter/dist/cjs/styles/prism";
import { refractor } from "refractor/core";

refractor.register(solidity);

interface TextColorizedSyntaxProps {
  code: string;
}

export function TextColorizedSyntax({ code }: TextColorizedSyntaxProps) {
  return (
    <SyntaxHighlighter
      language="solidity"
      style={oneDark}
      customStyle={{
        margin: 0,
        background: "transparent",
        fontSize: "0.875rem",
        lineHeight: "1.5rem",
        padding: "1rem",
      }}
      codeTagProps={{
        style: {
          fontFamily:
            'ui-monospace, SFMono-Regular, "SF Mono", Consolas, monospace',
        },
      }}
    >
      {code || " "}
    </SyntaxHighlighter>
  );
}
