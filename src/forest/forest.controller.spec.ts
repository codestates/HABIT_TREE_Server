import { Test, TestingModule } from '@nestjs/testing';
import { ForestController } from './forest.controller';

describe('ForestController', () => {
  let controller: ForestController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ForestController],
    }).compile();

    controller = module.get<ForestController>(ForestController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
