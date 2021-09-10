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
exports.PhotosService = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const aws_sdk_1 = require("aws-sdk");
let PhotosService = class PhotosService {
    constructor(configService) {
        this.configService = configService;
    }
    async upload(file) {
        const { originalname } = file;
        const bucketS3 = this.configService.get('AWS_BUCKET_NAME');
        const uploadData = await this.uploadS3(file.buffer, bucketS3, originalname);
        return uploadData.key;
    }
    async getPhotoUrl(key) {
        const s3 = this.getS3();
        const params = {
            Bucket: this.configService.get('AWS_BUCKET_NAME'),
            Key: key
        };
        const url = s3.getSignedUrl('getObject', params);
        return url;
    }
    async uploadS3(file, bucket, name) {
        const s3 = this.getS3();
        const params = {
            Bucket: bucket,
            Key: String(name),
            Body: file,
        };
        return new Promise((resolve, reject) => {
            s3.upload(params, (err, data) => {
                resolve(data);
            });
        });
    }
    getS3() {
        return new aws_sdk_1.S3({
            accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
            secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
        });
    }
};
PhotosService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [config_1.ConfigService])
], PhotosService);
exports.PhotosService = PhotosService;
//# sourceMappingURL=photos.service.js.map