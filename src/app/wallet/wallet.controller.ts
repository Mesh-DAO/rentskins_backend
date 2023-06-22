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
} from "@nestjs/common";
import { WalletService } from "./wallet.service";
import { CreateWalletDto } from "./dto/create-wallet.dto";
import { UpdateWalletDto } from "./dto/update-wallet.dto";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";

@Controller("api/v1/wallet")
@ApiTags("Wallet")
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Get()
  @ApiOperation({ summary: "Listar todos as Wallet" })
  @ApiResponse({
    status: 200,
    description: "Lista das Wallet retornada com sucesso",
  })
  findAll() {
    return this.walletService.findAll();
  }

  @Post()
  @ApiOperation({ summary: "Criar uma única Wallet" })
  @ApiResponse({ status: 201, description: "Nova Wallet criada com sucesso" })
  @ApiResponse({ status: 400, description: "Parametros inválidos" })
  async createNew(@Body() body: CreateWalletDto) {
    return this.walletService.createNew(body);
  }

  @Get(":id")
  @ApiOperation({ summary: "Listar uma única Wallet" })
  @ApiResponse({
    status: 200,
    description: "Dados de uma Wallet retornados com sucesso",
  })
  @ApiResponse({ status: 400, description: "Parametros inválidos" })
  async findOneById(@Param("id") id: string) {
    return this.walletService.findOneById(id);
  }

  @Patch(":id")
  @ApiOperation({ summary: "Atualizar uma única Wallet" })
  @ApiResponse({
    status: 200,
    description: "Wallet atualizada com sucesso",
  })
  @ApiResponse({ status: 404, description: "Wallet não encontrada" })
  async updateById(@Param("id") id: string, @Body() body: UpdateWalletDto) {
    return this.walletService.updateById(id, body);
  }

  @Delete(":id")
  @ApiOperation({ summary: "Deletar uma única Wallet" })
  @ApiResponse({ status: 204, description: "Wallet removida com sucesso" })
  @ApiResponse({ status: 404, description: "Wallet não encontradas" })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteById(@Param("id") id: string) {
    await this.walletService.deleteById(id);
  }
}
