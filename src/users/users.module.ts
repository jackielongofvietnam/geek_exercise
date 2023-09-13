import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './controllers/users/users.controller';
import { UsersService } from './services/users/users.service';
import { Users } from 'src/db_entities/Users';

@Module({
    imports: [TypeOrmModule.forFeature([Users])],
    exports: [TypeOrmModule],
    controllers: [UsersController],
    providers: [UsersService]
})
export class UsersModule {}
