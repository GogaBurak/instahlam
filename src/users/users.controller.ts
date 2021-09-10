import { Body, Controller, Delete, Get, HttpCode, Param, Patch, Post, Put, Req, UseGuards } from '@nestjs/common';
import JwtAuthGuard from 'src/auth/guards/jwtAuth.guard';
import { UserEntity } from 'src/db/entities/user.entity';
import { UpdateUserDTO } from './dto/updateUser.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor (
        private userService: UsersService
    ) {}

    @UseGuards(JwtAuthGuard)
    @Get()
    async getById(@Req() req): Promise<UserEntity> {
        return await this.userService.findOne(req.user.id)
    }

    @UseGuards(JwtAuthGuard)
    @Put()
    async update(@Req() req, @Body() updateData: UpdateUserDTO): Promise<UserEntity> {
        return this.userService.update(req.user.id, updateData)
    }

    @UseGuards(JwtAuthGuard)
    @Delete()
    @HttpCode(204)
    async delete(@Req() req): Promise<UserEntity> {
        return await this.userService.remove(req.user.id)
    }
}
