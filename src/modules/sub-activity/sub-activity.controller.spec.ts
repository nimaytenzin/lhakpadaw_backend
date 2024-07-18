import { Test, TestingModule } from '@nestjs/testing';
import { SubActivityController } from './sub-activity.controller';
import { SubActivityService } from './sub-activity.service';

describe('SubActivityController', () => {
  let controller: SubActivityController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SubActivityController],
      providers: [SubActivityService],
    }).compile();

    controller = module.get<SubActivityController>(SubActivityController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
