import { Module } from '@nestjs/common';
import { PhotosService } from './photos.service';
import { PhotosController } from './photos.controller';
import { UsersService } from 'src/users/users.service';

@Module({
  exports: [PhotosService],
  providers: [PhotosService],
  controllers: [PhotosController]
})
export class PhotosModule {}
