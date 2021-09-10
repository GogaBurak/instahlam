import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FeedEntity } from 'src/db/entities/feed.entity';
import { Feed_PostEntity } from 'src/db/entities/feed_post.entity';
import { PostEntity } from 'src/db/entities/post.entity';
import { FeedsService } from 'src/feeds/feeds.service';
import { PhotosService } from 'src/photos/photos.service';
import { SubscriptionsService } from 'src/subscriptions/subscriptions.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';

@Injectable()
export class PostsService {
    constructor (
        @InjectRepository(PostEntity)
        private postRepositiry: Repository<PostEntity>,

        @InjectRepository(Feed_PostEntity)
        private feed_postRepository: Repository<Feed_PostEntity>,

        private readonly photoService: PhotosService,
        private readonly userService: UsersService,
        private readonly feedService: FeedsService,
        private readonly subscriptionService: SubscriptionsService,
    ) {}

    async create(userId, text: PostEntity["text"], file): Promise<PostEntity> {
        const post: any = {}
        post.user = await this.userService.findOne(userId)
        post.text = text
        const subscribers = await this.subscriptionService.getSubscribers(userId)
        //const feeds = await this.feedService.getBySubscribers(userId)
        if (file) {
            post.image = await this.photoService.upload(file);
        }
        this.postRepositiry.create()
        await this.postRepositiry.save(post)
       
        if (subscribers) {
            for (const subscriber of subscribers) {
                const feed = await this.feedService.getOne(subscriber)
                const feed_post = this.feed_postRepository.create({ feed, post })
                await this.feed_postRepository.save(feed_post)
            }
        }

        return post
    }

    async getById(postId) {
        const result: any = {}
        result.post = await this.postRepositiry.findOne({id: postId})
        if (result.post.image) {
            result.image = await this.photoService.getPhotoUrl(result.post.image)
        }
        return result
    }
}
