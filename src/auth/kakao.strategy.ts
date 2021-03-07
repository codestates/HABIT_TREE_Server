import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';
import 'dotenv/config';

const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;

@Injectable()
export class Kakao extends PassportStrategy(KakaoStrategy) {
  constructor(private authService: AuthService) {
    super({
      clientID: '60e7d8e575fb11a4f5b28344f000c782',
      clientSecret: '',
      callbackURL: '/users/callback',
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any,
  ): Promise<any> {
    return await this.authService.kakaoValidateUser(
      accessToken,
      refreshToken,
      profile,
      done,
    );
  }
}
