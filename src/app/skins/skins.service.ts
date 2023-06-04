import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from "@nestjs/common";
import { CreateSkinDto } from "./dto/create-skin.dto";
import { UpdateSkinDto } from "./dto/update-skin.dto";
import { PrismaService } from "src/database/prisma.service";

@Injectable()
export class SkinsService {
  constructor(private readonly prismaService: PrismaService) {}
  async findAll() {
    try {
      return await this.prismaService.skin.findMany({
        where: { deletedAt: null },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async createNew(data: CreateSkinDto) {
    try {
      await this.prismaService.skin.create({ data });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOneById(id: number) {
    try {
      return await this.prismaService.skin.findFirstOrThrow({
        where: { id, deletedAt: null },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async updateById(id: number, data: UpdateSkinDto) {
    await this.findOneById(id);
    return await this.prismaService.skin.update({
      where: { id },
      data: { ...data, updatedAt: new Date() },
    });
  }

  async deleteById(id: number) {
    await this.findOneById(id);
    await this.prismaService.skin.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
