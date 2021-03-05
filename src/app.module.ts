import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { HabitsModule } from './habits/habits.module';
import { ForestModule } from './forest/forest.module';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from './auth/auth.service';
@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, HabitsModule, ForestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
