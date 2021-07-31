import { CommandHandlersInformation } from './CommandHandlersInformation';
import { Command } from '../../domain/Command';
import { CommandBus } from '../../domain/CommandBus';
import { Injectable } from '@nestjs/common';

@Injectable()
export class InMemoryCommandBus implements CommandBus {
  constructor(private commandHandlersInformation: CommandHandlersInformation) {}

  async dispatch(command: Command) {
    const handler = this.commandHandlersInformation.search(command);
    await handler.handle(command);
  }
}
