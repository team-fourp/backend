import { Module } from '@nestjs/common';
import { CreateUserResolver } from './resolvers/CreateUserResolver';
import { AuthUserResolver } from './resolvers/auth';
import { GlobalDependenciesUser } from './GlobalDependencies.module';

@Module({
  imports: [GlobalDependenciesUser],
  providers: [AuthUserResolver, CreateUserResolver]
})
export class UserModule {}
