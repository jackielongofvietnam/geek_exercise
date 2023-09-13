import { Module } from '@nestjs/common';
import { FollowersController } from './controllers/followers/followers.controller';
import { FollowersService } from './services/followers/followers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Followers } from 'src/db_entities/Followers';

@Module({
  imports: [TypeOrmModule.forFeature([Followers])],
  exports: [TypeOrmModule],
  controllers: [FollowersController],
  providers: [FollowersService]
})
export class FollowersModule {}
