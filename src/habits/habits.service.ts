import { HttpException, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Forest } from 'src/entity/forest.entity';
import { Habit } from 'src/entity/habits.entity';
import { ForestService } from 'src/forest/forest.service';
import { DeepPartial, DeleteResult, Repository } from 'typeorm';
import { HabitDto } from '../dto/habits.dto';
@Injectable()
export class HabitsService {
  constructor(
    @InjectRepository(Habit)
    private readonly habitsRepository: Repository<Habit>,
    private readonly forestService: ForestService,
  ) {}

  async upload(body: HabitDto): Promise<Habit> {
    console.log(body);
    const habits = await this.habitsRepository.find({ userId: body.userId });
    console.log(habits);
    if (habits.length >= 3) {
      throw new HttpException('Not Found', 404);
    }
    return await this.habitsRepository.save(body);
  }

  findAll(): Promise<Habit[]> {
    return this.habitsRepository.find();
  }

  findOne(id: number): Promise<Habit> {
    return this.habitsRepository.findOne(id);
  }

  remove(id: number): Promise<DeleteResult> {
    return this.habitsRepository.delete(id);
  }

  // 클라이언트에서 habit id 보내주기
  /*
    이미 click 한 경우 => 에러 
    그 날 첫 click => pass 가 증가하고 clicked가 1이 되고 achieve가 알아서 수정됨.
    만약 achieve가 100 미만이라면 habit에서 pass, clicked, achieve 수정
    만약 achieve가 100 이라면 habit에서 제거, forest에서 생성
     
   */
  async update(id: number): Promise<Habit> {
    const result = await this.habitsRepository.findOneOrFail({
      id: id,
      clicked: 0,
    });

    result.pass++;
    result.clicked = 1;
    result.achieve = Math.ceil((result.pass / 28) * 100);

    if (result.achieve === 100) {
      this.habitsRepository.delete(result.id);
      this.forestService.upload(result);
      return result;
    } else {
      return this.habitsRepository.save(result);
    }
  }
}
