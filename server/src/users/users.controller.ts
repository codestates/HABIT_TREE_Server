import { Controller, Delete, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // 로그인 회원가입 회원탈퇴 로그아웃 회원정보
  // signin signup withdrawal signout userInfo
  @Post('/signup')
  signup() {
    return 'signup!';
  }

  @Post('/signin')
  signin() {
    return 'signin!';
  }

  @Delete('/withdrawal')
  withdrawal() {
    return 'withdrawal!';
  }
  @Post('/signout')
  signout() {
    return 'signout!';
  }
  @Post('/userInfo')
  userInfo() {
    return 'userInfo!';
  }

  // id => id로 정보 조회
  // token => token으로 해당 사용자 조회 =>
}
