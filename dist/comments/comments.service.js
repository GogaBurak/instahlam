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
exports.CommentsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const comment_entity_1 = require("../db/entities/comment.entity");
const photos_service_1 = require("../photos/photos.service");
const posts_service_1 = require("../posts/posts.service");
const users_service_1 = require("../users/users.service");
const typeorm_2 = require("typeorm");
let CommentsService = class CommentsService {
    constructor(commentsRepository, usersService, postsService, photoService) {
        this.commentsRepository = commentsRepository;
        this.usersService = usersService;
        this.postsService = postsService;
        this.photoService = photoService;
    }
    async create(userId, postId, commentData) {
        const comment = {};
        comment.user = await this.usersService.findOne(userId);
        comment.post = (await this.postsService.getById(postId)).post;
        comment.text = commentData.text;
        if (commentData.image) {
            const image = await this.photoService.upload(commentData.image);
        }
        const commentEntity = this.commentsRepository.create(comment);
        return await this.commentsRepository.save(comment);
    }
};
CommentsService = __decorate([
    common_1.Injectable(),
    __param(0, typeorm_1.InjectRepository(comment_entity_1.CommentEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        users_service_1.UsersService,
        posts_service_1.PostsService,
        photos_service_1.PhotosService])
], CommentsService);
exports.CommentsService = CommentsService;
//# sourceMappingURL=comments.service.js.map