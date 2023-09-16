import { Body, Controller, Get, Inject, UnauthorizedException, UsePipes, ValidationPipe } from '@nestjs/common';

import { UserAuthDto } from 'src/auth/dto/UserAuth.dto';
import { AuthService } from 'src/auth/services/auth/auth.service';
import { FeedService } from 'src/feed/services/feed/feed.service';


@Controller('auth')
export class AuthController {

    constructor(@Inject(AuthService) private readonly authService: AuthService,
                @Inject(FeedService) private readonly feedService: FeedService) {}

    @Get('login')
    @UsePipes(ValidationPipe)
    async logIn(@Body() userAuthDto: UserAuthDto) {
        const userAuth = await this.authService.userAuth(userAuthDto.username, userAuthDto.password);     
        if (!userAuth.userID) {
            throw new UnauthorizedException('Wrong username or password');
        }       
        const feed = await this.feedService.feedCreation(userAuth.userID);
        const finalAuth = { ...userAuth, ...feed }
        return finalAuth;
    }
}
