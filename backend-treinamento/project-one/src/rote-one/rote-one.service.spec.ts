import { Test, TestingModule } from '@nestjs/testing';
import { RoteOneService } from './rote-one.service';

describe('RoteOneService', () => {
  let service: RoteOneService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoteOneService],
    }).compile();

    service = module.get<RoteOneService>(RoteOneService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
