import { Body, Controller, Get, HttpCode, Param, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import JwtAuthGuard from 'src/auth/guards/jwtAuth.guard';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
    constructor(
      private postService: PostsService
    ) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    @HttpCode(201)
    @UseInterceptors(FileInterceptor('file'))
    async create(@Req() req, @Body() body, @UploadedFile() file) {
      return await this.postService.create(req.user.id, body.text, file);
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    async get(@Param('id') postId) {
      return await this.postService.getById(postId)
    }
}
