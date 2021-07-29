import { IUserRepository } from '../../domain/repo/IUserRepository';
import { CreateUserUseCase } from './CreateUserUseCase';

describe('test for create user - use case', () => {
  class MockRepository implements IUserRepository {
    save() {
      return 'Hello';
    }
  }

  const createUser = {
    first_name: '',
    last_name: '',
    email: '',
    password_2: '',
    password_1: ''
  };

  let createUserUseCase;
  beforeAll(() => {
    createUserUseCase = new CreateUserUseCase(new MockRepository());
  });

  test('should return "Hola mundo desde el caso de uso"', async () => {
    const result = await createUserUseCase.execute(createUser);
    expect(result.value.getValue()).toBe('Hola mundo desde el caso de uso');
  });
});
