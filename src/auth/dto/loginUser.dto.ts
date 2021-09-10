import { IsEmail, IsNumber, IsString } from "class-validator"

export class LoginUserDTO {
    @IsNumber()
    id: number

    @IsEmail()
    email: string

    @IsString()
    password: string

    @IsString()
    nickname: string
}