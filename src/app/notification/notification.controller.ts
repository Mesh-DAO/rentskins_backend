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
import { NotificationService } from './notification.service';
import { CreateNotificationDto } from './dto/create-notification.dto';
import { UpdateNotificationDto } from './dto/update-notification.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('api/v1/notifications')
@ApiTags('Notifications')
export class NotificationController {
  constructor(private readonly notificationService: NotificationService) {}

  @Get()
  @ApiOperation({ summary: 'Listar todos as Notificação' })
  @ApiResponse({
    status: 200,
    description: 'Lista das Notificação retornada com sucesso',
  })
  findAll() {
    return this.notificationService.findAll();
  }

  @Get('user/:id')
  @ApiOperation({ summary: 'Listar todos as Notificação' })
  @ApiResponse({
    status: 200,
    description: 'Lista das Notificação retornada com sucesso',
  })
  findAllByUser(@Param('id') id: string) {
    return this.notificationService.findAllByUser(id);
  }

  @Post()
  @ApiOperation({ summary: 'Criar uma única Notificação' })
  @ApiResponse({
    status: 201,
    description: 'Nova Notificação criada com sucesso',
  })
  @ApiResponse({ status: 400, description: 'Parametros inválidos' })
  async createNew(@Body() body: CreateNotificationDto) {
    return this.notificationService.createNew(body);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Listar uma única Notificação' })
  @ApiResponse({
    status: 200,
    description: 'Dados de uma Notificação retornados com sucesso',
  })
  @ApiResponse({ status: 400, description: 'Parametros inválidos' })
  async findOneById(@Param('id') id: string) {
    return this.notificationService.findOneById(id);
  }

  @Get('user/:id')
  @ApiOperation({ summary: 'Listar uma unica configuração' })
  @ApiResponse({
    status: 200,
    description: 'Dados de uma configuração retornados com sucesso',
  })
  @ApiResponse({ status: 400, description: 'Parametros inválidos' })
  async findOneByUser(@Param('id') id: string) {
    return this.notificationService.findOneByUser(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma única Notificação' })
  @ApiResponse({
    status: 200,
    description: 'Notificação atualizada com sucesso',
  })
  @ApiResponse({ status: 404, description: 'Notificação não encontrada' })
  async updateById(
    @Param('id') id: string,
    @Body() body: UpdateNotificationDto,
  ) {
    return this.notificationService.updateById(id, body);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar uma única Notificação' })
  @ApiResponse({ status: 204, description: 'Notificação removida com sucesso' })
  @ApiResponse({ status: 404, description: 'Notificação não encontradas' })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteById(@Param('id') id: string) {
    await this.notificationService.deleteById(id);
  }
}
