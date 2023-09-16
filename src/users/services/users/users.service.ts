import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/db_entities/entities';
import { User } from 'src/users/types/User';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    
    constructor(@InjectRepository(Users) private readonly usersRepository: Repository<Users>) {}

    private userList: User[] = [
        {
            id: '123AB',
            username: 'andy',
            password: '1234'
        },
        {
            id: '456CD',
            username: 'justin',
            password: '4567'
        },
        {
            id: '789EF',
            username: 'marley',
            password: '8910'
        },
        {
            id: '101GH',
            username: 'cross',
            password: '1112'
        },
        {
            id: '134IK',
            username: 'rick',
            password: '1314'
        },
        {
            id: '134IL',
            username: 'rich',
            password: '1317'
        }

    ] 

    async createUsers() {
        const SALT = bcrypt.genSaltSync();
        for (const user of this.userList) {
            user.password = await bcrypt.hash(user.password, SALT);
            const newUser = this.usersRepository.create(user);
            await this.usersRepository.save(newUser);
        }
    }

    
}
