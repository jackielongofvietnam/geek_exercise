import { Controller, Inject, Post } from '@nestjs/common';
import { UsersService } from './users/services/users/users.service';
import { PostsService } from './posts/services/posts/posts.service';
import { FollowersService } from './followers/services/followers/followers.service';

@Controller()
export class AppController {
    
    constructor(@Inject(UsersService) private readonly usersService: UsersService,
                @Inject(PostsService) private readonly postsService: PostsService,
                @Inject(FollowersService) private readonly followersService: FollowersService
    ) {}

    @Post('populateDB')
    async populateDB() {
        await this.usersService.createUsers();
        await this.postsService.createPosts();
        await this.followersService.createFollowers();
    }
}
