import dotenv from 'dotenv';
dotenv.config();

module.exports = {
  development: {
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    port: 5432,
    password: process.env.DB_PASS,
    dialect: 'postgres'
  }
};
