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
exports.PostsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const feed_entity_1 = require("../db/entities/feed.entity");
const feed_post_entity_1 = require("../db/entities/feed_post.entity");
const post_entity_1 = require("../db/entities/post.entity");
const feeds_service_1 = require("../feeds/feeds.service");
const photos_service_1 = require("../photos/photos.service");
const subscriptions_service_1 = require("../subscriptions/subscriptions.service");
const users_service_1 = require("../users/users.service");
const typeorm_2 = require("typeorm");
let PostsService = class PostsService {
    constructor(postRepositiry, feed_postRepository, photoService, userService, feedService, subscriptionService) {
        this.postRepositiry = postRepositiry;
        this.feed_postRepository = feed_postRepository;
        this.photoService = photoService;
        this.userService = userService;
        this.feedService = feedService;
        this.subscriptionService = subscriptionService;
    }
    async create(userId, text, file) {
        const post = {};
        post.user = await this.userService.findOne(userId);
        post.text = text;
        const subscribers = await this.subscriptionService.getSubscribers(userId);
        if (file) {
            post.image = await this.photoService.upload(file);
        }
        this.postRepositiry.create();
        await this.postRepositiry.save(post);
        if (subscribers) {
            for (const subscriber of subscribers) {
                const feed = await this.feedService.getOne(subscriber);
                const feed_post = this.feed_postRepository.create({ feed, post });
                await this.feed_postRepository.save(feed_post);
            }
        }
        return post;
    }
    async getById(postId) {
        const result = {};
        result.post = await this.postRepositiry.findOne({ id: postId });
        if (result.post.image) {
            result.image = await this.photoService.getPhotoUrl(result.post.image);
        }
        return result;
    }
};
PostsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(post_entity_1.PostEntity)),
    __param(1, typeorm_1.InjectRepository(feed_post_entity_1.Feed_PostEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        photos_service_1.PhotosService,
        users_service_1.UsersService,
        feeds_service_1.FeedsService,
        subscriptions_service_1.SubscriptionsService])
], PostsService);
exports.PostsService = PostsService;
//# sourceMappingURL=posts.service.js.map