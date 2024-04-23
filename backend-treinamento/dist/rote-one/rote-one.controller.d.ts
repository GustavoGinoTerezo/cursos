import { RoteOneService } from './rote-one.service';
import { CreateRoteOneDto } from './dto/create-rote-one.dto';
import { UpdateRoteOneDto } from './dto/update-rote-one.dto';
export declare class RoteOneController {
    private readonly roteOneService;
    constructor(roteOneService: RoteOneService);
    create(createRoteOneDto: CreateRoteOneDto): string;
    findAll(): string;
    findOne(id: string): string;
    update(id: string, updateRoteOneDto: UpdateRoteOneDto): string;
    remove(id: string): string;
}
