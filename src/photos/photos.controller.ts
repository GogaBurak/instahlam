import { Controller, Post, UploadedFile, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { PhotosService } from './photos.service';

@Controller('photos')
export class PhotosController {
    constructor(
        private readonly photosService: PhotosService,
    ) {}
    
    // @Post('upload')
    // @UseInterceptors(FileInterceptor('file'))
    // async upload(@UploadedFile() file) {
    //   return await this.photosService.upload(file);
    // }


}
