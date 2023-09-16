import { Inject, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/db_entities/entities';
import * as bcrypt from 'bcrypt';
import { FeedService } from 'src/feed/services/feed/feed.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(Users) private readonly usersRepository: Repository<Users>,
                private jwtService: JwtService) {}

    async userAuth(username: string, password: string) {
        const user = await this.usersRepository.findOne({ where: {username} });
        if (user && bcrypt.compareSync(password, user.password)) {
            const payload = { sub: user.id, username: user.username };
            const token = await this.jwtService.signAsync(payload);          
            return { userID: user.id, accessToken: token };
        }
        else {
            return null;
        }
    }
}
 