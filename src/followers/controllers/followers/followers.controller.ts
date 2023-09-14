import { Body, Controller, Inject, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { createFollowerDto } from 'src/followers/dto/CreateFollowerDto';
import { FollowersService } from 'src/followers/services/followers/followers.service';

@Controller('followers')
export class FollowersController {

    constructor(@Inject(FollowersService) private readonly followersService: FollowersService) {}
    
    @Post('createFollowers')
    createFollowers() {
        return this.followersService.createFollowers();
    }

    @Post('createFollower')
    @UsePipes(ValidationPipe)
    createFollower(@Body() createFollowerDto: createFollowerDto) {
        return this.followersService.createFollower(createFollowerDto);
    }
}
