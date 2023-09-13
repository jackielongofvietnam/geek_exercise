import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Followers } from 'src/db_entities/Followers';
import { Follower } from 'src/followers/types/follower';

@Injectable()
export class FollowersService {

    constructor(@InjectRepository(Followers) private readonly followersRepository: Repository<Followers>) {}

    private followerList: Follower[] = [
        {
            userID: '123AB',
            followerID: '456CD'
        },
        {
            userID: '456CD',
            followerID: '123AB'
        }
    ]

    async createFollowers() {
        for (const follower of this.followerList) {
            const newFollower = this.followersRepository.create(follower);
            await this.followersRepository.save(newFollower);
        }
    }
}
