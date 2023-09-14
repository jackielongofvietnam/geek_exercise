import { HttpException, Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/db_entities/entities';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(Users) private readonly usersRepository: Repository<Users>) {}

    async userAuth(username: string, password: string) {
        const user = await this.usersRepository.findOne({ where: {username} });
        if (user && user.password === password) {
            return user.id;
        }
        return null;
    }
}
