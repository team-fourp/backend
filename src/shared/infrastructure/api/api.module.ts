import { Global, Module } from '@nestjs/common';
import { UserModule } from '../../../modules/user/infrastructure/user.module';
import { ConfigModuleApp } from './../../../config/index';
import { GraphqlApp } from './../graphql/index';
import { GlobalDependenciesModule } from '../config/GlobalDependencies';

@Global()
@Module({
  imports: [ConfigModuleApp.register(), GraphqlApp.create(), UserModule]
})
export class ApiModule {}
