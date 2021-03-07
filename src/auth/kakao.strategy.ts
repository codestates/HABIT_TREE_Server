import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from './auth.service';
import 'dotenv/config';

// import passport = require('../../node_modules/@types/passport');
const passport = require('passport');
const KakaoStrategy = require('passport-kakao').Strategy;
// passport.use(
//   new KakaoStrategy(
//     {
//       clientID: '60e7d8e575fb11a4f5b28344f000c782',
//       callbackURL: 'http://localhost:3000/users/callback',
//     },
//     (accessToken, refreshToken, profile, done) => {
//       console.log(3);
//       done(null);
//     },
//   ),
// );
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
