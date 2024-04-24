import { Module } from '@nestjs/common';
import { RoteOneService } from './rote-one.service';
import { RoteOneController } from './rote-one.controller';

@Module({
  controllers: [RoteOneController],
  providers: [RoteOneService],
})
export class RoteOneModule {}
