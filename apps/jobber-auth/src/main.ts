/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import * as cookieParser from 'cookie-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  /**
   * Enable global pipes:
   * - Validation for incoming requests (whitelist: true ->
   * validator will strip validated object of any properties that do not have any decorators)
   */
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  /**
   * Enable cookie parser middleware
   */
  app.use(cookieParser());

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = app.get(ConfigService).getOrThrow('PORT');
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );
}

bootstrap();
