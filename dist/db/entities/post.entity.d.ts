import { UserEntity } from "src/db/entities/user.entity";
import { HashtagEntity } from "./hashtag.entity";
export declare class PostEntity {
    id: number;
    text: string;
    image: string;
    createdAt: Date;
    user: UserEntity;
    hashtags: HashtagEntity[];
}
