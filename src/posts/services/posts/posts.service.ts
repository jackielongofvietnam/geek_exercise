import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts, Users } from 'src/db_entities/entities';
import { Post } from 'src/posts/types/Post';
import { createPostDto } from 'src/posts/dto/CreatePost.dto';

@Injectable()
export class PostsService {
    constructor(@InjectRepository(Posts) private readonly postsRepository: Repository<Posts>) {}

    private postList: Post[] = [
        {
            userID: '123AB',
            content: 'Nothing'
        },
        {
            userID: '101GH',
            content: 'Something'
        },
        {
            userID: '134IK',
            content: 'How are you?'
        },
        {
            userID: '101GH',
            content: 'Welcome'
        },
        {
            userID: '134IK',
            content: 'Maybe'
        },
        {
            userID: '456CD',
            content: 'Anything'
        }
    ]

    async createPosts() {
        for (const post of this.postList) {
            const newPost = this.postsRepository.create(post);
            await this.postsRepository.save(newPost);
        }
    }

    createPost(createPostDto: createPostDto) {
        const newPost = this.postsRepository.create(createPostDto);
        return this.postsRepository.save(newPost);
    }   
}



