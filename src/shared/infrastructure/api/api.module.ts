import { Module } from '@nestjs/common';
import { UserModule } from '../../../modules/user/infrastructure/user.module';
import { ConfigModuleApp } from './../../../config/index';
import { GraphqlApp } from './../graphql/index';

@Module({
  imports: [ConfigModuleApp.register(), GraphqlApp.create(), UserModule]
})
export class AppModule {}
