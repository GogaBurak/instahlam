import { Feed_PostEntity } from "./feed_post.entity";
import { UserEntity } from "./user.entity";
export declare class FeedEntity {
    id: number;
    user: UserEntity;
    feedPosts: Feed_PostEntity[];
}
