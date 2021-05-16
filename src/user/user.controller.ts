import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';

import * as bcrypt from 'bcrypt';

import { UserService } from './user.service';

import { UserDto } from './dto/user.dto';
import { UserLoginDto } from './dto/user-login.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) { }

  @Get()
  async getUsers() {
    const users = await this.userService.findAll();
    return users;
  }

  @Get(':id')
  async getUserById(@Param('id') id: number) { }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) { }

  @Put(':id')
  async editUser(@Param('id') id: number, @Query() query) { }

  @Post('/register')
  async registerUser(@Body() userBody: UserDto) {
    const saltOrRounds = 10;
    const hashPassword = await bcrypt.hash(userBody.password, saltOrRounds);

    const newUser: UserDto = {
      name: userBody.name,
      email: userBody.email,
      password: hashPassword,
      phoneNumber: userBody.phoneNumber,
    };

    return this.userService.createUser(newUser);
  }

  @Get()
  async getUserCount() { }
}
