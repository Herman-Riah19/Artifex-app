import { PipeMethods } from "@tsed/schema";
import { Inject, Injectable } from "@tsed/di";
import { ContractsRepository, ContractModel } from "prisma/generated";

@Injectable()
export class ContractPipe
  implements PipeMethods<string, Promise<ContractModel>>
{
  @Inject()
  protected contractService!: ContractsRepository;

  async transform(value: string): Promise<ContractModel> {
    const block = await this.contractService.findUnique({
      where: { id: value },
    });
    if (!block) throw new Error(`Block with id ${value} not found`);
    return block;
  }
}
