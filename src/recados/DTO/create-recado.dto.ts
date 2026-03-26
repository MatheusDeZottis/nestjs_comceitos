import {
  IsBoolean,
  IsNotEmpty,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CreateRecadoDto {
  /*   @IsString({
        message: "mensagem personalizada"
    }) */
  @IsString()
  @IsNotEmpty()
  @MinLength(5)
  @MaxLength(250)
  readonly texto!: string;

  @IsPositive()
  readonly deId!: number;

  @IsPositive()
  readonly paraId!: number;
}
