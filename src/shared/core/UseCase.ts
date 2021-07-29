export interface IUseCase<IRequest, IResponse> {
  execute(request?: IRequest): Promise<IResponse> | IResponse;
}

export abstract class UseCase<IRequest, IResponse> {
  abstract execute(request?: IRequest): Promise<IResponse> | IResponse;
}
