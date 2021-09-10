import { ConfigService } from '@nestjs/config';
export declare class PhotosService {
    private readonly configService;
    constructor(configService: ConfigService);
    upload(file: any): Promise<any>;
    getPhotoUrl(key: any): Promise<string>;
    private uploadS3;
    private getS3;
}
