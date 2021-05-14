import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

// service
import { UserService } from './user.service';

// dto
import { UserDto } from './user.dto';

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
  async getUserById(@Param('id') id: number) {
    const user = this.userService.find(id);

    return user;
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: number) {
    const user = this.userService.find(id);
  }

  @Put(':id')
  async editUser(@Param('id') id: number) {
    const user = this.userService.find(id);
  }

  @Post()
  async registerUser(@Body() userBody: UserDto) {
    const user = this.userService.createUser(userBody);
  }

  @Post()
  async loginUser() {

  }

  @Get()
  async getUserCount() {

  }
}
