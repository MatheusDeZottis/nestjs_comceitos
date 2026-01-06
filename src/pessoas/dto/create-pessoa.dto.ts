import { IsEmail, IsNotEmpty, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreatePessoaDto {
    @IsEmail()
    public email: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    public passwordHash: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(180)
    public nome: string;
}
