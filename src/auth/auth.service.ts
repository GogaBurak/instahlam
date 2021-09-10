import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt'
import { JwtService } from '@nestjs/jwt'
import { UserEntity } from 'src/db/entities/user.entity';
import { SignupUserDTO } from 'src/auth/dto/signupUser.dto';
import { LoginUserDTO } from './dto/loginUser.dto';

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService,
    ) { }

    async validateUser(email: string, password: string): Promise<UserEntity> {
        const user = await this.usersService.findByEmail(email)
        if (!user) {
            throw new UnauthorizedException()
        }
        const isMatch = await this.checkPassword(password, user.password)
        if (!isMatch) {
            throw new UnauthorizedException()
        }
        return user
    }

    async checkPassword(password: string, storedPassword: string): Promise<boolean> {
        return await bcrypt.compare(password, storedPassword)
    }

    async signup(userData: SignupUserDTO) {
        const user = await this.usersService.create(userData)
        const token = this.jwtService.sign({ id: user.id.toString() })
        return { user, token }
    }

    async login(user: LoginUserDTO) {
        return {
            token: this.jwtService.sign({ id: user.id.toString() }),
        }
    }

    async validateOAuthLogin(profile) {
        let user = await this.usersService.getUserByThirdPartyId(profile.id);
        if (!user) {
          user = await this.usersService.createUserFromOAuth(profile);
        }
        const token = await this.jwtService.signAsync({ id: user.id })
        return { token }
      }
}
