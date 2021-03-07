import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Forest } from 'src/entity/forest.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ForestService {
  constructor(
    @InjectRepository(Forest)
    private forestRepository: Repository<Forest>,
  ) {}

  async upload(body: object): Promise<Forest> {
    return await this.forestRepository.save(body);
  }

  async findAll(userId: number): Promise<Forest[]> {
    return await this.forestRepository.find({ where: { userId: userId } });
  }
}
