import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppModule } from 'src/app.module';
import { AuthModule } from 'src/auth/auth.module';
import { Habit } from 'src/entity/habits.entity';
import { ForestModule } from '../forest/forest.module';
import { ForestService } from '../forest/forest.service';
import { HabitsController } from './habits.controller';
import { HabitsService } from './habits.service';

@Module({
  imports: [ForestModule, TypeOrmModule.forFeature([Habit]), AuthModule],
  controllers: [HabitsController],
  providers: [HabitsService],
})
export class HabitsModule {}
