import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Followers } from 'src/db_entities/entities';
import { Follower } from 'src/followers/types/follower';
import { createFollowerDto } from 'src/followers/dto/CreateFollowerDto';

@Injectable()
export class FollowersService {

    constructor(@InjectRepository(Followers) private readonly followersRepository: Repository<Followers>) {}

    private followerList: Follower[] = [
        {
            userID: '123AB',
            followerID: '456CD'
        },
        {
            userID: '789EF',
            followerID: '456CD'
        },
        {
            userID: '123AB',
            followerID: '101GH'
        },
        {
            userID: '123AB',
            followerID: '134IK'
        },
        {
            userID: '789EF',
            followerID: '101GH'
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

    async createFollower(createFollowerDto: createFollowerDto) {
        let userID = createFollowerDto.userID;
        let followerID = createFollowerDto.followerID;
        const user = await this.followersRepository.findOne({ where: { userID, followerID } })
        if (user && user.followerID === createFollowerDto.followerID) {          
            throw new BadRequestException('Follower record has already existed');
        }
        else {
            try {
                const newFollower = this.followersRepository.create(createFollowerDto);
                return this.followersRepository.save(newFollower);
            } catch(err) {
                return null;
            }         
        }
    }
}
