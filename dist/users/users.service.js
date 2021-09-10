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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("../db/entities/user.entity");
const bcrypt = require("bcrypt");
const feed_entity_1 = require("../db/entities/feed.entity");
let UsersService = class UsersService {
    constructor(usersRepository, feedsRepository) {
        this.usersRepository = usersRepository;
        this.feedsRepository = feedsRepository;
    }
    async create(userData) {
        userData.password = await bcrypt.hash(userData.password, Number(process.env.HASH_SALT));
        const user = this.usersRepository.create(userData);
        await this.usersRepository.save(user);
        const feed = this.feedsRepository.create(user);
        await this.feedsRepository.save(feed);
        user.feed = feed;
        await this.usersRepository.save(user);
        return user;
    }
    async findOne(id) {
        const user = await this.usersRepository.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException("User not found.");
        }
        return user;
    }
    async findByEmail(email) {
        return await this.usersRepository.findOne({ email });
    }
    async getUserByThirdPartyId(thirdPartyId) {
        return await this.usersRepository.findOne({ thirdPartyId });
    }
    async createUserFromOAuth(profile) {
        const userData = {
            nickname: `${profile.name.givenName}.${profile.name.familyName}`,
            email: profile.emails[0].value,
            thirdPartyId: profile.id,
        };
        const user = this.usersRepository.create(userData);
        await this.usersRepository.save(user);
        return user;
    }
    async update(id, updateData) {
        const user = await this.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException();
        }
        await this.usersRepository.update(id, updateData);
        return await this.findOne(id);
    }
    async remove(id) {
        const user = await this.findOne(id);
        if (!user) {
            throw new common_1.NotFoundException();
        }
        await this.usersRepository.delete(id);
        return user;
    }
};
UsersService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(user_entity_1.UserEntity)),
    __param(1, typeorm_1.InjectRepository(feed_entity_1.FeedEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository])
], UsersService);
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map