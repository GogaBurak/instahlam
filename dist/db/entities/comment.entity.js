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
exports.CommentEntity = void 0;
const typeorm_1 = require("typeorm");
const hashtag_entity_1 = require("./hashtag.entity");
const post_entity_1 = require("./post.entity");
const user_entity_1 = require("./user.entity");
let CommentEntity = class CommentEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], CommentEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], CommentEntity.prototype, "text", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], CommentEntity.prototype, "image", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], CommentEntity.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.ManyToOne(type => user_entity_1.UserEntity, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'user_id', referencedColumnName: 'id' }),
    __metadata("design:type", user_entity_1.UserEntity)
], CommentEntity.prototype, "user", void 0);
__decorate([
    typeorm_1.ManyToOne(type => post_entity_1.PostEntity, { onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn({ name: 'post_id', referencedColumnName: 'id' }),
    __metadata("design:type", post_entity_1.PostEntity)
], CommentEntity.prototype, "post", void 0);
__decorate([
    typeorm_1.ManyToMany(type => hashtag_entity_1.HashtagEntity, { cascade: true, onDelete: 'CASCADE' }),
    typeorm_1.JoinTable({ name: 'comment_hashtag' }),
    __metadata("design:type", Array)
], CommentEntity.prototype, "hashtags", void 0);
CommentEntity = __decorate([
    typeorm_1.Entity('Comment')
], CommentEntity);
exports.CommentEntity = CommentEntity;
//# sourceMappingURL=comment.entity.js.map