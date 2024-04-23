import { Test, TestingModule } from '@nestjs/testing';
import { RoteTwoController } from './rote-two.controller';
import { RoteTwoService } from './rote-two.service';

describe('RoteTwoController', () => {
  let controller: RoteTwoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoteTwoController],
      providers: [RoteTwoService],
    }).compile();

    controller = module.get<RoteTwoController>(RoteTwoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
