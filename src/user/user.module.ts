import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserController } from './user.controller';
import { UserService } from './user.service';
import { AuthModule } from '../auth/auth.module';
import { UserSchema } from './schemas/user.schema';

@Module({
  controllers: [UserController],
  providers: [UserService],
  imports: [
    MongooseModule.forFeature([
      {
        name: 'User',
        schema: UserSchema,
      }
    ]),
  ],
  exports: [UserService]
})
export class UserModule { }
