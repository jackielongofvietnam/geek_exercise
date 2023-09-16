import { BadRequestException, Body, Controller, HttpException, HttpStatus, Inject, Post, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { AuthGuard } from 'src/auth/guards/auth.guard';
import { createFollowerDto } from 'src/followers/dto/CreateFollowerDto';
import { FollowersService } from 'src/followers/services/followers/followers.service';

@Controller('followers')
export class FollowersController {

    constructor(@Inject(FollowersService) private readonly followersService: FollowersService) {}
    
    @Post('createFollowers')
    createFollowers() {
        return this.followersService.createFollowers();
    }

    @UseGuards(AuthGuard)
    @Post('createFollower')
    @UsePipes(ValidationPipe)
    createFollower(@Body() createFollowerDto: createFollowerDto) {
        return this.followersService.createFollower(createFollowerDto);       
    }
}
