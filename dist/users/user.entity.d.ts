import { PostEntity } from "../posts/post.entity";
export declare class UserEntity {
    id: number;
    email: string;
    password: string;
    nickname: string;
    posts: PostEntity[];
}
