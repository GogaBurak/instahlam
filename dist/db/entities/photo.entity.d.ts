import { PostEntity } from "./post.entity";
import { UserEntity } from "./user.entity";
export declare class PhotoEntity {
    id: number;
    address: string;
    user: UserEntity;
    post: PostEntity;
}
