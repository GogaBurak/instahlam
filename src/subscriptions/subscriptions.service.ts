import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { SubscriptionEntity } from 'src/db/entities/subscription.entity';
import { UserEntity } from 'src/db/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SubscriptionsService {
    constructor (
        @InjectRepository(SubscriptionEntity)
        private subscriptionsRepository: Repository<SubscriptionEntity>,

        @InjectRepository(UserEntity)
        private usersRepository: Repository<UserEntity>,
    ) {}

    async subscribe(userId, subscribeTo): Promise<SubscriptionEntity> {
        const subscription = this.subscriptionsRepository.create({
            user: userId,
            subscribedTo: subscribeTo
        })
        return await this.subscriptionsRepository.save(subscription)
    }

    async unsubscribe(userId, unsubscribeFrom) {
        const subscription = await this.subscriptionsRepository.findOne({
            user: userId,
            subscribedTo: unsubscribeFrom
        })

        if (!subscription) {
            throw new NotFoundException()
        }

        await this.subscriptionsRepository.delete(subscription.id)

        return subscription
    }

    async findById(id) {
        return await this.subscriptionsRepository.findOne(id)
    }

    async getSubscribers(userId) {
        return await this.usersRepository
          .createQueryBuilder('u')
          .select('u.id')
          .leftJoinAndSelect('u.feed', 'feed')
          .leftJoin('u.subscriptions', 'subscriptions')
          .where('subscriptions.subscribedTo = :userId', { userId }) 
          .getMany()
    }

    // add getSubscribers and getSubscriptions
}
