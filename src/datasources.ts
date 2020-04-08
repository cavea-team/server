import { DataSource } from 'apollo-datasource';
import { createStore } from './utils';
import { Sequelize } from 'sequelize/types';

export class UserDataSource extends DataSource {
  store: Sequelize;
  constructor() {
    super();
    this.store = createStore();
  }
}
