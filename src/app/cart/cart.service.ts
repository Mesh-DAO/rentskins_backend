import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class CartService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    try {
      return await this.prismaService.cart.findMany({
        include: { buyer_skins: true },
        where: { deletedAt: null },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async createNew(data: CreateCartDto) {
    try {
      await this.prismaService.cart.create({ data });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOneById(id: string) {
    try {
      return await this.prismaService.cart.findFirstOrThrow({
        include: { buyer_skins: true },
        where: { id, deletedAt: null },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findOneByBuyer(buyer_id: string) {
    try {
      return await this.prismaService.cart.findFirstOrThrow({
        include: { buyer_skins: true },
        where: { buyer_id, deletedAt: null },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async updateById(id: string, data: UpdateCartDto) {
    await this.findOneById(id);
    return await this.prismaService.cart.update({
      where: { id },
      data: { ...data, updatedAt: new Date() },
    });
  }

  async deleteById(id: string) {
    await this.findOneById(id);
    await this.prismaService.cart.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
