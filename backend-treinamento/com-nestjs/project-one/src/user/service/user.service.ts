import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UpdateUserDto, UserDto } from '../dto/user.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../entity/user.entity';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>
    ){}

    

}
