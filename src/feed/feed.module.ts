import { Module } from '@nestjs/common';
import { FeedController } from './controllers/feed/feed.controller';
import { FeedService } from './services/feed/feed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Followers, Posts } from 'src/db_entities/entities';

@Module({
  imports: [TypeOrmModule.forFeature([Posts, Followers])],
  exports: [TypeOrmModule],
  controllers: [FeedController],
  providers: [FeedService]
})
export class FeedModule {}
