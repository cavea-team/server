import { UserModelStatic } from './db/models/user';

export interface IResolverContext {
  models: {
    User: UserModelStatic;
  };
}
