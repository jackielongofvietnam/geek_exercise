import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/controllers/users/users.controller';
import { UsersService } from './users/services/users/users.service';
import { UsersModule } from './users/users.module';
import { Users, Posts } from './db_entities/entities';
import { PostsModule } from './posts/posts.module';
import { PostsController } from './posts/controllers/posts/posts.controller';
import { PostsService } from './posts/services/posts/posts.service';
import { FollowersModule } from './followers/followers.module';
import { FollowersController } from './followers/controllers/followers/followers.controller';
import { Followers } from './db_entities/Followers';
import { FollowersService } from './followers/services/followers/followers.service';
import { FeedModule } from './feed/feed.module';
import { AuthModule } from './auth/auth.module';
import { AppController } from './app.controller';
import { CreateFollowerAuthorize } from './middlewares/createFollowerAuthorize';




@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      //change below parameters if necessary
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '0933825653',
      database: 'geek_exercise',
      //-------------------------
      entities: [Users, Posts, Followers],
      synchronize: true,
      logging: false
    }),
    UsersModule,
    PostsModule,
    FollowersModule,
    FeedModule,
    AuthModule
  ],
  controllers: [AppController, UsersController, PostsController, FollowersController],
  providers: [UsersService, PostsService, FollowersService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CreateFollowerAuthorize)
  }
}
