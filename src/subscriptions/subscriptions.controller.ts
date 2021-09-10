import { Controller, Delete, HttpCode, Param, Post, Req, UseGuards } from '@nestjs/common';
import JwtAuthGuard from 'src/auth/guards/jwtAuth.guard';
import { SubscriptionsService } from './subscriptions.service';

@Controller('subscriptions')
export class SubscriptionsController {
    constructor (
        private subscriptionsService: SubscriptionsService
    ) {}

    @UseGuards(JwtAuthGuard)
    @HttpCode(201)
    @Post(':id')
    async subscribe(@Req() req, @Param('id') id) {
        await this.subscriptionsService.subscribe(req.user.id, id)
    }

    @UseGuards(JwtAuthGuard)
    @HttpCode(204)
    @Delete()
    async unsubscribe(@Req() req, @Param('id') id) {
        await this.subscriptionsService.unsubscribe(req.user.id, id)
    }
}
