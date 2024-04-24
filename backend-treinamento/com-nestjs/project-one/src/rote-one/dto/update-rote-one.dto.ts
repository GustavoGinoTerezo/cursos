import { PartialType } from '@nestjs/mapped-types';
import { CreateRoteOneDto } from './create-rote-one.dto';

export class UpdateRoteOneDto extends PartialType(CreateRoteOneDto) {}
