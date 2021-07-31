import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserResolver } from './CreateUserResolver';

@Resolver('Authentication')
export class AuthUserResolver {
  constructor(private createUserResolver: CreateUserResolver) {}

  @Query(() => String)
  async hello() {
    return 'Hello';
  }

  @Mutation(() => String, { name: 'createUser' })
  async createUserMutation(): Promise<string> {
    return await this.createUserResolver.executeImpl();
  }
}
