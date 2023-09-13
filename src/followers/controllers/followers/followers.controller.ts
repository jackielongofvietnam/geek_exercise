import { Controller, Inject, Post } from '@nestjs/common';
import { FollowersService } from 'src/followers/services/followers/followers.service';

@Controller('followers')
export class FollowersController {

    constructor(@Inject(FollowersService) private readonly followersService: FollowersService) {}
    
    @Post('createFollowers')
    createFollowers() {
        return this.followersService.createFollowers();
    }
}
