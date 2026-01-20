import { useDecorators } from "@tsed/core";
import { RawPathParams, UsePipe } from "@tsed/platform-params";
import { ContractPipe } from "src/pipes/ContractPipe";

export function UseContractParams(expression: string): ParameterDecorator {
  return useDecorators(RawPathParams(expression), UsePipe(ContractPipe));
}
