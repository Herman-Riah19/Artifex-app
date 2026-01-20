import { useDecorators } from "@tsed/core";
import { RawPathParams, UsePipe } from "@tsed/platform-params";
import { OrganizationPipe } from "src/pipes/OrganizationPipe";

export function UseOrganizationParams(expression: string): ParameterDecorator {
  return useDecorators(RawPathParams(expression), UsePipe(OrganizationPipe));
}
