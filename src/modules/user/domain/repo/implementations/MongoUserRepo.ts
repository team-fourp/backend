import { IUserRepository } from './../IUserRepository';
export class MongoUserRepository implements IUserRepository {
  save(): string {
    return 'Hola';
  }
}
