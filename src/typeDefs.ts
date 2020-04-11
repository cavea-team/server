import { gql } from 'apollo-server';

export const typeDefs = gql`
  extend type Mutation {
    user: UserMutations
  }
  type Status {
    status: Boolean
    message: String
  }
  type UserMutations {
    register(
      name: String
      email: String
      password: String
      phone: String
      username: String
    ): UserResponse
  }
  type UserResponse {
    status: Status
    data: User
  }
  type User {
    name: String
    email: String
    phone: String
    username: String
  }
`;
