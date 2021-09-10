import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { S3 } from 'aws-sdk';


@Injectable()
export class PhotosService {
    constructor(
        private readonly configService: ConfigService,
    ) { }

    async upload(file) {
        const { originalname } = file
        const bucketS3 = this.configService.get('AWS_BUCKET_NAME')
        const uploadData: any = await this.uploadS3(file.buffer, bucketS3, originalname)
        return uploadData.key
    }

    async getPhotoUrl(key) {
        const s3 = this.getS3()
        const params = {
            Bucket: this.configService.get('AWS_BUCKET_NAME'),
            Key: key
        };
        const url = s3.getSignedUrl('getObject', params);
        return url
    }

    private async uploadS3(file, bucket, name) {
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

    private getS3() {
        return new S3({
            accessKeyId: this.configService.get('AWS_ACCESS_KEY_ID'),
            secretAccessKey: this.configService.get('AWS_SECRET_ACCESS_KEY'),
        });
    }
}
