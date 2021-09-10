"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseModule = void 0;
const typeorm_1 = require("@nestjs/typeorm");
const common_1 = require("@nestjs/common");
const user_entity_1 = require("./entities/user.entity");
const post_entity_1 = require("./entities/post.entity");
const feed_entity_1 = require("./entities/feed.entity");
const comment_entity_1 = require("./entities/comment.entity");
const hashtag_entity_1 = require("./entities/hashtag.entity");
const config_1 = require("@nestjs/config");
const subscription_entity_1 = require("./entities/subscription.entity");
const feed_post_entity_1 = require("./entities/feed_post.entity");
let DatabaseModule = class DatabaseModule {
};
DatabaseModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                inject: [config_1.ConfigService],
                useFactory: async (configService) => ({
                    type: "postgres",
                    host: configService.get('DB_HOST'),
                    port: configService.get('DB_PORT'),
                    username: configService.get('DB_USERNAME'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_DATABASE'),
                    synchronize: true,
                    logging: true,
                    autoLoadEntities: true,
                    entities: [user_entity_1.UserEntity, post_entity_1.PostEntity, feed_entity_1.FeedEntity, comment_entity_1.CommentEntity, hashtag_entity_1.HashtagEntity, subscription_entity_1.SubscriptionEntity, feed_post_entity_1.Feed_PostEntity]
                })
            })
        ]
    })
], DatabaseModule);
exports.DatabaseModule = DatabaseModule;
//# sourceMappingURL=db.module.js.map