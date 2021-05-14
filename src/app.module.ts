import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { UserModule } from './user/user.module';

@Module({
  // imports: [MongooseModule.forRoot(process.env.DB_URI), UserModule],
  imports: [UserModule],
})
export class AppModule {}
