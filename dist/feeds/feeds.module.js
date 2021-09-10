"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedsModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const feed_entity_1 = require("../db/entities/feed.entity");
const subscription_entity_1 = require("../db/entities/subscription.entity");
const user_entity_1 = require("../db/entities/user.entity");
const subscriptions_service_1 = require("../subscriptions/subscriptions.service");
const feeds_service_1 = require("./feeds.service");
const feeds_controller_1 = require("./feeds.controller");
const feed_post_entity_1 = require("../db/entities/feed_post.entity");
let FeedsModule = class FeedsModule {
};
FeedsModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([feed_entity_1.FeedEntity, subscription_entity_1.SubscriptionEntity, user_entity_1.UserEntity, feed_post_entity_1.Feed_PostEntity]),
        ],
        providers: [feeds_service_1.FeedsService, subscriptions_service_1.SubscriptionsService],
        controllers: [feeds_controller_1.FeedsController]
    })
], FeedsModule);
exports.FeedsModule = FeedsModule;
//# sourceMappingURL=feeds.module.js.map