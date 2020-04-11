import dotenv from 'dotenv';
dotenv.config();

import { ApolloServer } from 'apollo-server';
import { buildFederatedSchema } from '@apollo/federation';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';
import models from './db/models';

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  formatError: error => error,
  context: ({ req, res }) => {
    return { req, res, models };
  }
});

server.listen({ port: process.env.PORT }).then(({ url }) => {
  console.log(url);
});
