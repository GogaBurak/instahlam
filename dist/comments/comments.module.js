"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommentsModule = void 0;
const common_1 = require("@nestjs/common");
const comments_service_1 = require("./comments.service");
const comments_controller_1 = require("./comments.controller");
const typeorm_1 = require("@nestjs/typeorm");
const comment_entity_1 = require("../db/entities/comment.entity");
const users_service_1 = require("../users/users.service");
const posts_service_1 = require("../posts/posts.service");
const user_entity_1 = require("../db/entities/user.entity");
const feed_entity_1 = require("../db/entities/feed.entity");
const post_entity_1 = require("../db/entities/post.entity");
const feed_post_entity_1 = require("../db/entities/feed_post.entity");
const photos_service_1 = require("../photos/photos.service");
const feeds_service_1 = require("../feeds/feeds.service");
const subscriptions_service_1 = require("../subscriptions/subscriptions.service");
const subscription_entity_1 = require("../db/entities/subscription.entity");
let CommentsModule = class CommentsModule {
};
CommentsModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([comment_entity_1.CommentEntity, user_entity_1.UserEntity, feed_entity_1.FeedEntity, post_entity_1.PostEntity, feed_post_entity_1.Feed_PostEntity, subscription_entity_1.SubscriptionEntity])
        ],
        providers: [comments_service_1.CommentsService, users_service_1.UsersService, posts_service_1.PostsService, photos_service_1.PhotosService, feeds_service_1.FeedsService, subscriptions_service_1.SubscriptionsService],
        controllers: [comments_controller_1.CommentsController]
    })
], CommentsModule);
exports.CommentsModule = CommentsModule;
//# sourceMappingURL=comments.module.js.map