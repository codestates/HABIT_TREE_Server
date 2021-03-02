import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { HabitsModule } from './habits/habits.module';
@Module({
  imports: [UsersModule, HabitsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
