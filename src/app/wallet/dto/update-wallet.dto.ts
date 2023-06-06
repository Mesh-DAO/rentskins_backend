import { ApiProperty, ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";

export class UpdateWalletDto {
  @MaxLength(255, { message: "Tamanho máximo de 255 caracteres!" })
  @ApiPropertyOptional()
  owner_name: string;

  @MaxLength(255, { message: "Tamanho máximo de 255 caracteres!" })
  @ApiPropertyOptional()
  owner_id: string;

  @IsNotEmpty({ message: "Preencha o valor!" })
  @MaxLength(255, { message: "Tamanho máximo de 255 caracteres!" })
  @ApiProperty()
  value: string;
}
