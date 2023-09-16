import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Posts, Followers } from 'src/db_entities/entities';



@Injectable()
export class FeedService {

    constructor(@InjectRepository(Posts) private readonly postsRepository: Repository<Posts>,
                @InjectRepository(Followers) private readonly followersRepository: Repository<Followers>) {}

    private async findFollowers(userID: string) {
        const records = await this.followersRepository.find({ where: {userID} });
        const followerIDlist = records.map(record => record.followerID);
        return followerIDlist;
    }

    async findPosts(userID: string) {
        const userIDlist = await this.findFollowers(userID);
        userIDlist.push(userID);
        const postList = await this.postsRepository.createQueryBuilder('posts')
                                   .where("posts.userID IN (:...userIDlist)", {userIDlist})
                                   .getMany();    
        postList.sort((a, b) => b.dateCreated.getTime() - a.dateCreated.getTime());                           
        return postList;
    }

    async feedCreation(userID: string) {
        const postList = await this.findPosts(userID);
        const feed = { userID, postList };
        return feed;
    }

}
