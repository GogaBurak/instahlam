import { Module } from '@nestjs/common';
import { SubscriptionsService } from './subscriptions.service';
import { SubscriptionsController } from './subscriptions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SubscriptionEntity } from 'src/db/entities/subscription.entity';
import { UserEntity } from 'src/db/entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ SubscriptionEntity, UserEntity ])
  ],
  exports: [SubscriptionsService],
  providers: [SubscriptionsService],
  controllers: [SubscriptionsController]
})
export class SubscriptionsModule {}
