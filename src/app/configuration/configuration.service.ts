import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateConfigurationDto } from './dto/create-configuration.dto';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class ConfigurationService {
  constructor(private readonly prismaService: PrismaService) {}

  async findAll() {
    try {
      return await this.prismaService.configuration.findMany({
        where: { deletedAt: null },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async createNew(data: CreateConfigurationDto) {
    try {
      await this.prismaService.configuration.create({ data });
    } catch (error) {
      throw new BadRequestException(error.message);
    }
  }

  async findOneById(id: number) {
    try {
      return await this.prismaService.configuration.findFirstOrThrow({
        where: { id, deletedAt: null },
      });
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async updateById(id: number, data: UpdateConfigurationDto) {
    await this.findOneById(id);
    return await this.prismaService.configuration.update({
      where: { id },
      data: { ...data, updatedAt: new Date() },
    });
  }

  async deleteById(id: number) {
    await this.findOneById(id);
    await this.prismaService.configuration.update({
      where: { id },
      data: { deletedAt: new Date() },
    });
  }
}
