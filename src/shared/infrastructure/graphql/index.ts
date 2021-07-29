import { DynamicModule } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLError, GraphQLFormattedError } from 'graphql';
import { join } from 'path';

export class GraphqlApp {
  static create(): DynamicModule {
    return GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      sortSchema: true,
      playground: process.env.NODE_ENV === 'production' ? false : true,
      debug: process.env.NODE_ENV === 'production' ? false : true,
      context: ({ req, res }) => ({ req, res }),
      formatError: (error: GraphQLError) => {
        const graphQLFormattedError: GraphQLFormattedError = {
          message: error.extensions.exception.response.message || error.message,
          extensions: {
            status: error.extensions.exception.status
          }
        };
        return graphQLFormattedError;
      }
    });
  }
}
