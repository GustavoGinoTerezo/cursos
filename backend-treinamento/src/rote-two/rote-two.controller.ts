import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { RoteTwoService } from './rote-two.service';
import { CreateRoteTwoDto } from './dto/create-rote-two.dto';
import { UpdateRoteTwoDto } from './dto/update-rote-two.dto';

@Controller('rote-two')
export class RoteTwoController {
  constructor(private readonly roteTwoService: RoteTwoService) {}

  @Post()
  create(@Body() createRoteTwoDto: CreateRoteTwoDto) {
    return this.roteTwoService.create(createRoteTwoDto);
  }

  @Get()
  findAll() {
    return this.roteTwoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.roteTwoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateRoteTwoDto: UpdateRoteTwoDto) {
    return this.roteTwoService.update(+id, updateRoteTwoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.roteTwoService.remove(+id);
  }
}
