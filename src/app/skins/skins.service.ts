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

  async findAllById(seller_id: string) {
    try {
      return await this.prismaService.skin.findMany({
        where: { seller_id, deletedAt: null },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findAllByBuyer(buyer_id: string) {
    try {
      return await this.prismaService.skin.findMany({
        where: { buyer_id, deletedAt: null },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findAllByWeapon(data: { skin_weapon: string }) {
    try {
      const skin_weapon = data.skin_weapon;
      return await this.prismaService.skin.findMany({
        where: { skin_weapon, deletedAt: null },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findAllByCategory(data: { skin_category: string }) {
    try {
      const skin_category = data.skin_category;
      return await this.prismaService.skin.findMany({
        where: { skin_category, deletedAt: null },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findAllByFloat(data: { status_float: string }) {
    try {
      const status_float = data.status_float;
      return await this.prismaService.skin.findMany({
        where: { status_float, deletedAt: null },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findAllByDescPrice() {
    try {
      return await this.prismaService.skin.findMany({
        where: { deletedAt: null },
        orderBy: { skin_price: 'desc' },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findAllByDescFloat() {
    try {
      return await this.prismaService.skin.findMany({
        where: { deletedAt: null },
        orderBy: { skin_float: 'desc' },
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

  async findOneById(id: string) {
    try {
      return await this.prismaService.skin.findFirstOrThrow({
        where: { id, deletedAt: null },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findLastSellsById(seller_id: string) {
    try {
      return await this.prismaService.skin.findMany({
        where: { seller_id, deletedAt: null },
        orderBy: { createdAt: 'desc' },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async updateById(id: string, data: UpdateSkinDto) {
    await this.findOneById(id);
    return await this.prismaService.skin.update({
      where: { id },
      data: { ...data, updatedAt: new Date() },
    });
  }

  async deleteById(id: string) {
    await this.findOneById(id);
    await this.prismaService.skin.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
