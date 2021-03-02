import { Controller, Delete, Post } from '@nestjs/common';
import { HabitsService } from './habits.service';

@Controller('habits')
export class HabitsController {
  constructor(private readonly habitsService: HabitsService) {}

  // 등록칸 => 등록 -> db에 들어감( passFail :{key: , key:  , ....} )
  //      => 취소
  // 달력칸 => O -> 해당 key값에 1
  //      => X -> 해당 key값에 0
  //
  //
  @Post('/upload')
  upload() {
    return 'upload';
  }

  @Delete('/cancel')
  cancel() {
    return 'cancel';
  }

  @Post('/pass')
  pass() {
    return 'pass';
  }

  @Post('/fail')
  fail() {
    return 'fail';
  }
}
