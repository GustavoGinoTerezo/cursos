import { Test, TestingModule } from '@nestjs/testing';
import { RoteOneController } from './rote-one.controller';
import { RoteOneService } from './rote-one.service';

describe('RoteOneController', () => {
  let controller: RoteOneController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [RoteOneController],
      providers: [RoteOneService],
    }).compile();

    controller = module.get<RoteOneController>(RoteOneController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
