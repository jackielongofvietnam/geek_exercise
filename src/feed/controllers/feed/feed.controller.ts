import { Controller, Get, Inject, Param } from '@nestjs/common';
import { FeedService } from 'src/feed/services/feed/feed.service';

@Controller('feed')
export class FeedController {
    
    constructor(@Inject(FeedService) private readonly feedService: FeedService) {}

    // @Get('getFeed/:id')
    // async getFeed(@Param('id') userID: string) {  
    //     const postList = await this.feedService.findPosts(userID);
    //     const feed = { userID, postList };
    //     return feed;
    // }
}
