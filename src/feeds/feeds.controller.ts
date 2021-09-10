import { Controller, Get, Req, UseGuards } from '@nestjs/common';
import JwtAuthGuard from 'src/auth/guards/jwtAuth.guard';
import { FeedsService } from './feeds.service';

@Controller('feeds')
export class FeedsController {
    constructor (
        private feedsService: FeedsService
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getByUserId(@Req() req) {
        return await this.feedsService.getByUserId(req.user.id)
    }
}
