import { CommentEntity } from 'src/db/entities/comment.entity';
import { PhotosService } from 'src/photos/photos.service';
import { PostsService } from 'src/posts/posts.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/createComment.dto';
export declare class CommentsService {
    private commentsRepository;
    private usersService;
    private postsService;
    private photoService;
    constructor(commentsRepository: Repository<CommentEntity>, usersService: UsersService, postsService: PostsService, photoService: PhotosService);
    create(userId: any, postId: any, commentData: CreateCommentDto): Promise<any>;
}
