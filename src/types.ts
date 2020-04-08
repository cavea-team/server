import { AsoiafDataSource } from './datasources';

export interface IResolverContext {
  dataSources: {
    asoiaf: AsoiafDataSource;
  };
}
