import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateSkinDto } from './dto/create-skin.dto';
import { UpdateSkinDto } from './dto/update-skin.dto';
import { PrismaService } from 'src/database/prisma.service';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class SkinsService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly httpService: HttpService,
  ) {}

  async findAllBySteamInventory(steamID: string) {
    try {
      const url = `https://steamcommunity.com/inventory/${steamID}/730/2?l=english&count=500%27%27%27`;
      const { data } = await lastValueFrom(this.httpService.get(url));
      return data;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

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

  async findAllByWeapon(skin_weapon: string) {
    try {
      return await this.prismaService.skin.findMany({
        where: { skin_weapon, deletedAt: null },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findAllByCategory(skin_category: string) {
    try {
      return await this.prismaService.skin.findMany({
        where: { skin_category, deletedAt: null },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findAllByFloat(status_float: string) {
    try {
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
      return this.prismaService.skin.findMany({
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
