import { CommandHandler } from '../../../../shared/domain/CommandHandler';
import { UserCreator } from './UserCreator';
import { Command } from '../../../../shared/domain/Command';
import { CreateUserCommand } from './CreateUserCommand';
import { Inject, Injectable } from '@nestjs/common';

@Injectable()
export class CreateUserCommandHandler implements CommandHandler<CreateUserCommand> {
  constructor(@Inject('UserCreator') private userCreator: UserCreator) {}

  subscribedTo(): Command {
    return CreateUserCommand;
  }

  async handle(command: CreateUserCommand): Promise<void> {
    await this.userCreator.run({ message: command.message });
  }
}
