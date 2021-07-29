import { DynamicModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

const configApp = () => ({
  PORT: parseInt(process.env.PORT) || 3000,
  DATABSE_URI: process.env.DATABASE_URI || 'mongodb://localhost:27017/fourp-db-app'
});

const configEnvFile = (): string => {
  let envFile = './env/.development.env';

  if (process.env.NODE_ENV === 'testing') {
    envFile = './env/.testing.env';
  } else if (process.env.NODE_ENV === 'production') {
    envFile = './env/.production.env';
  }

  return envFile;
};

export class ConfigModuleApp {
  static register(): DynamicModule {
    return ConfigModule.forRoot({
      envFilePath: configEnvFile(),
      load: [configApp],
      isGlobal: true
    });
  }
}
