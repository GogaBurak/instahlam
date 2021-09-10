import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FeedEntity } from 'src/db/entities/feed.entity';
import { SubscriptionEntity } from 'src/db/entities/subscription.entity';
import { UserEntity } from 'src/db/entities/user.entity';
import { SubscriptionsService } from 'src/subscriptions/subscriptions.service';
import { FeedsService } from './feeds.service';
import { FeedsController } from './feeds.controller';
import { Feed_PostEntity } from 'src/db/entities/feed_post.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([FeedEntity, SubscriptionEntity, UserEntity, Feed_PostEntity]),
    
  ],
  providers: [FeedsService, SubscriptionsService],
  controllers: [FeedsController]
})
export class FeedsModule {}
