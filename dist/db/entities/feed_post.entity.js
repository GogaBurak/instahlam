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
exports.Feed_PostEntity = void 0;
const typeorm_1 = require("typeorm");
const feed_entity_1 = require("./feed.entity");
const post_entity_1 = require("./post.entity");
let Feed_PostEntity = class Feed_PostEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Feed_PostEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.ManyToOne(() => feed_entity_1.FeedEntity, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'feed_id', referencedColumnName: 'id' }),
    __metadata("design:type", feed_entity_1.FeedEntity)
], Feed_PostEntity.prototype, "feed", void 0);
__decorate([
    typeorm_1.ManyToOne(() => post_entity_1.PostEntity, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'post_id', referencedColumnName: 'id' }),
    __metadata("design:type", post_entity_1.PostEntity)
], Feed_PostEntity.prototype, "post", void 0);
Feed_PostEntity = __decorate([
    typeorm_1.Entity('feed_post')
], Feed_PostEntity);
exports.Feed_PostEntity = Feed_PostEntity;
//# sourceMappingURL=feed_post.entity.js.map