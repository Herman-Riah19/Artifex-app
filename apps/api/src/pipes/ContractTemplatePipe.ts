import { PipeMethods } from "@tsed/schema";
import {
  ContractTemplateModel,
  ContractTemplatesRepository,
} from "prisma/generated";
import { Inject, Injectable } from "@tsed/di";

@Injectable()
export class ContractTemplatePipe
  implements PipeMethods<string, Promise<ContractTemplateModel>>
{
  @Inject()
  protected contractTemplateService!: ContractTemplatesRepository;

  async transform(value: string): Promise<ContractTemplateModel> {
    const contractTemplate = await this.contractTemplateService.findUnique({
      where: { id: value },
    });
    if (!contractTemplate)
      throw new Error(`ContractTemplate with id ${value} not found`);
    return contractTemplate;
  }
}
