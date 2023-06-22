import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateWalletDto } from "./dto/create-wallet.dto";
import { UpdateWalletDto } from "./dto/update-wallet.dto";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class WalletService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    try {
      return await this.prismaService.wallet.findMany({
        where: { deletedAt: null },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async createNew(data: CreateWalletDto) {
    try {
      await this.prismaService.wallet.create({ data });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOneById(id: string) {
    try {
      return await this.prismaService.wallet.findFirstOrThrow({
        where: { id, deletedAt: null },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async updateById(id: string, data: UpdateWalletDto) {
    await this.findOneById(id);
    return await this.prismaService.wallet.update({
      where: { id },
      data: { ...data, updatedAt: new Date() },
    });
  }

  async deleteById(id: string) {
    await this.findOneById(id);
    await this.prismaService.wallet.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
