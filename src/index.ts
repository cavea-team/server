import dotenv from 'dotenv';
dotenv.config();

import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';
import { AsoiafDataSource } from './datasources';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  dataSources: () => ({
    asoiaf: new AsoiafDataSource()
  }),
  formatError: error => error,
  context: ({ req, res }) => {
    return { req, res };
  }
});

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(url);
});
