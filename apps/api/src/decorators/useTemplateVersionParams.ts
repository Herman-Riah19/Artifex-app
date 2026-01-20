import { useDecorators } from "@tsed/core";
import { RawPathParams, UsePipe } from "@tsed/platform-params";
import { TemplateVersionPipe } from "src/pipes/TemplateVersionPipe";

export function UseTemplateVersionParams(
  expression: string,
): ParameterDecorator {
  return useDecorators(RawPathParams(expression), UsePipe(TemplateVersionPipe));
}
