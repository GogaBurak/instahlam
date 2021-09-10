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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FeedEntity = void 0;
const typeorm_1 = require("typeorm");
const feed_post_entity_1 = require("./feed_post.entity");
const user_entity_1 = require("./user.entity");
let FeedEntity = class FeedEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], FeedEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.OneToOne(() => user_entity_1.UserEntity, user => user.feed),
    __metadata("design:type", user_entity_1.UserEntity)
], FeedEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.OneToMany(() => feed_post_entity_1.Feed_PostEntity, feedPost => feedPost.feed),
    __metadata("design:type", Array)
], FeedEntity.prototype, "feedPosts", void 0);
FeedEntity = __decorate([
    typeorm_1.Entity('Feed')
], FeedEntity);
exports.FeedEntity = FeedEntity;
//# sourceMappingURL=feed.entity.js.map