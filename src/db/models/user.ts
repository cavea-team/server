import { Model, DataTypes, BuildOptions } from 'sequelize';
import { createStore } from '../../utils';

const sequelize = createStore();

export class User extends Model {
  public id!: number;
  public name!: string;
  public email!: string;
  public password!: string;
  public phone!: string;
  public username!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    username: {
      type: new DataTypes.STRING(128),
      allowNull: false
    },
    email: {
      type: new DataTypes.STRING(256),
      allowNull: false,
      unique: true
    },
    phone: {
      type: new DataTypes.INTEGER(),
      allowNull: true
    },
    password: {
      type: new DataTypes.STRING(256),
      allowNull: false
    }
  },
  {
    tableName: 'Users',
    sequelize: sequelize // this bit is important
  }
);

export type UserModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): User;
};

export default User as UserModelStatic;
