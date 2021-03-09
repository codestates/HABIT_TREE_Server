import { forwardRef, Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { Kakao } from './kakao.strategy';
import { LocalStrategy } from './local.strategy';
const dotenv = require('dotenv');
dotenv.config();

@Module({
  imports: [
    forwardRef(() => UsersModule),
    PassportModule,
    JwtModule.register({
      secret: process.env.SECRET_KEY,
      signOptions: { expiresIn: '3000s' },
    }),
  ],
  providers: [AuthService, LocalStrategy, JwtStrategy, Kakao],
  exports: [AuthService, JwtModule],
})
export class AuthModule {}
