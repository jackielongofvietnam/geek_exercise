import { Module } from '@nestjs/common';
import { PostsController } from './controllers/posts/posts.controller';
import { PostsService } from './services/posts/posts.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Posts } from 'src/db_entities/Posts';

@Module({
  imports: [TypeOrmModule.forFeature([Posts])],
  exports: [TypeOrmModule],
  controllers: [PostsController],
  providers: [PostsService]
})
export class PostsModule {}
