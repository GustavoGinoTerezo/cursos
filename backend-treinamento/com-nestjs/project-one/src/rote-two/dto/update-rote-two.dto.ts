import { PartialType } from '@nestjs/mapped-types';
import { CreateRoteTwoDto } from './create-rote-two.dto';

export class UpdateRoteTwoDto extends PartialType(CreateRoteTwoDto) {}
