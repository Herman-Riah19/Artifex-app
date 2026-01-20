import { useDecorators } from "@tsed/core";
import { RawPathParams, UsePipe } from "@tsed/platform-params";
import { ContractTemplatePipe } from "src/pipes/ContractTemplatePipe";

export function UseContractTemplateParams(
  expression: string,
): ParameterDecorator {
  return useDecorators(
    RawPathParams(expression),
    UsePipe(ContractTemplatePipe),
  );
}
