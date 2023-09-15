import { BadRequestException, Body, Controller, HttpException, HttpStatus, Inject, Post, UsePipes, ValidationPipe } from '@nestjs/common';
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
        const check = this.followersService.createFollower(createFollowerDto);
        console.log(check);
        if (!check) {
            throw new BadRequestException('Followers records data violate foreign key rules.')
        }
        return check;
    }
}
