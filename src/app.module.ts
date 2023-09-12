import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/controller/users/users.controller';
import { ControllerController } from './users/controller/controller.controller';

@Module({
  imports: [],
  controllers: [AppController, UsersController, ControllerController],
  providers: [AppService],
})
export class AppModule {}
