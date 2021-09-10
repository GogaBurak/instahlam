import { IsEmail, IsString } from "class-validator";

export class UpdateUserDTO {
    @IsEmail()
    email: string

    @IsString()
    password: string

    @IsString()
    nickname: string
}