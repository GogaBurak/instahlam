import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

export class CreateUserFromOauthDto {
    @IsString()
    @IsNotEmpty()
    nickname: string;

    @IsEmail()
    email: string

    @IsNotEmpty()
    thirdPartyId: string;
}