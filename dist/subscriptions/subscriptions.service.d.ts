import { SubscriptionEntity } from 'src/db/entities/subscription.entity';
import { UserEntity } from 'src/db/entities/user.entity';
import { Repository } from 'typeorm';
export declare class SubscriptionsService {
    private subscriptionsRepository;
    private usersRepository;
    constructor(subscriptionsRepository: Repository<SubscriptionEntity>, usersRepository: Repository<UserEntity>);
    subscribe(userId: any, subscribeTo: any): Promise<SubscriptionEntity>;
    unsubscribe(userId: any, unsubscribeFrom: any): Promise<SubscriptionEntity>;
    findById(id: any): Promise<SubscriptionEntity>;
    getSubscribers(userId: any): Promise<UserEntity[]>;
}
