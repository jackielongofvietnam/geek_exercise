import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts } from 'src/db_entities/Posts';
import { Post } from 'src/posts/types/Post';

@Injectable()
export class PostsService {
    constructor(@InjectRepository(Posts) private readonly postsRepository: Repository<Posts>) {}

    private postList: Post[] = [
        {
            userID: '123AB',
            content: 'Nothing'
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
}



