import { Injectable } from '@nestjs/common';
import { CreateRoteOneDto } from './dto/create-rote-one.dto';
import { UpdateRoteOneDto } from './dto/update-rote-one.dto';

@Injectable()
export class RoteOneService {
  create(createRoteOneDto: CreateRoteOneDto) {
    return 'This action adds a new roteOne';
  }

  findAll() {
    return `This action returns all roteOne`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roteOne`;
  }

  update(id: number, updateRoteOneDto: UpdateRoteOneDto) {
    return `This action updates a #${id} roteOne`;
  }

  remove(id: number) {
    return `This action removes a #${id} roteOne`;
  }
}
