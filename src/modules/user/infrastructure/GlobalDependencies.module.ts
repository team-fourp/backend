import { Module } from '@nestjs/common';
import { UserCreator } from '../application/CreateUser/UserCreator';
import { CreateUserCommandHandler } from '../application/CreateUser/CreateUserCommandHandler';
import { GlobalDependenciesModule } from '../../../shared/infrastructure/config/GlobalDependencies';
import { InMemoryCommandBus } from '../../../shared/infrastructure/commandBus/InMemoryCommandBus';
import { CommandHandlersInformation } from '../../../shared/infrastructure/commandBus/CommandHandlersInformation';

const commandBus = {
  provide: 'CommandBus',
  useClass: InMemoryCommandBus
};

const userCreator = {
  provide: 'UserCreator',
  useFactory: eventBus => new UserCreator(eventBus),
  inject: ['EventBus']
};

const commandHandlers = {
  provide: 'CommandHandlers',
  useFactory: commandHandlers => [commandHandlers],
  inject: [CreateUserCommandHandler]
};

@Module({
  imports: [GlobalDependenciesModule],
  providers: [CreateUserCommandHandler, CommandHandlersInformation, commandHandlers, userCreator, commandBus],
  exports: ['CommandBus', 'CreateUserCommandHandler', 'CommandHandlersInformation', 'CommandHandlers', 'UserCreator']
})
export class GlobalDependenciesUser {}
