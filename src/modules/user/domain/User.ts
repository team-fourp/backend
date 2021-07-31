import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import { UserCreatedDomainEvent } from './UserCreatedDomainEvent';

export class User extends AggregateRoot {
  readonly username: string;

  constructor(name: string) {
    super();
    this.username = name;
  }

  static create(name: string): User {
    const user = new User(name);

    user.record(
      new UserCreatedDomainEvent({
        id: 'id',
        name: 'name',
        duration: 'duration'
      })
    );

    return user;
  }

  static fromPrimitives(plainData: { id: string; name: string; duration: string }): User {
    return new User('name - from primitives');
  }

  toPrimitives() {
    return {
      username: this.username
    };
  }
}
