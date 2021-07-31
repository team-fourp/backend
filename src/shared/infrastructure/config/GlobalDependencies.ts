import { Module } from '@nestjs/common';
import RabbitMqEventBus from '../EventBus/RabbitMq/RabbitMqEventBus';
import { RabbitMqConfigFactory } from '../EventBus/RabbitMq/RabbitMqConfigFactory';

const eventBus = {
  provide: 'EventBus',
  useFactory: () => {
    return new RabbitMqEventBus(RabbitMqConfigFactory.createConfig());
  }
};

@Module({
  providers: [eventBus],
  exports: ['EventBus']
})
export class GlobalDependenciesModule {}
