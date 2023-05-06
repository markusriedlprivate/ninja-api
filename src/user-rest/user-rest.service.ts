import { Injectable } from '@nestjs/common';
import { CreateUserRestDto } from './dto/create-user-rest.dto';
import { UpdateUserRestDto } from './dto/update-user-rest.dto';

@Injectable()
export class UserRestService {
  create(createUserRestDto: CreateUserRestDto) {
    return 'This action adds a new userRest';
  }

  findAll() {
    return `This action returns all userRest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userRest`;
  }

  update(id: number, updateUserRestDto: UpdateUserRestDto) {
    return `This action updates a #${id} userRest`;
  }

  remove(id: number) {
    return `This action removes a #${id} userRest`;
  }
}
