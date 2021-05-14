import { Injectable, HttpException } from '@nestjs/common';

import './user.dto';
import { UserDto } from './user.dto';

@Injectable()
export class UserService {
  public async findAll() {
    /**
     * Test using dummy data
     */
    return [
      {
        id: '123123',
        name: 'Valensio Deva Prasetyo',
      },
    ];
  }

  async createUser(user: UserDto) {

  }

  public async find(id: Number) {

  }

  public async save() {

  }

  public async delete() {

  }
}
