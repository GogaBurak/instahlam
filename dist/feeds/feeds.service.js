"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const feed_entity_1 = require("../db/entities/feed.entity");
const feed_post_entity_1 = require("../db/entities/feed_post.entity");
const user_entity_1 = require("../db/entities/user.entity");
const subscriptions_service_1 = require("../subscriptions/subscriptions.service");
const typeorm_2 = require("typeorm");
let FeedsService = class FeedsService {
    constructor(feedRepository, feedPostRepository, userRepository, subscribtionsService) {
        this.feedRepository = feedRepository;
        this.feedPostRepository = feedPostRepository;
        this.userRepository = userRepository;
        this.subscribtionsService = subscribtionsService;
    }
    async getOne(user) {
        return await this.feedRepository.findOne(user.feedId);
    }
    async getByUserId(userId) {
        return await this.userRepository
            .createQueryBuilder('u')
            .select(['u.id'])
            .leftJoinAndSelect('u.feed', 'feed')
            .leftJoinAndSelect('feed.feedPosts', 'feedPosts')
            .leftJoinAndSelect('feedPosts.post', 'post')
            .where('u.id = :userId', { userId })
            .getMany();
    }
    async getBySubscribers(userId) {
        const subscribers = await this.subscribtionsService.getSubscribers(userId);
        return await this.feedRepository.createQueryBuilder('f')
            .select([
            'f.id',
            'f.userId'
        ])
            .leftJoinAndSelect('f.posts', 'posts')
            .where('f.userId IN (:...userIds)', { usersIds: subscribers.map(({ id }) => id) })
            .getMany();
    }
};
FeedsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(feed_entity_1.FeedEntity)),
    __param(1, typeorm_1.InjectRepository(feed_post_entity_1.Feed_PostEntity)),
    __param(2, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        subscriptions_service_1.SubscriptionsService])
], FeedsService);
exports.FeedsService = FeedsService;
//# sourceMappingURL=feeds.service.js.map