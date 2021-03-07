import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { HabitsModule } from './habits/habits.module';
import { ForestModule } from './forest/forest.module';
@Module({
  imports: [TypeOrmModule.forRoot(), UsersModule, HabitsModule, ForestModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
