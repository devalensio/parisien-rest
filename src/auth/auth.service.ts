import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

import * as bcrypt from 'bcrypt';

import { UserService } from '../user/user.service';
import { IUser } from '../user/interfaces/user.interface';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService
  ) { }

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.userService.findOne(email);
    if (user) {
      const isAuthenticated = bcrypt.compareSync(password, user.password);
      if (isAuthenticated) {
        return user;
      }
    }

    return null;
  }

  async login(user: IUser) {
    const payload = { email: user.email, name: user.name, id: user.id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
