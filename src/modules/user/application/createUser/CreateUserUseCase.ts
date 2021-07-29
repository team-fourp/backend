import { Either, Result, right } from 'src/shared/core/Result';
import { UseCase } from 'src/shared/core/UseCase';
import { IUserRepository } from '../../domain/repo/IUserRepository';
import { CreateUserDTO } from './CreateUserDTO';

type Response = Either<Result<any>, Result<void>>;

export class CreateUserUseCase extends UseCase<CreateUserDTO, Promise<Response>> {
  constructor(private userRepo: IUserRepository) {
    super();
  }

  async execute(request: CreateUserDTO): Promise<Response> {
    console.log(this.userRepo.save());
    return right(Result.ok<any>('Hola mundo desde el caso de uso'));
  }
}
