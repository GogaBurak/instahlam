import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedEntity } from 'src/db/entities/feed.entity';
import { PostEntity } from 'src/db/entities/post.entity';
import { UserEntity } from '../db/entities/user.entity';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';

@Module({
    imports: [
        TypeOrmModule.forFeature([ UserEntity, PostEntity, FeedEntity ])
    ],
    exports: [UsersService],
    providers: [UsersService],
    controllers: [UsersController],
})
export class UsersModule {}
