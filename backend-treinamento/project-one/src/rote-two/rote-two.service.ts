import { Injectable } from '@nestjs/common';
import { CreateRoteTwoDto } from './dto/create-rote-two.dto';
import { UpdateRoteTwoDto } from './dto/update-rote-two.dto';

@Injectable()
export class RoteTwoService {
  create(createRoteTwoDto: CreateRoteTwoDto) {
    return 'This action adds a new roteTwo';
  }

  findAll() {
    return `This action returns all roteTwo`;
  }

  findOne(id: number) {
    return `This action returns a #${id} roteTwo`;
  }

  update(id: number, updateRoteTwoDto: UpdateRoteTwoDto) {
    return `This action updates a #${id} roteTwo`;
  }

  remove(id: number) {
    return `This action removes a #${id} roteTwo`;
  }
}
