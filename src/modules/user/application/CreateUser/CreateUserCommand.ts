import { Command } from '../../../../shared/domain/Command';

type Params = {
  message: string;
};

export class CreateUserCommand extends Command {
  message: string;

  constructor({ message }: Params) {
    super();
    this.message = message;
  }
}
