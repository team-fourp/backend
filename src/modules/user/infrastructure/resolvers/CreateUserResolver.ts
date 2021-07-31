import { Inject, Injectable } from '@nestjs/common';
import { BaseResolver } from 'src/shared/application/graphql/BaseResolver';
import { CommandBus } from '../../../../shared/domain/CommandBus';
import { CreateUserCommand } from '../../application/CreateUser/CreateUserCommand';

@Injectable()
export class CreateUserResolver extends BaseResolver {
  constructor(@Inject('CommandBus') private commandBus: CommandBus) {
    super();
  }

  async executeImpl() {
    const createUserCommand = new CreateUserCommand({ message: 'user command' });
    await this.commandBus.dispatch(createUserCommand);
    return this.sendMessage('Hola que pedo que pez');
  }
}
