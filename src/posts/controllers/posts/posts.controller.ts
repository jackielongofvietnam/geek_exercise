import { Controller, Inject, Post } from '@nestjs/common';
import { PostsService } from 'src/posts/services/posts/posts.service';

@Controller('posts')
export class PostsController {

    constructor(@Inject(PostsService) private readonly postsService: PostsService) {}

    @Post('createPosts')
    createPosts() {
        return this.postsService.createPosts();
    }
}
