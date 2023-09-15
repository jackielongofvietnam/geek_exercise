import { Controller, Inject, Post, UsePipes, ValidationPipe, Body, BadRequestException } from '@nestjs/common';
import { createPostDto } from 'src/posts/dto/CreatePost.dto';
import { PostsService } from 'src/posts/services/posts/posts.service';

@Controller('posts')
export class PostsController {

    constructor(@Inject(PostsService) private readonly postsService: PostsService) {}

    @Post('createPosts')
    createPosts() {
        return this.postsService.createPosts();
    }

    @Post('createPost')
    @UsePipes(ValidationPipe)
    createPost(@Body() createPostDto: createPostDto) {
        return this.postsService.createPost(createPostDto);      
    }
}
