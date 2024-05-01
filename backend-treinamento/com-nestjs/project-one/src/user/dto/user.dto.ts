import { IsEmail, IsString, Length, Matches } from "class-validator";

import { PartialType } from "@nestjs/mapped-types";

export class UserDto {

    @IsString()
    @Length(1, 40, { message: 'O tamanho mínimo do nome é de 1 caráctere(s)' })
    nome: string;
    
    @IsEmail()
    @Length(8, 40, { message: 'O tamanho mínimo do email é de 8 carácteres' })
    email: string;

    @IsString()
    @Matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/, {
        message:
            'A senha deve ter pelo menos 8 caracteres, incluindo uma pelo menos: uma letra maiúscula, uma letra minúscula, um número e um caractere especial',
    })
    senha: string;    
}

export class UpdateUserDto extends PartialType(UserDto) {}
