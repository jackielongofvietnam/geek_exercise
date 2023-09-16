import { Module } from '@nestjs/common';
import { AuthController } from './controllers/auth/auth.controller';
import { AuthService } from './services/auth/auth.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from 'src/db_entities/entities';
import { FeedService } from 'src/feed/services/feed/feed.service';
import { FeedModule } from 'src/feed/feed.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './secret/JWTSecret';

@Module({
  imports: [TypeOrmModule.forFeature([Users]),
            JwtModule.register({
              global: true,
              secret: jwtConstants.secret,
              signOptions: { expiresIn: '30s' }
            }),
            FeedModule],
  exports: [TypeOrmModule],
  controllers: [AuthController],
  providers: [AuthService, FeedService]
})
export class AuthModule {}
