import { userRepo } from '../../domain/repo';
import { CreateUserUseCase } from './CreateUserUseCase';

const createUserUseCase = new CreateUserUseCase(userRepo);
export { createUserUseCase };
