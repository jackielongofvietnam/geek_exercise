import { Controller, Inject, Post } from '@nestjs/common';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
export class UsersController {

    constructor(@Inject(UsersService) private readonly usersService: UsersService) {}

    @Post('createUsers')
    createUsers() {
        return this.usersService.createUsers();
    }
}
