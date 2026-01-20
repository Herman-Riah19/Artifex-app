import { Role } from "prisma/generated";
import { Property, Required, Description, Allow } from "@tsed/schema";

export class OrganizationModelDto {
  @Property(String)
  @Required()
  @Description("The name oforganization is Required")
  name!: string;

  @Property(String)
  @Allow(null)
  @Description("URL or key of the organization logo")
  logo!: string | null;

  @Property(String)
  @Allow(null)
  description!: string | null;

  @Property(String)
  @Required()
  @Description("The slug oforganization is Required")
  slug!: string;
  
  @Property(String)
  @Required()
  @Description("The slug oforganization is Required")
  type!: string;
}

export class MemberModelDto {
  @Property(String)
  @Required()
  @Description("The user ID is Required")
  userId!: string;

  @Property(String)
  @Required()
  @Description("The role of the member is Required")
  role!: Role;
}
