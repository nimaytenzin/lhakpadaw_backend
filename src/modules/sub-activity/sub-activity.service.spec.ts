import { Test, TestingModule } from '@nestjs/testing';
import { SubActivityService } from './sub-activity.service';

describe('SubActivityService', () => {
  let service: SubActivityService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SubActivityService],
    }).compile();

    service = module.get<SubActivityService>(SubActivityService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
