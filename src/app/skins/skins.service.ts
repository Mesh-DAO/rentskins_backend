import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSkinDto } from './dto/create-skin.dto';
import { UpdateSkinDto } from './dto/update-skin.dto';
import { PrismaService } from 'src/database/prisma.service';

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

  async findOneById(seller_id: string) {
    try {
      return await this.prismaService.skin.findFirstOrThrow({
        where: { seller_id, deletedAt: null },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findAllById(seller_id: string) {
    try {
      return await this.prismaService.skin.findMany({
        where: { seller_id, deletedAt: null },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findLastSellsById(seller_id: string) {
    try {
      const skins = await this.prismaService.skin.findMany({
        where: { seller_id, deletedAt: null },
      });

      return 'asd';
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async updateById(seller_id: string, data: UpdateSkinDto) {
    await this.findOneById(seller_id);
    return await this.prismaService.skin.update({
      where: { id: Number(seller_id) },
      data: { ...data, updatedAt: new Date() },
    });
  }

  async deleteById(seller_id: string) {
    await this.findOneById(seller_id);
    await this.prismaService.skin.update({
      where: { id: Number(seller_id) },
      data: { deletedAt: new Date() },
    });
  }
}
