import RabbitMqConfig from './RabbitMqConfig';
import { Injectable } from '@nestjs/common';

@Injectable()
export class RabbitMqConfigFactory {
  static createConfig(): RabbitMqConfig {
    return {
      host: 'localhost',
      user: 'guest',
      password: 'guest',
      queue: 'FourP-DomainEvents',
      exchange: 'DomainEvents'
    };
  }
}
