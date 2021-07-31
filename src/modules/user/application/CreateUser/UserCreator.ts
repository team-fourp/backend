import { EventBus } from '../../../../shared/domain/EventBus';
import { User } from '../../domain/User';
import { Injectable } from '@nestjs/common';

type Params = {
  message: string;
};

@Injectable()
export class UserCreator {
  constructor(private eventBus: EventBus) {}

  async run({ message }: Params) {
    const user = User.create('name - from creator');
    await this.eventBus.publish(user.pullDomainEvents());
  }
}
