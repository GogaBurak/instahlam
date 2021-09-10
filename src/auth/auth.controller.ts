import { Body, Controller, Get, HttpCode, Post, Req, UseGuards } from '@nestjs/common';
import { SignupUserDTO } from 'src/auth/dto/signupUser.dto';
import { UserEntity } from 'src/db/entities/user.entity';
import { AuthService } from './auth.service';
import GoogleAuthGuard from './guards/googleAuth.guard';
import { LocalAuthGuard } from './guards/localAuth.guard';

@Controller('auth')
export class AuthController {
    constructor(
        private authService: AuthService
    ) { }

    @Post('/signup')
    @HttpCode(201)
    async signup(@Body() userData: SignupUserDTO) {
        return await this.authService.signup(userData)
    }

    @UseGuards(LocalAuthGuard)
    @Post('/login')
    @HttpCode(201)
    async login(@Req() req) {
        return await this.authService.login(req.user)
    }

    @Get('/google/redirect')
    @UseGuards(GoogleAuthGuard)
    googleLoginCallback(@Req() req) {
        const token = req.user.token;
        return { token };
    }
}
