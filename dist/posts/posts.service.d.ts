import { Feed_PostEntity } from 'src/db/entities/feed_post.entity';
import { PostEntity } from 'src/db/entities/post.entity';
import { FeedsService } from 'src/feeds/feeds.service';
import { PhotosService } from 'src/photos/photos.service';
import { SubscriptionsService } from 'src/subscriptions/subscriptions.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
export declare class PostsService {
    private postRepositiry;
    private feed_postRepository;
    private readonly photoService;
    private readonly userService;
    private readonly feedService;
    private readonly subscriptionService;
    constructor(postRepositiry: Repository<PostEntity>, feed_postRepository: Repository<Feed_PostEntity>, photoService: PhotosService, userService: UsersService, feedService: FeedsService, subscriptionService: SubscriptionsService);
    create(userId: any, text: PostEntity["text"], file: any): Promise<PostEntity>;
    getById(postId: any): Promise<any>;
}
