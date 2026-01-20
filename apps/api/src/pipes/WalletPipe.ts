import { PipeMethods } from "@tsed/schema";
import { WalletModel, WalletsRepository } from "prisma/generated";
import { Inject, Injectable } from "@tsed/di";

@Injectable()
export class WalletPipe implements PipeMethods<string, Promise<WalletModel>> {
  @Inject()
  protected walletService!: WalletsRepository;

  async transform(value: string): Promise<WalletModel> {
    const wallet = await this.walletService.findUnique({
      where: { id: value },
    });
    if (!wallet) throw new Error(`Wallet with id ${value} not found`);
    return wallet;
  }
}
