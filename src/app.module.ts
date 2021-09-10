import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import { DatabaseModule } from './db/db.module';
import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { PhotosModule } from './photos/photos.module';
import { FeedsModule } from './feeds/feeds.module';
import { CommentsModule } from './comments/comments.module';
import { HashtagsModule } from './hashtags/hashtags.module';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    DatabaseModule,
    UsersModule,
    PostsModule,
    AuthModule,
    SubscriptionsModule,
    PhotosModule,
    FeedsModule,
    CommentsModule,
    HashtagsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
