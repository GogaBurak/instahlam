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
exports.UserEntity = void 0;
const class_validator_1 = require("class-validator");
const typeorm_1 = require("typeorm");
const feed_entity_1 = require("./feed.entity");
const subscription_entity_1 = require("./subscription.entity");
let UserEntity = class UserEntity {
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], UserEntity.prototype, "id", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    class_validator_1.IsEmail(),
    __metadata("design:type", String)
], UserEntity.prototype, "email", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UserEntity.prototype, "password", void 0);
__decorate([
    typeorm_1.Column({ unique: true }),
    class_validator_1.IsString(),
    __metadata("design:type", String)
], UserEntity.prototype, "nickname", void 0);
__decorate([
    typeorm_1.Column({ nullable: true }),
    __metadata("design:type", String)
], UserEntity.prototype, "thirdPartyId", void 0);
__decorate([
    typeorm_1.OneToOne(() => feed_entity_1.FeedEntity, feed => feed.user, { cascade: true, onDelete: 'CASCADE' }),
    typeorm_1.JoinColumn(),
    __metadata("design:type", feed_entity_1.FeedEntity)
], UserEntity.prototype, "feed", void 0);
__decorate([
    typeorm_1.OneToMany(() => subscription_entity_1.SubscriptionEntity, subscription => subscription.user),
    __metadata("design:type", Array)
], UserEntity.prototype, "subscriptions", void 0);
UserEntity = __decorate([
    typeorm_1.Entity('User')
], UserEntity);
exports.UserEntity = UserEntity;
//# sourceMappingURL=user.entity.js.map