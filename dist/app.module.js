"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const users_module_1 = require("./users/users.module");
const posts_module_1 = require("./posts/posts.module");
const db_module_1 = require("./db/db.module");
const auth_module_1 = require("./auth/auth.module");
const config_1 = require("@nestjs/config");
const subscriptions_module_1 = require("./subscriptions/subscriptions.module");
const photos_module_1 = require("./photos/photos.module");
const feeds_module_1 = require("./feeds/feeds.module");
const comments_module_1 = require("./comments/comments.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            config_1.ConfigModule.forRoot({ isGlobal: true }),
            db_module_1.DatabaseModule,
            users_module_1.UsersModule,
            posts_module_1.PostsModule,
            auth_module_1.AuthModule,
            subscriptions_module_1.SubscriptionsModule,
            photos_module_1.PhotosModule,
            feeds_module_1.FeedsModule,
            comments_module_1.CommentsModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map