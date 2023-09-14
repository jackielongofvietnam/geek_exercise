import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from 'src/db_entities/Users';
import { User } from 'src/users/types/User';

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

    ] 

    async createUsers() {
        for (const user of this.userList) {
            const newUser = this.usersRepository.create(user);
            await this.usersRepository.save(newUser);
        }
    }

    
}
