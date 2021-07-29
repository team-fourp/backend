import { Injectable } from '@nestjs/common';
import { BaseResolver } from 'src/shared/application/graphql/BaseResolver';
import { UseCase } from 'src/shared/core/UseCase';

@Injectable()
export class CreateUserResolver extends BaseResolver {
  private useCase: UseCase<any, any>;

  constructor(useCase: UseCase<any, any>) {
    super();
    this.useCase = useCase;
  }

  async executeImpl(): Promise<string> {
    const result = await this.useCase.execute({
      first_name: '',
      last_name: '',
      email: '',
      password_2: '',
      password_1: ''
    });
    return result.value.getValue();
  }
}
