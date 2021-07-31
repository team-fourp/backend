import { IUserRepository } from './IUserRepository';
export class UserRepository implements IUserRepository {
  save() {
    return 'Hola';
  }
}
