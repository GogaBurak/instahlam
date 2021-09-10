import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedEntity } from 'src/db/entities/feed.entity';
import { Feed_PostEntity } from 'src/db/entities/feed_post.entity';
import { UserEntity } from 'src/db/entities/user.entity';
import { SubscriptionsService } from 'src/subscriptions/subscriptions.service';
import { Repository } from 'typeorm';

@Injectable()
export class FeedsService {
    constructor (
        @InjectRepository(FeedEntity)
        private feedRepository: Repository<FeedEntity>,
        @InjectRepository(Feed_PostEntity)
        private feedPostRepository: Repository<Feed_PostEntity>,
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,

        private subscribtionsService: SubscriptionsService,

    ) {}

    async getOne(user) {
        return await this.feedRepository.findOne(user.feedId)
    }

    async getByUserId(userId: UserEntity["id"]): Promise<UserEntity[]> {
        return await this.userRepository
          .createQueryBuilder('u')
          .select(['u.id'])
          .leftJoinAndSelect('u.feed', 'feed')
          .leftJoinAndSelect('feed.feedPosts', 'feedPosts')
          .leftJoinAndSelect('feedPosts.post', 'post')
          .where('u.id = :userId', { userId })
          .getMany()
    }

    async getBySubscribers(userId: UserEntity["id"]): Promise<FeedEntity[]> {
        const subscribers = await this.subscribtionsService.getSubscribers(userId)

        return await this.feedRepository.createQueryBuilder('f')
          .select([
            'f.id',
            'f.userId'
          ])
          .leftJoinAndSelect('f.posts', 'posts')
          .where('f.userId IN (:...userIds)', { usersIds: subscribers.map(({ id }) => id )})
          .getMany()
    }

    // async addNewPostToFeeds(post: PostEntity, feeds: Array<FeedEntity>) {
    //     for(let i = 0; i < feeds.length; i++) {
    //         feeds[i].posts.push(post)
    //         await this.feedRepository.update(feeds[i].id, feeds[i])
    //     }
    // }
}
