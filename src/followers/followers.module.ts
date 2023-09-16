import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { FollowersController } from './controllers/followers/followers.controller';
import { FollowersService } from './services/followers/followers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Followers } from 'src/db_entities/Followers';
import { CreateFollowerAuthorize } from 'src/middlewares/createFollowerAuthorize';

@Module({
  imports: [TypeOrmModule.forFeature([Followers])],
  exports: [TypeOrmModule],
  controllers: [FollowersController],
  providers: [FollowersService]
})
export class FollowersModule implements NestModule{
  configure( follower: MiddlewareConsumer) {
    follower.apply(CreateFollowerAuthorize)
      .forRoutes({
        path: 'followers/createFollower',
        method: RequestMethod.POST
      })
  }
}
