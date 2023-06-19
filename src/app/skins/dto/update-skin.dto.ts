import { ApiPropertyOptional } from '@nestjs/swagger';
import { MaxLength } from 'class-validator';

export class UpdateSkinDto {
  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiPropertyOptional()
  skin_image: string;

  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiPropertyOptional()
  skin_name: string;

  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiPropertyOptional()
  skin_category: string;

  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiPropertyOptional()
  skin_weapon: string;

  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiPropertyOptional()
  skin_price: string;

  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiPropertyOptional()
  skin_float: string;

  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiPropertyOptional()
  skin_link_game: string;

  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiPropertyOptional()
  skin_link_steam: string;

  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiPropertyOptional()
  status: string;

  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiPropertyOptional()
  sale_type: string;

  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiPropertyOptional()
  buyer_name: string;

  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiPropertyOptional()
  buyer_id: string;
}
