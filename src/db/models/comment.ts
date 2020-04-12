import { Model, DataTypes, BuildOptions } from 'sequelize';
import { createStore } from '../../utils';

const sequelize = createStore();

export class Comment extends Model {
  public id!: number;
  public comment!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Comment.init(
  {
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'Comment',
    sequelize: sequelize
  }
);

export type CommentModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): Comment;
};

export default Comment as CommentModelStatic;
