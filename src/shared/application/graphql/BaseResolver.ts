// All the resolvers passed for here
export abstract class BaseResolver {
  protected abstract executeImpl(): Promise<string>;

  protected async sendMessage(message: string): Promise<string> {
    return message;
  }
}
