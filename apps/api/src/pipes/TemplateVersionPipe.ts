import { PipeMethods } from "@tsed/schema";
import {
  TemplateVersionModel,
  TemplateVersionsRepository,
} from "prisma/generated";
import { Inject, Injectable } from "@tsed/di";

@Injectable()
export class TemplateVersionPipe
  implements PipeMethods<string, Promise<TemplateVersionModel>>
{
  @Inject()
  protected templateVersionService!: TemplateVersionsRepository;

  async transform(value: string): Promise<TemplateVersionModel> {
    const templateVersion = await this.templateVersionService.findUnique({
      where: { id: value },
    });
    if (!templateVersion)
      throw new Error(`TemplateVersion with id ${value} not found`);
    return templateVersion;
  }
}
