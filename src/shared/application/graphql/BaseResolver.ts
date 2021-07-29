// All the resolvers passed for here
export abstract class BaseResolver {
  protected abstract executeImpl(): Promise<string>;
}
