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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const users_service_1 = require("../users/users.service");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
const user_entity_1 = require("../db/entities/user.entity");
const signupUser_dto_1 = require("./dto/signupUser.dto");
let AuthService = class AuthService {
    constructor(usersService, jwtService) {
        this.usersService = usersService;
        this.jwtService = jwtService;
    }
    async validateUser(email, password) {
        const user = await this.usersService.findByEmail(email);
        if (!user) {
            throw new common_1.UnauthorizedException();
        }
        const isMatch = await this.checkPassword(password, user.password);
        if (!isMatch) {
            throw new common_1.UnauthorizedException();
        }
        return user;
    }
    async checkPassword(password, storedPassword) {
        return await bcrypt.compare(password, storedPassword);
    }
    async signup(userData) {
        const user = await this.usersService.create(userData);
        const token = this.jwtService.sign({ id: user.id.toString() });
        return { user, token };
    }
    async login(user) {
        return {
            token: this.jwtService.sign({ id: user.id.toString() }),
        };
    }
    async validateOAuthLogin(profile) {
        let user = await this.usersService.getUserByThirdPartyId(profile.id);
        if (!user) {
            user = await this.usersService.createUserFromOAuth(profile);
        }
        const token = await this.jwtService.signAsync({ id: user.id });
        return { token };
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [users_service_1.UsersService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map