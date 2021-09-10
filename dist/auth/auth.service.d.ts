import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { UserEntity } from 'src/db/entities/user.entity';
import { SignupUserDTO } from 'src/auth/dto/signupUser.dto';
import { LoginUserDTO } from './dto/loginUser.dto';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<UserEntity>;
    checkPassword(password: string, storedPassword: string): Promise<boolean>;
    signup(userData: SignupUserDTO): Promise<{
        user: UserEntity;
        token: string;
    }>;
    login(user: LoginUserDTO): Promise<{
        token: string;
    }>;
    validateOAuthLogin(profile: any): Promise<{
        token: string;
    }>;
}
