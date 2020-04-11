import { GraphQLResolverMap } from 'apollo-graphql';
import { IResolverContext } from './types';

const responseMessage = (data: Record<string, any>): Record<string, any> => {
  return {
    status: { status: true, message: 'success' },
    data: data
  };
};

export const resolvers: GraphQLResolverMap<IResolverContext> = {
  UserMutations: {
    register: async (
      _: Record<string, any>,
      args: Record<string, any>,
      context: Record<string, any>
    ) => {
      const data = await context.models.User.create(args);
      return responseMessage(data);
    }
  },
  Query: {},
  Mutation: {
    user: () => {
      return true;
    }
  }
};
