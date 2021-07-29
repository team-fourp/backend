import { Mystica } from '@iti-tic/mystica/src/mystica';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { IEnvironmentVariables } from './../../../config/IEnviromentVariables';
import { loggerConfig } from './../../../config/logger';
import { HttpExceptionFilter } from './../filters/http-exception.filter';
import { AppModule } from './api.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: Mystica.forRoot(loggerConfig)
  });

  app.useGlobalFilters(new HttpExceptionFilter());

  const config = app.get(ConfigService) as ConfigService<IEnvironmentVariables>;

  const PORT = config.get<number>('PORT');
  console.log(`[App] App running on port: ${PORT}`);

  await app.listen(PORT);
}
bootstrap();
