import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoteOneService } from './rote-one.service';
import { CreateRoteOneDto } from './dto/create-rote-one.dto';
import { UpdateRoteOneDto } from './dto/update-rote-one.dto';

@Controller('rote-one')
export class RoteOneController {
  constructor(private readonly roteOneService: RoteOneService) {}

  @Post()
  create(@Body() createRoteOneDto: CreateRoteOneDto) {
    return this.roteOneService.create(createRoteOneDto);
  }

  @Get()
  findAll() {
    return this.roteOneService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roteOneService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoteOneDto: UpdateRoteOneDto) {
    return this.roteOneService.update(+id, updateRoteOneDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roteOneService.remove(+id);
  }
}
