import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsController } from './comments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentEntity } from 'src/db/entities/comment.entity';
import { UsersService } from 'src/users/users.service';
import { PostsService } from 'src/posts/posts.service';
import { UserEntity } from 'src/db/entities/user.entity';
import { FeedEntity } from 'src/db/entities/feed.entity';
import { PostEntity } from 'src/db/entities/post.entity';
import { Feed_PostEntity } from 'src/db/entities/feed_post.entity';
import { PhotosService } from 'src/photos/photos.service';
import { FeedsService } from 'src/feeds/feeds.service';
import { SubscriptionsService } from 'src/subscriptions/subscriptions.service';
import { SubscriptionEntity } from 'src/db/entities/subscription.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommentEntity, UserEntity, FeedEntity, PostEntity, Feed_PostEntity, SubscriptionEntity])
  ],
  providers: [CommentsService, UsersService, PostsService, PhotosService, FeedsService, SubscriptionsService],
  controllers: [CommentsController]
})
export class CommentsModule {}
