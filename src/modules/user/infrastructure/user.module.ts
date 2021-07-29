import { Module } from '@nestjs/common';
import { createUserUseCase } from '../application/createUser';
import { CreateUserResolver } from './../application/createUser/CreateUserResolver';
import { AuthUserResolver } from './resolvers/auth';

const useCase = {
  provide: 'UseCase',
  useFactory: () => createUserUseCase
};

@Module({
  providers: [AuthUserResolver, CreateUserResolver, useCase]
})
export class UserModule {}
