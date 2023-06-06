import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";

export class CreateCartDto {
  @IsNotEmpty({ message: "Preencha o nome do dono!" })
  @MaxLength(255, { message: "Tamanho máximo de 255 caracteres!" })
  @ApiProperty()
  buyer_name: string;

  @IsNotEmpty({ message: "Preencha o id do dono!" })
  @MaxLength(255, { message: "Tamanho máximo de 255 caracteres!" })
  @ApiProperty()
  buyer_id: string;
}
