import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';

@Controller()
export class AppController {
  // constructor(private authService: AuthService) {}
  // @UseGuards(AuthGuard('local'))
  // @Post('auth/login')
  // async login(@Req() req) {
  //   return this.authService.login(req.user);
  // }
  // @UseGuards(AuthGuard('jwt'))
  // @Get('profile')
  // getProfile(@Req() req) {
  //   return req.user;
  // }
  @Get()
  home() {
    return 'welcome';
  }
}
