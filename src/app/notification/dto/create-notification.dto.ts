import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty, MaxLength } from 'class-validator';

export class CreateNotificationDto {
  @IsNotEmpty({ message: 'Preencha o nome do dono!' })
  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiProperty()
  owner_name: string;

  @IsNotEmpty({ message: 'Preencha o id do dono!' })
  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiProperty()
  owner_id: string;

  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiPropertyOptional()
  description?: string;

  @ApiPropertyOptional()
  new?: boolean;

  @IsNotEmpty({ message: 'Preencha o id da skin!' })
  @MaxLength(255, { message: 'Tamanho máximo de 255 caracteres!' })
  @ApiProperty()
  skin_id: string;
}
