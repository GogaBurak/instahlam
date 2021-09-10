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
exports.CommentsController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const jwtAuth_guard_1 = require("../auth/guards/jwtAuth.guard");
const comments_service_1 = require("./comments.service");
let CommentsController = class CommentsController {
    constructor(commentsService) {
        this.commentsService = commentsService;
    }
    async create(req, postId, body, file) {
        const commentData = {
            text: body.text,
            image: file
        };
        return await this.commentsService.create(req.user.id, postId, commentData);
    }
};
__decorate([
    common_1.UseGuards(jwtAuth_guard_1.default),
    common_1.Post(':id'),
    common_1.HttpCode(201),
    common_1.UseInterceptors(platform_express_1.FileInterceptor('file')),
    __param(0, common_1.Req()),
    __param(1, common_1.Param('id')),
    __param(2, common_1.Body()),
    __param(3, common_1.UploadedFile()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object, Object]),
    __metadata("design:returntype", Promise)
], CommentsController.prototype, "create", null);
CommentsController = __decorate([
    common_1.Controller('comments'),
    __metadata("design:paramtypes", [comments_service_1.CommentsService])
], CommentsController);
exports.CommentsController = CommentsController;
//# sourceMappingURL=comments.controller.js.map