import { Model, DataTypes, BuildOptions } from 'sequelize';
import { createStore } from '../../utils';

const sequelize = createStore();

export class Like extends Model{
    public id!: number;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Like.init(
    {   
        id:
        {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        }
    },
    {
        tableName: 'Like',
        sequelize: sequelize
    }
);

export type LikeModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): Like;
  };
  
  export default Like as LikeModelStatic;
  