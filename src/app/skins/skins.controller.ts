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
import { SkinsService } from './skins.service';
import { CreateSkinDto } from './dto/create-skin.dto';
import { UpdateSkinDto } from './dto/update-skin.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('api/v1/skins')
@ApiTags('Skins')
export class SkinsController {
  constructor(private readonly skinsService: SkinsService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos as skins' })
  @ApiResponse({
    status: 200,
    description: 'Lista das skins retornada com sucesso',
  })
  findAll() {
    return this.skinsService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Criar uma única skin' })
  @ApiResponse({ status: 201, description: 'Nova skin criada com sucesso' })
  @ApiResponse({ status: 400, description: 'Parametros inválidos' })
  async createNew(@Body() body: CreateSkinDto) {
    return this.skinsService.createNew(body);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Listar uma única skin' })
  @ApiResponse({
    status: 200,
    description: 'Dados de uma skin retornados com sucesso',
  })
  @ApiResponse({ status: 400, description: 'Parametros inválidos' })
  async findOneById(@Param('id') id: string) {
    return this.skinsService.findOneById(id);
  }

  @Get('user/:id')
  @ApiOperation({ summary: 'Listar skins por um id' })
  @ApiResponse({
    status: 200,
    description: 'Dados de skins retornada com sucesso',
  })
  @ApiResponse({ status: 400, description: 'Parametros inválidos' })
  async findAllById(@Param('id') id: string) {
    return this.skinsService.findAllById(id);
  }

  @Get('user/:id/last-sells')
  @ApiOperation({ summary: 'Listar ultimas vendas por um id' })
  @ApiResponse({
    status: 200,
    description: 'Dados das ultimas vendas retornada com sucesso',
  })
  @ApiResponse({ status: 400, description: 'Parametros inválidos' })
  async findLastSellsById(@Param('id') id: string) {
    return this.skinsService.findLastSellsById(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma única skin' })
  @ApiResponse({
    status: 200,
    description: 'Skin atualizada com sucesso',
  })
  @ApiResponse({ status: 404, description: 'Skin não encontrada' })
  async updateById(@Param('id') id: string, @Body() body: UpdateSkinDto) {
    return this.skinsService.updateById(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar uma única skin' })
  @ApiResponse({ status: 204, description: 'Skin removida com sucesso' })
  @ApiResponse({ status: 404, description: 'Skin não encontradas' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteById(@Param('id') id: string) {
    await this.skinsService.deleteById(id);
  }
}
