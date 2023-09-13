import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersController } from './users/controllers/users/users.controller';
import { UsersService } from './users/services/users/users.service';
import { UsersModule } from './users/users.module';
import { Users, Posts } from './db_entities/entities';
import { PostsModule } from './posts/posts.module';
import { PostsController } from './posts/controllers/posts/posts.controller';
import { PostsService } from './posts/services/posts/posts.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '0933825653',
      database: 'geek_exercise',
      entities: [Users, Posts],
      synchronize: true
    }),
    UsersModule,
    PostsModule
  ],
  controllers: [AppController, UsersController, PostsController],
  providers: [AppService, UsersService, PostsService],
})
export class AppModule {}
