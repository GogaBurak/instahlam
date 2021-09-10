import { Repository } from 'typeorm';
import { SignupUserDTO } from '../auth/dto/signupUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { UserEntity } from '../db/entities/user.entity';
import { FeedEntity } from '../db/entities/feed.entity';
export declare class UsersService {
    private usersRepository;
    private feedsRepository;
    constructor(usersRepository: Repository<UserEntity>, feedsRepository: Repository<FeedEntity>);
    create(userData: SignupUserDTO): Promise<UserEntity>;
    findOne(id: string): Promise<UserEntity>;
    findByEmail(email: string): Promise<UserEntity>;
    getUserByThirdPartyId(thirdPartyId: string): Promise<UserEntity>;
    createUserFromOAuth(profile: any): Promise<UserEntity>;
    update(id: string, updateData: UpdateUserDTO): Promise<UserEntity>;
    remove(id: string): Promise<UserEntity>;
}
