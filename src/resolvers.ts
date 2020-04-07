import { GraphQLResolverMap } from 'apollo-graphql';
import { IResolverContext } from './types';

export const resolvers: GraphQLResolverMap<IResolverContext> = {
  Query: {
    getBooks: async (_, _args, { dataSources }) => {
      return await dataSources.asoiaf.getBooks();
    },

    getCharacters: async (_, _args, { dataSources }) => {
      return await dataSources.asoiaf.getCharacters();
    }
  }
};
