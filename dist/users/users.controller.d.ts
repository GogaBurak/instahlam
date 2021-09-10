import { UserEntity } from 'src/db/entities/user.entity';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private userService;
    constructor(userService: UsersService);
    getById(req: any): Promise<UserEntity>;
    update(req: any, updateData: UpdateUserDTO): Promise<UserEntity>;
    delete(req: any): Promise<UserEntity>;
}
