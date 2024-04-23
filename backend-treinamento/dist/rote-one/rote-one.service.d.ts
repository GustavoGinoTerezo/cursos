import { CreateRoteOneDto } from './dto/create-rote-one.dto';
import { UpdateRoteOneDto } from './dto/update-rote-one.dto';
export declare class RoteOneService {
    create(createRoteOneDto: CreateRoteOneDto): string;
    findAll(): string;
    findOne(id: number): string;
    update(id: number, updateRoteOneDto: UpdateRoteOneDto): string;
    remove(id: number): string;
}
