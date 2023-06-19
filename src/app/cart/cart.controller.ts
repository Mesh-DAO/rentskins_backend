import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  HttpStatus,
} from '@nestjs/common';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('api/v1/cart')
@ApiTags('Card')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos as Cart' })
  @ApiResponse({
    status: 200,
    description: 'Lista das Cart retornada com sucesso',
  })
  findAll() {
    return this.cartService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Criar um unico Cart' })
  @ApiResponse({ status: 201, description: 'Nova Cart criada com sucesso' })
  @ApiResponse({ status: 400, description: 'Parametros inválidos' })
  async createNew(@Body() body: CreateCartDto) {
    return this.cartService.createNew(body);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Listar um unico Cart' })
  @ApiResponse({
    status: 200,
    description: 'Dados de uma Cart retornados com sucesso',
  })
  @ApiResponse({ status: 400, description: 'Parametros inválidos' })
  async findOneById(@Param('id') id: number) {
    return this.cartService.findOneById(id);
  }

  @Get('user/:id')
  @ApiOperation({ summary: 'Listar card de um usuário' })
  @ApiResponse({
    status: 200,
    description: 'Dados de uma Cart retornados com sucesso',
  })
  @ApiResponse({ status: 400, description: 'Parametros inválidos' })
  async findOneByBuyer(@Param('id') id: string) {
    return this.cartService.findOneByBuyer(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um unico Cart' })
  @ApiResponse({
    status: 200,
    description: 'Cart atualizado com sucesso',
  })
  @ApiResponse({ status: 404, description: 'Cart não encontrado' })
  async updateById(@Param('id') id: number, @Body() body: UpdateCartDto) {
    return this.cartService.updateById(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um unico Cart' })
  @ApiResponse({ status: 204, description: 'Cart removido com sucesso' })
  @ApiResponse({ status: 404, description: 'Cart não encontrado' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteById(@Param('id') id: number) {
    await this.cartService.deleteById(id);
  }
}
