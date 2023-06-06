import { PrismaService } from 'src/database/prisma.service';
import { Module } from '@nestjs/common';
import { CartService } from './cart.service';
import { CartController } from './cart.controller';

@Module({
  controllers: [CartController],
  providers: [CartService, PrismaService]
})
export class CartModule {}
