import { FeedEntity } from 'src/db/entities/feed.entity';
import { Feed_PostEntity } from 'src/db/entities/feed_post.entity';
import { UserEntity } from 'src/db/entities/user.entity';
import { SubscriptionsService } from 'src/subscriptions/subscriptions.service';
import { Repository } from 'typeorm';
export declare class FeedsService {
    private feedRepository;
    private feedPostRepository;
    private userRepository;
    private subscribtionsService;
    constructor(feedRepository: Repository<FeedEntity>, feedPostRepository: Repository<Feed_PostEntity>, userRepository: Repository<UserEntity>, subscribtionsService: SubscriptionsService);
    getOne(user: any): Promise<FeedEntity>;
    getByUserId(userId: UserEntity["id"]): Promise<UserEntity[]>;
    getBySubscribers(userId: UserEntity["id"]): Promise<FeedEntity[]>;
}
