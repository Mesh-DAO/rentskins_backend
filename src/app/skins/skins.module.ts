import { Module } from '@nestjs/common';
import { SkinsService } from './skins.service';
import { SkinsController } from './skins.controller';
import { PrismaService } from 'src/database/prisma.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [HttpModule],
  controllers: [SkinsController],
  providers: [SkinsService, PrismaService],
})
export class SkinsModule {}
