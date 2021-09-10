import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { UserEntity } from "./entities/user.entity";
import { PostEntity } from "./entities/post.entity";
import { FeedEntity } from "./entities/feed.entity";
import { CommentEntity } from "./entities/comment.entity";
import { HashtagEntity } from "./entities/hashtag.entity";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { SubscriptionEntity } from "./entities/subscription.entity";
import { Feed_PostEntity } from "./entities/feed_post.entity";

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ ConfigModule ],
            inject: [ ConfigService ],
            useFactory: async (configService: ConfigService) => ({
                type: "postgres",
                host: configService.get<string>('DB_HOST'),
                port: configService.get<number>('DB_PORT'),
                username: configService.get<string>('DB_USERNAME'),
                password: configService.get<string>('DB_PASSWORD'),
                database: configService.get<string>('DB_DATABASE'),
                synchronize: true,
                logging: true,
                autoLoadEntities: true,
                entities: [UserEntity, PostEntity, FeedEntity, CommentEntity, HashtagEntity, SubscriptionEntity, Feed_PostEntity]
            })
        })
    ]
})
export class DatabaseModule {}