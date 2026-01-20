import { useDecorators } from "@tsed/core";
import { RawPathParams, UsePipe } from "@tsed/platform-params";
import { WalletPipe } from "src/pipes/WalletPipe";

export function UseWalletParams(expression: string): ParameterDecorator {
  return useDecorators(RawPathParams(expression), UsePipe(WalletPipe));
}
