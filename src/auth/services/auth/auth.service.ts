import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/db_entities/entities';
import * as bcrypt from 'bcrypt';
import { FeedService } from 'src/feed/services/feed/feed.service';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(Users) private readonly usersRepository: Repository<Users>,
                @Inject(FeedService) private readonly feedService: FeedService) {}

    async userAuth(username: string, password: string) {
        const user = await this.usersRepository.findOne({ where: {username} });
        if (user && bcrypt.compareSync(password, user.password)) {
            return user.id
        }
        else {
            return null;
        }
    }
}
