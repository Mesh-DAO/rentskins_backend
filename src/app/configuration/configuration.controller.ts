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
import { ConfigurationService } from './configuration.service';
import { CreateConfigurationDto } from './dto/create-configuration.dto';
import { UpdateConfigurationDto } from './dto/update-configuration.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('api/v1/configuration')
@ApiTags('Configuration')
export class ConfigurationController {
  constructor(private readonly configurationService: ConfigurationService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todas as configurações' })
  @ApiResponse({
    status: 200,
    description: 'Lista das configurações retornada com sucesso',
  })
  findAll() {
    return this.configurationService.findAll();
  }

  @Post()
  @ApiOperation({ summary: 'Criar uma unica configuração' })
  @ApiResponse({ status: 201, description: 'Nova configuração criada com sucesso' })
  @ApiResponse({ status: 400, description: 'Parametros inválidos' })
  async createNew(@Body() body: CreateConfigurationDto) {
    return this.configurationService.createNew(body);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Listar uma unica configuração' })
  @ApiResponse({
    status: 200,
    description: 'Dados de uma configuração retornados com sucesso',
  })
  @ApiResponse({ status: 400, description: 'Parametros inválidos' })
  async findOneById(@Param('id') id: string) {
    return this.configurationService.findOneById(id);
  }

  @Get('user/:id')
  @ApiOperation({ summary: 'Listar uma unica configuração' })
  @ApiResponse({
    status: 200,
    description: 'Dados de uma configuração retornados com sucesso',
  })
  @ApiResponse({ status: 400, description: 'Parametros inválidos' })
  async findOneByUser(@Param('id') id: string) {
    return this.configurationService.findOneByUser(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma unica configuração' })
  @ApiResponse({
    status: 200,
    description: 'configuração atualizada com sucesso',
  })
  @ApiResponse({ status: 404, description: 'configuração não encontrada' })
  async updateById(
    @Param('id') id: string,
    @Body() body: UpdateConfigurationDto,
  ) {
    return this.configurationService.updateById(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar uma unica configuração' })
  @ApiResponse({
    status: 204,
    description: 'configuração removida com sucesso',
  })
  @ApiResponse({ status: 404, description: 'configuração não encontrada' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteById(@Param('id') id: string) {
    await this.configurationService.deleteById(id);
  }
}
