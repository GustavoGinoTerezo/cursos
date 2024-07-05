import { UserDto, UpdateUserDto } from '../dto/user.dto';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,
    ) {}

    async findAll(): Promise<UserEntity[]> {
        return await this.userRepository.find({ relations: ['filiacoes']});
    }

    

}
