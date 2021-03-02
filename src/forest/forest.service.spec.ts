import { Test, TestingModule } from '@nestjs/testing';
import { ForestService } from './forest.service';

describe('ForestService', () => {
  let service: ForestService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ForestService],
    }).compile();

    service = module.get<ForestService>(ForestService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
