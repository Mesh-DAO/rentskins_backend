import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MaxLength } from "class-validator";

export class CreateWalletDto {
  @IsNotEmpty({ message: "Preencha o nome do dono!" })
  @MaxLength(255, { message: "Tamanho máximo de 255 caracteres!" })
  @ApiProperty()
  owner_name: string;

  @IsNotEmpty({ message: "Preencha o id do dono!" })
  @MaxLength(255, { message: "Tamanho máximo de 255 caracteres!" })
  @ApiProperty()
  owner_id: string;

  @IsNotEmpty({ message: "Preencha o valor!" })
  @MaxLength(255, { message: "Tamanho máximo de 255 caracteres!" })
  @ApiProperty()
  value: string;
}
