import { HashtagEntity } from "./hashtag.entity";
import { PostEntity } from "./post.entity";
import { UserEntity } from "./user.entity";
export declare class CommentEntity {
    id: number;
    text: string;
    image?: string;
    createdAt: Date;
    user: UserEntity;
    post: PostEntity;
    hashtags: HashtagEntity[];
}
