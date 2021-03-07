import { forwardRef, Inject, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';
import { User } from 'src/entity/user.entity';

@Injectable()
export class AuthService {
  constructor(
    @Inject(forwardRef(() => UsersService))
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user && (await bcrypt.compare(pass, user.password)) === true) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: User): Promise<{ access_token: string }> {
    const payload = { id: user.id, username: user.username };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async kakaoValidateUser(
    accessToken: string,
    refreshToken: string,
    profile: any,
    done: any,
  ): Promise<any> {
    try {
      const exUser: User = await this.usersService.findOne(profile.id);
      if (exUser) {
        const result = await this.login(exUser);
        console.log(result);
        // return result;
        return done(null, result);
      } else {
        const newUser = await this.usersService.create({
          email: profile._json.kakao_account.email,
          nickname: profile.displayName,
          username: profile.id,
        });

        const result = this.login(newUser);
        return result;

        // done(null, newUser);
        // done(null, this.login(newUser));
      }
    } catch (error) {
      console.error(error);
      done(error);
    }
  }
}
