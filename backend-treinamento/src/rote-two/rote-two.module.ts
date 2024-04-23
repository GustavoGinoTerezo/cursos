import { Module } from '@nestjs/common';
import { RoteTwoService } from './rote-two.service';
import { RoteTwoController } from './rote-two.controller';

@Module({
  controllers: [RoteTwoController],
  providers: [RoteTwoService],
})
export class RoteTwoModule {}
