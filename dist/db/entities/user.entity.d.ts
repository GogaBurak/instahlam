import { FeedEntity } from "./feed.entity";
import { SubscriptionEntity } from "./subscription.entity";
export declare class UserEntity {
    id: number;
    email: string;
    password: string;
    nickname: string;
    thirdPartyId: string;
    feed: FeedEntity;
    subscriptions: SubscriptionEntity[];
}
