import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SignupUserDTO } from '../auth/dto/signupUser.dto';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { UserEntity } from '../db/entities/user.entity';
import { CreateUserFromOauthDto } from './dto/createUserFromOauth.dto';
import * as bcrypt from 'bcrypt'
import { FeedEntity } from '../db/entities/feed.entity';

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
        
        @InjectRepository(FeedEntity)
        private feedsRepository: Repository<FeedEntity>
    ) {}

    async create(userData: SignupUserDTO): Promise<UserEntity> {
        userData.password = await bcrypt.hash(userData.password, Number(process.env.HASH_SALT))
        const user = this.usersRepository.create(userData)
        await this.usersRepository.save(user)

        const feed = this.feedsRepository.create(user)
        await this.feedsRepository.save(feed)

        user.feed = feed
        await this.usersRepository.save(user)

        return user
    }

    async findOne(id: string): Promise<UserEntity> {
        const user = await this.usersRepository.findOne(id)
        if (!user) {
            throw new NotFoundException("User not found.")
        }
        return user
    }

    async findByEmail(email: string): Promise<UserEntity> {
        return await this.usersRepository.findOne({ email })
    }

    async getUserByThirdPartyId(thirdPartyId: string): Promise<UserEntity> {
        return await this.usersRepository.findOne({ thirdPartyId });
    }

    async createUserFromOAuth(profile): Promise<UserEntity> {
        const userData: CreateUserFromOauthDto = {
            nickname: `${profile.name.givenName}.${profile.name.familyName}`,
            email: profile.emails[0].value,
            thirdPartyId: profile.id,
        };
        const user = this.usersRepository.create(userData);
        await this.usersRepository.save(user);
        return user;
    }

    async update(id: string, updateData: UpdateUserDTO): Promise<UserEntity> {
        const user = await this.findOne(id)
        if (!user) {
            throw new NotFoundException()
        }

        await this.usersRepository.update(id, updateData)
        
        return await this.findOne(id)
    }

    async remove(id: string): Promise<UserEntity> {
        const user = await this.findOne(id)
        if (!user) {
            throw new NotFoundException()
        }
        await this.usersRepository.delete(id)

        return user
    }
}
