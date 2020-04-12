import { Model, DataTypes, BuildOptions } from 'sequelize';
import { createStore } from '../../utils';

const sequelize = createStore();

export class Tag extends Model{
    public id!: number;
    public name!: string;

    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;
}

Tag.init(
    {
        id:
        {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement : true,
            allowNull: false,
            primaryKey: true
        },
        name:
        {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {         
        tableName: 'Tag',
        sequelize: sequelize
    }
);

export type TagModelStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): Tag;
  };
  
  export default Tag as TagModelStatic;
  