import { Controller, Inject } from "@tsed/di";
import { UseAuth } from "@tsed/platform-middlewares";
import { BodyParams, PathParams } from "@tsed/platform-params";
import {
  Delete,
  Get,
  Groups,
  Post,
  Put,
  Returns,
  Title,
  Summary,
  Description,
} from "@tsed/schema";
import { Docs } from "@tsed/swagger";
import { MemberModel, OrganizationModel } from "prisma/generated";
import { UserAuthMiddleware } from "src/middlewares/userMiddleware";
import { MemberModelDto, OrganizationModelDto } from "src/validators/OrganizationDto";
import { UseOrganizationParams } from "src/decorators/useOrganizationParams";
import { OrganizationService } from "src/services/OrganizationService";
import { Param } from "@prisma/client/runtime/library";

@Controller("/organizations")
@Docs("api-docs")
export class OrganizationController {
  constructor(@Inject() private organizationService: OrganizationService) {}

  @Get("/")
  @Returns(200, OrganizationModel)
  @Title("Get All Organizations")
  @Summary("Retrieve a list of all organizations")
  @Description("This endpoint returns all organizations in the system.")
  @UseAuth(UserAuthMiddleware, { role: "VIEWER" })
  getAllOrganizations() {
    return this.organizationService.findMany({
      include: {
        contracts: true,
        wallets: true,
        templates: true,
        auditLogs: true,
        members: true,
      },
    });
  }

  @Get("/:id")
  @Returns(200, OrganizationModel)
  @Title("Get Organization by ID")
  @Summary("Retrieve a specific organization by its ID")
  @Description("This endpoint returns the organization with the specified ID.")
  @UseAuth(UserAuthMiddleware, { role: "VIEWER" })
  async getOrganizationById(
    @UseOrganizationParams("id") organization: OrganizationModel,
  ): Promise<OrganizationModel> {
    return organization;
  }

  @Post("/")
  @Returns(201, OrganizationModel)
  @Title("Create New Organization")
  @Summary("Create a new organization")
  @Description(
    "This endpoint creates a new organization with the provided data.",
  )
  @UseAuth(UserAuthMiddleware, { role: "VIEWER" })
  async createNewOrganization(
    @BodyParams() data: OrganizationModelDto,
  ): Promise<OrganizationModel> {
    return await this.organizationService.create({
      data: {
        name: data.name,
        logo: data.logo,
        description: data.description,
        slug: data.slug,
        type: data.type,
      },
    });
  }
  
  @Post("/:id/members")
  @Returns(201, OrganizationModel)
  @Title("Create New Organization")
  @Summary("Create a new organization")
  @Description(
    "This endpoint creates a new organization with the provided data.",
  )
  @UseAuth(UserAuthMiddleware, { role: "VIEWER" })
  async addNewMemberInOrganization(
    @PathParams("id") id: string,
    @BodyParams() data: MemberModelDto,
  ): Promise<MemberModel> {
    return await this.organizationService.addingMember(
      id,
      data.userId,
      data.role
    );
  }

  @Put("/:id")
  @Returns(200, OrganizationModel)
  @Title("Update Organization")
  @Summary("Update an existing organization")
  @Description("This endpoint updates the organization with the specified ID.")
  @UseAuth(UserAuthMiddleware, { role: "VIEWER" })
  async updateOrganization(
    @PathParams("id") id: string,
    @BodyParams() @Groups("update") data: OrganizationModel,
  ): Promise<OrganizationModel> {
    return this.organizationService.update({
      where: {
        id: id,
      },
      data: {
        name: data.name,
        logo: data.logo,
        description: data.description,
        slug: data.slug,
      },
    });
  }

  @Delete("/:id")
  @Returns(200, OrganizationModel)
  @Title("Delete Organization")
  @Summary("Delete an organization by ID")
  @Description("This endpoint deletes the organization with the specified ID.")
  @UseAuth(UserAuthMiddleware, { role: "VIEWER" })
  async deleteOrganization(
    @PathParams("id") id: string,
  ): Promise<OrganizationModel> {
    return this.organizationService.delete({
      where: {
        id: id,
      },
    });
  }
}
