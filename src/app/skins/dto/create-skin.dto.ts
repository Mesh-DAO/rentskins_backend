import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateSkinDto {
  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiPropertyOptional()
  skin_image: string;

  @IsNotEmpty({ message: 'Preencha o nome!' })
  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiProperty()
  skin_name: string;

  @IsNotEmpty({ message: 'Preencha a categoria!' })
  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiProperty()
  skin_category: string;

  @IsNotEmpty({ message: 'Preencha o nome da arma!' })
  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiProperty()
  skin_weapon: string;

  @IsNotEmpty({ message: 'Preencha o preço!' })
  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiProperty()
  skin_price: string;

  @IsNotEmpty({ message: 'Preencha o float!' })
  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiProperty()
  skin_float: string;

  @IsNotEmpty({ message: 'Preencha a cor!' })
  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiProperty()
  skin_color: string;

  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiPropertyOptional()
  skin_link_game: string;

  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiPropertyOptional()
  skin_link_steam: string;

  @IsNotEmpty({ message: 'Preencha o nome do vendedor!' })
  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiProperty()
  seller_name: string;

  @IsNotEmpty({ message: 'Preencha o id do vendedor!' })
  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiProperty()
  seller_id: string;

  @IsNotEmpty({ message: 'Preencha o status!' })
  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiProperty()
  status: string;

  @IsNotEmpty({ message: 'Preencha o status do float!' })
  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiProperty()
  status_float: string;

  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiPropertyOptional()
  sale_type: string;
}
