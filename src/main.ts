import { NestFactory } from '@nestjs/core';

import * as helmet from 'helmet';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: console,
  });

  app.use(helmet());
  app.enableCors();
  app.setGlobalPrefix('v1');

  await app.listen(3000);
}
bootstrap();
