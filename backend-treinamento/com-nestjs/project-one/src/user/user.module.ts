import { Module } from '@nestjs/common';
import { UserService } from './service/user.service';
import { FiliacaoService } from './service/filiacao.service';

@Module({
  providers: [UserService, FiliacaoService]
})
export class UserModule {}
 