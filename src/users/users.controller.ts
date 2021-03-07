import {
  Body,
  Controller,
  Delete,
  forwardRef,
  Get,
  Inject,
  Param,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard, PassportStrategy } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';
import { User } from 'src/entity/user.entity';
import { UsersService } from './users.service';
import { LoginUsersDto, CreateUsersDto } from '../dto/users.dto';
const KakaoStrategy = require('passport-kakao').Strategy;
const passport = require('passport');
@Controller('users')
export class UsersController {
  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  async login(@Req() req): Promise<{ access_token: string }> {
    return this.authService.login(req.user);
  }

  @Get('findAll')
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('findOne')
  findOne(@Req() req): Promise<User> {
    console.log(req.user);
    const username = req.user.username;
    return this.usersService.findOne(username);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete('remove')
  remove(@Req() req: any, @Body() body: any): any {
    const { id, username } = req.user;
    return this.usersService.remove(id);
  }

  @Post('create')
  create(@Body() body: CreateUsersDto): Promise<User> {
    console.log(body);
    return this.usersService.create(body);
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('update')
  update(@Body('password') password: string, @Req() req: any): Promise<any> {
    return this.usersService.update(password, req.user.id);
  }
  /**
   * user + habit 조인 쿼리
   */
  @UseGuards(AuthGuard('jwt'))
  @Post('getHabits')
  findOneJoin(@Req() req: any): Promise<User> {
    const { id, username } = req.user;
    return this.usersService.findOneJoin(id);
  }

  // @UseGuards(AuthGuard('kakao'))
  // @Post('kakaoLogin')
  // kakaoLogin() {
  //   console.log(1);
  //   return;
  // }

  @UseGuards(AuthGuard('kakao'))
  @Get('kakaoLogin')
  kakaoLogin() {
    console.log(1);
    // passport.authenticate('kakao', (err, user, info) => {
    //   if (err) console.log(2);
    //   if (user) console.log(3);
    //   if (info) console.log(4);
    // });

    // this.usersService.kakaoLogin();
    // this.usersService.kakaoLogin();
  }

  @UseGuards(AuthGuard('kakao'))
  @Get('callback')
  callback(@Req() req, @Res() res) {
    // console.log(req.user.access_token);
    // const token = req.user.access_token;
    // return token;
    res.setHeader('token', req.user.access_token);
    const token = req.user.access_token;
    res.redirect(`https://localhost:3000/?access_token=${token}`);
    // return res.send(req.user.access_token);
    // return res.redirect('/');
  }
}
