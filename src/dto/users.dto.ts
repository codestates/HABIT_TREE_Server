import { IsEmail, IsString, MinLength, MaxLength } from 'class-validator';

export class LoginUsersDto {
  @MinLength(2)
  @MaxLength(15)
  @IsString()
  readonly username: string;

  @IsString()
  readonly password?: string;
}

export class CreateUsersDto extends LoginUsersDto {
  @IsString()
  readonly nickname: string;

  @IsEmail()
  readonly email: string;
}

export class KakaoUsersDto extends CreateUsersDto {}
