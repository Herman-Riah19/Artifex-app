import { Inject, Injectable } from "@tsed/di";
import { MembersRepository, OrganizationsRepository, Role } from "prisma/generated";

@Injectable()
export class OrganizationService extends OrganizationsRepository {
    @Inject()
    protected membersRepository!: MembersRepository;

    async addingMember(organizationId: string, userId: string, role: Role) {
        const member = await this.membersRepository.create({
            data: {
                organizationId,
                userId,
                role,
            },
        });
        return member;
    }
}