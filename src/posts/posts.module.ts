import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from 'src/db/entities/user.entity';
import { PostEntity } from 'src/db/entities/post.entity';
import { PhotosService } from 'src/photos/photos.service';
import { UsersService } from 'src/users/users.service';
import { FeedsService } from 'src/feeds/feeds.service';
import { FeedEntity } from 'src/db/entities/feed.entity';
import { SubscriptionsService } from 'src/subscriptions/subscriptions.service';
import { SubscriptionEntity } from 'src/db/entities/subscription.entity';
import { Feed_PostEntity } from 'src/db/entities/feed_post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, PostEntity, FeedEntity, SubscriptionEntity, Feed_PostEntity]),
    
  ],
  providers: [PostsService, PhotosService, UsersService, FeedsService, SubscriptionsService],
  controllers: [PostsController]
})
export class PostsModule {}
