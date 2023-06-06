import { ApiPropertyOptional } from "@nestjs/swagger";
import { MaxLength } from "class-validator";

export class UpdateCartDto {
  @MaxLength(255, { message: "Tamanho máximo de 255 caracteres!" })
  @ApiPropertyOptional()
  buyer_name: string;

  @MaxLength(255, { message: "Tamanho máximo de 255 caracteres!" })
  @ApiPropertyOptional()
  buyer_id: string;
}
