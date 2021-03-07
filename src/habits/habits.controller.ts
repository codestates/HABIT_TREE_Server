import {
  Body,
  Controller,
  Delete,
  Get,
  Post,
  Req,
  Res,
  UseGuards,
} from '@nestjs/common';
import { HabitsService } from './habits.service';
import { HabitDto } from '../dto/habits.dto';
import { Habit } from 'src/entity/habits.entity';
import { DeleteResult } from 'typeorm';
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from '@nestjs/passport';
@Controller('habits')
export class HabitsController {
  constructor(
    private readonly habitsService: HabitsService,
    private readonly authService: AuthService,
  ) {}

  @UseGuards(AuthGuard('jwt'))
  @Post('upload')
  upload(@Req() req: any, @Body() body: any): Promise<Habit> {
    const { id, username } = req.user;
    return this.habitsService.upload({ ...body, userId: Number(id) });
  }

  @UseGuards(AuthGuard('jwt'))
  @Post('findAll')
  findAll(@Req() req: any): Promise<Habit[]> {
    const { id } = req.user;
    return this.habitsService.findAll(id);
  }

  @Post('findOne')
  findOne(@Body('id') id: number): Promise<Habit> {
    return this.habitsService.findOne(id);
  }

  // habit id 받기
  @UseGuards(AuthGuard('jwt'))
  @Post('remove')
  remove(@Body('id') id: number): Promise<DeleteResult> {
    return this.habitsService.remove(id);
  }

  // habit id 받기
  @UseGuards(AuthGuard('jwt'))
  @Post('update')
  async update(@Body('id') id: number, @Res() res): Promise<Habit | boolean> {
    const result = await this.habitsService.update(id);
    if (!result) {
      res.status(400).send({ errorMessage: '하루에 두 번 누를 수 없습니다.' });
    } else {
      return result;
    }
  }
}
