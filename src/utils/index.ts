import { Sequelize } from 'sequelize';

const { DB_NAME, DB_USER, DB_PASS, DB_HOST } = process.env;

const sequelize = new Sequelize({
  host: DB_HOST,
  database: DB_NAME,
  username: DB_USER,
  port: 5432,
  password: DB_PASS,
  dialect: 'postgres'
});
export const createStore = (): Sequelize => sequelize;
