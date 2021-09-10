import { PostsService } from './posts.service';
export declare class PostsController {
    private postService;
    constructor(postService: PostsService);
    create(req: any, body: any, file: any): Promise<import("../db/entities/post.entity").PostEntity>;
    get(postId: any): Promise<any>;
}
