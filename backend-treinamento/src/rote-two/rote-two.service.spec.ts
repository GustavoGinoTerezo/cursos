import { Test, TestingModule } from '@nestjs/testing';
import { RoteTwoService } from './rote-two.service';

describe('RoteTwoService', () => {
  let service: RoteTwoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RoteTwoService],
    }).compile();

    service = module.get<RoteTwoService>(RoteTwoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
