import { SignupUserDTO } from 'src/auth/dto/signupUser.dto';
import { UserEntity } from 'src/db/entities/user.entity';
import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(userData: SignupUserDTO): Promise<{
        user: UserEntity;
        token: string;
    }>;
    login(req: any): Promise<{
        token: string;
    }>;
    googleLoginCallback(req: any): {
        token: any;
    };
}
