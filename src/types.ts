import { UserDataSource } from './datasources';

export interface IResolverContext {
  dataSources: {
    user: UserDataSource;
  };
}
