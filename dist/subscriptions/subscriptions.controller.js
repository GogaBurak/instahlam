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
exports.SubscriptionsController = void 0;
const common_1 = require("@nestjs/common");
const jwtAuth_guard_1 = require("../auth/guards/jwtAuth.guard");
const subscriptions_service_1 = require("./subscriptions.service");
let SubscriptionsController = class SubscriptionsController {
    constructor(subscriptionsService) {
        this.subscriptionsService = subscriptionsService;
    }
    async subscribe(req, id) {
        await this.subscriptionsService.subscribe(req.user.id, id);
    }
    async unsubscribe(req, id) {
        await this.subscriptionsService.unsubscribe(req.user.id, id);
    }
};
__decorate([
    common_1.UseGuards(jwtAuth_guard_1.default),
    common_1.HttpCode(201),
    common_1.Post(':id'),
    __param(0, common_1.Req()),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SubscriptionsController.prototype, "subscribe", null);
__decorate([
    common_1.UseGuards(jwtAuth_guard_1.default),
    common_1.HttpCode(204),
    common_1.Delete(),
    __param(0, common_1.Req()),
    __param(1, common_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], SubscriptionsController.prototype, "unsubscribe", null);
SubscriptionsController = __decorate([
    common_1.Controller('subscriptions'),
    __metadata("design:paramtypes", [subscriptions_service_1.SubscriptionsService])
], SubscriptionsController);
exports.SubscriptionsController = SubscriptionsController;
//# sourceMappingURL=subscriptions.controller.js.map