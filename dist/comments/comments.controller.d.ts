import { CommentsService } from './comments.service';
export declare class CommentsController {
    private commentsService;
    constructor(commentsService: CommentsService);
    create(req: any, postId: any, body: any, file: any): Promise<any>;
}
