import { UserEntity } from "./user.entity";
export declare class SubscriptionEntity {
    id: number;
    user: UserEntity;
    subscribedTo: number;
}
