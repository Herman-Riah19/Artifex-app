import { PipeMethods } from "@tsed/schema";
import { OrganizationModel, OrganizationsRepository } from "prisma/generated";
import { Inject, Injectable } from "@tsed/di";

@Injectable()
export class OrganizationPipe
  implements PipeMethods<string, Promise<OrganizationModel>>
{
  @Inject()
  protected organizationService!: OrganizationsRepository;

  async transform(value: string): Promise<OrganizationModel> {
    const organization = await this.organizationService.findUnique({
      where: { id: value },
    });
    if (!organization)
      throw new Error(`Organization with id ${value} not found`);
    return organization;
  }
}
