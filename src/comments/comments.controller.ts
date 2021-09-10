import { Body, Controller, HttpCode, Param, Post, Req, UploadedFile, UseGuards, UseInterceptors } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import JwtAuthGuard from 'src/auth/guards/jwtAuth.guard';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {
    constructor (
        private commentsService: CommentsService
    ) {}

    @UseGuards(JwtAuthGuard)
    @Post(':id')
    @HttpCode(201)
    @UseInterceptors(FileInterceptor('file'))
    async create(@Req() req, @Param('id') postId, @Body() body, @UploadedFile() file) {
        const commentData = {
            text: body.text,
            image: file
        }
        return await this.commentsService.create(req.user.id, postId, commentData)
    }
}
