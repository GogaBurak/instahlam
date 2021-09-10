import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CommentEntity } from 'src/db/entities/comment.entity';
import { PhotosService } from 'src/photos/photos.service';
import { PostsService } from 'src/posts/posts.service';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreateCommentDto } from './dto/createComment.dto';

@Injectable()
export class CommentsService {
    constructor (
        @InjectRepository(CommentEntity)
        private commentsRepository: Repository<CommentEntity>,

        private usersService: UsersService,
        private postsService: PostsService,
        private photoService: PhotosService
    ) {}

    async create(userId, postId, commentData: CreateCommentDto) {
        const comment: any = {}
        comment.user = await this.usersService.findOne(userId)
        comment.post = (await this.postsService.getById(postId)).post
        comment.text = commentData.text
        if (commentData.image) {
            const image = await this.photoService.upload(commentData.image)
        }
        const commentEntity =this.commentsRepository.create(comment)
        return await this.commentsRepository.save(comment)
    }
}
