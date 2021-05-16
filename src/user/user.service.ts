import { Injectable, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';

import { Model } from 'mongoose';

import { UserDto } from './dto/user.dto';

import { IUser } from './interfaces/user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<IUser>) { }

  public async findAll() {
    const users = await this.userModel.find().exec();

    if (!users || !users.length) {
      throw new HttpException('Not Found', 404);
    }

    return users;
  }

  async createUser(newUser: UserDto): Promise<IUser> {
    const user = new this.userModel(newUser);

    return user.save();
  }

  public async findOne(email: string) {
    try {
      return this.userModel.findOne({ email });
    } catch (error) {
      throw new Error(error.message);
    }
  }

  public async save() { }

  public async delete() { }
}
