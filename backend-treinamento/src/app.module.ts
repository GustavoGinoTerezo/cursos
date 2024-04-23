import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RoteOneModule } from './rote-one/rote-one.module';
import { RoteTwoModule } from './rote-two/rote-two.module';

@Module({
  imports: [RoteOneModule, RoteTwoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
