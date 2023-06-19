import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateConfigurationDto {
  @IsNotEmpty({ message: 'Preencha o nome do dono!' })
  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiProperty()
  owner_name: string;

  @IsNotEmpty({ message: 'Preencha o id do dono!' })
  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiProperty()
  owner_id: string;

  @IsNotEmpty({ message: 'Preencha o email do dono!' })
  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiProperty()
  owner_email: string;

  @IsNotEmpty({ message: 'Preencha o link da troca!' })
  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiProperty()
  url_trade: string;

  @IsNotEmpty({ message: 'Preencha o link de venda!' })
  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiProperty()
  url_sell: string;

  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiPropertyOptional()
  steam_guard: boolean;
}
